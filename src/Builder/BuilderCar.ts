import { IBuilderCar } from "./BuilderCar-Interface";
import { Car } from "./Car";
import { ICar } from "./Car-interface";

export class BuilderCar implements IBuilderCar {
  private car: ICar;

  constructor() {
    this.car = new Car();
  }
  setSeats(seats: number): this {
    this.car.seats = seats;
    return this;
  }

  setEngine(engine: string): this {
    this.car.engine = engine;
    return this;
  }
  setHasTripComputer(hasTripComputer: boolean): this {
    this.car.hasTripComputer = hasTripComputer;
    return this;
  }
  build(): ICar {
    return this.car;
  }
}
