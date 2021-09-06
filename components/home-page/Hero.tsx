import Image from 'next/image'
import styles from '@/styles/hero.module.css'

const Hero: React.FC = () => {
    return(
        <section className={styles.hero}>
            <div className={styles.image}>
                <Image src='/images/site/me.jpg' alt="An Image showing Dayo" width={300} height={300}/>
            </div>
            <h1>{"Hi, I'm Dayo"}</h1>
            <p>I am a fullstack web Development </p>
        </section>
    )
}

export default Hero