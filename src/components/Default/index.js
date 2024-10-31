import React from "react";
import * as C from "./styles";
import { MdMessage } from "react-icons/md";

const Default = () => {
  return (
    <C.Container>
      <MdMessage />
      <C.Title>Link Chat</C.Title>
      <C.Info>
        Mantendo você conectado com sua empresa
      </C.Info>
    </C.Container>
  );
};

export default Default;
