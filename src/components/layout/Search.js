import styles from './Search.module.css'
import { FaSearch } from "react-icons/fa";

function Search(){
    return (
        <div className={styles.input_container}>
            <FaSearch className={styles.icon} />
            <input type="text" placeholder="Pesquisar..." className={styles.input_field} />
        </div>
    )
}

export default Search