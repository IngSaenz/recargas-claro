document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.getAttribute("data-section");

    document.querySelectorAll("main section").forEach(sec =>
      sec.classList.remove("seccion-activa")
    );

    const selected = document.getElementById(target);
    if (selected) selected.classList.add("seccion-activa");
  });
});

document.getElementById("recargaForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  setTimeout(() => {
    document.getElementById("mensaje-recarga").textContent =
      "¡Recarga enviada exitosamente!";
    this.reset();
  }, 1000);
});

document.querySelector("#presta form").addEventListener("submit", function (e) {
  e.preventDefault();
  const mensajeElemento = document.getElementById("mensaje-presta");
  mensajeElemento.textContent = "Procesando préstamo...";

  setTimeout(() => {
    mensajeElemento.textContent = "¡Préstamo de saldo enviado exitosamente!";
    this.reset();
  }, 1000);
});

document.querySelector("#transf form").addEventListener("submit", function (e) {
  e.preventDefault();
  const mensajeElemento = document.getElementById("mensaje-transf");
  mensajeElemento.textContent = "Procesando transferencia...";

  setTimeout(() => {
    mensajeElemento.textContent = "¡Saldo transferido exitosamente!";
    this.reset();
  }, 1000);
});

function enviarCorreo() {
  const mensaje = document.querySelector("#contacto textarea").value;
  const mailto = `mailto:merceditalopez659@gmail.com?subject=Mensaje desde Claro Web&body=${encodeURIComponent(mensaje)}`;
  window.location.href = mailto;
}
