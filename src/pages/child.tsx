import * as React from 'react'
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { useLocation } from 'react-router-dom'

import './Home.css'

function useQueryParams() {
  const { search } = useLocation()
  return React.useMemo(() => new URLSearchParams(search), [search])
}

function Child() {
  const queryParam = useQueryParams()

  const info = queryParam.get('info')

  const title =
    info === 'hello'
      ? 'Hello There!'
      : info === 'goodbye'
      ? 'GOOD BYE!'
      : 'This is the default info when no query param is provided in the url.'

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Child</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Child</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>{title}</h1>
        <div>This is a child page with query params</div>
      </IonContent>
    </IonPage>
  )
}

export default Child
