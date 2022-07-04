import { auth } from "../firabase-config";
import { signOut } from "firebase/auth";
import { Nav, NavContainer, ButtonContainer, Button } from "./styles";

const logout = async () => {
  await signOut(auth);
};

const LogoutButton = () => {
  return (
    <Nav>
      <NavContainer>
        <ButtonContainer>
          <Button onClick={logout}>Log out</Button>
        </ButtonContainer>
      </NavContainer>
    </Nav>
  );
};

export default LogoutButton;
