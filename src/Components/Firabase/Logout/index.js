import { auth } from "../firabase-config";
import { signOut } from "firebase/auth";

const logout = async () => {
  await signOut(auth);
};

const LogoutButton = () => {
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default LogoutButton;
