import styles from './adBlockPopup.module.css'
import adBlockIcon from '/src/assets/ad-blocker.png'


function AdBlockPopUp(props) {

    const areAdsRunning = props.areAdsRunning
     console.log(areAdsRunning)

    if(areAdsRunning){
    return ( 
        <div className={styles.adBlock}>
            <div className={styles.content}>
                <img src={adBlockIcon}/>
                <h1>YOU ARE USING AN AD BLOCKER</h1>
                <h2>The games will start <b style={{fontWeight:'bolder',color:'rgb(0, 255, 0)'}}>faster</b> without an Ad Blocker</h2>
                <h2>Please allow <b style={{fontWeight:'bolder'}}>{window.location.hostname }</b> to show ads <br/> and to support our work.</h2>
                <button onClick={()=>{props.setAreAdsRunning(false)}}>Close</button>
            </div>
        </div>


     );
    }
}

export default AdBlockPopUp;