import styles from './CustomButton.module.css'

import { MdOutlineFindInPage } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
import { FaRegSave } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

function CustomButton({ text, icon }){
    return (
        <button className={styles.btn}>
            {icon === 'find' && <MdOutlineFindInPage />}
            {icon === 'addCustomer' && <IoPersonAdd />}
            {icon === 'save' && <FaRegSave />}
            {icon === 'cancel' && <MdOutlineCancel />}
            <p>{text}</p>
        </button>
    )
}

export default CustomButton