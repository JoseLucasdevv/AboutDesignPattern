import { Observer } from "./Observer-Interface";

class ConcreteObserver1 implements Observer {
  private currentState: any;
  update(data: any): void {
    this.currentState = data;
  }
  getCurrentState() {
    return this.currentState;
  }
}

class ConcreteObserver2 implements Observer {
  private currentState: any;
  update(data: any): void {
    this.currentState = data;
  }
  getCurrentState() {
    return this.currentState;
  }
}
export { ConcreteObserver1, ConcreteObserver2 };
