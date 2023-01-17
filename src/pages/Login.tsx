import './Login.css';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';



const Login: React.FC = () => {

     const { name } = useParams<{ name: string; }>();

     return (
          <div>
               <h1>This is Login Page</h1>
          </div>
     );
};

export default Login;
