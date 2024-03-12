const formatDate = (data) =>{
    const dataAtual = new Date(data);
    const options = { day:'2-digit', month:'short', hour: 'numeric', hour12: false};
    const formattedDate = `${dataAtual.toLocaleString('pt-BR', options)} horas`
    return formattedDate
}

export {formatDate}