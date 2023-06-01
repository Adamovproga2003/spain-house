import Card from '../../../components/Card/Card'
import styles from './Recommend.module.css'

import card1 from './../../../assets/card1.png'
import card2 from './../../../assets/card2.png'
import card3 from './../../../assets/card3.png'
import card4 from './../../../assets/card4.png'

import mobileCard1 from './../../../assets/mobileCard1.png'
import mobileCard2 from './../../../assets/mobileCard2.png'
import mobileCard3 from './../../../assets/mobileCard3.png'
import mobileCard4 from './../../../assets/mobileCard4.png'
import Button from '../../../components/Button/Button'
import Hr from '../../../components/Hr/Hr'

const Recommend = () => {
	return (
		<section>
			<div className={styles.recommendHeader}>
				<h1>Рекомендуемые объекты</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt
					congue ligula in rutrum. Morbi ne lacus condimentum, hendrerit mi eu,
				</p>
			</div>
			<div className={styles.gridTile}>
				<Card className={styles.card1} imageSrc={card1} />
				<Card className={styles.card2} imageSrc={card2} />
				<Card className={styles.card3} imageSrc={card3} />
				<Card className={styles.card4} imageSrc={card4} />
			</div>
			<div className={styles.gridTileMobile}>
				<Card className={styles.card1} imageSrc={mobileCard1} />
				<Card className={styles.card2} imageSrc={mobileCard2} />
				<Card className={styles.card3} imageSrc={mobileCard3} />
				<Card className={styles.card4} imageSrc={mobileCard4} />
			</div>

			<div className={styles.allCatalog}>
				<Button>весь каталог</Button>
			</div>

			<Hr />
		</section>
	)
}

export default Recommend
