
// inicio funcion fecha de nacimiento
function sacarfecha(){
    var fecha = document.getElementById("fecha").value;
    for (var i=0; i<fecha.length; i++) {
      document.getElementById('impf').addEventListener(
        'click',
        function(){
        }
      );
      function sumfe(fecha){
        var sumafecha = fecha[0] + fecha[1] + fecha[2] + fecha[3] + fecha[5]  + fecha[6] + fecha[8] + fecha[9];
        if (!sumafecha) return 0;
              return (sumafecha).toString().split('').reduce((total, actual) => total + +actual, 0);
        }
        var nf = sumfe(fecha);
        var nfecha = (nf.toString().split('').reduce(function(r, n) { return r + parseInt(n) }, 0));   
    
       console.log(nfecha)
      }
    // En caso de 1
    if (nfecha == 1){
      function loadseven() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var ver = this.responseText
              document.getElementById("final").innerHTML += ver
          }
        };
        xhttp.open("GET", "textos/sendero/sen1.txt", true);
        xhttp.send();
        }
      loadseven()
                
    }
      // En caso de 2
      if (nfecha == 2){
        function loadseven() {
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              var ver = this.responseText
              document.getElementById("final").innerHTML += ver
            }
          };
          xhttp.open("GET", "textos/sendero/sen2.txt", true);
          xhttp.send();
          }
        loadseven()
                  
      }
      // En caso de 3
      if (nfecha == 3){
        function loadseven() {
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var ver = this.responseText
              document.getElementById("final").innerHTML += ver
            }
          };
          xhttp.open("GET", "textos/sendero/sen3.txt", true);
          xhttp.send();
          }
        loadseven()
                  
      }
      // En caso de 4
      if (nfecha == 4){
        function loadseven() {
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              var ver = this.responseText
              document.getElementById("final").innerHTML += ver
            }
          };
          xhttp.open("GET", "textos/sendero/sen4.txt", true);
          xhttp.send();
          }
        loadseven()
                  
      }
    // En caso de 5
    if (nfecha == 5){
      function loadseven() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var ver = this.responseText
            document.getElementById("final").innerHTML += ver
          }
        };
        xhttp.open("GET", "textos/sendero/sen5.txt", true);
        xhttp.send();
        }
      loadseven()
                
    }
    
      // En caso de 6
      if (nfecha == 6){
        function loadseven() {
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              var ver = this.responseText
              document.getElementById("final").innerHTML += ver
            }
          };
          xhttp.open("GET", "textos/sendero/sen6.txt", true);
          xhttp.send();
          }
        loadseven()
                  
      }
      // En caso de 7
      if (nfecha == 7){
        function loadseven() {
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              var ver = this.responseText
              document.getElementById("final").innerHTML += ver
            }
          };
          xhttp.open("GET", "textos/sendero/sen7.txt", true);
          xhttp.send();
          }
        loadseven()
                  
      }
    // En caso de 8
    if (nfecha == 8){
      function loadseven() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var ver = this.responseText
            document.getElementById("final").innerHTML += ver
          }
        };
        xhttp.open("GET", "textos/sendero/sen8.txt", true);
        xhttp.send();
        }
      loadseven()
                
    }
    // En caso de 9
    if (nfecha == 9){
      function loadseven() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var ver = this.responseText
            document.getElementById("final").innerHTML += ver
          }
        };
        xhttp.open("GET", "textos/sendero/sen9.txt", true);
        xhttp.send();
        }
      loadseven()
                
    }
    
    // En caso de 10
    if (nfecha == 10){
      function loadseven  () {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var ver = this.responseText
            document.getElementById("final").innerHTML += ver
          }
        };
        xhttp.open("GET", "textos/sendero/sen1.txt", true);
        xhttp.send();
        }
      loadseven()
                
    }
    
    // En caso de 11
    if (nf == 11){
      function loadseven() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var ver = this.responseText
            document.getElementById("final").innerHTML += ver
          }
        };
        xhttp.open("GET", "textos/sendero/sen11.txt", true);
        xhttp.send();
        }
      loadseven()
                
    }
    // En caso de 22
    if (nf == 22){
      function loadseven() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var ver = this.responseText
            document.getElementById("final").innerHTML += ver
          }
        };
        xhttp.open("GET", "textos/sendero/sen22.txt", true);
        xhttp.send();
        }
      loadseven()
                
    }

    }
    
    function limpiarfecha() {
          $("#fecha").val(" ");
          document.getElementById("final").innerHTML = ""
          document.getElementById("impf").innerHTML = ""                    
    }

    
    // fin funcion fecha de nacimiento
    
    
function limpiar() {
  $("#textname").val(" ");
  $("#cont").val(" ");
  // document.getElementById("cont").innerHTML = "";
  document.getElementById("mensaje").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("ok").innerHTML = "";
  document.getElementById("consonantes").innerHTML = "";
  
  
}
// visitante
window.onload = function()
{
  var caution = false
  function setCookie(name, value, expires, path, domain, secure) {
        var curCookie = name + "=" + escape(value) +
                ((expires) ? "; expires=" + expires.toGMTString() : "") +
                ((path) ? "; path=" + path : "") +
                ((domain) ? "; domain=" + domain : "") +
                ((secure) ? "; secure" : "")
        if (!caution || (name + "=" + escape(value)).length <= 4000)
                document.cookie = curCookie
        else
                if (confirm("La cookie no puede pesar mas de 4kb!"))
                        document.cookie = curCookie
}
function getCookie(name) {
        var prefix = name + "="
        var cookieStartIndex = document.cookie.indexOf(prefix)
        if (cookieStartIndex == -1)
                return null
        var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length)
        if (cookieEndIndex == -1)
                cookieEndIndex = document.cookie.length
        return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex))
}
function deleteCookie(name, path, domain) {
        if (getCookie(name)) {
                document.cookie = name + "=" +
                ((path) ? "; path=" + path : "") +
                ((domain) ? "; domain=" + domain : "") +
                "; expires=Thu, 01-Jan-70 00:00:01 GMT"
        }
}
function fixDate(date) {
        var base = new Date(0)
        var skew = base.getTime()
        if (skew > 0)
                date.setTime(date.getTime() - skew)
}
var now = new Date()
fixDate(now)
now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000)
var visits = getCookie("counter")
if (!visits)
        visits = 1
else
        visits = parseInt(visits) + 1
setCookie("counter", visits, now)
// document.write("Esta es tu visita numero: " + visits)
document.getElementById("visita").innerHTML += "Visitas: "+ visits;



  // $(function(){ $("footer").load("footer.html") });
  // var ran = Math.round(Math.random()*50000)
  // console.log(ran)
  // document.getElementById("visita").innerHTML += "visitante " + ran 
  
}
// visitante


