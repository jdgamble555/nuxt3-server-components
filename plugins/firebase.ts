import { getApps, initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

export default defineNuxtPlugin(() => {

    const config = useRuntimeConfig()

    // initialize and login
    if (!getApps().length) {
        initializeApp(config.public.FIREBASE_CONFIG)
    }

    const auth = getAuth()
    const db = getFirestore()

    return {
        provide: {
            auth,
            db
        }
    }
})