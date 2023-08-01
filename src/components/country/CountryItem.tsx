import { Country } from "../../models/Country"
import { useGetStyles } from "../ThemeProvider"
import Typography from "../elements/typography/Typography"
import Styles from './Country.module.css'

type Props = {
  country: Country
  onItemClick: (country: Country) => void
}

const CountryItem: React.FC<Props> = ({
  country,
  onItemClick
}) => {

  const {
    textColor,
    backgroundColor
  } = useGetStyles()

  return (
    <div
      onClick={() => onItemClick(country)}
      className={`${Styles.container} ${backgroundColor}`}>
      <img
        src={country.flag} />
      <div
        className={`${Styles['info-wrapper']}`}>
        <Typography
          styles={{
            marginTop: '16px'
          }}
          label={country.name}
          className={`title`} />
        <Typography
          styles={{
            marginTop: '16px'
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
          label={`Capital: ${country.capital}`}
          className={`label`} />
      </div>
    </div>
  )
}

export default CountryItem