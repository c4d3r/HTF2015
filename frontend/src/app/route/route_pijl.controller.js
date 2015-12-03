/**
 * Created by Maxim on 03/12/2015.
 */
export class RoutePijltjeController {
  constructor ($stateParams, $log, SaveData) {
    'ngInject';

    console.log(SaveData.get());
    this.instructions = SaveData.get();
  }


  exportToCSV() {
    console.log(this.instructions);
    return this.instructions;
  }
}
