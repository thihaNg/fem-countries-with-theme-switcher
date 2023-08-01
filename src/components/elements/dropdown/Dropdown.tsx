import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Typography from '../typography/Typography'
import Styles from './Dropdown.module.css'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useGetStyles } from '../../ThemeProvider'

type Props = {
  value: string
  options: string[]
  onOptionChange: (option: string) => void
}

const Dropdown: React.FC<Props> = ({
  value,
  options,
  onOptionChange
}) => {

  const { textColor, backgroundColor } = useGetStyles()
  const [open, setOpen] = useState(false)

  const toggleDropdown = () => {
    setOpen(!open)
  }

  return (
    <>
      <div
        className={`${Styles.container} ${backgroundColor}`}>
        <div
          onClick={toggleDropdown}
          className={`${Styles['dropdown-container']} ${backgroundColor}`}>
          <Typography
            className={`button ${textColor}`}
            label={value} />
          <FontAwesomeIcon
            icon={open ? faChevronCircleUp : faChevronCircleDown}
            className={`${textColor}`} />
        </div>
        {
          open &&
          <div
            className={`${Styles['options-container']} ${backgroundColor}`}>
            {
              options.map(option => (
                <div
                  key={option}
                  onClick={() => {
                    toggleDropdown()
                    onOptionChange(option)
                  }}
                  style={{
                    padding: '12px 16px'
                  }}>
                  <Typography
                    label={option}
                    className={`${textColor}`} />
                </div>
              ))
            }
          </div>
        }
      </div>
      {
        open &&
        <div
          onClick={toggleDropdown}
          className={`${Styles.backdrop}`}>
        </div>
      }
    </>
  )
}

export default Dropdown