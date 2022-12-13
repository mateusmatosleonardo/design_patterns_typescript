// Classe criada não para instanciar, mas criar outras classes a partir dela

import { IVehicle } from "./vehicles/interfaces/IVehicles";

export abstract class Transport {
  startTransport(): void {
    const vehicle = this.createTransport();

    vehicle.startRoute();
  }

  protected abstract createTransport(): IVehicle;
}
