//--------------------PesticideName-------------------------
let pesticideNode = document.getElementById("pesticideName");
function validation1(){
    pesticide = pesticideNode.value;

    if (pesticide == ""){
        pesticideNode.style.border= "3px solid red";
    }
    else{
        pesticideNode.style.border= "3px solid green";
    }
}

//----------------------personName--------------
let personNode = document.getElementById("personName");
function validation2(){
    person = personNode.value;

    if (person == ""){
        personNode.style.border= "3px solid red";
    }
    else{
        personNode.style.border= "3px solid green";
    }
}

//---------------Day---------------------------------
let dayNode = document.getElementById("Day");
function validation3(){
    day = dayNode.value;

    if (day == 0){
        dayNode.style.border= "3px solid red";
    }
    else{
        dayNode.style.border= "3px solid green";
    }
}
//---------------Month---------------------------------
let monthNode = document.getElementById("Month");
function validation4(){
    month = monthNode.value;

    if (month == 0){
        monthNode.style.border= "3px solid red";
    }
    else{
        monthNode.style.border= "3px solid green";
    }
}
//---------------Year---------------------------------
let yearNode = document.getElementById("Year");
function validation5(){
    year = yearNode.value;

    if (year == 0){
        yearNode.style.border= "3px solid red";
    }
    else{
        yearNode.style.border= "3px solid green";
    }
}