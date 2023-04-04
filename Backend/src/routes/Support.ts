import Express from "express";
const routes = Express.Router();
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import firebaseConfig from "../config/firebaseConfig";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

routes.get("/getUsers", async (req, res) => {
  const docRef = collection(db, "Users");
  const docSnap = await getDocs(docRef);
  const fNameList = [];
  docSnap.forEach((doc) => {
    fNameList.push(doc.data().firstName);
  });
  res.send(fNameList);
});

routes.post("/createProject", async (req, res) => {
  const projectName = req.body.projectName;
  const projectDescription = req.body.projectDescription;
  const projectDeadline = req.body.projectDeadline;
  const projectMembers = req.body.projectMembers;
  try {
    const docRef = await addDoc(collection(db, "Projects"), {
      projectName,
      projectDescription,
      projectDeadline,
      projectMembers,
    });
    res.json({
      message: "Document written succesfully with ID: " + docRef.id,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});

routes.get("/getProjects", async (req, res) => {
  const docRef = collection(db, "Projects");
  const docSnap = await getDocs(docRef);
  const projects = [];
  docSnap.forEach((doc) => {
    projects.push(doc.data());
  });
  res.send(projects);
});

export default routes;
