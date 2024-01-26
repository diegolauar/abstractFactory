import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft {
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("iniciando drone para decolagem")

    }
    getCargo(): void {
        console.log("Drone pronto para decolar")
    }
    checkWind(): void {
        console.log("Ventos fracos: 5km")
    }

}