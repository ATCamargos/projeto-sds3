import Chart from 'react-apexcharts';

const DonutChart = () => {

    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }
    
    const options = {
        legend: {
            show: true
        }
    }
    
            
    return (
        <Chart 
            options={{ ...options, labels: mockData.labels}}
            series={mockData.series}
            type="donut"
            height="240"        
        />
         );
/*O componente React é uma função do JavaScript Uma função pode ter um corpo com uma lógico dentro dela 
e só no final ele pode ter um Return por isso o código vem antes do return.
Dentro do return mandamos retornar o componente .jsx correspondente ao gráfico de barras através do componente 
Chart que é uma estrutura que vem dentro do ApexCharts cuja biblioteca foi instalada.

Caso não puxe automaticamente é preciso fazer o import conforme linha 1

O <Chart /> tem parâmetros que apontam para os componentes como o options
No React quando você coloca uma variável entre chaves ela será incorporada a sua definição do jsx
Ex.: options={options} esta referencia a variável options na linha 5

Alem das opções acima, é preciso referenciar os labels que apontam para as categorias de dados como na linha 15
Ex.: options={{ ...options}} coloca mais chaves, espaço e três pontinhos, ou seja, os três pontinhos diz
pega todo mundo que tem esses options, reaproveita ele aqui embaixo. Essa especificação permite colocar mais.
O mais fazemos acrescentando uma vírgula
Ex.: options={{ ...options,    }}

Ex.: options={{ ...options, xaxis:}} Aqui colocou-se uma opção chamada xaxis (que é o eixo X que são rótulos)
Após os dois pontos eu informo quem são esses rótulos, a saber, mockData e labels. É no labels que estão os
parâmetros que correspondem ao eixo X.
Ex.: options={{ ...options, xaxis: mockData.labels}}
Obs.: A palavra 'mock' é muita usada para se referir à criação de dados de mentirinha, não estão ainda com dados
reais. Como são dados estáticos sem buscar do banco a gente coloca como mock.

Note que nos dados existem as series que devem ser referenciadas. Isso é feito com
Ex.: series={mockData.series}

No gráfico de barra a 'series' é uma lista, conforme determinado pelos colchetes [ ] que pode ter mais de um
conjunto de dados

Finalizamos informando o tipo do gráfico e a altura 
Ex.: 
type="bar"
height="240"

*/
}

export default DonutChart;