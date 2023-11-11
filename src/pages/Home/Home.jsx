import styles from './home.module.css'


import { collection , getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import { useEffect  , useState} from 'react';
import GameCard from '../../components/GameCard/GameCard';

function HomePage() {

    const [allGames , setAllGames] = useState(null)
    const [language , setLanguage] = useState('en')
    const [games, setGames] = useState(null)


    //Fetching Games
    useEffect(()=>{

        let localGames = {}
        async function getGameDocuments(){
            const querySnapshot = await getDocs(collection(db, "games"));
            querySnapshot.forEach((doc) => {
            localGames = {...localGames , [doc.id]:doc.data()}
            });
            setAllGames(localGames)
        }
        getGameDocuments()
       
    },[])

    //Setting current games based on the selected language
    useEffect(()=>{
        if(allGames){ 
            sessionStorage.setItem('games', JSON.stringify(allGames[language]))
            setGames(allGames[language])
         } 
    },[allGames])


    return ( 

        <div className={styles.homePage}>

            <section className={styles.gamesSection}>
                {games ? 
                <div>
                    {Object.entries(games).map(([key, value]) => {
                        return <GameCard key={key} name={key} value={value}/>
                    })}
                </div>
                : 'Loading'}

            </section>

            <section className={styles.adSection}>
              <iframe width='100%' height='100%'/>
            </section>
            
        </div>

    );

}

export default HomePage;