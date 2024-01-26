import ILandVehicle from "./interfaces/ILandVehicle";

export default class Scooter implements ILandVehicle {
    startRoute(): void {
        this.getCargo();
        console.log("Iniciando trajeto")
    }
    getCargo(): void {
        console.log("15 minutos disponíveis");
    }

}