import { Theme, useGetStyles, useTheme } from "../../ThemeProvider"

type Props = {
  className?: string
  styles?: React.CSSProperties
  label: string
}

const Typography: React.FC<Props> = ({
  className,
  styles,
  label
}) => {

  const { textColor } = useGetStyles()

  return (
    <span
      className={`${className} ${textColor}`}
      style={{
        ...styles
      }}>
      {label}
    </span>
  )
}

export default Typography