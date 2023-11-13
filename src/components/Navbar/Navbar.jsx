import styles from './navbar.module.css'
import { useNavigate } from 'react-router-dom';


function NavigationBar() {

    const navigateTo = useNavigate()

    return ( 

        <nav>
            <button onClick={()=>{navigateTo('/')}}>Games</button>
            <button onClick={()=>{navigateTo('/contact')}}>Contact Us</button>
        </nav>

     );
}

export default NavigationBar;