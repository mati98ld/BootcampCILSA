// Renderiza el navbar
document.addEventListener("DOMContentLoaded", function () {
  // Selecciono el div donde se debe cargar el navbar
  let navbar = document.getElementById("navbar");

  navbar.innerHTML = `<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <!-- Logo -->
    <a href="index.html" class="navbar-brand"
      ><img
        src="./img/logo-tecnostore.png"
        alt="Logo TecnoStore"
        height="60"
        width="60"
    /></a>
    <!-- Menu hamburguesa -->
    <button
      type="button"
      class="navbar-toggler"
      data-bs-toggle="collapse"
      data-bs-target="#navbarColor03"
      aria-controls="navbarColor03"
      aria-expanded="false"
      aria-label="Togge navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Menu de navegacion -->
    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a href="index.html" class="nav-link navbar-brand mb-0 h1"
            >Inicio</a
          >
        </li>
        <li class="nav-item">
          <a
            href="productos.html"
            class="nav-link navbar-brand mb-0 h1"
            >¡ Comprá acá !</a
          >
        </li>
      </ul>
    </div>
  </div>
</nav>`;
});

// Renderiza el navbar para la sección de productos
document.addEventListener("DOMContentLoaded", function () {
  // Selecciono el div donde se debe cargar el navbar
  let navbar = document.getElementById("navbar-prod");

  navbar.innerHTML = `<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <!-- Logo -->
    <a href="../../index.html" class="navbar-brand"
      ><img
        src="../../img/logo-tecnostore.png"
        alt="Logo TecnoStore"
        height="60"
        width="60"
    /></a>
    <!-- Menu hamburguesa -->
    <button
      type="button"
      class="navbar-toggler"
      data-bs-toggle="collapse"
      data-bs-target="#navbarColor03"
      aria-controls="navbarColor03"
      aria-expanded="false"
      aria-label="Togge navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Menu de navegacion -->
    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a href="../../index.html" class="nav-link navbar-brand mb-0 h1"
            >Inicio</a
          >
        </li>
        <li class="nav-item">
          <a
            href="../../productos.html"
            class="nav-link navbar-brand mb-0 h1"
            >¡ Comprá acá !</a
          >
        </li>
      </ul>
    </div>
  </div>
</nav>`;
});

// Renderiza el footer
document.addEventListener("DOMContentLoaded", function () {
  // Selecciono el div donde se debe cargar el navbar
  let footer = document.getElementById("footer");

  footer.innerHTML = `<footer class="footer-spacing bg-dark text-white pt-5 pb-4 mt-4">
  <div class="container text-center text-md-left">
    <div class="row text-center text-md-left">
      <div class="col-md-4 col-lg-4 col-xl-3 mx-auto mt-3">
        <h5 class="text-uppercase mb-4 font-weight-bold">Sobre Nosotros</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          delectus libero mollitia sunt voluptatum distinctio quaerat debitis.
          Omnis, voluptates distinctio. Sequi architecto nulla temporibus
          provident quos reprehenderit maiores aliquam magni!
        </p>
      </div>

      <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
        <h5 class="text-uppercase mb-4 font-weight-bold">Enlaces útiles</h5>
        <ul class="list-unstyled">
          <li>
            <a href="#" class="text-white" style="text-decoration: none"
              >Inicio</a
            >
          </li>
          <li>
            <a href="#" class="text-white" style="text-decoration: none"
              >Productos</a
            >
          </li>
          <li>
            <a href="#" class="text-white" style="text-decoration: none"
              >Contacto</a
            >
          </li>
        </ul>
      </div>

      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        <h5 class="text-uppercase mb-4 font-weight-bold">Contacto</h5>
        <p><i class="fas fa-home mr-3"></i> Calle Falsa 123, Ciudad</p>
        <p><i class="fas fa-envelope mr-3"></i> info@tecnostore.com</p>
        <p><i class="fas fa-phone mr-3"></i> +54 9 1234-5678</p>
      </div>
    </div>

    <!-- Social Media Icons -->
    <div class="row d-flex justify-content-center mt-3">
      <div class="col-md-8 col-lg-8">
        <ul class="list-unstyled list-inline text-center">
          <li class="list-inline-item">
            <a href="#" class="text-white">
              <i class="fab fa-facebook fa-lg mr-4"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="#" class="text-white">
              <i class="fab fa-twitter fa-lg mr-4"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="#" class="text-white">
              <i class="fab fa-instagram fa-lg mr-4"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="#" class="text-white">
              <i class="fab fa-linkedin fa-lg"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Copyright Section -->
    <div class="row mt-3">
      <div class="col-md-12 col-lg-12 text-center">
        <p class="text-white">
          © 2024 Todos los derechos reservados:
          <a href="#" class="text-white" style="text-decoration: none"
            ><strong>tecnostore.com</strong></a
          >
        </p>
      </div>
    </div>
  </div>
</footer>`;
});
