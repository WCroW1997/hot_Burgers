import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBWzGNg-t2qatd6Eja9fI9QCL_yjJuDHkc",
    authDomain: "hot-burders.firebaseapp.com",
    databaseURL: "https://hot-burders-default-rtdb.europe-west1.firebasedatabase.app"
})

const base = Rebase.createClass(firebaseApp.database())


export {firebase}
export default base