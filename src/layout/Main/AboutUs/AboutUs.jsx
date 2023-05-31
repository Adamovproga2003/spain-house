import aboutUs from './../../../assets/about-us.png'
import styles from './AboutUs.module.css'
const AboutUs = () => {
	return (
		<section className={styles.aboutUs}>
			<div>
				<h1>О нас</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt
					congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu,
					feugiat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					tincidunt congue ligula in rutrum. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Sed tincidunt congue ligula n rutrum.
					Morbi nec lacus condimentum, hendrerit mi eu, feugiat. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue
					ligula in rutrum.
				</p>
				<h5>будем рады помочь вам!</h5>
			</div>
			<div>
				<div>
					<img src={aboutUs} alt='About us' width={367} height={499} />
				</div>
			</div>
		</section>
	)
}

export default AboutUs
