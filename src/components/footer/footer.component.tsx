import LinkedInLogo from '../../images/linkedin.png';
import Awards from '../../images/award.png'
import './footer.styles.css';

function Footer() {

  return (
    <div className="footer">
      <p className="text-l text-white font-semibold py-2">
        Get in touch:{' '}
        <a href="mailto:hello@gabbgroup.co" target="_blank" rel="noreferrer"><b>hello@gabbgroup.co</b></a>
      </p>
      <a href="https://www.linkedin.com/company/gabb-group/" target="_blank" rel="noreferrer">
        <img id="linkedin" src={LinkedInLogo} alt="logo" />
      </a>
      <img id='awards' src={Awards} alt="awards" />
    </div>
  )
}

export default Footer;