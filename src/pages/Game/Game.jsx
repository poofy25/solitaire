import { useEffect } from 'react';
import styles from './game.module.css'

import { collection , getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import AdBlockPopUp from '../../components/AdBlockPopup/AdBlockPopup';
import { useDetectAdBlock } from 'adblock-detect-react';
import { useState } from 'react';

function GamePage() {

const params = useParams()
const navigateTo = useNavigate()
let language = navigator.language || navigator.userLanguage || 'en'
console.log(language)
if(language.toLowerCase().includes('en') || !(language.toLowerCase().includes('ru')) )language = 'en'

const currentGameData = JSON.parse(localStorage.getItem("games"))?.[language]?.[params.id]



const[areAdsRunning , setAreAdsRunning] = useState(null)
const detectedAdBlock = useDetectAdBlock()

useEffect(()=>{
console.log(detectedAdBlock)
if(detectedAdBlock)setAreAdsRunning(true)
if(!detectedAdBlock)setAreAdsRunning(false)

},[detectedAdBlock])



useEffect(()=>{
    
    if(!JSON.parse(localStorage.getItem("games"))){
        console.log('Fetching games')


        let localGames = {}
        async function getGameDocuments(){
            const querySnapshot = await getDocs(collection(db, "games"));
            querySnapshot.forEach((doc) => {
            localGames = {...localGames , [doc.id]:doc.data()}
            });
            sessionStorage.setItem('games', JSON.stringify(localGames))
            localStorage.setItem('games', JSON.stringify(localGames))
            console.log(window.location.href)
            navigateTo(`/game/${JSON.parse(localStorage.getItem("games"))?.[language]?.[params.id]?.name}`)
        }
 
        getGameDocuments()















    }else{
        document.title = currentGameData?.name
        var link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        link.href = currentGameData?.logo;
    }
},[])

    if(true){
    return ( 
        <>
<AdBlockPopUp setAreAdsRunning={setAreAdsRunning} areAdsRunning={areAdsRunning} />
        <div className={styles.gamePage}>

            <section className={styles.gameSection}>
                <iframe src={currentGameData?.url}/>
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
    }else{
        return(
            <h1>Loading</h1>
        )
    }
}

export default GamePage;