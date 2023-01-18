import './Login.css';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonButton,IonText,IonInput,IonIcon,IonImg,IonItem,IonLabel,IonNote  } from '@ionic/react';
import { Redirect, useParams, } from 'react-router';
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { db,authentication} from '../components/config';
import { collection, doc, setDoc,addDoc,getDoc,getDocs } from "firebase/firestore"; 
import React, { useState, useEffect } from 'react';
import {
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut,
   } from "firebase/auth";
import { Link, NavLink, } from 'react-router-dom';
import Homepage from "./Homepage";




const Login: React.FC = () => {
      const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  const validateEmail = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  };

  const validate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;

    setIsValid(undefined);

    if (value === '') return;

    validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
  };

  const markTouched = () => {
    setIsTouched(true);
  };
  
     const { name } = useParams<{ name: string; }>();
     const[username,setusername]=useState('');
     const[password,setpassword]=useState('');
     const[email,setEmail]=useState('');

    
     
     function signIn() {

          signInWithEmailAndPassword(authentication, email, password)

            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              //your code
             
            console.log(email,password);
              alert("Sucessfully signed in!");
              window.location.href ='/page/Homepage';
              // ...
            })
            .catch((error) => {
               alert("Email or password invalid");
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage);
            });
        }
     return (
     <IonPage>
<IonHeader>
<IonToolbar>

<IonTitle>
Login
</IonTitle>
</IonToolbar>
</IonHeader>
<IonContent className='ion-padding'>
<IonItem className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}>
        <IonLabel position="floating" >Email</IonLabel>
        <IonInput placeholder="Enter Email" type="email" onIonInput={(event) => validate(event)} onIonBlur={() => markTouched() } value={email} onIonChange={(e:any) =>setEmail(e.target.value)} ></IonInput>
        <IonNote slot="helper">Enter a valid email</IonNote>
      <IonNote slot="error">Invalid email</IonNote>
      </IonItem>
     
      <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput placeholder="Enter Password" type="password" value={password} onIonChange={(e:any) =>setpassword(e.target.value)}></IonInput>
      </IonItem>

<IonButton expand="block" onClick={signIn}> Login</IonButton>
<p>You don't have accuent ? <Link to="/page/Register">Register</Link></p>
</IonContent >
          </IonPage>
     );
};

export default Login;
