import React from "react";
import * as C from "./styles";
import { MdPerson} from "react-icons/md";

const ChatHeader = ({ photoURL, name }) => {
  return (
    <C.Container>
      <C.UserInfo>
        {photoURL ? <C.Avatar src={photoURL} alt="Avatar" /> : <MdPerson />}
        <C.NameContent>
          <C.Name>{name}</C.Name>
        </C.NameContent>
      </C.UserInfo>

    </C.Container>
  );
};

export default ChatHeader;
