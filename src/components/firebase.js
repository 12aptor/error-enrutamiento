import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
	apiKey: "AIzaSyAzhHe5UnXT_DeS0hjrjGCwG7NoMLLm5LM",
    authDomain: "reservas-69c8f.firebaseapp.com",
    databaseURL: "https://reservas-69c8f.firebaseio.com",
    projectId: "reservas-69c8f",
    storageBucket: "reservas-69c8f.appspot.com",
    messagingSenderId: "234490098471",
    appId: "1:234490098471:web:484b88e023287aa7a56f02"
};
class Firebase {
	constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		this.db = app.firestore()
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}

	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
	}

	addQuote(quote) {
		if(!this.auth.currentUser) {
			return alert('Not authorized')
		}

		return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
			quote
		})
	}

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}

	async getCurrentUserQuote() {
		const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
		return quote.get('quote')
	}
	async uno(){
		const facebook = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
		return facebook.get('fbimg1')
		
	}
	async dos(){
		const facebook = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
		return facebook.get('fbv1')
		
	}
	async tres(){
		const facebook = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
		return facebook.get('fbv2')
		
	}
	async cuatro(){
		const facebook = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
		return facebook.get('fbv3')
		
	}
	async cinco(){
		const facebook = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
		return facebook.get('fbv4')
		
	}
	async seis(){
		const facebook = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
		return facebook.get('yt')
		
	}
	async siete(){
		const facebook = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
		return facebook.get('bg1')
		
	}
	async ocho(){
		const facebook = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
		return facebook.get('bg2')
		
	}
	async nueve(){
		const facebook = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
		return facebook.get('bg3')
		
	}
	async dies(){
		const facebook = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
		return facebook.get('bg4')
		
	}
}

export default new Firebase()