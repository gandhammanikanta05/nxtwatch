import styled from 'styled-components'

export const NavbarContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 10vh;
`
export const CompanyLogo = styled.img`
  height: 50px;
`
export const SecondPart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ThemeMode = styled.button`
  font-size: 30px;
  border-width: 0px;
  background-color: transparent;
  margin-left: 10px;
  margin-right: 10px;
`
export const Profile = styled.div`
  font-size: 35px;
  margin-left: 10px;
  margin-right: 10px;
`
export const LogoutBtn = styled.button`
  border-radius: 5px;
  border-width: 0px;
  color: #3b82f6;
  border-color: #3b82f6;
  border-width: 2px;
  font-family: 'Roboto';
  font-weight: bold;
  padding: 10px;
  background-color: transparent;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
`
