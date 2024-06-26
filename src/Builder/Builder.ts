import { BuilderCar } from "./BuilderCar";
import { IBuilderCar } from "./BuilderCar-Interface";
import { ICar } from "./Car-interface";

const BuilderFirst: IBuilderCar = new BuilderCar();
const BuilderTwo: IBuilderCar = new BuilderCar();

const car1: ICar = BuilderFirst.setEngine("V8")
  .setHasTripComputer(true)
  .setSeats(4)
  .build();

const car2: ICar = BuilderTwo.setEngine("V12")
  .setHasTripComputer(true)
  .setSeats(2)
  .build();

console.log(car1, car2);
