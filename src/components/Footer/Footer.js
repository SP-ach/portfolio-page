import './Footer.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'

const Footer = () => (
  <footer className='footer'>
    <div className='footIcon'>
    <GitHubIcon /> 
    <LinkedInIcon />
    <TwitterIcon/>
    </div>
    <br />
    <a
      href='#'
      className='link footer__link'
    >
      ©2023 S.P Acharya All rights reserved
    </a>
    

  </footer>
)

export default Footer
