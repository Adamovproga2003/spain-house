import ViewSector from '../Main/ViewSector/desktop/ViewSector'
import ViewSectorMobile from '../Main/ViewSector/mobile/ViewSectorMobile'
import { ReactComponent as LogoIcon } from './../../assets/logo.svg'
import { ReactComponent as MenuIcon } from './../../assets/menu.svg'
import { ReactComponent as ArrowIcon } from './../../assets/arrow.svg'
import styles from './Header.module.css'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.navigation}>
				<div>
					<LogoIcon />
				</div>
				<div>
					<MenuIcon />
				</div>
			</div>
			<div className={styles.md}>
				<ViewSector />
			</div>
			<div className={styles.xs}>
				<ViewSectorMobile />
			</div>
			<div className={styles.xs + ' ' + styles.arrow}>
				<ArrowIcon />
			</div>
		</header>
	)
}

export default Header
