
export const testObj = {};

export type UserType = {
  name: string;
  hair: number;
  address: { city: string; house?: number };
};

export type LaptopType = {
  title: string;
};

export type UserWithLaptopType = UserType & {
  laptop: LaptopType;
};

export type UserWithBooksType = UserType & {
  books: Array<string>;
};

export type UserWithSkillsType = UserType & {
  skillsLvl: Array<SkillsType>;
};

type SkillsType = {
  skillName: string;
  skillLvl: number;
};

export function makeHairStyle(u: UserType, cutHairWeight: number): UserType {
  const copy = {
    ...u,
    hair: u.hair / cutHairWeight,
  };
  // copy.hair = copy.hair / cutHairWeight;

  return copy;
}

export function moveUser(
  user: UserWithLaptopType,
  city: string
): UserWithLaptopType {
  const userCopy = {
    ...user,
    address: {
      ...user.address,
      city: "Kiev",
    },
  };

  return userCopy;
}

export function moveUserToOtherHouse(
  user: UserWithLaptopType & UserWithBooksType,
  house: number
): UserWithLaptopType {
  const userCopy = {
    ...user,
    address: {
      ...user.address,
      house: house,
    },
  };

  return userCopy;
}

export const upgradeLaptop = (
  user: UserWithLaptopType,
  newLaptop: string
): UserWithLaptopType => {
  return {
    ...user,
    laptop: {
      ...user.laptop,
      title: newLaptop,
    },
  };
};

export const addNewBooks = (
  user: UserWithLaptopType & UserWithBooksType,
  newBooks: Array<string>
) => {
  return {
    ...user,
    books: [...user.books.concat(newBooks)],
  };
};

export const replaceBooks = (
  user: UserWithLaptopType & UserWithBooksType,
  replacedBook: string,
  newBook: string
) => {
  return {
    ...user,
    books: user.books.map((book) => (book === replacedBook ? newBook : book)),
  };
};

export const updateSkill = (
  user: UserWithSkillsType,
  skillName: string,
  newSkillLvl: number
): UserWithSkillsType => {
  return {
    ...user,
    skillsLvl: user.skillsLvl.map((sl) => sl.skillName === skillName ? {...sl, skillLvl: newSkillLvl} : sl),
  };
};
