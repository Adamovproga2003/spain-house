import styles from './Footer.module.css'
import { ReactComponent as FooterLogoIcon } from './../../assets/footerLogo.svg'
import { ReactComponent as FooterInstagramIcon } from './../../assets/footerInstagram.svg'
import { ReactComponent as FooterFacebookIcon } from './../../assets/footerFacebook.svg'
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div>
				<FooterLogoIcon />
			</div>
			<div>
				<FooterInstagramIcon />
				<FooterFacebookIcon />
			</div>
			<div>
				<p>© Все права защищены. Агентство недвижимости Spain House </p>
			</div>
		</footer>
	)
}

export default Footer
