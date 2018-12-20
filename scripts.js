function obtenerNumeroAleatorio (minimo, maximo){
  return Math.floor(Math.random() * maximo) + minimo;
}

function comprobador(ganador){
  //Ganador con: 

  // COLUMNAS
  // la primera columna
  if($("#0").is(":visible") && $("#4").is(":visible") && $("#8").is(":visible") && $("#12").is(":visible")){
    alert("¡Ganaste con la primera columna llena!");
    ganador = true;
  }
  // La segunda columna
  else if($("#1").is(":visible") && $("#5").is(":visible") && $("#9").is(":visible") && $("#13").is(":visible")){
    alert("¡Ganaste con la segunda columna llena!");
    ganador = true;
  }
  // La tercera columna
  else if($("#2").is(":visible") && $("#6").is(":visible") && $("#10").is(":visible") && $("#14").is(":visible")){
    alert("¡Ganaste con la tercera columna llena!");
    ganador = true;
  }
  //La cuarta columna
  else if($("#3").is(":visible") && $("#7").is(":visible") && $("#10").is(":visible") && $("#15").is(":visible")){
    alert("¡Ganaste con la cuarta columna llena!");
    ganador = true;
  }

  // FILAS
  // la primera fila
  else if($("#0").is(":visible") && $("#1").is(":visible") && $("#2").is(":visible") && $("#3").is(":visible")){
    alert("¡Ganaste con la primera fila llena!");
    ganador = true;
  }
  // La segunda fila
  else if($("#4").is(":visible") && $("#5").is(":visible") && $("#6").is(":visible") && $("#7").is(":visible")){
    alert("¡Ganaste con la segunda fila llena!");
    ganador = true;
  }
  // La tercera fila
  else if($("#8").is(":visible") && $("#9").is(":visible") && $("#10").is(":visible") && $("#11").is(":visible")){
    alert("¡Ganaste con la tercera fila llena!");
    ganador = true;
  }
  // La cuarta fila
  else if($("#12").is(":visible") && $("#13").is(":visible") && $("#14").is(":visible") && $("#15").is(":visible")){
    alert("¡Ganaste con la cuarta fila llena!");
    ganador = true;
  }

  // ESPECIALES
  // Centro
  else if($("#5").is(":visible") && $("#6").is(":visible") && $("#9").is(":visible") && $("#10").is(":visible")){
    alert("¡Ganaste con el centro lleno!");
    ganador = true;
  }

  return ganador;
}

var cartas = document.getElementsByClassName("card");
var ganador = false;

for(var i = 0; i < cartas.length; i++){
  cartas[i].style.backgroundImage = "url(./baraja/" + obtenerNumeroAleatorio(1,54) + ".jpg)";
  $(cartas[i]).children().attr("id", i);//EXP
}

$(".card").click(function (){
  if(ganador !== true){
    $(this).children().toggle();
  }
  ganador = comprobador(ganador);
})

// $("#baraja").click(function (){
//   $(this).attr("src", "baraja/" + obtenerNumeroAleatorio(1,54) + ".jpg");
// })

var pasadas = [1];
// $(document).ready( function(){
    setInterval(function (){
      if(ganador !== true){
      //EXP
      var numeroAleatorio = obtenerNumeroAleatorio(1,54);
      while(pasadas.indexOf(numeroAleatorio) !== -1){
        var numeroAleatorio = obtenerNumeroAleatorio(1,54);
        if(pasadas.length == 54){
          return;
        }
      }
      pasadas.push(numeroAleatorio);
      //EXP
      $("#baraja").attr("src", "baraja/" + numeroAleatorio + ".jpg");
    }
    }, 2100);
// })

// TO-DO
// 1) Comprobar antes de declarar ganador que las cartas si hayan pasado
// 2) Poner un cronometro
// 3) Ajustar el tiempo
// 4) Poner musica y si es posible sonidos (ejemplo: !lotería!)
// 5) Agregar una seccion para ver las cartas pasadas