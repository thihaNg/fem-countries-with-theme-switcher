export type CountryRaw = {
  name: {
    official: string
    nativeName: any//{[key: string]: any}
  }
  currencies: any
  languages: any
  region: string
  subregion: string
  tld: string
  population: number
  flags: {
    png: string
    svg: string
  }
  capital: string[]
  borders: string[]
}

export type Country = {
  name: string
  nativeName: string
  currencies: string
  languages: string
  region: string
  subregion: string
  tld: string
  population: string
  flag: string
  capital: string
  borders: string[]
}

type Currency = {
  name: string
  symbol: string
}