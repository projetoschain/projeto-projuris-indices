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
  display: flex;
  max-width: 800px;
  margin: 0 auto;
`;


export const CalcForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-right: 20px; /* Adiciona margem à direita */
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
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 25px;
  padding-left: 20px;
  border-left: 1px solid #ccc;
  background-color: #00000000; /* Substitua #blue pela cor desejada */
  border-radius: 5px;
  padding: 20px;
`;

export const ResultField = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #ccc; /* Adiciona uma linha separadora */
  padding-bottom: 5px; /* Adiciona espaço abaixo da linha */
`;

export const ResultLabel = styled.label`
  /* Estilos para o rótulo do campo de resultado */
  color: #a7a7a7;
  font-size: 20px;
  font-weight: bold;
`;

export const ResultValue = styled.span`
  color: #0927aa;
  font-size: 20px;
  font-weight: bold;
  white-space: nowrap;
  text-align: right; /* Alinha os números à direita */
  flex: 1; /* Ocupa o espaço restante */
`;


export const ValorTotalCorrecaoJuros = styled.span`
  /* Estilos para o valor total + correção + juros */
  color: #0927aa;
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap; /* Impede quebras de linha */
`;
