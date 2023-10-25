import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, onValue, push} from "firebase/database";
import { app } from "./firebaseconfig";

let auth = getAuth(app)
let db = getDatabase(app)

export let fbSignUp=(body:any)=>{
    return new Promise((resolve,reject)=>{
        if(!body.email || !body.password)
        {
            reject("Email & Password are Required!")
        }
        else{
            createUserWithEmailAndPassword(auth, body.email, body.password)
            .then(res=>{
                let id = res.user.uid
                body.id = id
                const referece = ref(db,`users/${id}`)
                set(referece, body).then(user=>{
                    resolve("User Created Successfully")
                }).catch(error=>{
                    reject(error)
                })


            }).catch(err=>{
                reject(err)
            })
        }
    })
}

export let fbLogin=(body:any)=>{
    return new Promise((resolve,reject)=>{
        if(!body.email || !body.password)
        {
            reject("Email & Password are Required!")
        }
        else{
            signInWithEmailAndPassword(auth, body.email, body.password)
            .then(res=>{
                let id = res.user.uid
                
                const referece = ref(db,`users/${id}`)
                
                onValue(referece, (data)=>{
                    if (data.exists()){
                        resolve(data.val())
                    }
                    else{
                        reject("No Data Found")
                    }
                })


            }).catch(err=>{
                reject(err)
            })
        }
    })
}

export const fbAdd = (NodeName:any, body:any)=>{
    return new Promise((resolve, reject)=>{
        const keyReference = push(ref(db, `form/${NodeName}`)).key;
        body.id = keyReference
        const reference = ref(db, `form/${NodeName}/${body.id}`)
        set(reference, body).then(res=>{
            resolve("Data Sent Successfully")
        }).catch(err=>{
            reject(err)        
        })
    })
}

export const fbGet=(NodeName:string)=>{
    return new Promise((resolve, reject)=>{
        const reference = ref(db, `/${NodeName}`)
        onValue(reference, (data)=>{
            if(data.exists()){
                resolve(Object.values(data.val()))
            }
            else{
            reject("No Data Found")
            }
        })
    })
}