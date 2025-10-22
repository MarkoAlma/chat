import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "./firebaseApp";

export const addMessage = async (message) =>{
    try {
        const docRef = collection(db, "messages")
        await addDoc(docRef, message)
    } catch (e) {
        console.log(e);
    }
}

export const readMessages = (setMessages)=> {
    const collectionRef = collection(db, "messages")
    const q = query(collectionRef, orderBy("timestamp"))
    const unsubscribe = onSnapshot(q, (snapshot)=> {
        const messagesArray = snapshot.docs.map((doc)=> 
            ({id:doc.id, ...doc.data()})
        )
        setMessages(messagesArray)
    }) 
    return unsubscribe
}