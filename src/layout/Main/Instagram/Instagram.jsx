import { ReactComponent as InstagramIcon } from './../../../assets/instagram.svg'
import styles from './Instagram.module.css'

import image1 from './../../../assets/image1.png'
import image2 from './../../../assets/image2.png'
import image3 from './../../../assets/image3.png'
import image4 from './../../../assets/image4.png'
import image5 from './../../../assets/image5.png'
import image6 from './../../../assets/image6.png'
import image7 from './../../../assets/image7.png'
import image8 from './../../../assets/image8.png'
import image9 from './../../../assets/image9.png'
import Button from '../../../components/Button/Button'
import Hr from '../../../components/Hr/Hr'

const Instagram = () => {
	return (
		<section className={styles.instagram}>
			<div>
				<div>
					<InstagramIcon />
				</div>
				<h5>Instagram</h5>
				<p>@realestate_spain_ekaterina</p>
			</div>
			<div className={styles.grid}>
				<img src={image1} alt='image1' />
				<img src={image2} alt='image2' />
				<img src={image3} alt='image3' />
				<img src={image4} alt='image4' />
				<img src={image5} alt='image5' />
				<img src={image6} alt='image6' />
				<img src={image7} alt='image7' />
				<img src={image8} alt='image8' />
				<img src={image9} alt='image9' />
			</div>
			<div>
				<Button>смотреть больше</Button>
			</div>

			<div>
				<Hr />
			</div>
		</section>
	)
}

export default Instagram
