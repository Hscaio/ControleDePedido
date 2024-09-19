import styles from './TextArea.module.css'

function TextArea({type, text, name, placeholder, handleOnChange, value, customStyle}){
    return (
        <div className={styles.form_control} style={customStyle}>
            <label htmlFor={name}>{text}:</label>
            <textarea 
                type={type} 
                name={name} 
                id={name} 
                placeholder={placeholder} 
                onChange={handleOnChange}
                value={value}
            />
        </div>        
    )
}

export default TextArea