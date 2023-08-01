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
import { useEffect, useState } from "react";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [keywords, setKeywords] = useState<string[]>([]);

  const addKeyword = (key: string) => {
    setKeywords([...keywords, key]);
  };

  useEffect(() => {
    console.log(keywords);
  }, [keywords]);

  return (
    <div>
      <IonAlert
        isOpen={isOpen}
        header="Edit keyword:"
        subHeader="Alejandro"
        inputs={[
          {
            placeholder: "Alejandro",
          },
        ]}
        buttons={[
          {
            text: "Remove",
            role: "cancel",
            handler: () => {
              setIsOpen(false);
              console.log("Alert canceled");
            },
          },
          {
            text: "OK",
            role: "confirm",
            handler: () => {
              setIsOpen(false);
            },
          },
        ]}
      ></IonAlert>

      <IonAlert
        isOpen={isOpenAdd}
        trigger="add-alert"
        header="Add keyword:"
        inputs={[
          {
            placeholder: "Keyword",
            name: "keyword",
            type: "text",
          },
        ]}
        buttons={[
          {
            text: "Cancel",
            role: "cancel",
            handler: () => {
              console.log("Alert canceled");
            },
          },
          {
            text: "OK",
            role: "confirm",
            handler: (alertData) => {
              addKeyword(alertData?.keyword);
            },
          },
        ]}
      ></IonAlert>

      <div id="container">
        <IonFabButton>
          <IonIcon icon={mic} id="micIcon"></IonIcon>
        </IonFabButton>
      </div>
      <div className="center">
        <h1 className="title">Keywords:</h1>
        <div className="keywords-container">
          {keywords.map((keyword, index) => (
            <IonChip onClick={() => {setIsOpen(true); console.log('alsdfkj')}} key={index}>
              <IonLabel>{keyword}</IonLabel>
            </IonChip>
          ))}
        </div>
        <br />
        <IonButton id="add-alert">
          <IonIcon
            icon={add}
            onClick={() => {
              setIsOpenAdd(true);
            }}
          ></IonIcon>
          &nbsp;Add
        </IonButton>
      </div>
    </div>
  );
};

export default ExploreContainer;
