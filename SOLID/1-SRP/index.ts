import Client from "./Client";
import Notify from "./Notify";

const cliente = new Client();
const noitificacao = new Notify(cliente);

noitificacao.sendEmail();
