import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../service/requests";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";

function SignupScreen() {
  const [loader, setLoader] = useState(false);

  const signupHandler = async ({ email, password }) => {
    try {
      setLoader(true);
      createUser(email, password);
    } catch (error) {
      Alert.alert("Authentication failed!", "Could not create user!");
    } finally {
      setLoader(false);
    }
  };

  if (loader) {
    return <LoadingOverlay message="Creating User" />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}
export default SignupScreen;
