

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
        
        document.getElementById("p1").innerHTML = `If you deposit <mark>${principal}</mark> `  ;
        document.getElementById("p2").innerHTML = `at an interest rate of <mark>${rate}</mark> `;
        document.getElementById("p3").innerHTML = `You will receive an amount of? <mark>${result}</mark> `;
        document.getElementById("p4").innerHTML = `in the year <mark>${years}</mark> `;        
      
}

function Optionselection(select){
    var chosen = select.options[select.selectedIndex]
    alert("years Chosen by you is " + chosen.value); 
}

