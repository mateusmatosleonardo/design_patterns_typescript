import { IVehicle } from "./interfaces/IVehicles";

export class Bike implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando o delivery");
  }
  getCargo(): void {
    console.log("Já pegamos a comida");
  }
}
