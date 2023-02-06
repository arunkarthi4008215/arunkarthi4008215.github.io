import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { Location } from '@angular/common';
import { CredentialService } from './credential.service';
import { ToastrService } from 'ngx-toastr';
import { AsyncSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
// import { TranslateService } from '@ngx-translate/core';
// import { GeneralService } from './general.service';
export interface SelectedFiles {
  name: string;
  file: any;
  base64?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  public REQ_TYPE_UTILITY = 'Utility';
  public REQ_TYPE_ALL = 'All';
  public REQ_TYPE_DETAIL = 'Detail';

  public alterTextSQuotes = '\\\'';
  public alterTextSlash = '\\\\';

  constructor(private location: Location,
              private toastr:ToastrService,
             private credential:CredentialService,
             private http:HttpClient) { }

  getSelect2Options(dataObject: Array<any>, idKey: string, idValue: string, idValue2?: string) {

    const optionList = dataObject ? dataObject : [];
    const keyID = idKey ? idKey : '';
    const keyText = idValue ? idValue : '';
    const additionalText = idValue2 ? idValue2 : '';

    // if (idValue2) {
    //   keyText = keyText + ' ' + addtionalText;
    // }
    const returnObject = [];

    if (optionList && optionList.length && keyID && keyText) {
      optionList.forEach(element => {

        let tempObject: any;

        if (element[keyID] && element[keyText]) {

          if (additionalText) {
            tempObject = {
              id: element[keyID],
              text: element[keyText] + ' (' + element[additionalText] + ') '
            };
          } else {
            tempObject = {
              id: element[keyID],
              text: element[keyText]
            };
          }

          returnObject.push(tempObject);
        }
      });
    }

    return returnObject;
  }

  clone(obj: any): any {
    let copy: any;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || 'object' !== typeof obj) { return obj; }

    // Handle Date
    if (obj instanceof Date) {
      copy = new Date();
      copy.setTime(obj.getTime());
      return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
      copy = [];
      for (let i = 0, len = obj.length; i < len; i++) {
        copy[i] = this.clone(obj[i]);
      }
      return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
      copy = {};
      for (const attr in obj) {
        if (obj.hasOwnProperty(attr)) { copy[attr] = this.clone(obj[attr]); }
      }
      return copy;
    }

    throw new Error('Unable to copy obj! Its type isn\'t supported.');
  }

  filterCountries(array: any) {

    if (!array || array.length === 0) {
      return [];
    }

    const uniqueArray = array.filter((country, index, self) =>
      index === self.findIndex((t) => (
        t.Country === country.Country
      ))
    );

    const countriesOnly: any = [];
    uniqueArray.forEach(element => {
      countriesOnly.push({ Country: element.Country });
    });

    const countriesList = this.getSelect2Options(countriesOnly, 'Country', 'Country');
    return countriesList;
  }
  /**
   * Returns a array with particular code value only.
   * For example we can filter particular branch's employees from whole employee list.
   *
   * @param array array to be filtered
   * @param key Mostly a code to filter from given array
   * @param keyName key name
   */
  filter(array: [], key: string, keyName: string) {
    // if the key is null, return full array
    if (!key || (!array || !array.length)) { return array; }

    const newArray = array.filter(element => {
      return element[keyName] === key;
    });

    return newArray;
  }

  getTaxInclusivePrice(price: string, percentage: string) {
    const productPrice = parseFloat(price || '0');
    const totalPercentage = parseFloat(percentage || '0');
    let finalPrice = 0;
    if (productPrice) {
      finalPrice = productPrice + (productPrice * (totalPercentage / 100));
    }
    // console.log('exclusive price : '+ productPrice , 'tax percentage : '+ totalPercentage, 'inclusive price : '+ finalPrice);
    return finalPrice.toFixed(2);
  }

  getTaxExclusivePrice(price: string, percentage: string) {
    const productPrice = parseFloat(price || '0');
    const totalPercentage = parseFloat(percentage || '0');
    let finalPrice = 0;
    if (productPrice) {
      finalPrice = productPrice / ((totalPercentage / 100) + 1);
    }
    // console.log('inclusive price : '+ productPrice , 'tax percentage : ', totalPercentage, 'exclusive price : ' + finalPrice);
    return finalPrice.toFixed(2);
  }

  getBloodGroupOptions(): [any] {

    let bloodGroupList: any = [];
    const bloodGroupData = [
      { BloodGroup: 'A+' },
      { BloodGroup: 'A-' },
      { BloodGroup: 'AB+' },
      { BloodGroup: 'AB-' },
      { BloodGroup: 'B+' },
      { BloodGroup: 'B-' },
      { BloodGroup: 'O+' },
      { BloodGroup: 'O-' }
    ];
    bloodGroupList = this.getSelect2Options(bloodGroupData, 'BloodGroup', 'BloodGroup');
    return bloodGroupList;
  }

  navigateBackWard() {
    this.location.back();
  }
  // getDateFormatList() {
  //   let dateFormatList = [];

  //   const dateFormateDate: any = [];
  //   const dateFormat: any = Master.dateFormate;
  //   dateFormat.forEach((format: string) => {
  //     dateFormateDate.push({
  //       formatDate: format
  //     });
  //   });

  //   // const dateFormat = [
  //   //   { format: Master.allStatus },
  //   //   { format: Master.poStatus.pending },
  //   //   { format: Master.poStatus.Approved },
  //   //   { format: Master.poStatus.partial },
  //   //   { format: Master.poStatus.close },
  //   //   { format: Master.poStatus.cancel },
  //   // ];
  //   dateFormatList = this.getSelect2Options(dateFormateDate, 'formatDate', 'formatDate');
  //   return dateFormatList;
  // }


 

  getCurrencyFormate(value: any, avoidSymbol?: boolean, currencySymbol?: boolean): string {

    let formatter = null;

    let currentCode = 'INR';
    let cultureInfo = 'en-IN';

    let currentValue = value ? value : 0;

    try {

      const currencyDetail = this.credential.getCurrencyCode();
      if (currencyDetail) {
        if (currencyDetail.Currency_Code) {
          currentCode = currencyDetail.Currency_Code;
        }
        if (currencyDetail.Culture_Info_Code) {
          cultureInfo = currencyDetail.Culture_Info_Code;
        }
      }

      formatter = new Intl.NumberFormat(cultureInfo, {
        style: 'currency',
        currency: currentCode,
        minimumFractionDigits: 2
      });

      // this one space between symbol and value
      currentValue = formatter.format(currentValue).replace(/^(\D+)/, '$1 ');

      if (avoidSymbol) {
        currentValue = currentValue.split(' ')[1];
      }
      return currentValue;
    }
    catch (e) {
      return currentValue;
    }
  }

  /**
   * Returns true if given mail id is valid.
   *
   * @param inputEmail input email to verify pattern
   */
  isValidEmail(email: string) {
    const mail = email.trim();
    let isValid = false;
    // tslint:disable-next-line: max-line-length
    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    isValid = regexp.test(mail);
    return isValid;
  }

  /**
 * back button event
 */

  /**
   * normal format into reverse formate
   * @param format 
   */
  getCurrentDate(format?: boolean) {
    return format ? moment().format('DD-MM-YYYY') : moment().format('YYYY-MM-DD');
  }

  getCurrentTime(format?: boolean) {
    return format ? moment().format('hh:mm:ss a') : moment().format('HH:mm:ss');
  }

  getCurrentDateTime(format?: boolean) {
    return format ? moment().format('DD-MM-YYYY hh:mm:ss a') : moment().format('YYYY-MM-DD HH:mm:ss');
  }

  getFromToDate(minDate?: string, maxDate?: string): any {
    const fromDate = minDate || '';
    const toDate = maxDate || '';
    const currentDate = this.getCurrentDate();

    if (fromDate) {
      return { fromDate: moment(fromDate).format('YYYY-MM-DD'), toDate: currentDate };
    }
    else if (toDate) {
      return { fromDate: currentDate, toDate: moment(toDate).format('YYYY-MM-DD') };
    }
    else {
      return { fromDate: '', toDate: currentDate };
    }
  }

  getDaysAgo(date: string) {
    try {
      const dateObject = moment(date, 'DD-MM-YYYY');
      const dayDifference = moment().diff(dateObject, 'days');
      return dayDifference ? dayDifference + ' days ago' : 'today';
    } catch (e) {
      return date;
    }
  }


  /**
   * number into words
   * @param amount 
   */
  convertNumberToWords(amount: any) {
    var words = new Array();
    words[0] = '';
    words[1] = 'One';
    words[2] = 'Two';
    words[3] = 'Three';
    words[4] = 'Four';
    words[5] = 'Five';
    words[6] = 'Six';
    words[7] = 'Seven';
    words[8] = 'Eight';
    words[9] = 'Nine';
    words[10] = 'Ten';
    words[11] = 'Eleven';
    words[12] = 'Twelve';
    words[13] = 'Thirteen';
    words[14] = 'Fourteen';
    words[15] = 'Fifteen';
    words[16] = 'Sixteen';
    words[17] = 'Seventeen';
    words[18] = 'Eighteen';
    words[19] = 'Nineteen';
    words[20] = 'Twenty';
    words[30] = 'Thirty';
    words[40] = 'Forty';
    words[50] = 'Fifty';
    words[60] = 'Sixty';
    words[70] = 'Seventy';
    words[80] = 'Eighty';
    words[90] = 'Ninety';
    amount = amount.toString();
    var atemp = amount.split(".");
    var number = atemp[0].split(",").join("");
    var n_length = number.length;
    var words_string = "";
    if (n_length <= 9) {
      var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
      var received_n_array = new Array();
      for (var i = 0; i < n_length; i++) {
        received_n_array[i] = number.substr(i, 1);
      }
      for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
        n_array[i] = received_n_array[j];
      }
      for (var i = 0, j = 1; i < 9; i++, j++) {
        if (i == 0 || i == 2 || i == 4 || i == 7) {
          if (n_array[i] == 1) {
            n_array[j] = 10 + parseInt(n_array[j].toString());
            n_array[i] = 0;
          }
        }
      }
      let value = 0;
      for (var i = 0; i < 9; i++) {
        if (i == 0 || i == 2 || i == 4 || i == 7) {
          value = n_array[i] * 10;
        } else {
          value = n_array[i];
        }
        if (value != 0) {
          words_string += words[value] + " ";
        }
        if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
          words_string += "Crores ";
        }
        if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
          words_string += "Lakhs ";
        }
        if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
          words_string += "Thousand ";
        }
        if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
          words_string += "Hundred and ";
        } else if (i == 6 && value != 0) {
          words_string += "Hundred ";
        }
      }
      words_string = words_string.split("  ").join(" ");
    }
    return words_string;
  }

  /**\
   * formate is present normal
   */
  removeInvalidData(dataObject: any) {

    const receiveObject = dataObject ? dataObject : {};

    Object.keys(receiveObject).forEach(key => {

      if (key !== '' && receiveObject[key]) {
        if (typeof receiveObject[key] === 'string') {
          let newValue = receiveObject[key].replace(/\\/g, this.alterTextSlash); // patterns
          newValue = newValue.replace(/'/g, this.alterTextSQuotes);
          receiveObject[key] = newValue;
        } else if (typeof receiveObject[key] === 'number') {
          let newValue = receiveObject[key].toString().replace(/\\/g, this.alterTextSlash); // patterns
          newValue = newValue.replace(/'/g, this.alterTextSQuotes);
          receiveObject[key] = newValue;
        } else if (typeof receiveObject[key] === 'object') {
          // is Array
          if (Array.isArray(receiveObject[key])) {
            const objectArray = this.removeDataInArray(receiveObject[key]);
            receiveObject[key] = objectArray;
          } else {
            // It is array
            const objectArray = this.removeDataInObject(receiveObject[key]);
            receiveObject[key] = objectArray;
          }
        }
      }
    });
    return receiveObject;
  }

  removeDataInObject(jObject: any) {
    const newData = jObject ? jObject : {};

    Object.keys(newData).forEach(key => {

      if (key !== '') {
        if (typeof newData[key] === 'string') {
          let newValue = newData[key].replace(/\\/g, this.alterTextSlash); //// patterns
          newValue = newValue.replace(/'/g, this.alterTextSQuotes);
          newData[key] = newValue;
        } else if (typeof newData[key] === 'number') {
          let newValue = newData[key].toString().replace(/\\/g, this.alterTextSlash); //// patterns
          newValue = newValue.replace(/'/g, this.alterTextSQuotes);
          newData[key] = newValue;
        }
      }
    });
    return newData;
  }

  removeDataInArray(jArray: any) {
    const newData = jArray ? jArray : [];
    if (newData.length) {
      newData.forEach(element => {
        // check whether is string or object
        if (typeof element === 'string') {
          let newValue = element.replace(/\\/g, this.alterTextSlash); //// patterns
          newValue = newValue.replace(/'/g, this.alterTextSQuotes);
          element = newValue;
        }
        else {
          Object.keys(element).forEach(key => {
            if (key !== '') {
              if (typeof element[key] === 'string') {
                let newValue = element[key].replace(/\\/g, this.alterTextSlash); //// patterns
                newValue = newValue.replace(/'/g, this.alterTextSQuotes);
                element[key] = newValue;
              } else if (typeof element[key] === 'number') {
                let newValue = element[key].toString().replace(/\\/g, this.alterTextSlash); //// patterns
                newValue = newValue.replace(/'/g, this.alterTextSQuotes);
                element[key] = newValue;
              }
            }
          });
        }
      });
    }
    return newData;
  }

  isValuesEquals(text: string, comparator: string) {
    const value = text || '';
    const compareText = comparator || '';

    return value.toLowerCase() === compareText.toLowerCase();
  }

  getProductAttributeTabs(type: string) {
    const typeNumber = type;
    const attributeTabs: any = [
      {
        Name: 'POSMenu.Category',
        isActive: (typeNumber == '1')
      },
      {
        Name: 'POSMenu.Types',
        isActive: (typeNumber == '2')
      },
      {
        Name: 'POSMenu.UOM',
        isActive: (typeNumber == '3')
      },
      {
        Name: 'POSMenu.Kitchen',
        isActive: (typeNumber == '4')
      },
      {
        Name: 'POSMenu.CookingNotes',
        isActive: (typeNumber == '5')
      },
    ];
    return attributeTabs;
  }


  ImageCompression(base64: string, maxWidthSize?: number, maxHeightSize?: number) {
    const canvas = document.createElement('canvas')
    const img = document.createElement('img')

    return new Promise((resolve, reject) => {
      img.onload = () => {
        let width = img.width;
        let height = img.height;
        const maxHeight = maxHeightSize || 512;
        const maxWidth = maxWidthSize || 512;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height *= maxWidth / width))
            width = maxWidth
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width *= maxHeight / height))
            height = maxHeight
          }
        }
        canvas.width = width
        canvas.height = height

        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, width, height)

        resolve(canvas.toDataURL('image/png', 0.9));
      }
      img.onerror = (err) => {
        reject(err)
      }
      img.src = base64
    })
  }

  setSelectedDate(fromDate: string, toDate: string): void {
    if (fromDate && toDate) {
      localStorage.setItem('global-filter-from-date', fromDate);
      localStorage.setItem('global-filter-to-date', toDate);
    }
  }


  getListViewIconStyles(index: number): string {
    let i = index || 0;
    i++;

    if (i < 5) {
      i + 5;
    }

    const value = (i % 5);

    if (value === 0) {
      return 'first';
    }
    if (value === 1) {
      return 'second';
    }
    if (value === 2) {
      return 'third';
    }
    if (value === 3) {
      return 'fourth';
    }

    return 'fifth';
  }


  setDefaultListType(type: string) {
    const listType = type || '';
    if (listType) {
      localStorage.setItem('default-list-type', listType);
    }
  }

  removeDuplicateItems(data: any[], key: string) {
    const list = data || [];
    const uniqueKey = key || '';
    const dataList = [];
    if (list.length && uniqueKey) {
      const nameList = [];
      list.forEach((obj: any, i: number) => {
        const value = obj[uniqueKey] || '';
        if (value) {
          if (!nameList.length) {
            nameList.push(value);
            dataList.push(obj);
            return;
          }
          if (!nameList.includes(value)) {
            nameList.push(value);
            dataList.push(obj);
          }
        }
      });
    }

    return dataList;
  }

  // filter

  

  OBJtoXML(obj: any) {
    var xml = '';
    for (var prop in obj) {
      xml += obj[prop] instanceof Array ? '' : "<" + prop + ">";
      if (obj[prop] instanceof Array) {
        for (var array in obj[prop]) {
          xml += "<" + prop + ">";
          xml += this.OBJtoXML(new Object(obj[prop][array]));
          xml += "</" + prop + ">";
        }
      } else if (typeof obj[prop] == "object") {
        xml += this.OBJtoXML(new Object(obj[prop]));
      } else {
        xml += obj[prop];
      }
      xml += obj[prop] instanceof Array ? '' : "</" + prop + ">";
    }
    var xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
    return xml
  }


  /** ----------------------------------------- */
  /**                  To Base 64 Single      */
  /** ----------------------------------------- */


  public resfile:any;
  toFileBase64(inputValue: any) {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.resfile = myReader.result;
    }
    myReader.readAsDataURL(file);
  }
  /** ----------------------------------------- */
  /**                  To Base 64 Multiple      */
  /** ----------------------------------------- */
  public selectedFiles : SelectedFiles[] = [];

  public toFilesBase64(files: File[], selectedFiles: SelectedFiles[]): Observable<SelectedFiles[]> {
    const result = new AsyncSubject<SelectedFiles[]>();
    if (files?.length) {
      Object.keys(files)?.forEach(async (file, i) => {
        const reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onload = (e) => {
          selectedFiles = selectedFiles?.filter(f => f?.name != files[i]?.name)
          selectedFiles.push({ name: files[i]?.name, file: files[i], base64: reader?.result as string })
          result.next(selectedFiles);
          if (files?.length === (i + 1)) {
            result.complete();
          }
        };
      });
      return result;
    } else {
      result.next([]);
      result.complete();
      return result;
    }
  }






  /** ----------------------------------------- */
  /**                  Toaster              */
  /** ----------------------------------------- */

  toast(from,align,message,color){
    this.toastr.warning(
      '<span data-notify="icon" class="nc-icon nc-bell-55"></span>'+
      '<span data-notify="message">'+message+'</span>',
        "",
        {
          timeOut: 4000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-"+color+" alert-with-icon",
          positionClass: "toast-" + from + "-" + align
        }
      );
  }
















  /** ----------------------------------------- */
  /**                  Filter Date              */
  /** ----------------------------------------- */


  setFilterDate(dateField: any, key?: string) {
    if (dateField && dateField.fromDate && dateField.toDate) {
      localStorage.setItem(key, JSON.stringify(dateField));
    }
  }



  checkIfImageExists = (url: string, callback: (exists: boolean) => void) => {
    if (!url) {
      callback(false);
      return;
    }

    const img = new Image();
    img.src = url;

    if (img.complete) {
      callback(true);
    } else {
      img.onload = () => {
        callback(true);
      };

      img.onerror = () => {
        callback(false);
      };
    }
  };

      public formatDate(date){
       return (moment(date).format('YYYY-MM-DD'));
      }


//   addOverflowClass() {
//     $('body').addClass('overflow-hidden');
//   }

//   removeOverflowClass() {
//     $('body').removeClass('overflow-hidden');
//   }

}
