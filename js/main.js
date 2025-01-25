document.getElementById("btn-premium").addEventListener("click", function () {
  document.getElementById("selector").style.display = "none";
  document.getElementById("index").style.display = "block";
  document.getElementById("left-space").style.display = "block";
  document.body.classList.add("layout");
  document.querySelector("header").style.display = "block";
  document.getElementById("premium").style.display = "block";
  document.querySelector(".left-space").innerHTML = `
    <nav id="index" class="index">
      <h2>Índice</h2>
      <ul>
        <li><a href="#premium-paso-1">Paso 1: Instalación Premium</a></li>
        <li><a href="#premium-paso-2">Paso 2: Crear Instancia</a></li>
        <li><a href="#premium-paso-3">Paso 3: Configurar Instancia</a></li>
        <li><a href="#premium-paso-4">Paso 4: Agregar Mods Extras</a></li>
        <li><a href="#premium-paso-5">Paso 5: Jugar</a></li>
      </ul>
    </nav>`;
});

document
  .getElementById("btn-no-premium")
  .addEventListener("click", function () {
    document.getElementById("selector").style.display = "none";
    document.getElementById("index").style.display = "block";
    document.getElementById("left-space").style.display = "block";
    document.body.classList.add("layout");
    document.querySelector("header").style.display = "block";
    document.getElementById("no-premium").style.display = "block";
    document.querySelector(".left-space").innerHTML = `
    <nav id="index" class="index">
      <h2>Índice</h2>
      <ul>
        <li><a href="#no-premium-paso-1">Paso 1: Instalación No Premium</a></li>
        <li><a href="#no-premium-paso-2">Paso 2: Crear Instancia</a></li>
        <li><a href="#no-premium-paso-3">Paso 3: Configurar Instancia</a></li>
        <li><a href="#no-premium-paso-4">Paso 4: Agregar Mods Extras</a></li>
        <li><a href="#no-premium-paso-5">Paso 5: Jugar</a></li>
      </ul>
    </nav>`;
  });
