import styles from './Input.module.css'
import InputMask from "react-input-mask";

function Input({type, text, name, placeholder, handleOnChange, value, mask, maskChar, customStyle}){

    return(
        <div className={styles.form_control} style={customStyle}>
            <label htmlFor={name}>{text}:</label>
            <InputMask 
                type={type} 
                name={name} 
                id={name} 
                placeholder={placeholder} 
                onChange={handleOnChange}
                value={value}
                mask={mask}
                maskChar={maskChar}/>
        </div>
    )
}

export default Input