import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Styles from './SearchInput.module.css'
import { useGetStyles } from '../../ThemeProvider'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons' 
import { ChangeEvent } from 'react'

type Props = {
  placeholder: string
  onQueryChange: (query: string) => void
}

const SearchInput: React.FC<Props> = ({
  placeholder,
  onQueryChange
}) => {

  const { textColor, backgroundColor } = useGetStyles()



  return (
    <div
      className={`${Styles.container} ${backgroundColor}`}>
      <FontAwesomeIcon 
        icon={faMagnifyingGlass}
        className={`${textColor}`}/>
      <input
        type='text'
        placeholder={placeholder}
        className={`${textColor} ${backgroundColor}`}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onQueryChange(e.target.value)}/>
    </div>
  )
}

export default SearchInput