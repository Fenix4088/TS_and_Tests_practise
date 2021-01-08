type LocalCityType = {
  title: string
  country: string
}

type addressType = {
  street: string
  city: LocalCityType
}

type TechType = {
  id: number
  title: string
}

export type StudentType = {
  id: number
  'name': string
  age: number
  isActive: boolean
  address: addressType
  technologies: Array<TechType>
}

export const student = {
  id: 1,
  'name': 'Yehor',
  age: 32,
  isActive: false,
  address: {
    street: 'Surg 2',
    city: {
      title: 'Kiev',
      country: 'Ukrain'
    }
  },
  technologies: [
    {
      id: 1,
      title: 'HTML'
    },
    {
      id: 2,
      title: 'CSS'
    }
  ]
};

