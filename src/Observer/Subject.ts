import { Observer } from "./Observer-Interface";
export class Subject {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
      console.log("Observer retired", observer);
    }
  }
  notifyObserver(data: any): void {
    for (const observer of this.observers) {
      observer.update(data);
    }
  }
  setState(data: any): void {
    this.notifyObserver(data);
  }
}
