import { signInWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";

const login = async (auth, email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return navigate("/home");
  } catch (err) {
    console.log(err);
  }
};

export default login;
