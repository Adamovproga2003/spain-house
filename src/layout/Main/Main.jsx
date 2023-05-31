import AboutUs from './AboutUs/AboutUs'
import styles from './Main.module.css'
import Recommend from './Recommend/Recommend'

const Main = () => {
	return (
		<main className={styles.main}>
			<AboutUs />
			<Recommend />
		</main>
	)
}

export default Main
