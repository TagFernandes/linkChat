import styled from "styled-components";

export const Container = styled.div`
  height: 59px;
  background-color: #f0f2f5;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  box-shadow: 0 1px 2px #0003;
`;

export const Avatar = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
  border-radius: 50%;
  margin-right: 10px; /* Adiciona um espaço entre a foto e o botão */
`;

export const LogoutButton = styled.button`
  padding: 8px 16px;
  cursor: pointer;
  background-color: #e63946; /* Cor suave e amigável */
  color: white;
  border: 1px solid #e63946;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background-color: #d62839; /* Efeito hover com cor mais escura */
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px); /* Leve efeito de elevação */
  }

  &:active {
    background-color: #c81d34; /* Cor ainda mais escura ao clicar */
    transform: translateY(0); /* Remover elevação ao clicar */
  }
`;


export const Options = styled.div`
  display: flex;
  gap: 10px;

  svg {
    width: 24px;
    height: 24px;
    color: #54656f;
    cursor: pointer;
  }
`;
