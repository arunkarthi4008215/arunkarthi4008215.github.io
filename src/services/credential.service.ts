import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CryptoService } from './crypto.service';

@Injectable({
  providedIn: 'root'
})
export class CredentialService {
  tillCode: string;
  currencyCode: string;

  constructor(
    private cryptoService: CryptoService,
    private router: Router,
  ) { }

  /**
    * Saves logged in user's data into local storage.
    *
    * @param data  logged in user data
    */
  saveLoginCredentials(data: any, userName: string) {
    console.log('loginCredentials');
    const loginCredentials = data || {};

    if (loginCredentials) {
      // this.currencyCode = loginCredentials.Currency_Code || 'INR';

      const currentObject: any = {};
      currentObject.User_Name = this.cryptoService.encrypt('User_Name', userName);

      // encrypt data User_Name
      Object.keys(loginCredentials).forEach(key => {
        // this.log.log('key : ', key);
        let returnedText = '';
        let organization: any = {};
        let branch: any = {};
        let employee: any = {};

        switch (key) {
          case 'Organization_Master':
            organization = loginCredentials[key] || {};
            // for currency code
            this.saveCurrencyCode(organization);

            // save country
            const country = this.cryptoService.encrypt('Country', organization.Country);
            currentObject['Country'] = country;

            // save timezone
            const timeZone = this.cryptoService.encrypt('Time_Zone', organization.Time_Zone);
            currentObject['Time_Zone'] = timeZone;

            // save image
            if (organization.Organization_Image) {
              this.saveImageLocal('Organization_Image', organization.Organization_Image);
              organization.Organization_Image = '';
            }

            returnedText = this.cryptoService.encrypt(key.toString(), JSON.stringify(organization));
            currentObject[key] = returnedText;
            break;
          case 'Branch_Master':
            branch = loginCredentials[key] || {};
            // save image
            if (branch.Branch_Image) {
              this.saveImageLocal('Branch_Image', branch.Branch_Image);
              branch.Branch_Image = '';
            }

            returnedText = this.cryptoService.encrypt(key.toString(), JSON.stringify(loginCredentials[key]));
            currentObject[key] = returnedText;
            break;
          case 'Employee_Master':
            employee = loginCredentials[key] || {};
            // save image
            if (employee.Employee_Image) {
              this.saveImageLocal('Employee_Image', employee.Employee_Image);
              employee.Employee_Image = '';
            }

            if (employee.Software_Rights_Group) {
              const employeeRole = this.cryptoService.encrypt('Software_Rights_Group', employee.Software_Rights_Group);
              currentObject['Software_Rights_Group'] = employeeRole;
            }

            returnedText = this.cryptoService.encrypt(key.toString(), JSON.stringify(loginCredentials[key]));
            currentObject[key] = returnedText;
            break;
          case 'Integration_Master':
            const integrationList = loginCredentials[key] || [];
            if (integrationList?.length) {
              integrationList.forEach(integration => {
                const integrationName = integration.Integration_Name || '';
                if (integrationName) {
                  returnedText = this.cryptoService.encrypt(integrationName, JSON.stringify(integration));
                  currentObject[integrationName] = returnedText;
                }
              });
              // const firstObject = integration[0] || {};
              // const integrationName = firstObject.Integration_Name || '';
              // if (integrationName) {
              //   returnedText = this.cryptoService.encrypt(integrationName, JSON.stringify(firstObject));
              //   currentObject[integrationName] = returnedText;
              // }
            }
            break;
          default:
            returnedText = this.cryptoService.encrypt(key.toString(), loginCredentials[key]);
            currentObject[key] = returnedText;
            break;
        }
      });

      localStorage.setItem('user-log-data', JSON.stringify(currentObject).toString());
    }
  }

  updateLoginCredentials(key: string, value: string) {
    const storageKey = key || '';
    const storageValue = value || '';
    if (storageKey && storageValue) {
      const userLog = localStorage.getItem('user-log-data');
      if (userLog && userLog !== 'null') {
        const userLogObject = this.parseStringToJson(userLog);
        if (userLogObject[storageKey]) {
          const existingValue = this.cryptoService.decrypt(storageKey, userLogObject[storageKey]);
          // update
          if (existingValue != value) {
            const newValue = this.cryptoService.encrypt(key, value);
            userLogObject[storageKey] = newValue;
            localStorage.setItem('user-log-data', JSON.stringify(userLogObject));
          }
        }
      }
    }
  }

  saveAuthToken(data: any) {
    const token = this.cryptoService.encrypt('auth-token', data);
    localStorage.setItem('o-auth-token', token);
  }

  getAuthToken() {
    const value = localStorage.getItem('o-auth-token');
    if (value) {
      return this.cryptoService.decrypt('auth-token', value);
    }
    return '';
  }

  saveCurrencyCode(currency: any) {
    const currencyData = currency || {};
    // console.log('currencyData : ', currencyData);
    if (currencyData.Currency_Code) {
      const returnedText = this.cryptoService.encrypt('Currency_Code', currencyData.Currency_Code);
      localStorage.setItem('Currency_Code', returnedText);
    }
    if (currencyData.Culture_Info_Code) {
      const returnedText = this.cryptoService.encrypt('Culture_Info_Code', currencyData.Culture_Info_Code);
      localStorage.setItem('Culture_Info_Code', returnedText);
    }
  }

  getCurrencyCode(): any {

    const currencyObject: any = {};

    const currency = localStorage.getItem('Currency_Code');
    if (currency && currency != 'null') {
      currencyObject.Currency_Code = this.cryptoService.decrypt('Currency_Code', currency);
    }

    const cultureInfo = localStorage.getItem('Culture_Info_Code');
    if (cultureInfo && cultureInfo != 'null') {
      currencyObject.Culture_Info_Code = this.cryptoService.decrypt('Culture_Info_Code', cultureInfo);
    }

    return currencyObject;
  }

