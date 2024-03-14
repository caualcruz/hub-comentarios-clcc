const formatDate = (data) =>{
    const dataAtual = new Date(data);
    const options = { day:'2-digit', month:'short', hour: 'numeric', hour12: false};
    const formattedDate = `${dataAtual.toLocaleString('pt-BR', options)} horas`
    return formattedDate
}

function geradorDeCor() {
    const valores = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
      cor += valores[Math.floor(Math.random() * 15)];
    }
    return cor;
  }
  console.log(geradorDeCor()) 
export {formatDate}
export {geradorDeCor}
