// array
const numerologia =[{letra: "a", cant:1 }, {letra: "b",cant:2 }, 
        {letra:"c", cant:3 }, { letra:"d", cant:4 }, 
        {letra: "e", cant:5 }, { letra: "f", cant:6 }, 
        {letra: "g", cant:7 }, {letra: "h", cant:8 }, 
        {letra: "i", cant:9 }, {letra: "j", cant:1 }, 
        {letra: "k", cant:11 }, {letra: "l", cant:3 },
        {letra: "m", cant:4 }, {letra: "n", cant:5 }, 
        {letra: "o", cant:6 }, {letra: "p", cant:7 }, 
        {letra: "q", cant:8 }, {letra: "r", cant:9 },
        { letra:"s", cant:1 }, {letra: "t", cant:2 },
        {letra:"u", cant:3 }, {letra: "v", cant:22 },
        {letra:"w", cant:5 }, {letra: "x", cant:6}, 
        {letra: "y", cant:7 }, {letra: "z", cant:8}
    ]
    
    // variables globales    
        var array = Object.keys(numerologia);
        
                
    // Fin del Array

function addnombre(){
    let add = document.getElementById("textname").value;
    // add=namex.toLowerCase();  
    var todoCorrecto = true;
    var formulario = document.form;
    // activar tecla de tab
    function checkPageFocus() {
      let body = document.querySelector('body');
   
      if (document.hasFocus()) {
        console.log('This document has the focus.');
        body.style.background = '#fff';
      }
      else {
        console.log( 'This document does not have the focus.');
        body.style.background = '#ccc';
      }
    }

    checkPageFocus()

    for (var i=0; i<formulario.length; i++) {
            if(formulario[i].type =='text') {
            if (formulario[i].value == null || formulario[i].value.length == 0 || /^\s*$/.test(formulario[i].value)){
                alert (formulario[i].name+ ' no puede estar vacío Ingrese un Nombre');
                todoCorrecto=false;
            }
            
        }
    
         if (todoCorrecto ==true) {
            var palabra = [];
            var cant=0;
            var cantv=0;
            var conso=0;
            var sumanombre=0;
            palabra.push(add[i]);
            console.log(add);
            for (var i=0; i<add.length; i++) {
            let validar = numerologia.find(item =>{
                return item.letra === add
                 
            });
        // ubicar palabras           
            let sumanombre = numerologia.map(item =>{
                 if (item.letra == add[i]){
                 return cant =cant + item.cant
                 }
            });
        // ubicar vocales
            let sumavoca = numerologia.map(item =>{
                    let result = add[i].match(/^[aeiouáéíóú]*$/i)
                    if (item.letra == result){  
                    console.log(cantv =cantv + item.cant)
                        
                    }
            });
       // ubicar consonantes
       let sumacon = numerologia.map(item =>{
        let result = add[i].match(/^[bcdfghjklmnpqrstvwxyz]*$/i)
        if (item.letra == result){
        return (conso =conso + item.cant);
            
        }
});     

           }
            // prueba de variables
               console.log(cant)
          }
          function comprobarnavegador(){
            // comprueba navegador
            if (typeof window.FileReader!=="undefined")
            {
              console.log("Soportado el File API")
            // 
            }
            else
            {
              console.log("No es soportado el File API")
            // 
            }}
           // fin comprueba navegador
           comprobarnavegador()
          //***********/mostrando resultados SUMA PALABRA COMPLETA
        document.getElementById('mensaje').addEventListener(
            'click',
            function(){
            }
        );
        function suma(cant){
        if (!cant) return 0;
            return (cant).toString().split('').reduce((total, actual) => total + +actual, 0);
        }
        var number = suma(cant);
        var enter = (number.toString().split('').reduce(function(r, n) { return r + parseInt(n) }, 0));   
        // document.getElementById('resultado').innerHTML += enter
        }
        
        //*****************Expresion Total en nombres *****************************************
    // OPCION 1
    if (enter == 1){
      function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var ver = this.responseText
              // console.log(ver);
           document.getElementById("resultado").innerHTML += ver
          }
        };
        xhttp.open("GET", "textos/expresiontotal/exp1.txt", true);
        xhttp.send();
        }
         
      loadDoc()
                
    }
    // OPCION 2
    if (enter == 2){
      function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var ver = this.responseText
            // console.log(ver);
         document.getElementById("resultado").innerHTML += ver
          }
        };
        xhttp.open("GET", "textos/expresiontotal/exp2.txt", true);
        xhttp.send();
        }
               
       loadDoc()
                
    }

    // OPCION 3
    if (enter == 3){
      function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var ver = this.responseText
            // console.log(ver);
         document.getElementById("resultado").innerHTML += ver
          }
        };
        xhttp.open("GET", "textos/expresiontotal/exp3.txt", true);
        xhttp.send();
        }
               
       loadDoc()
                
    }

    // OPCION 4
    if (enter == 4){
      function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var ver = this.responseText
            // console.log(ver);
         document.getElementById("resultado").innerHTML += ver
          }
        };
        xhttp.open("GET", "textos/expresiontotal/exp4.txt", true);
        xhttp.send();
        }
               
      loadDoc()
                
    }

    // OPCION 5
    if (enter == 5){
          function loadDoc() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                var ver = this.responseText
                // console.log(ver);
             document.getElementById("resultado").innerHTML += ver
              }
            };
            xhttp.open("GET", "textos/expresiontotal/exp5.txt", true);
            xhttp.send();
            }
                   
      loadDoc()
                    
        }

    // OPCION 6
    if (enter == 6){
      function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var ver = this.responseText
            // console.log(ver);
         document.getElementById("resultado").innerHTML += ver
          }
        };
        xhttp.open("GET", "textos/expresiontotal/exp6.txt", true);
        xhttp.send();
        }
               
      loadDoc()
                
    }
    
    // OPCION 7
    if (enter == 7){
      function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var ver = this.responseText
            // console.log(ver);
         document.getElementById("resultado").innerHTML += ver
          }
        };
        xhttp.open("GET", "textos/expresiontotal/exp7.txt", true);
        xhttp.send();
        }
               
      loadDoc()
                
    }
    
    // OPCION 8
    if (enter == 8){
      function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var ver = this.responseText
              // console.log(ver);
           document.getElementById("resultado").innerHTML += ver
          }
        };
        xhttp.open("GET", "textos/expresiontotal/exp8.txt", true);
        xhttp.send();
        }
               
      loadDoc()
                
    }
    
    // OPCION 9
    if (enter == 9){
      function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var ver = this.responseText
            // console.log(ver);
         document.getElementById("resultado").innerHTML += ver
          }
        };
        xhttp.open("GET", "textos/expresiontotal/exp9.txt", true);
        xhttp.send();
        }
               
      loadDoc()
                
    }
    // OPCION 11
    if (number == 11){
      function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var ver = this.responseText
            // console.log(ver);
         document.getElementById("resultado").innerHTML += ver
          }
        };
        xhttp.open("GET", "textos/expresiontotal/exp11.txt", true);
        xhttp.send();
        }
               
      loadDoc()
                
    }
    // OPCION 22
    if (number == 22){
      function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var ver = this.responseText
            // console.log(ver);
         document.getElementById("resultado").innerHTML += ver
          }
        };
        xhttp.open("GET", "textos/expresiontotal/exp22.txt", true);
        xhttp.send();
        }
      
      loadDoc()
                
    }
        
        //***********/IDEAL SUMA DE VOCALES*********************************************************
       function sumav(cantv){
            if (!cantv) return 0;
                return (cantv).toString().split('').reduce((total, actual) => total + +actual, 0);
        } 
        var numero = sumav(cantv);
        var tvo =  (numero.toString().split('').reduce(function(r, n) { return r + parseInt(n) }, 0));   
        // document.getElementById('ok').innerHTML += tvo;
        console.log(tvo);   
        
    // OPCION 1
    if (tvo == 1){
      function loadD() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var ver = this.responseText
            // console.log(ver);
         document.getElementById("ok").innerHTML += ver
          }
        };
        xhttp.open("GET", "textos/elideal/ideal1.txt", true);
        xhttp.send();
        }
        loadD()
    }

    // OPCION 2
    if (tvo == 2){
      function loadD() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var ver = this.responseText
            // console.log(ver);
         document.getElementById("ok").innerHTML += ver
          }
        };
        xhttp.open("GET", "textos/elideal/ideal2.txt", true);
        xhttp.send();
        }
        loadD()             
    }
  // OPCION 3
  if (tvo == 3){
    function loadD() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var ver = this.responseText
          // console.log(ver);
       document.getElementById("ok").innerHTML += ver
        }
      };
      xhttp.open("GET", "textos/elideal/ideal3.txt", true);
      xhttp.send();
      }
       loadD()
          
  }
