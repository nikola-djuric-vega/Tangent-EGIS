export interface OfficeAccordion {
  continents: Continent[]
  title: string
}

export interface Continent {
  __typename: string
  countries: Country[]
  title: string
}

export interface Country {
  __typename: string
  regions: Region[]
  title: string
}

export interface Region {
  __typename: string
  regionOffices: Office[]
  title: string
}

export interface Office {
  __typename: string
  address: string[]
  url: string
  officeName: string
}
