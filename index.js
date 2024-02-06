/* === Imports === */
import { initializeApp } from "firebase/app"
import{ getAuth, 
    createUserWithEmailAndPassword,
    authSignInWithEmailAndPassword} from "firebase/auth"

    const firebaseConfig = {
        apiKey: "AIzaSyBvjSV9XsYKV5i7wnmrehlqutHTqNQi1LI",
        authDomain: "moody-1678f.firebaseapp.com",
        projectId: "moody-1678f",
        storageBucket: "moody-1678f.appspot.com",
    
  }

/* === Firebase Setup === */

/* === UI === */
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
/* == UI - Elements == */

const viewLoggedOut = document.getElementById("logged-out-view")
const viewLoggedIn = document.getElementById("logged-in-view")

const signInWithGoogleButtonEl = document.getElementById("sign-in-with-google-btn")

const emailInputEl = document.getElementById("email-input")
const passwordInputEl = document.getElementById("password-input")

const signInButtonEl = document.getElementById("sign-in-btn")
const createAccountButtonEl = document.getElementById("create-account-btn")

/* == UI - Event Listeners == */

signInWithGoogleButtonEl.addEventListener("click", authSignInWithGoogle)

signInButtonEl.addEventListener("click", authSignInWithEmail)
createAccountButtonEl.addEventListener("click", authCreateAccountWithEmail)

/* === Main Code === */

showLoggedOutView()

/* === Functions === */

/* = Functions - Firebase - Authentication = */

function authSignInWithGoogle() {
    console.log("Sign in with Google")
}

function authSignInWithEmail() {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user
        // ...
    })
    .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
    })
}

function authCreateAccountWithEmail() {
    const email = emailInputEl.value
    const password = passwordInputEl.value

    
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
            showLoggedInView()
        // ...
    })
    .catch((error) => {
        console.error(error.message)
    })





}

/* == Functions - UI Functions == */

function showLoggedOutView() {
    hideElement(viewLoggedIn)
    showElement(viewLoggedOut)
}

function showLoggedInView() {
    hideElement(viewLoggedOut)
    showElement(viewLoggedIn)
}

function showElement(element) {
    element.style.display = "flex"
}

function hideElement(element) {
    element.style.display = "none"
}