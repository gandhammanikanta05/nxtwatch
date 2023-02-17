import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import Header from '../Header'
import Navbar from '../Navbar'
import {
  HomeContainer,
  BottomSection,
  MainSection,
  PopupContainer,
  CompanyLogo,
  Note,
  SubscribeBtn,
} from './styledComponents'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <HomeContainer>
      <Header />
      <BottomSection>
        <Navbar />
        <MainSection>
          <Popup
            modal
            trigger={
              <button type="button" className="trigger-button">
                Get Premium
              </button>
            }
            position="center right"
          >
            <PopupContainer>
              <CompanyLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="company logo"
              />
              <Note>Buy Nxt Watch Premium prepaid plans with UPI</Note>
              <SubscribeBtn>GET IT NOW</SubscribeBtn>
            </PopupContainer>
          </Popup>
        </MainSection>
      </BottomSection>
    </HomeContainer>
  )
}

export default Home
