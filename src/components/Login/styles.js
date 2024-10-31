// styles.js
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(240, 240, 255, 0.9),  /* Lavanda clara translúcida */
      rgba(220, 220, 255, 0.9)   /* Lilás bem claro */
    ),
    url('https://source.unsplash.com/random/1600x900') no-repeat center center/cover;
  background-size: cover;
`;

export const Content = styled.div`
  text-align: center;
  padding: 40px;
  background: rgba(255, 255, 255, 0.95); /* Fundo branco translúcido */
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(180, 180, 255, 0.4); /* Sombra lilás clara */
  min-height: 60vh;
  min-width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #4b0082; /* Índigo para contraste */
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  font-size: 1.0rem;
  color: #6a5acd; /* Lilás acinzentado para suavidade */
  margin-bottom: 1.5rem;
`;

export const Button = styled.button`
  font-size: 18px;
  padding: 14px 20px;
  color: white; /* Texto branco para contraste */
  background-color: #6a5acd; /* Lilás médio */
  border: 2px solid transparent;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease, color 0.3s ease, border 0.3s ease;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 0;
  overflow: hidden;

  /* Borda leve com pseudo-elemento */
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(to right, #9370db, #b0c4de); /* Gradiente lavanda */
    z-index: -1;
    border-radius: 25px;
    transition: opacity 0.3s ease;
    opacity: 1;
  }

  &:hover::before {
    opacity: 0; /* Esconde a borda no hover */
  }

  &:hover {
    background-color: #9370db; /* Fundo lavanda escuro */
    color: white; /* Texto branco */
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }
`;
