import { ICar } from "./Car-interface";

export interface IBuilderCar {
  setSeats(data: number): this;

  setEngine(data: string): this;
  setHasTripComputer(data: boolean): this;
  build(): ICar;
}
