import { doc, getDoc } from "firebase/firestore"

type AboutDoc = {
    name: string
    description: string
}

export const useAbout = async () => {

    // runs on both server and client

    const runtimeConfig = useRuntimeConfig()

    const { $db } = useNuxtApp()

    const aboutSnap = await getDoc(
        doc($db, '/about/ZlNJrKd6LcATycPRmBPA')
    )

    if (!aboutSnap.exists()) {
        throw 'Document does not exist!'
    }

    const data = aboutSnap.data()

    if (runtimeConfig.public.dev) {
        console.log(data)
    }

    return data as AboutDoc
}