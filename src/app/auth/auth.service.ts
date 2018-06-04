import * as firebase from 'firebase';
import { UserToken } from './../shared/app.interfaces';

// https://medium.com/@amcdnl/authentication-in-angular-jwt-c1067495c5e0
export class AuthService {

  private tokenKey:string = 'customer_manager_token';
  // private currentUserToken:Object = {token: ''};
  private currentUserToken: UserToken = {token: ''};

  signupUser(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  signinUser(email: string, password: string){
    return this.getAuthenticated(email, password)
               .then(response => {
                  console.log('Authentication Successful');
                  return this.getToken();
                })
               .catch(error => {
                  console.log('Authentication Rejected');
                  return Promise.reject(error);
                });
  }

  storeToken(token: string) {
    //this.currentUserToken = {token: token};
    localStorage.setItem(this.tokenKey, JSON.stringify({ token: token}));
  }

  getStoredToken() {
    this.currentUserToken = JSON.parse(localStorage.getItem(this.tokenKey));
    return this.currentUserToken;
  }

  isAuthenticated() {
    // (this.currentUserToken.token as string)
    return (<string>this.getStoredToken().token).length > 0
  }

  logout(){
    firebase.auth().signOut();
    this.storeToken('');
  }

  private getToken() {
    return firebase.auth().currentUser.getIdToken();
  }

  private getAuthenticated(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

}// EOF