// OPCION 4
if (tvo == 4){
  function loadD() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var ver = this.responseText
        // console.log(ver);
     document.getElementById("ok").innerHTML += ver
      }
    };
    xhttp.open("GET", "textos/elideal/ideal4.txt", true);
    xhttp.send();
    }
    loadD()         
}
// OPCION 5
if (tvo == 5){
  function loadD() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var ver = this.responseText
        // console.log(ver);
     document.getElementById("ok").innerHTML += ver
      }
    };
    xhttp.open("GET", "textos/elideal/ideal5.txt", true);
    xhttp.send();
    }
    loadD()
            
}
// OPCION 6
if (tvo == 6){
  function loadD() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var ver = this.responseText
        // console.log(ver);
     document.getElementById("ok").innerHTML += ver
      }
    };
    xhttp.open("GET", "textos/elideal/ideal6.txt", true);
    xhttp.send();
    }
    loadD()
            
}
// OPCION 7
if (tvo == 7){
  function loadD() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var ver = this.responseText
        // console.log(ver);
     document.getElementById("ok").innerHTML += ver
      }
    };
    xhttp.open("GET", "textos/elideal/ideal7.txt", true);
    xhttp.send();
    }
    loadD()
            
}

// OPCION 8
if (tvo == 8){
  function loadD() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var ver = this.responseText
        // console.log(ver);
     document.getElementById("ok").innerHTML += ver
      }
    };
    xhttp.open("GET", "textos/elideal/ideal8.txt", true);
    xhttp.send();
    }
    loadD()
            
}
// OPCION 9
if (tvo == 9){
  function loadD() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var ver = this.responseText
        // console.log(ver);
     document.getElementById("ok").innerHTML += ver
      }
    };
    xhttp.open("GET", "textos/elideal/ideal9.txt", true);
    xhttp.send();
    }
    loadD()
            
}
// OPCION 11
if (numero == 11){
  function loadD() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var ver = this.responseText
        // console.log(ver);
     document.getElementById("ok").innerHTML += ver
      }
    };
    xhttp.open("GET", "textos/elideal/ideal11.txt", true);
    xhttp.send();
    }
    loadD()
            
}
// OPCION 22
if (numero == 22){
  function loadD() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var ver = this.responseText
        // console.log(ver);
     document.getElementById("ok").innerHTML += ver
      }
    };
    xhttp.open("GET", "textos/elideal/ideal22.txt", true);
    xhttp.send();
    }
    loadD()
            
}




        //***********/SER LATENTE SUMA DE CONSONANTES*********************************************************
        function sumav(conso){
          if (!conso) return 0;
              return (conso).toString().split('').reduce((total, actual) => total + +actual, 0);
      } 
      var cons = sumav(conso);
      var tco =  (cons.toString().split('').reduce(function(r, n) { return r + parseInt(n) }, 0));   
      // document.getElementById('consonantes').innerHTML += tco;
      console.log(tco);   
      
  // OPCION 1
  if (tco == 1){
    function load() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var ver = this.responseText
            // console.log(ver);
            document.getElementById("consonantes").innerHTML += ver;    
        }
      };
      xhttp.open("GET", "textos/serlatente/latente1.txt", true);
      xhttp.send();
    }
     
      load()
                    
  }
