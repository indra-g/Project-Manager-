import Express from "express";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import firebaseConfig from "../config/firebaseConfig";
const routes = Express.Router();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

routes.post("/login", (req, res) => {
  signInWithEmailAndPassword(auth, req.body.Email, req.body.Password)
    .then((userCredential) => {
      const user = userCredential.user;
      res.send({ userCred: user });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      res.status(400).send({ errorCode, errorMessage });
    });
});

routes.post("/signUp", (req, res) => {
  const email = req.body.Email;
  const password = req.body.Password;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      res.json({ userCred: user });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      res.status(400).send({ errorCode, errorMessage });
    });
});

routes.post("/signUp/details", async (req, res) => {
  const userId = req.body.userId;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phoneNo = req.body.phoneNo;
  try {
    const docRef = await setDoc(doc(db, "Users", userId), {
      firstName: firstName,
      lastName: lastName,
      phoneNo: phoneNo,
    });
    res.json({
      message: "Document written succesfully",
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});

export default routes;
