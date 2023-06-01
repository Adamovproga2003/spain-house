import AboutUs from './AboutUs/AboutUs'
import Info from './Info/Info'
import Instagram from './Instagram/Instagram'
import styles from './Main.module.css'
import Recommend from './Recommend/Recommend'

const Main = () => {
	return (
		<main className={styles.main}>
			<AboutUs />
			<Recommend />
			<Instagram />
			<Info />
		</main>
	)
}

export default Main
