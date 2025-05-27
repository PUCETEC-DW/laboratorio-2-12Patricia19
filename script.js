let paises = [];

fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => {
    paises = data;
    mostrarPaises(paises);
  });

function mostrarPaises(lista) {
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
  lista.forEach(pais => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h3>${pais.name.official}</h3>
      <img src="${pais.flags.svg}" alt="Bandera de ${pais.name.official}" width="50">
      <p>Región: ${pais.region}</p>
      <p>Población: ${pais.population.toLocaleString()}</p>
      <hr>
    `;
    resultado.appendChild(div);
  });
}


document.getElementById('buscar').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const texto = this.value.toLowerCase();
    if (texto === '') {
      mostrarPaises(paises);
    } else {
      const filtrados = paises.filter(pais =>
        pais.name.official.toLowerCase().includes(texto)
      );
      mostrarPaises(filtrados);
    }
  }
});