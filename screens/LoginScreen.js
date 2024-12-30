import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../service/requests";
import { Alert } from "react-native";
import { AuthContext } from "../store/context";

function LoginScreen() {
  const [loader, setLoader] = useState(false);

  const authCtx = useContext(AuthContext);

  const loginHandler = async ({ email, password }) => {
    try {
      setLoader(true);
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert("Authentication failed!", "Check your Credentials!");
      setLoader(false);
    }
  };

  if (loader) {
    return <LoadingOverlay message="Logging in" />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
