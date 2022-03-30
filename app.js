let inmueble = [
  {
    idInmueble: "1",
    direccion: "crr1 #1sur0",
    telefono: "111111",
    precio: 20000,
    estado: true,
  },
  {
    idInmueble: "2",
    direccion: "crr2 #1sur0",
    telefono: "222222",
    precio: 20000,
    estado: true,
  },
  {
    idInmueble: "3",
    direccion: "crr3 #1sur0",
    telefono: "333333",
    precio: 20000,
    estado: false,
  },
  {
    idInmueble: "4",
    direccion: "crr4 #1sur0",
    telefono: "444444",
    precio: 20000,
    estado: false,
  },
  {
    idInmueble: "5",
    direccion: "crr5 #1sur0",
    telefono: "555555",
    precio: 20000,
    estado: true,
  },
  {
    idInmueble: "6",
    direccion: "crr6 #1sur0",
    telefono: "666666",
    precio: 20000,
    estado: false,
  },
  {
    idInmueble: "7",
    direccion: "crr7 #1sur0",
    telefono: "777777",
    precio: 20000,
    estado: true,
  },
  {
    idInmueble: "8",
    direccion: "crr8 #1sur0",
    telefono: "888888",
    precio: 20000,
    estado: true,
  },
  {
    idInmueble: "9",
    direccion: "crr9 #1sur0",
    telefono: "999999",
    precio: 20000,
    estado: false,
  },
  {
    idInmueble: "10",
    direccion: "crr10 #1sur0",
    telefono: "101010101010",
    precio: 20000,
    estado: true,
  },
];

function respuesta(respu) {
  console.log(respu);
}

let comprobar = new Promise(function (myResolve, myReject) {
    
  let inmu = {
    idInmueble: "10",
    direccion: "crr10 #1sur0",
    telefono: "101010101010",
    precio: 200000000,
    estado: true,
  };
  
  if (!isNaN(inmu.idInmueble)) {
      
    if (inmu.direccion) {
        
      if (inmu.precio >= 100000000 && inmu.precio <= 500000000) {
        
        myResolve("OK");
      }
    }
    }else {
        console.log("ok")
      myReject("Error");
  } 
});


comprobar.then(
  function (value) {
     
    respuesta(value);
  },
  function (error) {
    
    respuesta(error);
  }
);
