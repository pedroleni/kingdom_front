const URL = "https://kingdom-api.vercel.app/api/consola/";

const URL2 ="https://kingdom-api.vercel.app/api/desarrolladora";

const URL3 ="https://kingdom-api.vercel.app/api/juego";

const URL4 ="https://kingdom-api.vercel.app/api/personaje";





const container = document.querySelector("#container");
const carrusel = document.querySelector(".carrusel");
const consola = document.querySelector(".consola");
const desarrolladora = document.querySelector(".desarrolladora");
const juego = document.querySelector(".juego");





let desarrolladoraList;
let juegoList;
let personajeList;
let consolaList;
// -------------DESARRROLADORA ---------------
const getDesarrolladora  = async () => {
    const raw = await fetch(URL2);
    const json = await raw.json();
    const desarrolladora =  json.data.desarrolladora;
   
    mapDesarrolladora(desarrolladora);
  };

const mapDesarrolladora = (desarrolladora) => {
  
    const mappedDesadorradora = desarrolladora.map((desarrolladora) => ({
      img: desarrolladora.imagen ,
      logo: desarrolladora.logo,
      name: desarrolladora.name,
      creacion: desarrolladora.creacion,
      empleados: desarrolladora.empleados,
      franquicias: desarrolladora.franquicias,
      ceo: desarrolladora.ceo,
    }));
    desarrolladoraList = mappedDesadorradora;
    generateHTMLDesarrolladora(desarrolladoraList);
    
  };


  const generateHTMLDesarrolladora = (desarrolladoraList) => {
    for (const item of desarrolladoraList) {
      const figure = `
      <figure class="figure_desarrolladora">

        <div class="imagenes_desarrolladora">
            <div class="logo_desa"><img src="${item.logo}"/></div>
            <div class="imagen_desarrolladora"><img src="${item.img}"/></div>
        </div>

        <div class="texto-info">
            <p><spam>CEO: </spam>${item.ceo}</p>
            <p><spam>Empleados: </spam>${item.empleados} empleados</p>
            <p><spam>Creacion: </spam>${item.creacion}</p>
        </div>

      </figure>
  
      `;
      paint(figure);
    }
  };



// ------------- JUEGO  ---------------
  const getJuego = async () => {
    const raw = await fetch(URL3);
    const json = await raw.json();
    const juego =  json.data.juego;
   
    mapJuego(juego);
  };

  const mapJuego = (juego) => {
  
    const mappedJuego = juego.map((juego) => ({
      imagen: juego.imagen ,
      logo: juego.logo,
      name:juego.name,
      fecha: juego.fecha,
      
    }));
    juegoList = mappedJuego;
    generateHTMLJuego(juegoList);
  };

  const generateHTMLJuego = (juegoList) => {
    for (const item of juegoList) {
      const figure = `
      <figure class="figure_juego">
        <div class=imagenes_juego">
            <div class=logo"><img src="${item.logo}"/></div>
            <div class="imagen_juego"><img src="${item.imagen}"/></div>
         </div>
        <div class="texto_juego">
            <p>${item.fecha}</p>
        </div>
      </figure>
  
      `;
      paint(figure);
    }
  };


  



// ------------- PERSONAJE  ---------------
  const getPersonaje = async () => {
    const raw = await fetch(URL4);
    const json = await raw.json();
    const personaje =  json.data.personaje;
    consola.style.display = "none";
    desarrolladora.style.display = "none";
    juego.style.display ="none" ;
    mapPersonaje(personaje);

  };

  const mapPersonaje = (personaje) => {
  
    const mappedPersonaje = personaje.map((personaje) => ({
      imagen: personaje.imagen ,
      name:personaje.name,
      origen: personaje.origen,
      papel: personaje.papel,
    }));
    personajeList = mappedPersonaje;
    generateHTMLPersonaje(personajeList);
  };

  const generateHTMLPersonaje = (personajeList) => {
    for (const item of personajeList) {
      const figure = `
      <figure class="figure_personaje">
        
        <div class="imagen_personaje"><img src="${item.imagen}"/></div>
        
        <div class="texto_personaje">
            <h1 class="titulo_personaje">${item.name}</h1>
            <p><spam>Origen: </spam>${item.origen}</p>
            <p><spam>Papel: </spam>${item.papel}</p>
            
        </div>
      </figure>
  
      `;
      paintCarrusel(figure);
    }
  };

// ------------- CONSOLA  ---------------
  const getConsola = async () => {
    const raw = await fetch(URL);
    const json = await raw.json();
    const consola =  json.data.consola;
   
    mapConsola(consola);
  };

  const mapConsola = (consola) => {
  
    const mappedConsola = consola.map((consola) => ({
      imagen: consola.imagen ,
      logo: consola.logo ,
      name:consola.name,
      fecha: consola.fecha,
      ventas: consola.ventas,
      creador: consola.creador,
    }));
    consolaList = mappedConsola;
    generateHTMLConsola(consolaList);
  };

  const generateHTMLConsola = (consolaList) => {
    for (const item of consolaList) {
      const figure = `
      <figure class="figure_consola">

        <div class="imagenes_consola">
            <div class="logo_consola"><img src="${item.logo}"/></div>
            <div class="imagen_consola"><img src="${item.imagen}"/></div>
        </div>

        <div class="texto-info_consola">
            <p><spam>Creacion: </spam>${item.fecha}</p>
            <p><spam>Ventas: </spam>${item.ventas}</p>
            <p><spam>Creador: </spam>${item.creador}</p>
        </div>

      </figure>
  
      `;
      paint(figure);
    }
  };



  // -------- PAINT ---------

  const paint = (figure) => {
    container.innerHTML += figure;
  };
  const  paintCarrusel = (figure) => {
    carrusel.innerHTML += figure;
  };



  const clearConsola = () =>{
    consola.style.display = "block";
    desarrolladora.style.display = "none";
    juego.style.display = "none" ;

  }

  const clearDesarrolladora = () =>{
    consola.style.display = "none";
    desarrolladora.style.display ="block";
    juego.style.display ="none";

  }

  const clearJuego = () =>{
    consola.style.display = "none";
    desarrolladora.style.display = "none";
    juego.style.display ="block" ;

  }



  
 


  // ----- ACCIONES DE LOS BOTONES ------ 


  const starDesarrolladora = () => {
    container.innerHTML = "";
    clearDesarrolladora();
    getDesarrolladora()
   

  }
  

  const starConsola = () => {
    container.innerHTML = "";
    clearConsola ();
    getConsola();
    
    
  }
  const starJuego = () => {
    container.innerHTML = "";
    clearJuego();
    getJuego();
   
    
  }


  getPersonaje();











  







