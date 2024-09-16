const container = document.getElementById("container");

const productos = [
  {
    categoria: "alimentos",
    nombre: "Complete Perro Adulto Raza Mediana y Grande 20kg",
    marca: "VitalCan",
    precio: 43000,
    stock: 10,
    imagen:
      "https://tiendademascotasar.vtexassets.com/arquivos/ids/157692-1200-auto?v=637780463415800000&width=1200&height=auto&aspect=true",
    descripcion:
      "La nutrición que tu perro necesita. Contribuye con la protección del sistema digestivo, el cuidado de las articulaciones y el mantenimiento de la piel sana y el pelaje brillante. Indicado para perros adultos de razas medianas (12 meses a 7 años) y grandes (18 meses a 7 años)",
    destacado: true,
  },
  {
    categoria: "alimentos",
    nombre: "Premium Perro Adulto 20kg",
    marca: "VitalCan",
    precio: 50300,
    stock: 5,
    imagen:
      "https://tiendademascotasar.vtexassets.com/arquivos/ids/157035-1200-auto?v=637735501505470000&width=1200&height=auto&aspect=true",
    descripcion:
      "Durante la vida adulta del perro cambian sus requerimientos y necesidades nutricionales. Premium Perro Adulto aporta niveles de energía adecuados para esta etapa, colabora con una piel sana, un pelo brilloso y además brinda ingredientes de gran digestibilidad.",
    destacado: true,
  },
  {
    categoria: "alimentos",
    nombre: "BelCan Perro Adulto 22kg",
    marca: "BelCan",
    precio: 33400,
    stock: 15,
    imagen:
      "https://tiendademascotasar.vtexassets.com/arquivos/ids/157010-1200-auto?v=637735501395400000&width=1200&height=auto&aspect=true",
    descripcion:
      "Indicado para perros a partir de los 12 meses de vida. Durante la etapa adulta de la vida, los requerimientos de los perros se modifican. Por eso Belcan Adultos aporta un equilibrio en su nutrición y cuenta con ingredientes para un pelo brillante.",
    destacado: false,
  },
  {
    categoria: "alimentos",
    nombre: "Sieger Perro Criadores 20kg",
    marca: "Sieger",
    precio: 73600,
    stock: 7,
    imagen:
      "https://tiendademascotasar.vtexassets.com/arquivos/ids/158580-1200-auto?v=637811528233800000&width=1200&height=auto&aspect=true",
    descripcion:
      "Sieger Criadores all in One aporta proteínas de alta calidad y grasas saludables clave para el óptimo crecimiento y mantenimiento de las funciones vitales del organismo. Por eso, su principal ingrediente es una fuente de proteínas de alta calidad y digestibilidad. Contiene una combinación de nutrientes que junto con la Glucosamina y Condroitín sulfato promueven la salud osteoarticular del perro.",
    destacado: false,
  },
  {
    categoria: "alimentos",
    nombre: "Hop Perro Adulto Raza Mediana y Grande 21kg",
    marca: "Hop",
    precio: 38300,
    stock: 10,
    imagen:
      "https://tiendademascotasar.vtexassets.com/arquivos/ids/156858-1200-auto?v=637733563882300000&width=1200&height=auto&aspect=true",
    descripcion:
      "Recomendado para perros adultos de más de 12 meses en el caso de razas grandes o 24 meses para razas gigantes. Alimento balanceado completo recomendado para perros adultos de : Labrador Retriever, Ovejero Alemán, Golden Retriever, Boyero de Berna, Cane Corso, Dogo de Burdeos, Bullmastiff y otras razas o perros mestizos que en su etapa adulta pesan más de 25 kg (razas grandes) o más de 50 kg (razas gigantes).",
    destacado: true,
  },
  {
    categoria: "alimentos",
    nombre: "Protemix Perro Adulto 21kg",
    marca: "Protemix",
    precio: 46200,
    stock: 10,
    imagen:
      "https://tiendademascotasar.vtexassets.com/arquivos/ids/156833-1200-auto?v=637733563720700000&width=1200&height=auto&aspect=true",
    descripcion:
      "Protemix es un alimento premium especialmente formulado para perros adultos de razas medianas y grandes. Este alimento está hecho con ingredientes cuidadosamente seleccionados para proporcionar una nutrición completa y equilibrada para tu mascota. Gracias a su óptima combinación de vitaminas, fibras y minerales, es un alimento de alto valor nutricional que maximiza la vitalidad de las mascotas. La fórmula de Protemix está diseñada para satisfacer las necesidades nutricionales específicas de los perros adultos, y contiene proteínas de alta calidad para mantener la masa muscular y la fuerza, así como carbohidratos y grasas saludables para proporcionar la energía necesaria para mantener un estilo de vida activo y saludable. Si estás buscando un alimento de calidad para tu mascota, considera probar Protemix.",
    destacado: false,
  },
  {
    categoria: "estetica",
    nombre: "Shampoo Blanco 250 cc",
    marca: "Osspret",
    precio: 12800,
    stock: 10,
    imagen:
      "https://tiendademascotasar.vtexassets.com/arquivos/ids/159010-1200-auto?v=637903165800600000&width=1200&height=auto&aspect=true",
    descripcion:
      "Da brillo y realza el color natural del pelaje. Tonalizador sin tintura. Hipoalergénico. No daña la piel. pH controlado. Dejar actuar 5 minutos. Se aconseja realizar 2 aplicaciones por baño. Componentes: Base de lavado suave.",
    destacado: true,
  },
  {
    categoria: "estetica",
    nombre: "Shampoo Tradicional Con Pulguicida Y Garrapaticida 250cc",
    marca: "Osspret",
    precio: 12700,
    stock: 10,
    imagen:
      "https://tiendademascotasar.vtexassets.com/arquivos/ids/158460-1200-auto?v=637780517130430000&width=1200&height=auto&aspect=true",
    descripcion:
      "Pulguicida y Garrapaticida con glicerina Solo para caninos mayores de 6 meses. Fuerte poder de volteo. Adecuada acción residual. Humectante, Pulguicida, Garrapaticida, Piojicida. Dejar actuar 10 a 15 minutos. Bañar 1 vez por semana. No usar en felinos. Diluir 1 en 5 de agua en el momento de uso. Componentes: Base de lavado normal. - Cipermetrina 0,25%, D-Limoneno y Glicerina.",
    destacado: true,
  },
  {
    categoria: "estetica",
    nombre: "Pasta Dental Pet o Dent 125grs",
    marca: "Porta",
    precio: 11200,
    stock: 10,
    imagen:
      "https://tiendademascotasar.vtexassets.com/arquivos/ids/159676-1200-auto?v=638116324851700000&width=1200&height=auto&aspect=true",
    descripcion:
      "Pasta Dental para gatos y perros pet o dent limpia dientes, mejora el aliento y combate la placa y el sarro de gatos y perros.",
    destacado: true,
  },
  {
    categoria: "estetica",
    nombre: "Pedigree Dentastix Raza Grande 3 unidades",
    marca: "Pedigree",
    precio: 2500,
    stock: 10,
    imagen:
      "https://tiendademascotasar.vtexassets.com/arquivos/ids/160431-1200-auto?v=638221780260130000&width=1200&height=auto&aspect=true",
    descripcion:
      "Los snacks se pueden utilizar para entrenar y recompensar, son perfectos para momentos de conexión, además de poder ayudar a mantener su salud oral. Por ello, nuestro DENTASTIX™ Adulto es un snack para el cuidado oral diario que ayudará a mantener las encías saludables. Clínicamente comprobado, ayuda a reducir la formación de placa y sarro dental gracias a su exclusiva forma de X, además de limpiar los dientes más difíciles de alcanzar​",
    destacado: true,
  },
  {
    categoria: "estetica",
    nombre: "Alicate Nail Clipper S 5,5cm x 12,5cm",
    marca: "Nail Clipper",
    precio: 22600,
    stock: 10,
    imagen:
      "https://tiendademascotasar.vtexassets.com/arquivos/ids/160887-1200-auto?v=638266673796270000&width=1200&height=auto&aspect=true",
    descripcion: "Color Azul/Negro 5,5×12,5 cm Con sistema de seguridad",
    destacado: false,
  },
  {
    categoria: "accesorio",
    nombre: "Buzo Polar Talle 70cm",
    precio: 7100,
    stock: 15,
    imagen:
      "https://tiendademascotasar.vtexassets.com/arquivos/ids/158295-1200-auto?v=637780516606600000&width=1200&height=auto&aspect=true",
    descripcion: "Buzo de calidad para abrigar a tu mascota.",
    destacado: false,
  },
  {
    categoria: "accesorio",
    nombre: "Comedero Ovejero 19cm Diámetro",
    precio: 2700,
    stock: 15,
    imagen:
      "https://tiendademascotasar.vtexassets.com/arquivos/ids/158994-1200-auto?v=637903157907630000&width=1200&height=auto&aspect=true",
    descripcion: "Comedero de plastico de 19cm de diametro.",
    destacado: true,
  },
  {
    categoria: "accesorio",
    nombre: "Bolsitas Higienicas 3 Unidades",
    precio: 2500,
    stock: 10,
    imagen:
      "https://tiendademascotasar.vtexassets.com/arquivos/ids/158411-1200-auto?v=637780516995970000&width=1200&height=auto&aspect=true",
    descripcion: "Color rojo. En rollo.",
    destacado: false,
  },
  {
    categoria: "accesorio",
    nombre: "Pelota Maciza n°2",
    precio: 2000,
    stock: 10,
    imagen:
      "https://tiendademascotasar.vtexassets.com/arquivos/ids/160338-1200-auto?v=638203595822430000&width=1200&height=auto&aspect=true",
    descripcion: "Pelota para que tu mascota juegue.",
    destacado: false,
  },
];

