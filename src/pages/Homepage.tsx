import './Homepage.css';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';



const Homepage: React.FC = () => {

     const { name } = useParams<{ name: string; }>();

     return (
          <div>
               <h1>This is homePage</h1>
          </div>
     );
};

export default Homepage;
