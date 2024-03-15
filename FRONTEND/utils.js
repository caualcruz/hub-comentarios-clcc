const formatDate = (data) => {
  const dataAtual = new Date(data);
  const options = {
    day: "2-digit",
    month: "short",
    hour: "numeric",
    hour12: false,
  };
  const formattedDate = `${dataAtual.toLocaleString("pt-BR", options)} horas`;
  return formattedDate;
};

function geradorDeCor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}
function darkColors() {
  const cores = [
    "#000000",
    "#2F4F4F",
    "#808080",
    "#000080",
    "#008000",
    "#4B0082",
    "#FF0000",
  ];

  return geradorDeCor(cores)
}
function lightColors() {
  const cores = [
    "#E6E6FA",
    "#D8BFD8",
    "#836FFF",
    "#696969",
    "#DCDCDC",
    "#483D8B",
    "B0C4DE",
    "#98FB98",
  ];

  return geradorDeCor(cores)
}

export { lightColors }
export { darkColors };
export { formatDate };
export { geradorDeCor };
