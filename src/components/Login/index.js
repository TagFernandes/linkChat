// Login.js
import React from "react";
import { auth, provider } from "../../services/firebase";
import * as C from "./styles";

const Login = () => {
  const handleSignin = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <C.Container>
      <C.Content>
        <C.Title>Bem-vindo ao LinkChat!</C.Title>
        <C.Subtitle>Faça login para acessar o App</C.Subtitle>
        <C.Button onClick={handleSignin}>Login com Google</C.Button>
      </C.Content>
    </C.Container>
  );
};

export default Login;
