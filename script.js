

var slider = document.getElementById("rate");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}



function compute(){    
      
        
        var principal;
        if ("principal" <= 0){
            alert("You should entered positive numbers")
        }
        else{
            principal= document.getElementById("principal").value
        }

        var rate = document.getElementById("rate").value
        var years = 2000+ parseInt(document.getElementById("years").value)
        var result = principal * (years-2000) * rate / 100
        
        document.getElementById("p1").innerHTML = "If you deposit " + "<strong>" + principal + "</strong> "  ;
        document.getElementById("p2").innerHTML = "at an interest rate of " + "<strong>" + rate + "</strong> ";
        document.getElementById("p3").innerHTML = "You will receive an amount of? " + "<strong>" + result + "</strong> ";
        document.getElementById("p4").innerHTML = "in the year " + "<strong>" + years + "</strong> "; 


        
        /* var slider = document.getElementById("rate");
        var output = document.getElementById("demo");
        output.innerHTML = slider.value;
        
        slider.oninput = function() {
          output.innerHTML = this.value;
        } */
                
}

function Optionselection(select){
    var chosen = select.options[select.selectedIndex]
    alert("years Chosen by you is " + chosen.value); 
}

var slider = document.getElementById("rate");
        var output = document.getElementById("demo");
        output.innerHTML = slider.value;
        
        slider.oninput = function() {
          output.innerHTML = this.value;
        }
              

        