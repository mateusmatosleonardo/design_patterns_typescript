import Client from "./Client";

export default class Notify {
  constructor(private client: Client) {}

  sendEmail(): boolean {
    console.log("Enviando email...");
    this.client.email;
    return true;
  }
}
