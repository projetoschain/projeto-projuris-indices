import axios from 'axios';
import cheerio from 'cheerio';

// Função para buscar os valores do HTML de cada fonte
export async function fetchValuesFromHTML(url: string, loginData?: { cpf: string, senha: string }): Promise<string[]> {
  try {
    let response;
    if (loginData) {
      // Se houver dados de login, faça a autenticação primeiro
      response = await axios.post(url, loginData);
    } else {
      response = await axios.get(url);
    }

    const html = response.data;
    const $ = cheerio.load(html);

    // Aqui você deve implementar a lógica para buscar os valores do HTML usando o $ (cheerio)

    let valores: string[] = [];

    // TJLP-Bacen
    if (url.includes('debit.com.br/tabelas/tabela-completa.php?indice=tjlp')) {
      const loginRequired = $('.text-start').text().includes('LOGIN');
      if (loginRequired) {
        // Se requer login, retorne uma mensagem informando que é necessário login
        valores.push('É necessário fazer login para acessar os valores do TJLP-Bacen.');
      } else {
        valores = $('.text-end').map((index, element) => $(element).text()).get();
      }
    }
    // TJMA, TJPE, TJBA, TJAL, TJAM, TJCE, TJGO, TJMS, TJPA, TJRS, TJSE, TJAC, TJAP, TJDF, TJPI, TJRN, TJRO, TJTO, TJRR
    else if (url.includes('excelcontabilidade.com.br/indicador/')) {
      valores = $('.tabela_indicadores_valor.print-table01-value').map((index, element) => $(element).text()).get();
    }
    // SELIR, SEFSP
    else if (url.includes('receitafederal/pt-br/assuntos/orientacao-tributaria/pagamentos-e-parcelamentos/taxa-de-juros-selic')) {
      valores = $('div[style="text-align: center;"]').map((index, element) => $(element).text()).get();
    }
    // VRTE
    else if (url.includes('internet.sefaz.es.gov.br/informacoes/indices_vrte.php')) {
      valores = $('div[style="text-align:center"]').map((index, element) => $(element).text()).get();
    }
    // IST
    else if (url.includes('gov.br/anatel/pt-br/regulado/competicao/tarifas-e-precos/valores-do-ist')) {
      const tabelaIST = $('#tableInfoTarifasIST tbody tr');
      valores = tabelaIST.map((index, element) => {
        const referencia = $(element).find('td:nth-child(2)').text();
        const variacao = $(element).find('td:nth-child(3)').text();
        return `${referencia}: ${variacao}`;
      }).get();
    }
    // UPFPA
    else if (url.includes('sefa.pa.gov.br/index.php/receitas-despesas/info-fazendarias/3010-upfpa')) {
      valores = $('table tr').map((index, element) => {
        const colunas = $(element).find('td');
        const referencia = $(colunas[0]).text();
        const valor = $(colunas[1]).text();
        return `${referencia}: ${valor}`;
      }).get();
    }

    return valores;
  } catch (error) {
    console.error('Erro ao buscar os valores do HTML:', error);
    throw error;
  }
}

// Exemplo de uso
async function fetchData() {
  try {
    const url = 'https://debit.com.br/tabelas/tabela-completa.php?indice=tjlp';
    const valoresTJLPBacen = await fetchValuesFromHTML(url);
    console.log('Valores do TJLP-Bacen:', valoresTJLPBacen);

    const loginData = { cpf: '65158363765', senha: 'amora2021' };
    const urlTJMA = 'https://www.excelcontabilidade.com.br/indicador/23/TJ-Maranh%C3%A3o?url=indicador/23/TJ-Maranh%C3%A3o';
    const valoresTJMA = await fetchValuesFromHTML(urlTJMA, loginData);
    console.log('Valores do TJMA:', valoresTJMA);

    // Continue fazendo as chamadas para as outras fontes

  } catch (error) {
    // Trate o erro conforme necessário
  }
}

fetchData();
