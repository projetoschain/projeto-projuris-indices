import React, { useState } from 'react';
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

  const handleCalculate = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Lógica de cálculo
    const dataInclusaoDate = new Date(dataInclusao);
    const dataAtualizacaoDate = new Date(dataAtualizacao);

    // Cálculo da quantidade de meses
    const monthsDiff =
      (dataAtualizacaoDate.getFullYear() - dataInclusaoDate.getFullYear()) * 12 +
      (dataAtualizacaoDate.getMonth() - dataInclusaoDate.getMonth());

    setQuantidadeMeses(monthsDiff - 1);

    // Cálculo do coeficiente do índice
    const coeficiente = indiceFinal / indiceInicial - 1;
    setCoeficienteIndice(coeficiente);

    // Cálculo do valor de correção monetária
    const valorCorrecaoMonetaria = coeficiente * valorPrincipal;
    setValorCorrecao(valorCorrecaoMonetaria);

    // Cálculo do total de juros
    const juros = quantidadeMeses * aliquotaJuros;
    setTotalJuros(juros);

    // Cálculo do valor do pedido + correção
    const valorTotalComCorrecao = valorPrincipal + valorCorrecao;
    setValorTotal(valorTotalComCorrecao);

    // Cálculo do valor total + correção + juros
    const valorTotalCorrecaoJuros = valorTotalComCorrecao * (1 + totalJuros / 100);
    setValorTotalCorrecaoJuros(valorTotalCorrecaoJuros);

    // Cálculo da soma de valor total + correção + juros com valor total do pedido + correção
    const valorTotalAtualizado = valorTotalCorrecaoJuros + valorTotalComCorrecao;
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
                minimumFractionDigits: 4,
                maximumFractionDigits: 4
              })}
            </ResultValue>
          </ResultField>

          <ResultField>
            <ResultLabel>Total % de juros:</ResultLabel>
            <ResultValue>
              {totalJuros.toLocaleString('pt-BR', {
                minimumFractionDigits: 4,
                maximumFractionDigits: 4
              })}
            </ResultValue>
          </ResultField>

          <ResultField>
            <ResultLabel>Valor total do pedido + correção:</ResultLabel>
            <ResultValue>
              {valorTotal.toLocaleString('pt-BR', {
                minimumFractionDigits: 4,
                maximumFractionDigits: 4
              })}
            </ResultValue>
          </ResultField>

          <ResultField>
            <ResultLabel>Total R$ de juros:</ResultLabel>
            <ResultValue>
              {valorTotalCorrecaoJuros.toLocaleString('pt-BR', {
                minimumFractionDigits: 4,
                maximumFractionDigits: 4
              })}
            </ResultValue>
          </ResultField>

          {/* Nova label e valor */}
          <ResultField>
            <ResultLabel>Valor total atualizado:</ResultLabel>
            <ResultValue>
              {valorTotalAtualizado.toLocaleString('pt-BR', {
                minimumFractionDigits: 4,
                maximumFractionDigits: 4
              })}
            </ResultValue>
          </ResultField>
        </CalcResult>
      </CalcContainer>
    </Section>
  );
};

export default Calc;
