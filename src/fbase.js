import { firebaseInstance } from "./firebase";

export const Read = async (ClassName) => {
  const classRef = firebaseInstance.database().ref(ClassName);
  const data = await classRef.once("value");
  return data.val().clicked;
};

export const Ref = (ClassName) => {
  return firebaseInstance.database().ref(ClassName);
};
