import './Register.css';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';



const Register: React.FC = () => {

    const { name } = useParams<{ name: string; }>();

    return (
        <div>
            <h1>This is Register Page</h1>
        </div>
    );
};

export default Register;
