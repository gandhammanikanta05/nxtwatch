import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import Header from '../Header'
import Navbar from '../Navbar'
import VideoDisplay from '../VideoDisplay'
import {
  HomeContainer,
  BottomSection,
  MainSection,
  PopupContainer,
  CompanyLogo,
  Note,
  SubscribeBtn,
  VideosSection,
} from './styledComponents'

class Home extends Component {
  state = {
    videosList: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/all?search='
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data.videos)
    const updatedData = data.videos.map(eachVideo => ({
      name: eachVideo.channel.name,
      profileImgUrl: eachVideo.channel.profile_image_url,
      id: eachVideo.id,
      publishedAt: eachVideo.published_at,
      thumbnailUrl: eachVideo.thumbnail_url,
      title: eachVideo.title,
      viewCount: eachVideo.view_count,
    }))
    this.setState({videosList: updatedData})
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    const {videosList} = this.state
    console.log(videosList)
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
            <VideosSection>
              {videosList.map(eachVideo => (
                <VideoDisplay key={eachVideo.id} videoDetails={eachVideo} />
              ))}
            </VideosSection>
          </MainSection>
        </BottomSection>
      </HomeContainer>
    )
  }
}

export default Home
