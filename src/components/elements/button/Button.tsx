import { useGetStyles } from "../../ThemeProvider"
import Typography from "../typography/Typography"
import Styles from './Button.module.css'

type Props = {
  label: string,
  onClick: () => void
}

const Button: React.FC<Props> = ({
  label,
  onClick
}) => {

  const {
    textColor,
    backgroundColor
  } = useGetStyles()

  return (
    <div
      onClick={onClick}
      className={`${Styles.container} ${backgroundColor}`}>
      <Typography
        className={`button ${textColor}`}
        label={`${label}`}/>
    </div>
  )
}

export default Button