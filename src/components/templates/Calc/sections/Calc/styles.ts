import styled from "styled-components";
import Button from "@/src/components/Button";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;

export const CardsArea = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;

  @media (max-width: 840px) {
    width: 100%;
    flex-direction: column;
    gap: 20px;
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
`;

export const ButtonsArea = styled.div`
  width: 50%;
  max-width: 400px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 840px) {
    width: 100%;
    gap: 5px;
  }
`;

export const CurrentBalance = styled.div`
  color: #d2d2d2;
  background-color: #000;
  padding: 10px;
  border-radius: 10px;
`;

export const CalcContainer = styled.div`
  /* Estilos para o container da calculadora */
  max-width: 400px;
  margin: 0 auto;
`;

export const CalcForm = styled.form`
  /* Estilos para o formulário da calculadora */
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CalcField = styled.div`
  /* Estilos para cada campo da calculadora */
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CalcFieldRight = styled.div`
  /* Estilos para a coluna direita */
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end; /* Alinhamento à direita */
`;

export const CalcLabel = styled.label`
  color: #a7a7a7;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const CalcInput = styled.input`
  /* Estilos para os inputs */
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 8px;
`;

export const CalcButton = styled.button`
  /* Estilos para o botão de cálculo */
  padding: 10px 20px;
  background-color: #a7a7a7;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const CalcResult = styled.div`
  /* Estilos para exibir os resultados */
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 25px; /* Adiciona margem superior */
`;


export const ResultField = styled.div`
  /* Estilos para cada campo de resultado */
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ResultLabel = styled.label`
  /* Estilos para o rótulo do campo de resultado */
  color: #a7a7a7;
  font-size: 14px;
  font-weight: bold;
`;

export const ResultValue = styled.span`
  /* Estilos para o valor do campo de resultado */
  color: #0927aa;
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap; /* Impede quebras de linha */
`;

export const ValorTotalCorrecaoJuros = styled.span`
  /* Estilos para o valor total + correção + juros */
  color: #0927aa;
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap; /* Impede quebras de linha */
`;
