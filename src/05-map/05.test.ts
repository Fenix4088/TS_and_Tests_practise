import {getTitlesOfGovermentBuilding} from "./05";

test("Get names of each street name", () => {
    const houses = [
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
                    title: 'Long street'
                }
            }
        }
    ]

    const streetsNames = getTitlesOfGovermentBuilding(houses);

    expect(streetsNames.length).toBe(3);
    expect(streetsNames[0]).toBe("White street")
    expect(streetsNames[1]).toBe("Happy street")
    expect(streetsNames[2]).toBe("Long street")

})