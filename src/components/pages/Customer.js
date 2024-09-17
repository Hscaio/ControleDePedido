import styles from './Customer.module.css'
import LinkButton from '../layout/LinkButton'
import Search from '../layout/Search'
import Grid from '../layout/Grid'

function Customer(){
    return(
        <div className={styles.customer_container}>
            <div className={styles.title_container}>
                <h1>Clientes</h1>
                <LinkButton to='/product' icon='addCustomer' text='Novo Cliente'/>            
            </div>  
            <div className={styles.search_container}>
                <Search/>
            </div>
            <Grid/>
        </div>
    )
}

export default Customer