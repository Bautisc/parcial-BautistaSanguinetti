import React from 'react'
import styles from "./Card.module.css"

const Card = () => {
    return (
        <div className={styles.card}>
            <h1>Hola!</h1>
            <p>Soy una tarjeta.</p>
        </div>
    )
}

export default Card
