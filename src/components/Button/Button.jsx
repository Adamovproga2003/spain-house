import styles from './Button.module.css'
const Button = ({ outline, children }) => {
	return (
		<button className={outline ? styles.outline : styles.button}>
			{children}
		</button>
	)
}

export default Button
