import { CityType } from '../02-objects/02_02';
import { addMoneyToBudget, addStuff, repairdHouse } from './03';

let city: CityType;

beforeEach(() => {
  city = {
    title: 'NewYork',
    houses: [
      {
        buildedAt: 2012,
        repaired: false,
        address: {
          number: 100,
          street: {
            title: 'White street'
          }
        }
      },
      {
        buildedAt: 2008,
        repaired: false,
        address: {
          number: 100,
          street: {
            title: 'Happy street'
          }
        }
      },
      {
        buildedAt: 2020,
        repaired: false,
        address: {
          number: 101,
          street: {
            title: 'Happy street'
          }
        }
      }
    ],
    govermentBuildings: [
      {
        type: 'HOSPITAL',
        budget: 200000,
        staffCount: 200,
        address: {
          street: {
            title: 'Central Str'
          }
        }

      },
      {
        type: 'FIRE-STATION',
        budget: 200000,
        staffCount: 200,
        address: {
          street: {
            title: 'Central Str'
          }
        }

      },
    ],
    citizensNumber: 1000000
  };
});

test("budget should be changed for HOSPITAl", () => {
  addMoneyToBudget(city.govermentBuildings[0], 50000)

  expect(city.govermentBuildings[0].budget).toBe(250000)
});

test("budget should be changed for Fire-Station", () => {
  addMoneyToBudget(city.govermentBuildings[1], 50000)

  expect(city.govermentBuildings[1].budget).toBe(250000)
});

test("House should be repared", () => {
  repairdHouse(city.houses[1]);

  expect(city.houses[1].repaired).toBeTruthy()
})

test("Staff should be increase", () => {

  addStuff(city.govermentBuildings[0], 20);

  expect(city.govermentBuildings[0].staffCount).toBe(220)
})