const productosDestacados = productos.filter((producto) => producto.destacado);

const dibujarSeccion = (productos, nombre) => {
  container.innerHTML = "";
  let h1 = document.createElement("h1");
  h1.textContent = nombre;
  h1.className = "text-center mt-3 text-light h1";
  container.appendChild(h1);
  productos.forEach((producto) => {
    const card = document.createElement("div");
    card.className = "card col-3 m-3";
    card.style = "width: 18rem;";
    let img = document.createElement("img");
    img.src = producto.imagen;
    img.alt = producto.nombre;
    img.className = "card-img-top";
    card.appendChild(img);
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    card.appendChild(cardBody);
    const h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.textContent = producto.nombre;
    cardBody.appendChild(h5);
    if (producto.marca) {
      const p = document.createElement("p");
      p.className = "card-text";
      p.textContent = producto.marca;
      cardBody.appendChild(p);
    }
    const h5Precio = document.createElement("h5");
    h5Precio.className = "card-title";
    h5Precio.textContent = `$ ${producto.precio}`;
    cardBody.appendChild(h5Precio);
    const a = document.createElement("a");
    a.className = "btn btn-primary";
    a.textContent = "Ver detalle";
    cardBody.appendChild(a);
    container.appendChild(card);
  });
};

const toggleActiveNav = (navSection) => {
  const navItems = document.querySelectorAll(".nav-link");
  navItems.forEach((navItem) => {
    navItem.classList.remove("active");
  });
  navSection.classList.add("active");
};

dibujarSeccion(productosDestacados, "Productos destacados");

const btnAlimentos = document.getElementById("Alimentos");

btnAlimentos.addEventListener("click", () => {
  const productosAlimentos = productos.filter(
    (producto) => producto.categoria === "alimentos"
  );
  dibujarSeccion(productosAlimentos, "Alimentos");
  toggleActiveNav(btnAlimentos);
});

const btnEstetica = document.getElementById("Estetica");

btnEstetica.addEventListener("click", () => {
  const productosEstetica = productos.filter(
    (producto) => producto.categoria === "estetica"
  );
  dibujarSeccion(productosEstetica, "Estética e Higiene");
  toggleActiveNav(btnEstetica);
});

const btnAccesorios = document.getElementById("Accesorios");

btnAccesorios.addEventListener("click", () => {
  const productosAccesorios = productos.filter(
    (producto) => producto.categoria === "accesorio"
  );
  dibujarSeccion(productosAccesorios, "Accesorios");
  toggleActiveNav(btnAccesorios);
});

const btnInicio = document.getElementById("inicio");

btnInicio.addEventListener("click", () => {
  dibujarSeccion(productosDestacados, "Productos destacados");
  toggleActiveNav(btnInicio);
});
