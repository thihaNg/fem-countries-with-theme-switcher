import { useEffect, useState } from "react"
import { Country, CountryRaw } from "../models/Country"
import { filterCountriesByRegion, getAllCountries, searchCountriesByName } from "../api/CountriesApi"

const retrieveValueFromNestedObjects = (obj: any, valueKey?: string) => {

  const result = []

  for (const key in obj) {
    console.log(key)
    if (Object.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (valueKey) {
        result.push(value[valueKey])
      } else {
        result.push(value)
      }
    }
  }

  return result
}

const getCountryFromRaw = (raw: CountryRaw) => {

  const nativeNames = retrieveValueFromNestedObjects(raw.name.nativeName, 'official')
  const currencies = retrieveValueFromNestedObjects(raw.currencies, 'name')
  const languages = retrieveValueFromNestedObjects(raw.languages)

  return {
    ...raw,
    name: raw.name.official,
    nativeName: nativeNames.length != 0 ? nativeNames[0] : '--',
    currencies: currencies.toString(),
    languages: languages.toString(),
    flag: raw.flags.png,
    capital: 'Capital A'
  }
}

const useGetCountries = () => {
  const [countries, setCountries] = useState<Country[]>([])
  const [error, setError] = useState()

  const getAll = () => {
    getAllCountries()
      .then(response => {
        setCountries(
          response.map((raw: CountryRaw) => {
            return getCountryFromRaw(raw)
          })
        )
      })
      .catch((err) => {
        setError(err)
      })
  }

  const searchByName = (name: string) => {
    searchCountriesByName(name)
      .then(response => {
        setCountries(
          response.map((raw: CountryRaw) => {
            return getCountryFromRaw(raw)
          })
        )
      })
      .catch((err) => {
        setError(err)
      })
  }

  const filterByRegion = (region: string) => {
    filterCountriesByRegion(region)
      .then(response => {
        setCountries(
          response.map((raw: CountryRaw) => {
            return getCountryFromRaw(raw)
          })
        )
      })
      .catch((err) => {
        setError(err)
      })
  }


  return {
    countries
    , error
    , getAll
    , searchByName
    , filterByRegion
  }
}

export default useGetCountries