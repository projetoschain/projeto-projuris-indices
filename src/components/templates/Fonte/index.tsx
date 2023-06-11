import { useEffect, useState } from 'react';
import { fetchValuesFromHTML } from './fetchData';

const ValoresPage = () => {
  const [valores, setValores] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const values = await fetchValuesFromHTML('https://www.excelcontabilidade.com.br/indicador/15/TJ-Alagoas'); // Substitua pela URL do HTML desejado
        setValores(values);
      } catch (error) {
        // Trate o erro conforme necessário
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Valores:</h1>
      <ul>
        {valores.map((valor, index) => (
          <li key={index}>{valor}</li>
        ))}
      </ul>
    </div>
  );
};

export default ValoresPage;
