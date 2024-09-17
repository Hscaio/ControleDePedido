import {Link} from 'react-router-dom'
import styles from './LinkButton.module.css'
import CustomButton from './CustomButton'

function LinkButton({to, text, icon}){
    return(
        <Link to={to} className={styles.link}>
            <CustomButton text={text} icon={icon}/>
        </Link>
    )
}

export default LinkButton