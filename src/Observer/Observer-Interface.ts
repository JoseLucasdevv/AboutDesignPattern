export interface Observer {
  update(observer: any): void;
  getCurrentState(): any;
}
