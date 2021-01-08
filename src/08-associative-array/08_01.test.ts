import {users, UsersType} from "./08_01";

let testUsersObject: UsersType = {};

beforeEach(() => {
    testUsersObject = users;
})

test("should update corresponding user", () => {

    testUsersObject['1'].name = 'Katerina'
    expect(testUsersObject['1'].name).toBe('Katerina')
})