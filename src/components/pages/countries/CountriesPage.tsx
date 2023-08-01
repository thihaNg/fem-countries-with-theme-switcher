import { useEffect, useState } from "react"
import { useGetStyles } from "../../ThemeProvider"
import Dropdown from "../../elements/dropdown/Dropdown"
import SearchInput from "../../elements/search-input/SearchInput"
import Styles from './CountriesPage.module.css'
import { getAllCountries } from "../../../api/CountriesApi"
import useGetCountries from "../../../hooks/useGetCountries"
import CountryItem from "../../country/CountryItem"
import { Country } from "../../../models/Country"
import CountryDetailPage from "../country-detail/CountryDetailPage"

type Props = {
  onCountrySelect: (country: Country) => void
}

const CountriesPage: React.FC<Props> = ({
  onCountrySelect
}) => {
  const { bodyColor } = useGetStyles()
  
  const [region, setRegion] = useState('Filter by Region')
  const {
    countries
    , error
    , getAll
    , searchByName
    , filterByRegion
  } = useGetCountries()

  useEffect(() => {
    getAll()
  }, [])

  const handleSearchQueryChange = (query: string) => {
    searchByName(query)
  }

  const handleRegionChange = (newRegion: string) => {
    setRegion(newRegion)
    filterByRegion(newRegion)
  }

  return (
    <div
      className={`${Styles.container} ${bodyColor}`}>
      <div
        className={`${Styles.content}`}>
        <div
          className={`${Styles['filter-wrapper']}`}>
          <SearchInput
            onQueryChange={handleSearchQueryChange}
            placeholder="Search for a country..." />
          <Dropdown
            onOptionChange={handleRegionChange}
            value={region}
            options={['Africa', 'America', 'Asia', 'Europe', 'Oceania']} />
        </div>
        <div
          className={`${Styles['countries-grid-container']}`}>
          {
            countries.map(country => (
              <CountryItem
                onItemClick={onCountrySelect}
                key={country.name}
                country={country} />
              // <div></div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default CountriesPage