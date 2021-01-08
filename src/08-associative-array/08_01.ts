export const usersArray = ["Yehor", "Dima", "Valera", "Katya"];

export const usersObj = {
    '0': "Yehor",
    '1': "Dima",
    '2': "Valera",
    '3': "Katya",
}

export type UsersType = {
    [key: string]: {
        id: number,
        name: string
    }
}

export const users: UsersType = {
    '101': {id: 101, name: "Yehor"},
    '22': {id: 22, name: "Dima"},
    '307': {id: 307, name: "Valera"},
    '1': {id: 7, name: "Katya"},
}

const newUser = {id: 100500, name: "Igor"}
users[newUser.id] = newUser

export const usersArr = [
    {id: 101, name: "Yehor"},
    {id: 22, name: "Dima"},
    {id: 307, name: "Valera"},
    {id: 7, name: "Katya"}
]

