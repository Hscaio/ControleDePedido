import styles from './Customer.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect} from 'react'

import Input from '../layout/Input'
import CustomButton from '../layout/CustomButton'
import LinkButton from '../layout/LinkButton'
import Container from '../layout/Container'
import { BiTab, BiTrim } from 'react-icons/bi'

function Customer(){
    const {id} = useParams()
    const [customer, setCustomer] = useState({})
    const [docMask, setDocMask] = useState('9?99.999.999-99999')

    if (id != 'new'){

    }

    function submit(e){
        e.preventDefault()
        console.log('submit')
    }

    function handleChangeDocument(e){
        const inputValue = e.target.value.replace(/\D/g, "");

        if (inputValue.replace(/\D/g, "").length > 11) {
            setDocMask("99.999.999/9999-99");
        } else {
            setDocMask("999.999.999-99999");
        }       

        setCustomer({...customer, [e.target.name]: e.target.value})
    }

    function handleChange(e){
        setCustomer({...customer, [e.target.name]: e.target.value})
    }

    return (
        <>
            <div className={styles.customer_container}>
                <h1>Cadastro de cliente</h1>
                <form className={''} onSubmit={submit}>               
                    <Input 
                        type="text" 
                        placeholder="Insira o nome do cliente" 
                        name="name" 
                        text="Nome do cliente"
                        handleOnChange={handleChange}
                        value={customer.name ? customer.name : ''}
                    />
                    <Container customClass='start'>
                        <Input 
                            type="text" 
                            placeholder="CPF/CNPJ" 
                            name="document" 
                            text="CPF/CNPJ"
                            handleOnChange={handleChangeDocument}
                            value={customer.document ? customer.document : ''}
                            mask={docMask}
                            maskChar=""
                            customStyle={{ width: '150px', marginRight: '10px' }}
                        />                          
                        <Input 
                            type="text" 
                            placeholder="(99) 99999-9999" 
                            name="phone" 
                            text="Telefone"
                            handleOnChange={handleChange}
                            value={customer.phone ? customer.phone : ''}
                            mask='(99) 99999-9999'
                            customStyle={{ width: '150px', marginRight: '10px' }}
                        />                            
                        <Input 
                            type="text" 
                            placeholder="(99) 99999-9999" 
                            name="mobile" 
                            text="Celular"
                            handleOnChange={handleChange}
                            value={customer.mobile ? customer.mobile : ''}
                            mask='(99) 99999-9999'
                            customStyle={{ width: '150px', marginRight: '10px' }}
                        />      
                        <Input 
                            type="text" 
                            placeholder="dd/mm/yyyy" 
                            name="birthDate" 
                            text="Data de Nascimento"
                            handleOnChange={handleChange}
                            value={customer.birthDate ? customer.birthDate : ''}
                            mask='99/99/9999'
                            customStyle={{ width: '200px', marginRight: '10px' }}
                        />                                                
                    </Container>   
                    <Input 
                        type="text" 
                        placeholder="Insira o endereço do cliente" 
                        name="street" 
                        text="Endereço"
                        handleOnChange={handleChange}
                        value={customer.street ? customer.street : ''}
                    />                    
                    <Container customClass='start'>
                        <Input 
                            type="text" 
                            placeholder="Sem número" 
                            name="number" 
                            text="Número"
                            handleOnChange={handleChange}
                            value={customer.number ? customer.number : ''}
                            customStyle={{ width: '15%', marginRight: '1%' }}
                        />                         
                        <Input 
                            type="text" 
                            placeholder="Bairro" 
                            name="neighborhood" 
                            text="Bairro"
                            handleOnChange={handleChange}
                            value={customer.neighborhood ? customer.neighborhood : ''}
                            customStyle={{ width: '31%', marginRight: '1%' }}
                        /> 
                        <Input 
                            type="text" 
                            placeholder="CEP" 
                            name="postalCode" 
                            text="CEP"
                            handleOnChange={handleChange}
                            value={customer.postalCode ? customer.postalCode : ''}
                            mask='99999-999'
                            customStyle={{ width: '10%', marginRight: '1%' }}
                        />                              
                        <Input 
                            type="text" 
                            placeholder="Cidade" 
                            name="city" 
                            text="Cidade"
                            handleOnChange={handleChange}
                            value={customer.city ? customer.city : ''}
                            customStyle={{ width: '25%', marginRight: '1%' }}
                        />   
                        <Input 
                            type="text" 
                            placeholder="Estado" 
                            name="state" 
                            text="Estado"
                            handleOnChange={handleChange}
                            value={customer.state ? customer.state : ''}
                            customStyle={{ width: '10%' }}
                        />                           
                    </Container>
                    <div className={styles.button_container}>
                        <CustomButton text='Salvar' icon='save'/>
                        <LinkButton text='Cancelar' icon='cancel' to='/customers'/>
                    </div>                      
                </form>  
            </div>
        </>
    )
}

export default Customer