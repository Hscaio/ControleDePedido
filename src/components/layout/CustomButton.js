import styles from './CustomButton.module.css'

import { MdOutlineFindInPage } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";

function CustomButton({ text, icon }){
    return (
        <button className={styles.btn}>
            {icon === 'find' && <MdOutlineFindInPage />}
            {icon === 'addCustomer' && <IoPersonAdd />}
            <p>{text}</p>
        </button>
    )
}

export default CustomButton