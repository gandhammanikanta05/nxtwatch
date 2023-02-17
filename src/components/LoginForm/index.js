import {Component} from 'react'
import Cookies from 'js-cookie'
import {
  MainContainer,
  CardContainer,
  LogoContainer,
  CompanyLogo,
  FormContainer,
  LabelName,
  InputBox,
  CheckboxContainer,
  CheckBox,
  LoginBtn,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isPasswordShown: false,
    ShowError: false,
    ErrMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickCheckbox = () => {
    this.setState(prevState => ({isPasswordShown: !prevState.isPasswordShown}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = ErrMsg => {
    this.setState({ShowError: true, ErrMsg})
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {isPasswordShown, ShowError, ErrMsg} = this.state
    const passwordValue = isPasswordShown ? 'text' : 'password'
    return (
      <MainContainer>
        <CardContainer>
          <LogoContainer>
            <CompanyLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="company logo"
            />
          </LogoContainer>
          <FormContainer onSubmit={this.onSubmitLogin}>
            <LabelName htmlFor="username">USERNAME</LabelName>
            <InputBox
              id="username"
              type="input"
              placeholder="Username"
              onChange={this.onChangeUsername}
            />
            <LabelName htmlFor="password">PASSWORD</LabelName>
            <InputBox
              id="password"
              type={passwordValue}
              placeholder="Password"
              onChange={this.onChangePassword}
            />
            <CheckboxContainer onClick={this.onClickCheckbox}>
              <CheckBox id="checkbox" type="checkbox" />
              <LabelName htmlFor="checkbox">Show Password</LabelName>
            </CheckboxContainer>
            <LoginBtn type="submit">Login</LoginBtn>
            {ShowError && <ErrorMsg>`*${ErrMsg}`</ErrorMsg>}
          </FormContainer>
        </CardContainer>
      </MainContainer>
    )
  }
}

export default LoginForm
