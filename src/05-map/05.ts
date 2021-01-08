import {HouseType} from "../02-objects/02_02";

export const  getTitlesOfGovermentBuilding = (houses: Array<HouseType>) => {

    return houses.map(house => house.address.street.title);

}