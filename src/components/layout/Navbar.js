import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'

function Navbar(){
    const logo = ''

    return (        
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'><img src={logo} alt='Logo'></img></Link> 
                <ul className={styles.list}>
                    <li className={styles.item}><Link to='/'>Pedidos</Link></li>
                    <li className={styles.item}><Link to='/customer'>Clientes</Link></li>                    
                    <li className={styles.item}><Link to='/product'>Produtos</Link></li>
                    <li className={styles.item}><Link to='/status'>Status</Link></li>                
                </ul>                                                                           
            </Container>
        </nav>
    )
}

export default Navbar