import { useState } from 'react'
import styles from  './Form.module.css'
import Card from './Card'
import ErrorMessage from './ErrorMessage'

const Form = () => {
    const [bandaFav, setBandaFav ] = useState({
        nombre: '',
        bandaFavorita: ''
    })


    const [mostrarBanda, setMostrarBanda]  =  useState(false)
    const [error, setError]  =  useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        if(bandaFav.nombre.trim().length > 3 && bandaFav.bandaFavorita.trim().length > 6) {
            setMostrarBanda(true); 
            setError(false);
        } else {
            setError(true);
        }
    }

    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit} >
                <label>Nombre</label>
                <input type="text" placeholder='Ingresa tu Nombre..' onChange={(e)  => setBandaFav({...bandaFav, nombre: e.target.value})} />
                <label>Banda Favorita</label>
                <input type="text" placeholder='Ingresa tu Banda Favorita' onChange={(e)  => setBandaFav({...bandaFav, bandaFavorita: e.target.value})} />
                <button className={styles.formBtn}>Enviar</button>
            </form>

            {mostrarBanda && <Card nombre={bandaFav.nombre}  bandaFavorita={bandaFav.bandaFavorita} />}
            {error && <ErrorMessage/>}

        </div>
    )
}

export default Form
