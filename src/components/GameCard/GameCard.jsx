import styles from './gameCard.module.css'
import { useNavigate } from 'react-router-dom'

function GameCard(props) {

    const name = props.name
    const data = props.value
    const navigateTo = useNavigate()
    if(data){
    return ( 

        <a className={styles.gameCard} href={`/game/${name}`} target='_blank'>
           <img src={data.logo}/>
           <p>{data.name}</p>
        </a>

     );
    }
}

export default GameCard;