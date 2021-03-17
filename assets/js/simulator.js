function simula() {
  const simulador = document.getElementById('simulador');
  if (simulador.value <= 0) {
    document.getElementById(
      'root',
    ).innerHTML = `<strong>Informe um valor</strong>`;
  } else if (simulador.value <= 100) {
    document.getElementById(
      'root',
    ).innerHTML = `Potência instalada <strong style="color:black">2,03</strong>kWp | Quantidade de painéis <strong>5</strong> de 405W | Produção mensal <strong>222,16kWh</strong> `;
  }
  if (simulador.value <= 300) {
    document.getElementById(
      'root',
    ).innerHTML = `Potência instalada <strong style="color:black">2,84</strong style="color:black">kWp | Quantidade de painéis <strong style="color:black">7</strong> de 405W | Produção mensal <strong style="color:black">310kWh</strong>`;
  } else if (simulador.value <= 500) {
    document.getElementById(
      'root',
    ).innerHTML = `Potência instalada <strong style="color:black">4,86</strong>kWp | Quantidade de painéis <strong style="color:black">12</strong> de 405W | Produção mensal <strong style="color:black">531,88kWh</strong>`;
  } else if (simulador.value <= 900) {
    document.getElementById(
      'root',
    ).innerHTML = `Potência instalada <strong style="color:black">8,91</strong>kWp | Quantidade de painéis <strong style="color:black">22</strong> de 405W | Produção mensal <strong style="color:black">975,11kWh</strong>`;
  } else if (simulador.value <= 1900) {
    document.getElementById(
      'root',
    ).innerHTML = `Potência instalada <strong style="color:black">19,44</strong>kWp | Quantidade de painéis <strong style="color:black">48</strong> de 405W | Produção mensal <strong style="color:black">2.127,51kWh</strong>`;
  }
}
