
import { CryptoJS } from './libs';

export const ENCRYPTION_KEY = 'ee06040416674a04af3ff4f7881b76f2';

export const saveToLocal = (data, key, isJson = true, isEncrypted = false) => {
  let saveData = data;
  if (data && isJson) {
    saveData = JSON.stringify(data);
  }
  if (saveData && isEncrypted) {
    saveData = CryptoJS.AES.encrypt(saveData, ENCRYPTION_KEY).toString();
  }
  global.localStorage.setItem(key, saveData);
};

export const getFromLocal = (key, isJson = true, isEncrypted = false) => {
  let data = global.localStorage.getItem(key);
  if (data && isEncrypted) {
    const bytes = CryptoJS.AES.decrypt(data.toString(), ENCRYPTION_KEY);
    data = bytes.toString(CryptoJS.encUTF8);
  }
  if (data && isJson) {
    data = JSON.parse(data);
  }
  return data;
};

export const removeFromLocal = (key) => {
  global.localStorage.removeItem(key);
};

export const existInLocal = key => global.localStorage.getItem(key) != null;
