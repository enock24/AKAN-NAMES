var maleNames =["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames =["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


function getName(){
    var century = parseInt(document.getElementById("century").value);
    var year= parseInt(document.getElementById("year").value);
    var month = parseInt(document.getElementById("month").value);
    var day= parseInt(document.getElementById("day").value);
    var gender = document.getElementById("gender").value;

    var cc= century;
    var yy= year;
    var mm= month;
    var dd= day;
    var d =parseInt(((cc/4) -2*cc-1 ) + (5*yy/4) + (26*(mm+1)/10)+ dd ) % 7
 if ((month<= 0) || (month> 12)  ){
     alert("oops!! enter a valid month")

 } 
 else
 if ((day<=0) || (day>31)) {
     alert("oops!! enter a valid day")
     
 }
 else  
if ( gender === "Male")  {
     alert( "your akan name is " + maleNames[d])
    
} 
 else 
if (gender==="Female") {
     alert( "your akan name is " + femaleNames[d])
}
}