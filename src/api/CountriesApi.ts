import axios from "axios"
import { Country } from "../models/Country"

const BASE_URL = 'https://restcountries.com/v3.1/'
const ALL_COUNTRIES = BASE_URL + 'all'
const FILTER_BY_REGION = BASE_URL + 'region/'
const SEARCH_BY_NAME = BASE_URL + 'name/'

export const getAllCountries = async () => {
  try {
    const response = await axios.get(ALL_COUNTRIES)

    return response.data
  } catch {
    throw new Error('Something went wrong!')
  }
}

export const filterCountriesByRegion = async (region: string) => {
  try {
    const response = await axios.get(FILTER_BY_REGION + region)
    
    return response.data
  } catch {
    throw new Error('Something went wrong!')
  }
}

export const searchCountriesByName = async (name: string) => {
  try {
    const response = await axios.get(SEARCH_BY_NAME + name)
    
    return response.data
  } catch {
    throw new Error('Something went wrong!')
  }
}