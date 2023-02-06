import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor() { }

  encrypt(keys: string, value: string) {
    if (keys && value) {
      // console.log("keys : " + keys + "value : " + value);
      let encryptedText = CryptoJS.AES.encrypt(value.trim(), keys.trim()).toString();
      return encryptedText;
    }
    return null;
  }

  decrypt(keys: string, value: string) {
    // console.log("keys : " + keys + "value : " + value);
    if (keys && value) {
      let decryptedText = CryptoJS.AES.decrypt(value.trim(), keys.trim());
      return decryptedText.toString(CryptoJS.enc.Utf8);
    }
    return null;
  }
}
