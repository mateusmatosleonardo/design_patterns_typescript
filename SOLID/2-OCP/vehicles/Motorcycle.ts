import { IVehicleMotorcycle } from "./IVehicleMotorcycle";

export class Motorcyle implements IVehicleMotorcycle {
  constructor(color: string, year: number, engine: number) {
    this.configure(color, year, engine);
  }

  startVehicle(): void {
    console.log("Ligando os motores.");
  }

  configure(color: string, year: number, engine: number): void {
    console.log(`Criando um carro: 
    ${color}, 
    ${year}, 
    ${engine} potência.`);

    this.startVehicle();
  }
}
