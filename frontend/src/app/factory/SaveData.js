/**
 * Created by Maxim on 03/12/2015.
 */
export class SaveData {
  constructor() {
    'ngInject';
    this._data = [];

  }

  set(data) {
    this._data = data;
  }
  get() {
    return this._data;
  }
}

SaveData.$inject = ['Restangular'];
