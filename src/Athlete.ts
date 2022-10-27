import { action, makeObservable, observable } from "mobx";

class Atlete {
  name: string;
  age: number;
  ballonDOr: number;
  teamHistory: string[];

  constructor(name: string, age: number, ballonDOr: number) {
    this.name = name;
    this.age = age;
    this.ballonDOr = ballonDOr;
    this.teamHistory = [];

    makeObservable(this, {
      wonBallonDOr: action,
      name: observable,
      age: observable,
      ballonDOr: true,
      teamHistory: true,
      tradePlayer: action,
    });
  }

  wonBallonDOr() {
    this.ballonDOr++;
  }

  tradePlayer(team: string) {
    this.teamHistory.push(team);
  }
}

export default Atlete;
