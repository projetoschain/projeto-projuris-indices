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

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();

    // Lógica de cálculo
    const dataInclusaoDate = new Date(dataInclusao);
    const dataAtualizacaoDate = new Date(dataAtualizacao);

    // Cálculo da quantidade de meses
    const monthsDiff = (dataAtualizacaoDate.getFullYear() - dataInclusaoDate.getFullYear()) * 12 +
      (dataAtualizacaoDate.getMonth() - dataInclusaoDate.getMonth());

    setQuantidadeMeses(monthsDiff - 1);

    // Cálculo do coeficiente do índice
    const coeficiente = indiceFinal / (indiceInicial - 1);
    setCoeficienteIndice(coeficiente);

    // Cálculo do valor de correção monetária
    const valorCorrecaoMonetaria = coeficiente * valorPrincipal;
    setValorCorrecao(valorCorrecaoMonetaria);

    // Cálculo do total de juros
    const juros = quantidadeMeses * aliquotaJuros;
    setTotalJuros(juros);

    // Cálculo do valor total
    const valorTotalCalculado = valorPrincipal + valorCorrecaoMonetaria + juros;
    setValorTotal(valorTotalCalculado);
  };

  return (
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
            onChange={(e) => setIndiceInicial(parseFloat(e.target.value))}
          />
        </CalcField>

        <CalcField>
          <CalcLabel>Valor do índice ACUMULADO Final:</CalcLabel>
          <CalcInput
            type="number"
            value={indiceFinal}
            onChange={(e) => setIndiceFinal(parseFloat(e.target.value))}
          />
        </CalcField>

        <CalcField>
          <CalcLabel>Valor principal do pedido:</CalcLabel>
          <CalcInput
            type="number"
            value={valorPrincipal}
            onChange={(e) => setValorPrincipal(parseFloat(e.target.value))}
          />
        </CalcField>

        <CalcField>
          <CalcLabel>Alíquota de juros:</CalcLabel>
          <CalcInput
            type="number"
            value={aliquotaJuros}
            onChange={(e) => setAliquotaJuros(parseFloat(e.target.value))}
          />
        </CalcField>

        <Button width={130} value="Calcular" onClick={handleCalculate} />
      </CalcForm>

      <CalcResult>
        <ResultField>
          <ResultLabel>Quantidade de meses:</ResultLabel>
          <ResultValue>{quantidadeMeses}</ResultValue>
        </ResultField>

        <ResultField>
          <ResultLabel>Coeficiente do índice:</ResultLabel>
          <ResultValue>{coeficienteIndice}</ResultValue>
        </ResultField>

        <ResultField>
          <ResultLabel>Valor correção monetária:</ResultLabel>
          <ResultValue>{valorCorrecao}</ResultValue>
        </ResultField>

        <ResultField>
          <ResultLabel>Total de juros:</ResultLabel>
          <ResultValue>{totalJuros}</ResultValue>
        </ResultField>

        <ResultField>
          <ResultLabel>Valor total:</ResultLabel>
          <ResultValue>{valorTotal}</ResultValue>
        </ResultField>
      </CalcResult>
    </CalcContainer>
  );
};

export default Calc;
