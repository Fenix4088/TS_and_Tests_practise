import { StudentType } from '../02-objects/02';
import { govermentBuildingsType, HouseType } from '../02-objects/02_02';


export const sum = (a: number, b: number): number => {
  return a + b;
};

const res = sum(1, 2);

export const addSkill = (student: StudentType, skill: string) => {
  student.technologies.push(
    {
      id: new Date().getTime(),
      title: skill
    }
  );
}

export const makeStudentActive = (s:StudentType) => {
  s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, city: string): boolean => {
  return s.address.city.country === city;
}

export const addMoneyToBudget = (building: govermentBuildingsType, money: number) => {
  building.budget += money;
}

export const repairdHouse = (house: HouseType) => {
  house.repaired = true;
}

export const addStuff = (buildingStaff: govermentBuildingsType, count: number) => {
  buildingStaff.staffCount += count;
}