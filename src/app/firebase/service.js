
import { db } from './configfb' 
import firebase from './configfb'


export const addDocuments = (collection,data) => {
    db.collection(collection).add({
        ...data,
        createAt : firebase.firestore.FieldValue.serverTimestamp()
    })
}

export const generateKeywords = (displayName) => {
    const name = displayName.split(' ').filter(word => word) //'Pham Viet Hung' -> ['Pham','Viet','Hung']
    const lengths = name.length//3
    const flagArray = []
    const result = []
    const stringArray = []

    for(var i = 0; i < lengths ; i++) {
        flagArray[i] = false
    }

    const createKeys = (name) => {
        const arrName = []
        let curName = ''
        name.split('').forEach(letter => {
            curName += letter
            arrName.push(curName)
        })
        return arrName
    }


    function findPermutation (k) {
        for(var i = 0; i< lengths ; i++) {
            if(!flagArray[i]) {
                flagArray[i] = true
                result[k] = name[i]
                if(k === lengths - 1) {
                    stringArray.push(result.join(''))
                }

                findPermutation(k+1)
                flagArray[i] = false
            }
        }
    }
    findPermutation(0)

    const keywords = stringArray.reduce((arr,cur) => {
        const words = createKeys(cur)
        return [...arr,...words]
    },[])
    return keywords
}