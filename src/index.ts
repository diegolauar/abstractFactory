import Client from "./vehicles/client/client";
import Company from "./vehicles/consts/Company";
import NineNineTransport from "./vehicles/factories/NineNineTransport";
import UberTransport from "./vehicles/factories/UberTransport";
import ITransportFactory from "./vehicles/factories/interfaces/ITransportFactory";

const currentCompany = Company.UBER;
let factory: ITransportFactory;

switch (currentCompany) {
    case Company.UBER:
        factory = new UberTransport();
        break;

    case Company.NINENINE:
        factory = new NineNineTransport();
        break;
        
    default:
        console.error("Companhia Desconhecida")    
}

const client = new Client(factory);

client.startRoute();
