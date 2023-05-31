import styles from './ViewSector.module.css'
import view from '../../../../assets/view.png'
const ViewSector = () => {
	return (
		<div className={styles.viewSector}>
			<div className={styles.viewText}>
				<h1>Spain House</h1>
				<p>
					РАССКАЖИТЕ НАМ, ЧТО ТАКОЕ ЖИЗНЬ ВАШЕЙ МЕЧТЫ, И МЫ НАЙДЕМ ЕЕ ДЛЯ ВАС
				</p>
			</div>
			<div className={styles.viewGradient}>
				<img src={view} alt='view' />
			</div>
		</div>
	)
}

export default ViewSector
