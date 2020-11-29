  
         function dis(val) { 
             document.getElementById("result").value+=val 
         } 
            
         function solve() { 
             let x = document.getElementById("result").value 
             let y = eval(x) 
             document.getElementById("result").value = y 
             resultation();
         } 
            
         function clr() { 
             document.getElementById("result").value = "" 
         } 

         function factorial() {  
            var v = document.getElementById("result").value;  
            var f = 1;
            for (var i = 1; i <= v; i++) f = f * i ; 
            document.getElementById("result").value = f
            resultation();
         } 

         //the outputted number will be logged in the console and it will be marked as odd or even
         function resultation(){
            var meter = document.getElementById("result").value
            if (meter % 2 == 0){
                console.log("Even number: " + meter); 
            }
            else {
                console.log("Odd number: " + meter);        
            }
         }