import styles from './home.module.css'


import { collection , getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import { useEffect  , useState} from 'react';
import GameCard from '../../components/GameCard/GameCard';
import NavigationBar from '../../components/Navbar/Navbar';
import { TailSpin } from 'react-loader-spinner';
function HomePage() {
    const [allGames , setAllGames] = useState(null)
    let language = navigator.language || navigator.userLanguage || 'en'
    if(language.toLowerCase().includes('en') || !(language.toLowerCase().includes('ru')) )language = 'en'
    const [games, setGames] = useState(null)


    //Fetching Games
    useEffect(()=>{
        if(!JSON.parse(sessionStorage.getItem('games'))){
        let localGames = {}
        async function getGameDocuments(){
            const querySnapshot = await getDocs(collection(db, "games"));
            querySnapshot.forEach((doc) => {
            localGames = {...localGames , [doc.id]:doc.data()}
            });
            sessionStorage.setItem('games', JSON.stringify(localGames))
            localStorage.setItem('games', JSON.stringify(localGames))
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
                :
                <TailSpin
                height="80"
                width="80"
                color="#f7f7f7"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />
                }

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