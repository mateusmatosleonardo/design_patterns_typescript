import { IVehicle } from "./interfaces/IVehicles";

export class Motorcycle implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando a entrega...");
  }
  getCargo(): void {
    console.log("Já pegamos a encomenda!");
  }
}
