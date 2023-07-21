import {
  IonFab,
  IonIcon,
  IonFabButton,
  IonButton,
  IonChip,
  IonLabel,
  IonAlert,
} from "@ionic/react";
import "./ExploreContainer.css";
import { add, micOutline, mic, close } from "ionicons/icons";
import { useState } from "react";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div id="container">
        <IonFabButton>
          <IonIcon icon={mic} id="micIcon"></IonIcon>
        </IonFabButton>
      </div>
      <div className="center">
        <h1 className="title">Keywords:</h1>
        <div className="keywords-container">
          <IonChip id="present-alert">
            <IonLabel onClick={() => setIsOpen(true)}>Alejandro</IonLabel>
            <IonIcon icon={close}></IonIcon>
          </IonChip>
          <IonAlert
            isOpen={isOpen}
            trigger="present-alert"
            header="Edit keyword:"
            subHeader="Alejandro"
            inputs={[
              {
                placeholder: "Alejandro",
              },
            ]}
            buttons={["OK"]}
          ></IonAlert>
        </div>
        <br />
        <IonButton>
          <IonIcon icon={add}></IonIcon>
          &nbsp;Add
        </IonButton>
      </div>
    </div>
  );
};

export default ExploreContainer;
