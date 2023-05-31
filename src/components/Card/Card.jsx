import styles from './Card.module.css'
import { ReactComponent as ArrowLeft } from './../../assets/arrow2.svg'
import { ReactComponent as ArrowRight } from './../../assets/arrow1.svg'
import { ReactComponent as DoubleArrow } from './../../assets/doubleArrow.svg'

const Card = ({ imageSrc, className }) => {
	return (
		<div className={className + ' ' + styles.card}>
			<div className={styles.slider}>
				<ArrowLeft />
				<img src={imageSrc} alt='Card' />
				<ArrowRight />
			</div>
			<div>
				<div>
					<p>Fuengirola - R3304693</p>
					<h5>Элитная вилла в стиле модерн</h5>
					<p>
						€4,195,000 <DoubleArrow />
					</p>
					<div>
						<span>Площадь: 300 м2</span>
						<span>Спальни: 5</span>
					</div>
					<p>Терраса: 25м2</p>
				</div>
			</div>
		</div>
	)
}

export default Card
