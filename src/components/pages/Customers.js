import styles from './Customers.module.css'
import LinkButton from '../layout/LinkButton'
import Search from '../layout/Search'
import GridRow from '../layout/GridRow'

function Customers(){
    function onEdit(id){

    }

    function onDelete(id){

    }    

    return(
        <div className={styles.customer_container}>
            <div className={styles.title_container}>
                <h1>Clientes</h1>
                <LinkButton to='/customer/new' icon='addCustomer' text='Novo Cliente'/>            
            </div>  
            <div className={styles.search_container}>
                <Search/>
            </div>
            <GridRow 
                type='title' 
                dataCells={[
                    {value:'Nome',width:'33%'},
                    {value:'Endereço',width:'33%'},
                    {value:'Bairro',width:'33%'},
                    {value:'Celular',width:'34%'}
                ]}
            />
            <GridRow 
                type='row' 
                dataCells={[
                    {value:'Caio',width:'33%'},
                    {value:'Rua',width:'33%'},
                    {value:'Centro',width:'33%'},
                    {value:'99 99999-9999',width:'34%'}
                ]}
                onEdit={onEdit}
                onDelete={onDelete}
            />
            <GridRow 
                type='row' 
                dataCells={[
                    {value:'Nome',width:'33%'},
                    {value:'Endereço',width:'33%'},
                    {value:'Bairro',width:'33%'},
                    {value:'Celular',width:'34%'}
                ]}
                onEdit={onEdit}
                onDelete={onDelete}
            />
            <GridRow 
                type='row' 
                dataCells={[
                    {value:'Nome',width:'33%'},
                    {value:'Endereço',width:'33%'},
                    {value:'Bairro',width:'33%'},
                    {value:'Celular',width:'34%'}
                ]}
                onEdit={onEdit}
                onDelete={onDelete}
            />
            <GridRow 
                type='row' 
                dataCells={[
                    {value:'Nome',width:'33%'},
                    {value:'Endereço',width:'33%'},
                    {value:'Bairro',width:'33%'},
                    {value:'Celular',width:'34%'}
                ]}
                onEdit={onEdit}
                onDelete={onDelete}
            />                        
        </div>
    )
}

export default Customers