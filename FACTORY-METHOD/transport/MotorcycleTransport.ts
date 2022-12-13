import { Transport } from "./Transport";
import { Motorcycle } from "./vehicles/Motorcycle";
import { IVehicle } from "./vehicles/interfaces/IVehicles";

export default class MotorcycleTransport extends Transport {
  protected createTransport(): IVehicle {
    return new Motorcycle();
  }
}
