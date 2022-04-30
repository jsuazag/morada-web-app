import { Page } from "../../components/Page";
import {
  FormControl,
  FormControlInput,
  FormControlAction,
  PageTitle,
} from "../../globalStyles";
import { Button } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";
import { IoEye, IoEyeOff } from "react-icons/io5";

export const Login = () => (
  <Page hideMenu>
    <PageTitle>Iniciar sesión</PageTitle>
    <br />
    <form>
      <FormControl>
        <FormControlInput>
          <label>Correo electrónico</label>
          <input type="email" />
        </FormControlInput>
      </FormControl>
      <FormControl>
        <FormControlInput>
          <label>Contraseña</label>
          <input type="password" />
        </FormControlInput>
        <FormControlAction>
          <ButtonIcon icon={IoEyeOff} onPress={() => {}} />
        </FormControlAction>
      </FormControl>
      <br />
      <Button label="Ingresar" onPress={() => alert("Iniciar sesión")} />
    </form>
  </Page>
);
