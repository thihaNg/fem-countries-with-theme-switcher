import { Country } from "../../../models/Country"
import { useGetStyles } from "../../ThemeProvider"
import Button from "../../elements/button/Button"
import Typography from "../../elements/typography/Typography"
import Styles from './CountryDetailPage.module.css'

type Props = {
  country: Country,
  onBackClick: () => void
}

const CountryDetailPage: React.FC<Props> = ({
  country,
  onBackClick
}) => {

  const {
    textColor,
    backgroundColor,
    bodyColor
  } = useGetStyles()

  return (
    <div
      className={`${Styles.container} ${bodyColor}`}>
      <div
        className={`${Styles.content}`}>
        <Button
          label="Back"
          onClick={onBackClick} />
        <div
          className={`${Styles['country-container']}`}>
          <div
            className={`${Styles['flag-wrapper']}`}>
            <img
              src={country.flag} />
          </div>
          <div
            className={`${Styles['parent-info-wrapper']}`}>
            <Typography
              className={`title`}
              label={country.name} />
            <div
              className={`${Styles['info-wrapper-container']}`}>
              <div
                className={`${Styles['info-wrapper']}`}>
                <Typography
                  styles={{
                    // marginTop: '16px'
                  }}
                  label={`Native Name: ${country.nativeName}`}
                  className={`label`} />
                <Typography
                  styles={{
                    marginTop: '10px'
                  }}
                  label={`Population: ${country.population}`}
                  className={`label`} />
                <Typography
                  styles={{
                    marginTop: '10px'
                  }}
                  label={`Region: ${country.region}`}
                  className={`label`} />
                <Typography
                  styles={{
                    marginTop: '10px'
                  }}
                  label={`Sub Region: ${country.subregion}`}
                  className={`label`} />
                <Typography
                  styles={{
                    marginTop: '10px'
                  }}
                  label={`Capital: ${country.capital}`}
                  className={`label`} />
              </div>
              <div
                className={`${Styles['info-wrapper']}`}>
                <Typography
                  styles={{
                    // marginTop: '10px'
                  }}
                  label={`Top Level Domain: ${country.tld}`}
                  className={`label`} />
                <Typography
                  styles={{
                    marginTop: '10px'
                  }}
                  label={`Currencies: ${country.currencies}`}
                  className={`label`} />
                <Typography
                  styles={{
                    marginTop: '10px'
                  }}
                  label={`Languages: ${country.languages}`}
                  className={`label`} />
              </div>
            </div>
            <div
              className={`${Styles['border-countries-wrapper']}`}>
              <Typography
                label="Border Countries: "
                className={`label`} />
              {
                country.borders && country.borders.map(border => (
                  <Button
                    label={border}
                    onClick={() => { }} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default CountryDetailPage