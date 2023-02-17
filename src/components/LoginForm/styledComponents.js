import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const CardContainer = styled.div`
  background-color: #ffffff;
  height: 60vh;
  width: 35vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const CompanyLogo = styled.img`
  height: 50px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const LabelName = styled.p`
  font-family: 'Roboto';
  margin-bottom: 0px;
`
export const InputBox = styled.input`
  height: 30px;
  margin-top: 0px;
  margin-bottom: 10px;
`
export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const CheckBox = styled.input`
  height: 25px;
`
export const LoginBtn = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  font-family: 'Roboto';
  border-radius: 5px;
  border-width: 0px;
  padding: 5px;
  margin-top: 10px;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  color: red;
`
