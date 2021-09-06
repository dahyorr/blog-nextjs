import ContactForm from '@/components/contact/contact-form'
import type { NextPage } from 'next'
import Head from 'next/head'


const Contact: NextPage = () => {
  return <>
  	<Head>
			<meta name="description" content="Send your messages"/>
			<title>{"Contact Me"}</title>
		</Head>
    <ContactForm/>
  </>
}

export default Contact
