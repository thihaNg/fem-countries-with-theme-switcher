import { createContext, useContext, useState } from "react";

export const Theme = {
  LIGHT: 'light',
  DARK: 'dark'
}

type ThemeSwitcherProps = {
  toggleTheme: any
}

const ThemeContext = createContext<string | null>(null)
const ThemeSwitcherContext = createContext<ThemeSwitcherProps | null>(null)

type Props = {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<Props> = ({
  children
}) => {

  const [theme, setTheme] = useState(Theme.LIGHT)

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
  }

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeSwitcherContext.Provider value={{ toggleTheme }}>
        {children}
      </ThemeSwitcherContext.Provider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
export const useThemeSwitcher = () => useContext(ThemeSwitcherContext)

export const useGetStyles = () => {
  const theme = useTheme()
  const isLightTheme = theme === Theme.LIGHT
  const textColor = isLightTheme ? 'text-dark' : 'text-light'
  const backgroundColor = isLightTheme ? 'bg-light' : 'bg-dark'
  const bodyColor = isLightTheme ? 'bg-light-gray' : 'bg-very-dark'

  return {
    textColor,
    backgroundColor,
    bodyColor
  }
}