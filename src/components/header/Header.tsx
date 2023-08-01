import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Theme, useGetStyles, useTheme, useThemeSwitcher } from "../ThemeProvider"
import { faMoon as solidFaMoon } from "@fortawesome/free-solid-svg-icons"
import { faMoon as regularFaMoon } from "@fortawesome/free-regular-svg-icons"
import styles from './Header.module.css'
import Typography from "../elements/typography/Typography"

const Header: React.FC = () => {

  const theme = useTheme()
  const themeSwitcher = useThemeSwitcher()

  const { backgroundColor } = useGetStyles()

  const isLightTheme = theme === Theme.LIGHT

  const handleToggleTheme = () => {
    if (themeSwitcher) {
      themeSwitcher.toggleTheme()
    }
  }

  return (
    <header
      className={backgroundColor}>
      <div
        className={`${styles.container}`}>
        <Typography
          className="main-header"
          label="Where in the world?" />
        <div
          onClick={handleToggleTheme}
          className={`${styles['theme-switcher']}`}>
          <FontAwesomeIcon
            icon={isLightTheme ? regularFaMoon : solidFaMoon}
            style={{ color: isLightTheme ? "#324152" : "white", }} />
          <Typography
            className="button"
            label={`${isLightTheme ? 'Dark' : 'Light'} Mode`} />
        </div>
      </div>
    </header>
  )
}

export default Header