export type CityType =  {
  title: string
  houses: Array<HouseType>
  govermentBuildings: Array<govermentBuildingsType>
  citizensNumber: number
}

export type HouseType = {
  buildedAt: number
  repaired: boolean
  address: AddressType
}

type AddressType = {
  number: number
  street: StreetType
}

type StreetType = {
  title: string
}

export type govermentBuildingsType = {
  type: "HOSPITAL" | "FIRE-STATION",
  budget: number
  staffCount: number
  address: govermentAddressType
}

type govermentAddressType = {
  street: govermentTitleType
}

type govermentTitleType = {
  title: string
}