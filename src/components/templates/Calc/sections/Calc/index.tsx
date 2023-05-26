import React, { useState } from 'react';
import {
  CalcContainer,
  CalcForm,
  CalcField,
  CalcLabel,
  CalcInput,
  CalcButton,
  CalcResult
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
    // Lógica de cálculo aqui
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

        <Button width={130} value=" Calcular" />
      </CalcForm>

      <CalcResult>
        <div>
          <CalcLabel>Quantidade de meses:</CalcLabel>
          <span>{quantidadeMeses}</span>
        </div>

        <div>
          <CalcLabel>Coeficiente do índice:</CalcLabel>
          <span>{coeficienteIndice}</span>
        </div>

        <div>
          <CalcLabel>Valor correção monetária:</CalcLabel>
          <span>{valorCorrecao}</span>
        </div>

        <div>
          <CalcLabel>Total de juros:</CalcLabel>
          <span>{totalJuros}</span>
        </div>

        <div>
          <CalcLabel>Valor total:</CalcLabel>
          <span>{valorTotal}</span>
        </div>
      </CalcResult>
    </CalcContainer>
  );
};

export default Calc;
