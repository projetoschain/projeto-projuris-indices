import React, { useState, useEffect } from 'react';

import {
  CalcContainer,
  CalcForm,
  CalcField,
  CalcLabel,
  CalcInput,
  CalcButton,
  CalcResult,
  ResultField,
  ResultLabel,
  ResultValue
} from './styles';
import Button from '@/src/components/Button';
import NumberFormat from 'react-number-format';
import { Section } from '../../styles';

const Calc = () => {
  const [dataInclusao, setDataInclusao] = useState('');
  const [dataAtualizacao, setDataAtualizacao] = useState('');
  const [indiceInicial, setIndiceInicial] = useState(0);
  const [indiceFinal, setIndiceFinal] = useState(0);
  const [valorPrincipal, setValorPrincipal] = useState(0);
  const [aliquotaJuros, setAliquotaJuros] = useState(0);
  const [quantidadeMeses, setQuantidadeMeses] = useState(0);
  const [coeficienteIndice, setCoeficienteIndice] = useState(0);
  const [valorCorrecao, setValorCorrecao] = useState(0);
  const [totalJuros, setTotalJuros] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);
  const [valorTotalCorrecaoJuros, setValorTotalCorrecaoJuros] = useState(0);
  const [valorTotalAtualizado, setValorTotalAtualizado] = useState(0); // Nova variável de estado

  const handleCalculate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  
    const dataInclusaoDate = new Date(dataInclusao);
    const dataAtualizacaoDate = new Date(dataAtualizacao);
  
    const monthsDiff =
      (dataAtualizacaoDate.getFullYear() - dataInclusaoDate.getFullYear()) * 12 +
      (dataAtualizacaoDate.getMonth() - dataInclusaoDate.getMonth());
  
    const coeficiente = indiceFinal / indiceInicial - 1;
    const valorCorrecaoMonetaria = coeficiente * valorPrincipal;
    const juros = quantidadeMeses * (aliquotaJuros / 100); 
  
    const valorTotalComCorrecao = valorPrincipal + valorCorrecaoMonetaria;
    const valorTotalCorrecaoJuros = valorTotalComCorrecao * juros;
    const valorTotalAtualizado = valorTotalCorrecaoJuros + valorTotalComCorrecao;
  
    setQuantidadeMeses(monthsDiff - 1);
    setCoeficienteIndice(coeficiente);
    setValorCorrecao(valorCorrecaoMonetaria);
    setTotalJuros(juros);
    setValorTotal(valorTotalComCorrecao);
    setValorTotalCorrecaoJuros(valorTotalCorrecaoJuros);
    setValorTotalAtualizado(valorTotalAtualizado);
  };

  return (
    <Section id="Calc"> 
      <CalcContainer>
        <CalcForm>
          <CalcField>
            <CalcLabel>Data inclusão:</CalcLabel>
            <CalcInput
              type="date"
              value={dataInclusao}
              onChange={(e) => setDataInclusao(e.target.value)}
            />
          </CalcField>

          <CalcField>
            <CalcLabel>Data atualização monetária:</CalcLabel>
            <CalcInput
              type="date"
              value={dataAtualizacao}
              onChange={(e) => setDataAtualizacao(e.target.value)}
            />
          </CalcField>

          <CalcField>
            <CalcLabel>Valor do índice ACUMULADO Inicial:</CalcLabel>
            <CalcInput
              type="number"
              value={indiceInicial}
              step="0.01"
              onChange={(e) => setIndiceInicial(parseFloat(e.target.value))}
            />
          </CalcField>

          <CalcField>
            <CalcLabel>Valor do índice ACUMULADO Final:</CalcLabel>
            <CalcInput
              type="number"
              value={indiceFinal}
              step="0.01"
              onChange={(e) => setIndiceFinal(parseFloat(e.target.value))}
            />
          </CalcField>

          <CalcField>
            <CalcLabel>Valor principal do pedido:</CalcLabel>
            <CalcInput
              type="number"
              value={valorPrincipal}
              step="0.01"
              onChange={(e) => setValorPrincipal(parseFloat(e.target.value))}
            />
          </CalcField>

          <CalcField>
            <CalcLabel>Alíquota de juros:</CalcLabel>
            <CalcInput
              type="number"
              value={aliquotaJuros}
              step="0.01"
              onChange={(e) => setAliquotaJuros(parseFloat(e.target.value))}
            />
          </CalcField>

          <Button width={130} value="Calcular" onClick={handleCalculate} />
        </CalcForm>

        <CalcResult>
          <ResultField>
            <ResultLabel>Quantidade de meses:</ResultLabel>
            <ResultValue>{quantidadeMeses.toLocaleString()}</ResultValue>
          </ResultField>

          <ResultField>
            <ResultLabel>Coeficiente do índice:</ResultLabel>
            <ResultValue>
              {coeficienteIndice.toLocaleString('pt-BR', {
                minimumFractionDigits: 4,
                maximumFractionDigits: 4
              })}
            </ResultValue>
          </ResultField>

          <ResultField>
            <ResultLabel>Valor correção monetária:</ResultLabel>
            <ResultValue>
              {valorCorrecao.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </ResultValue>
          </ResultField>

          <ResultField>
            <ResultLabel>Total % de juros:</ResultLabel>
            <ResultValue>
          {totalJuros.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 4,
          })}%
        </ResultValue>
          </ResultField>

          <ResultField>
            <ResultLabel>Total R$ de juros:</ResultLabel>
            <ResultValue>
              {valorTotalCorrecaoJuros.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </ResultValue>
          </ResultField>

          <ResultField>
            <ResultLabel>Valor pedido + correção:</ResultLabel>
            <ResultValue>
              {valorTotal.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </ResultValue>
          </ResultField>

          <ResultField>
            <ResultLabel>Valor total atualizado:</ResultLabel>
            <ResultValue>
              {valorTotalAtualizado.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </ResultValue>
          </ResultField>
        </CalcResult>
      </CalcContainer>
    </Section>
  );
};

export default Calc;
