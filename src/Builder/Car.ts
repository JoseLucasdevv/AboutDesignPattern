import { ICar } from "./Car-interface";

export class Car implements ICar {
  public seats!: number;
  public engine!: string;
  public hasTripComputer!: boolean;
}
