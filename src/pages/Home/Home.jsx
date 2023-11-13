import styles from './home.module.css'


import { collection , getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import { useEffect  , useState} from 'react';
import GameCard from '../../components/GameCard/GameCard';
import NavigationBar from '../../components/Navbar/Navbar';
function HomePage() {

    const [allGames , setAllGames] = useState(null)
    let language = navigator.language || navigator.userLanguage
    if(language === 'en-US')language = 'en'
    const [games, setGames] = useState(null)

    


    //Fetching Games
    useEffect(()=>{
        if(!localStorage.getItem('games')){
        let localGames = {}
        async function getGameDocuments(){
            console.log('fetching games')
            const querySnapshot = await getDocs(collection(db, "games"));
            querySnapshot.forEach((doc) => {
            localGames = {...localGames , [doc.id]:doc.data()}
            });
            setAllGames(localGames)
        }
 
        getGameDocuments()
        }else{
            setAllGames(JSON.parse(localStorage.getItem('games')))
        }
       
    },[])

    //Setting current games based on the selected language
    useEffect(()=>{
        if(allGames){ 
            setGames(allGames[language])
         } 
    },[allGames])

    

    return ( 
        <>
<NavigationBar/>
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
              
               {window.innerWidth >='961' ? 
               <>
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3203316538062198"
                    crossOrigin="anonymous"></script>

                    <ins className="adsbygoogle"
                        style={{display:'block',width:'100%',height:'100%'}}
                        data-ad-client="ca-pub-3203316538062198"
                        data-ad-slot="2061633119"
                        data-ad-format="auto"
                        data-full-width-responsive="true">
                    </ins>
                    <script>
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    </script>
                </>
                :
                <>
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3203316538062198"
                    crossOrigin="anonymous"></script>
                    <ins className="adsbygoogle"
                        style={{display:'block',width:'100%',height:'100%'}}
                        data-ad-client="ca-pub-3203316538062198"
                        data-ad-slot="5426959211"
                        data-ad-format="auto"
                        data-full-width-responsive="true">
                    </ins>
                    <script>          
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    </script>
                </>
                }


            </section>
            
        </div>
        </>
    );

}

export default HomePage;