import styles from './game.module.css'

import { useParams } from 'react-router-dom';

function GamePage() {

const params = useParams()
let language = navigator.language || navigator.userLanguage
if(language === 'en-US')language = 'en'

const currentGameData = JSON.parse(localStorage.getItem("games"))[language][params.id]
console.log('Loading URL: ' , currentGameData.url)
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