import './Register.css';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonButton,IonText,IonInput,IonIcon,IonImg,IonItem,IonLabel,IonNote,IonDatetime, IonDatetimeButton, IonModal  } from '@ionic/react';
import { useParams } from 'react-router';
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { db,authentication} from '../components/config';
import { collection, doc, setDoc,addDoc,getDoc,getDocs } from "firebase/firestore"; 
import React, { useState, useEffect } from 'react';
import {
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut,
   } from "firebase/auth";

const Register: React.FC = () => {
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
    const [Date, setSelectedDate] = useState('');
    const[email,setEmail]=useState('');
    const[username,setusername]=useState('');
    const[phone,setphone]=useState('');
    const[password,setpassword]=useState('');
    const[fullname,setfullname]=useState('');
    function signUp() {
        createUserWithEmailAndPassword(authentication, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // your code
            
            alert("Successfully sign up!");
            console.log(username,fullname,email,phone,password,Date);  
            addDoc(collection(db, "users"), {
              username:username,
              fullname:fullname,
              email: email,
              phone:phone,
              password:password,
              Date:Date,
        
            }).then(() => { 
              // Data saved successfully!
              console.log('data submitted');  
        
            }).catch((error) => {
                  // The write failed...
                  console.log(error);
            });
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
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
                <IonLabel position="floating">username</IonLabel>
                <IonInput placeholder="Enter username" value={username} onIonChange={(e:any) =>setusername(e.target.value)}></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">phone</IonLabel>
                <IonInput placeholder="Enter phone" value={phone} type="number" onIonChange={(e:any) =>setphone(e.target.value)}></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput placeholder="Enter Password" type="password" value={password} onIonChange={(e:any) =>setpassword(e.target.value)}></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">fullname</IonLabel>
                <IonInput placeholder="Enter fullname"  value={fullname} onIonChange={(e:any) =>setfullname(e.target.value)}></IonInput>
              </IonItem>
              <IonItem>
              <IonLabel position="floating">Picke date of birth </IonLabel>
              <IonDatetime value={Date}  onIonChange={(e:any) =>setSelectedDate(e.target.value)}></IonDatetime>
              </IonItem>
        
       
        <IonButton expand="block"  onClick={signUp}>Reguster</IonButton>
        </IonContent >
                  </IonPage>
    );
};

export default Register;
