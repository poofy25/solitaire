import { useEffect } from 'react';
import styles from './game.module.css'

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function GamePage() {

const params = useParams()
const navigateTo = useNavigate()
let language = navigator.language || navigator.userLanguage || 'en'
console.log(language)
if(language.toLowerCase().includes('en') || !(language.toLowerCase().includes('ru')) )language = 'en'
if(!localStorage.getItem('games'))navigateTo('/')
const currentGameData = JSON.parse(localStorage.getItem("games"))[language][params.id]
console.log('Loading URL: ' , currentGameData.url)



useEffect(()=>{

    document.title = currentGameData.name
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = currentGameData.logo;
},[])

    if(true){
    return ( 

        <div className={styles.gamePage}>

            <section className={styles.gameSection}>
                <iframe src={currentGameData.url}/>
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

    );
    }else{
        return(
            <h1>Loading</h1>
        )
    }
}

export default GamePage;