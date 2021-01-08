import {
    addNewBooks,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, replaceBooks, updateSkill,
    upgradeLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, UserWithSkillsType
} from "./10_01";

test("reference type test", () => {
    const user: UserType = {
        name: "Yehor",
        hair: 32,
        address: {
            city: "Minsk"
        }
    }

    const cutUser = makeHairStyle(user, 2);

    expect(user.hair).toBe(32);
    expect(cutUser.hair).toBe(16);
    expect(cutUser.address).toBe(user.address)

});

test("change address", () => {
    const user: UserWithLaptopType = {
        name: "Yehor",
        hair: 32,
        laptop: { title: "Zenbook",},
        address: {
            city: "Minsk",
            house: 12
        }
    }

    const movedUser = moveUser(user, "Kiev");

    expect(user).not.toBe(movedUser);
    expect(user.address).not.toBe(movedUser.address);
    expect(user.laptop).toBe(movedUser.laptop);
    expect(movedUser.address.city).toBe("Kiev");

});

test("upgrade laptop", () => {
    const user: UserWithLaptopType & UserWithBooksType = {
        name: "Yehor",
        hair: 32,
        laptop: { title: "Zenbook",},
        address: {
            city: "Minsk",
            house: 12
        },
        books: ["css", "html", "js", "react"]
    }

    const movedOtherHouseUser = moveUserToOtherHouse(user, 999);

    expect(movedOtherHouseUser.laptop.title).toBe(user.laptop.title)
    expect(user.books).toBe(user.books);

    expect(movedOtherHouseUser.address.house).not.toBe(user.address.house);
    expect(movedOtherHouseUser.address.house).toBe(999);

});

test("add new books", () => {
    const user: UserWithLaptopType & UserWithBooksType = {
        name: "Yehor",
        hair: 32,
        laptop: { title: "Zenbook",},
        address: {
            city: "Minsk",
            house: 12
        },
        books: ["css", "html", "js", "react"]
    }

    const userWithNewBooks = addNewBooks(user, ["ts", "rest API"]);

    expect(userWithNewBooks.laptop.title).toBe(user.laptop.title)
    expect(userWithNewBooks.address.house).toBe(user.address.house);
    expect(userWithNewBooks.books).not.toBe(user.books);
    expect(userWithNewBooks.books).toStrictEqual(["css", "html", "js", "react", "ts", "rest API"]);
    expect(user.books).toStrictEqual(["css", "html", "js", "react"]);


});

test("replace book", () => {
    const user: UserWithLaptopType & UserWithBooksType = {
        name: "Yehor",
        hair: 32,
        laptop: { title: "Zenbook",},
        address: {
            city: "Minsk",
            house: 12
        },
        books: ["css", "html", "js", "react"]
    }

    const userWithNewBooks = replaceBooks(user, 'js', "ts");

    expect(userWithNewBooks.laptop.title).toBe(user.laptop.title)
    expect(userWithNewBooks).not.toBe(user);
    expect(userWithNewBooks.books).not.toBe(user.books);
    expect(userWithNewBooks.books).toStrictEqual(["css", "html", "ts", "react"]);
    expect(user.books).toStrictEqual(["css", "html", "js", "react"]);


});

test("update skills", () => {
    const user: UserWithSkillsType = {
        name: "Yehor",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        skillsLvl: [
            {skillName: "box", skillLvl: 25},
            {skillName: "football", skillLvl: 76},
            {skillName: "porogramming", skillLvl: 64},
        ]
    }

    const userWithUpdatedSkills = updateSkill(user, "box", 33);

    expect(user.skillsLvl[0].skillLvl).toBe(25);
    expect(userWithUpdatedSkills.skillsLvl[0].skillLvl).toBe(33);
    expect(user).not.toBe(userWithUpdatedSkills);



});