import { getDataHeaders, baseUrl } from "./utils";

class Api {
  constructor(baseUrl, DataHeaders) {
    this._baseUrl = baseUrl;
    this._headers = DataHeaders;
  }
  //Метод возвращает промисс из ответа сервера
  //в случае ошибки возвращает ее код и текст ошибки
  _checkRes(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`${res.status} ${res.statusText}`);
    }
  }
  //метод берет данные с сервера
  getData(href) {
    return fetch(this._baseUrl + href, { headers: this._headers }).then(
      this._checkRes
    );
  }
  //метод записывает данные на сервер
  setData(href, method, headers, bodyObject) {
    return fetch(this._baseUrl + href, {
      method: method,
      headers: headers,
      body: bodyObject ? JSON.stringify(bodyObject) : "",
    }).then(this._checkRes);
  }
}
const api = new Api(baseUrl, getDataHeaders);

export { api };
