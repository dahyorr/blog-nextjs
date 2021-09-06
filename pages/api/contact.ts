import { NextApiRequest, NextApiResponse, NextApiHandler } from "next"
import {MongoClient} from "mongodb"
import {Message} from '@/types'


const handler: NextApiHandler = async (req, res) => {
    if(req.method === "POST"){
        const {email, name, message} = req.body as Message
        if(
            !email || 
            !email.includes('@') || 
            !name || 
            name.trim() === '' || 
            !message || 
            message.trim() === '' 
            ){
                return res.status(422).json({
                    message: 'Invalid Input'
                }) 
            }
        const newMessage = {email, name, message}

        let client
        try{
            client = await MongoClient.connect(`${process.env.mongoUri}`)

        }catch(err){
            return res.status(500).json({message: 'An Error Occured'})
        }
        
        const db = client.db()
        try{
            const result = await db.collection('messages').insertOne(newMessage)
        }catch(err){
            client.close()
            return res.status(500).json({message: 'An Error Occured'})
        }
        client.close()
        return res.status(201).json({message: 'Message Saved Successfully'})
    }
    else return res.status(405).json({message: 'Method Not Allowed'})
}

export default handler