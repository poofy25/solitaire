import styles from './gameCard.module.css'
import { useNavigate } from 'react-router-dom'

function GameCard(props) {

    const name = props.name
    const data = props.value
    const navigateTo = useNavigate()
    if(data){
    return ( 

        <button className={styles.gameCard} onClick={()=>{navigateTo(`/game/${name}`)}}>
           <img src={data.logo}/>
        </button>

     );
    }
}

export default GameCard;