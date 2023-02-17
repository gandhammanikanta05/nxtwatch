import {FaMoon} from 'react-icons/fa'
import {HiUserCircle} from 'react-icons/hi'
import Cookies from 'js-cookie'
import {
  CompanyLogo,
  NavbarContainer,
  SecondPart,
  ThemeMode,
  Profile,
  LogoutBtn,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NavbarContainer>
      <CompanyLogo
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="company logo"
      />
      <SecondPart>
        <ThemeMode>
          <FaMoon />
        </ThemeMode>
        <Profile>
          <HiUserCircle />
        </Profile>
        <LogoutBtn onClick={onClickLogout}>Logout</LogoutBtn>
      </SecondPart>
    </NavbarContainer>
  )
}
export default Header