// OPCION 2
if (tco == 2){
  function load() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var ver = this.responseText
          // console.log(ver);
          document.getElementById("consonantes").innerHTML += ver;    
      }
    };
    xhttp.open("GET", "textos/serlatente/latente2.txt", true);
    xhttp.send();
  }
   
    load()
                  
}

// OPCION 3
if (tco == 3){
  function load() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var ver = this.responseText
          // console.log(ver);
          document.getElementById("consonantes").innerHTML += ver;    
      }
    };
    xhttp.open("GET", "textos/serlatente/latente3.txt", true);
    xhttp.send();
  }
   
    load()
                  
}
// OPCION 4
if (tco == 4){
  function load() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var ver = this.responseText
          // console.log(ver);
          document.getElementById("consonantes").innerHTML += ver;    
      }
    };
    xhttp.open("GET", "textos/serlatente/latente4.txt", true);
    xhttp.send();
  }
   
    load()
                  
}
// OPCION 5
if (tco == 5){
  function load() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var ver = this.responseText
          // console.log(ver);
          document.getElementById("consonantes").innerHTML += ver;    
      }
    };
    xhttp.open("GET", "textos/serlatente/latente5.txt", true);
    xhttp.send();
  }
   
    load()
                  
}

   // OPCION 6
if (tco == 6){
  function load() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var ver = this.responseText
          // console.log(ver);
          document.getElementById("consonantes").innerHTML += ver;    
      }
    };
    xhttp.open("GET", "textos/serlatente/latente6.txt", true);
    xhttp.send();
  }
   
    load()
                  
}   

