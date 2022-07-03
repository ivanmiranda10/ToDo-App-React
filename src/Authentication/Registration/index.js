import { createUserWithEmailAndPassword } from "firebase/auth";

const registration = async (auth, email, password, navigate) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    return navigate("/home");
  } catch (err) {
    console.log(err);
  }
};

export default registration;
