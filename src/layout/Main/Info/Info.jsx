import styles from './Infro.module.css'
import infoImage from './../../../assets/info.png'
import Button from './../../../components/Button/Button'
const Info = () => {
	return (
		<section className={styles.info}>
			<div>
				<img src={infoImage} alt='infoImage' />
			</div>
			<div>
				<h1>Екатерина Кузьмина</h1>
				<p>
					Основатель компании <strong>Spain House</strong>, эксперт по
					недвижимости
				</p>
				<p>
					Планируете ли вы переехать в Марбелью или купить дом для отдыха, мы в
					3SA Estate внесем решающий вклад, поставив ваши уникальные потребности
					в центр внимания.
				</p>
				<div>
					<span>LanguageS: RUSSIAN, English, Spanish. </span>
				</div>
				<div>
					<Button outline>контакты</Button>
				</div>
			</div>
		</section>
	)
}

export default Info
