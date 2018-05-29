import * as firebase from 'firebase';

export class AuthService {
  //token: string;

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
                  return Promise.reject(error);
                });
  }

  private getToken() {
    return firebase.auth().currentUser.getIdToken();
  }

  private getAuthenticated(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

}// EOF
