import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {GrGamepad} from 'react-icons/gr'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  NavbarContainer,
  TopSection,
  EachSection,
  Label,
  BottomSection,
  SmallHeading,
  SocialmediaSection,
  Img,
  Description,
} from './styledComponents'

const Navbar = () => (
  <NavbarContainer>
    <TopSection>
      <EachSection>
        <AiFillHome />
        <Label>Home</Label>
      </EachSection>
      <EachSection>
        <AiFillFire />
        <Label>Trending</Label>
      </EachSection>
      <EachSection>
        <GrGamepad />
        <Label>Gaming</Label>
      </EachSection>
      <EachSection>
        <MdPlaylistAdd />
        <Label>Saved videos</Label>
      </EachSection>
    </TopSection>
    <BottomSection>
      <SmallHeading>CONTACT US</SmallHeading>
      <SocialmediaSection>
        <Img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
        />
        <Img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter logo"
        />
        <Img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="linked in logo"
        />
      </SocialmediaSection>
      <Description>
        Enjoy! Now to see your channels and recommondations!
      </Description>
    </BottomSection>
  </NavbarContainer>
)

export default Navbar
