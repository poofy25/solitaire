import styles from './contact.module.css'
import emailjs from '@emailjs/browser';
function ContactPage() {


     const onSubmit = (e)=>{
        e.preventDefault()
        console.log(e.target)
        console.log(Object.fromEntries(new FormData(e.target)));
        console.log(document.getElementById('name').value)
        const params = {
            from_name:document.getElementById('name').value,
            from_email:document.getElementById('email').value,
            message:document.getElementById('message').value
        }

        emailjs.send('service_0bd78na', 'template_7e7dl83', params , 'hxEA7YO3spPj-AN77')
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);

            e.target.reset()

        }, function(error) {
           console.log('FAILED...', error);
        });


     }





    return ( 

    <div className={styles.contactPage}>
        <h1>CONTACT US </h1>
        <form onSubmit={(e)=>{onSubmit(e)}}>

        
            <label >Name:
        
            <input id='name' placeholder='Enter your name' required type="text" />
            </label>
            <label >Email address:
            <input id='email' placeholder='Enter your email' required type='email'/>
            </label>
            <label >Message:
            
            <textarea id='message' required placeholder='Enter your message'></textarea>
            </label>
            <input className={styles.submit} type="submit" value="Send" />
        </form>


    </div>

     );
}

export default ContactPage;