  /**
  * Returns logged in user's data.
  *
  * @param type  required field name
  * @param isMasterType 0 as Organization master, 1 as Branch Master, 2 as Employee Master
  */
  getLoginCredentials(type: string, isMasterType?: string): string {
    const logType = type || '';
    let master = '';
    // final
    let returnValue = '';

    if ((type === 'Employee_Image') || (type === 'Organization_Image') || (type === 'Branch_Image')) {
      return this.getImage(type);
    }

    if (logType) {
      if (isMasterType) {
        master = this.getMasterName(isMasterType);
      }
      returnValue = this.getCredentialsData(logType, master);
    }
    return returnValue;
  }

  getCredentialsData(key: string, master?: string): string {
    const appMaster = master || '';
    let returnValue = '';
    const userLog = localStorage.getItem('user-log-data');
    if (userLog && userLog !== 'null') {
      const userLogObject = JSON.parse(userLog || '{}');
      // this.log.log('userLogObject : ', userLogObject);

      if (appMaster) {
        const masterData = this.cryptoService.decrypt(appMaster, userLogObject[appMaster]);
        returnValue = masterData[key] || '';
        return;
      }

      if (key && userLogObject[key]) {
        returnValue = this.cryptoService.decrypt(key, userLogObject[key]);
      }
    }
    return returnValue;
  }

  getMasterName(isMasterType?: string): string {
    switch (isMasterType) {
      case '1': // Organization_Master
        return 'Organization_Master';
        break;
      case '2': // Branch_Master
        return 'Branch_Master';
        break;
      case '3': // Employee_Master
        return 'Employee_Master';
        break;
      default:
        return '';
        break;
    }
  }

  getImage(key: string) {
    const userImage = localStorage.getItem(key);
    if (userImage && userImage !== 'null') {
      return 'data:image/jpeg;base64,' + userImage;
    } else {
      return null;
    }
  }

  saveImageLocal(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getIsPageAccess(rights: string): boolean {
    const rightsName = rights || '';

    // check if exist

    return true;
  }

  // getLoginCredentials(type: string) {
  //   switch (type) {
  //     case '1':
  //       return this.organizationCode;
  //       break;
  //     case '2':
  //       return this.branchCode;
  //       break;
  //     case '3':
  //       return this.employeeCode;
  //       break;
  //     case '4':
  //       return this.branchName;
  //       break;
  //   }
  // }

  getRememberLoginDetail() {
    const returnObject: any = {};

    const accountID = localStorage.getItem('accountID');
    returnObject.Account_Id = (accountID && accountID != 'null') ? accountID : '';

    const rememberLog = localStorage.getItem('remember-me-log');
    if (rememberLog && rememberLog != 'null') {
      const logDetail = JSON.parse(rememberLog);
      returnObject.Remember = true;
      returnObject.User_Name = logDetail.User_Name ? logDetail.User_Name : '';
      returnObject.Password = logDetail.Password ? logDetail.Password : '';
    }
    return returnObject;
  }

  getRegisterTill() {
    const till = localStorage.getItem('till-sale-cash-register');
    const tillObject = (till && till != 'null') ? this.parseStringToJson(till || '') : {};
    return tillObject;
  }

  setRegisterTill(tillCode: string, cashRegisterNumber: string) {
    localStorage.removeItem('till-sale-cash-register');
    if (tillCode) {
      localStorage.setItem('till-sale-cash-register',
        JSON.stringify({ Till_Code: tillCode, Cash_Register_Number: cashRegisterNumber }));
    }
  }

  // getNonRegisterTill() {
  //   const till = localStorage.getItem('till-sale-payment-register');
  //   const tillObject = (till && till != 'null') ? this.general.parseStringToJson(till || '') : {};
  //   return tillObject;
  // }

  // setNonRegisterTill(tillCode: string, tillName: string) {
  //   localStorage.removeItem('till-sale-payment-register');
  //   if (tillCode) {
  //     localStorage.setItem('till-sale-payment-register',
  //       JSON.stringify({ Till_Code: tillCode, Till_Name: tillName }));
  //   }
  // }

  restoreInfo(isRedirect = true) {

    const reloadDate = localStorage.getItem('reload-date');
    const accountID = localStorage.getItem('accountID');
    // const rememberLog = localStorage.getItem('remember-me-log');
    const localInterface = localStorage.getItem('local-printer-interface');
    const language = localStorage.getItem('lang');
    const productListAttribute = localStorage.getItem('product-list-attribute');

    localStorage.clear(); // clear all

    (reloadDate && reloadDate != 'null') ? localStorage.setItem('reload-date', reloadDate) : null;
    (accountID && accountID != 'null') ? localStorage.setItem('accountID', accountID) : null;
    // (rememberLog && rememberLog != 'null') ? localStorage.setItem('remember-me-log', rememberLog) : null;
    (localInterface && localInterface != 'null') ? localStorage.setItem('local-printer-interface', localInterface) : null;
    (language && language != 'null') ? localStorage.setItem('lang', language) : null;
    (productListAttribute && productListAttribute != 'null') ? localStorage.setItem('product-list-attribute', productListAttribute) : null;
    
    if (isRedirect) {
      this.router.navigateByUrl('/login');
    }
  }

  unRegisterTill(till: any) {
    const tillCredential = till || {};
    if (tillCredential.Till_Code) {

    }
  }

  // for avoid cyclic 
  parseStringToJson(data: string, isArray?: boolean): any {
    let jsonObject = isArray ? [] : {};
    try {
      jsonObject = JSON.parse(data || (isArray ? '[]' : '{}'));
    } catch (e) { }
    return jsonObject;
  }

}
