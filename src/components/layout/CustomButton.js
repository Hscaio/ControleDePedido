import styles from './CustomButton.module.css'

import { MdOutlineFindInPage } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
import { FaRegSave } from "react-icons/fa";
import { MdOutlineCancel, MdModeEdit, MdDelete  } from "react-icons/md";

function CustomButton({ text, icon, iconSize, onClick }){
    let styleIconSize = styles.icon_normal
    if (iconSize === 'small')
        styleIconSize = styles.icon_small

    let styleIcoMargin = styles.icon_margin
    if (!text)
        styleIcoMargin = ''

    return (
        <button className={`${styles.btn} ${styleIconSize} ${styleIcoMargin}`} onClick={onClick}>
            {icon === 'find' && <MdOutlineFindInPage />}
            {icon === 'addCustomer' && <IoPersonAdd />}
            {icon === 'save' && <FaRegSave />}
            {icon === 'cancel' && <MdOutlineCancel />}
            {icon === 'edit' && <MdModeEdit />}
            {icon === 'delete' && <MdDelete />}
            {text && <p>{text}</p>}
        </button>
    )
}

export default CustomButton