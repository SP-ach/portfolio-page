import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <h3 id='ht'>
        {homepage ? (<a href={homepage} className='link'>{title}</a>) : (title)}
      </h3>
      <div id='hn'>
      <Navbar />
      </div>
    </header>
  )
}

export default Header
