import styles from './game.module.css'

import { useParams } from 'react-router-dom';

function GamePage() {

const params = useParams()
const currentGameData = JSON.parse(sessionStorage.getItem("games"))[params.id]

    if(true){
    return ( 

        <div className={styles.gamePage}>

            {/* <section className={styles.gameSection}> */}
                <iframe src={currentGameData.url}/>
            {/* </section>

            <section className={styles.adSection}>AD SECTION</section> */}
            
        </div>

    );
    }else{
        return(
            <h1>Loading</h1>
        )
    }
}

export default GamePage;