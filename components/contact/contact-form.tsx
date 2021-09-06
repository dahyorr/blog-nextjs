import {useState, useEffect} from 'react'
import styles from '@/styles/contact-form.module.css';
import Notification from '@/components/ui/notification'
import { Message, RequestStatus, NotificationItem} from '@/types';

const sendContactData = async (contactDetails: Message) => {
    const response  = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(contactDetails),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    if(!response.ok){
        throw new Error(data.message || 'Something Went Wrong')
    }
}

const ContactForm: React.FC = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [requestStatus, setRequestStatus] = useState<RequestStatus>()
    const [requestError, setRequestError] = useState<string | undefined>()
    
    useEffect(() => {
        let timer: NodeJS.Timeout
        if (requestStatus === 'success' || requestStatus === 'error'){
            timer = setTimeout(() => {
                setRequestStatus(undefined)
                setRequestError(undefined)
            }, 3000)
        }
        return () => clearTimeout(timer)
    }, [requestStatus])

    const resetInput = () => {
        setMessage('') 
        setName('') 
        setEmail('') 
    }

    const onSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setRequestStatus('pending')
        try{
            await sendContactData({email, message, name})
            setRequestStatus('success')
            resetInput()
        }catch(err){
            const {message} = err as {message: string} 
            setRequestError(message)
            setRequestStatus('error')
        }
    }

    let notification: NotificationItem | undefined = undefined;
    if (requestStatus === 'pending'){
        notification ={
            status: 'pending',
            title: 'Sending Message...',
            message: 'Your message is on its way!'
        }
    }
    else if (requestStatus === 'success'){
        notification ={
            status: 'success',
            title: 'Success!',
            message: 'Message sent Successfully'
        }
    }
    else if (requestStatus === 'error'){
        notification ={
            status: 'error',
            title: 'Error!',
            message: requestError || ''
        }
    }

    return(
        <section className={styles.contact}>
            <h1>How can I help you</h1>
            <form className={styles.form} onSubmit={onSubmit}>
                <div className={styles.controls}>
                    <div className={styles.control}>
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div className={styles.control}>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" required value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                </div>
                <div className={styles.control}>
                    <label htmlFor="message">Your message</label>
                    <textarea rows={5} id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <div className={styles.actions}>
                    <button>Send Message</button>
                </div>
            </form>
            {notification && <Notification content={notification}/>}
        </section>
    )
}

export default ContactForm 