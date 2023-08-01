import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Theme, ThemeProvider, useGetStyles, useTheme } from './components/ThemeProvider';
import Header from './components/header/Header';
import SearchInput from './components/elements/search-input/SearchInput';
import CountriesPage from './components/pages/countries/CountriesPage';
import { Country } from './models/Country';
import CountryDetailPage from './components/pages/country-detail/CountryDetailPage';

function App() {

  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)

  const handleCountrySelect = (country: Country) => {

    setSelectedCountry(country)

  }

  const handleDetailBackClick = () => {
    setSelectedCountry(null)
  }

  return (
    <ThemeProvider>
      <div>
        <Header />
        <div
          className='main'>
          {
            !selectedCountry &&
            <CountriesPage
              onCountrySelect={handleCountrySelect} />
          }
          {
            selectedCountry &&
            <CountryDetailPage
              onBackClick={handleDetailBackClick}
              country={selectedCountry} />
          }
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
