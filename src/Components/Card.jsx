import styles from "./Card.module.css"

const Card = ({nombre, bandaFavorita}) => {
    return (
        <div className={styles.card}>
            <h1>Hola {nombre}!</h1>
            <h3>Tu banda favorita es: {bandaFavorita}</h3>
        </div>
    )
}

export default Card