// OPCION 7
if (tco == 7){
  function load() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var ver = this.responseText
          // console.log(ver);
          document.getElementById("consonantes").innerHTML += ver;    
      }
    };
    xhttp.open("GET", "textos/serlatente/latente7.txt", true);
    xhttp.send();
  }
   
    load()
                  
}
// OPCION 8
if (tco == 8){
  function load() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var ver = this.responseText
          // console.log(ver);
          document.getElementById("consonantes").innerHTML += ver;    
      }
    };
    xhttp.open("GET", "textos/serlatente/latente8.txt", true);
    xhttp.send();
  }
   
    load()
                  
}
// OPCION 9
if (tco == 9){
  function load() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var ver = this.responseText
          // console.log(ver);
          document.getElementById("consonantes").innerHTML += ver;    
      }
    };
    xhttp.open("GET", "textos/serlatente/latente9.txt", true);
    xhttp.send();
  }
   
    load()
                  
}

// OPCION 11
if (tco == 11){
  function load() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var ver = this.responseText
          // console.log(ver);
          document.getElementById("consonantes").innerHTML += ver;    
      }
    };
    xhttp.open("GET", "textos/serlatente/latente11.txt", true);
    xhttp.send();
  }
   
    load()
                  
}

// OPCION 22
if (tco == 22){
  function load() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var ver = this.responseText
          // console.log(ver);
          document.getElementById("consonantes").innerHTML += ver;    
      }
    };
    xhttp.open("GET", "textos/serlatente/latente22.txt", true);
    xhttp.send();
  }
   
    load()
                  
}

}      


 // pestañas
$(document).ready(function() {

	//When page loads...
	$(".tab_content").hide(); //Hide all content
	$("ul.tabs li:first").addClass("active").show(); //Activate first tab
	$(".tab_content:first").show(); //Show first tab content

	//On Click Event
	$("ul.tabs li").click(function() {

		$("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content").hide(); //Hide all tab content

		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to
                // identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active ID content
		return false;
	});
});

 
// scroll
$(document).ready(function() {
    $('a[href^="#"]').click(function() {
      var destino = $(this.hash);
      if (destino.length == 0) {
        destino = $('a[name="' + this.hash.substr(1) + '"]');
      }
      if (destino.length == 0) {
        destino = $('html');
      }
      $('html, body').animate({ scrollTop: destino.offset().top }, 2000);
      return false;
    });
  });

// fin scroll
//    cambiar idioma
// $('button').on('click', function(){
                 
//     var lang = $(this).data('lang'); 
      
//     $('html').prop('lang', lang);
      
//   });
  


