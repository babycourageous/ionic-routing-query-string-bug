import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import ExploreContainer from '../components/ExploreContainer'
import './Home.css'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton routerLink="/home/child">Go to Child</IonButton>
        <IonButton routerLink="/home/child?info=hello">
          Go to Child w/ hello
        </IonButton>
        <IonButton routerLink="/home/child?info=goodbye">
          Go to Child w/ goodbye
        </IonButton>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  )
}

export default Home
