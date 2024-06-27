function initial(){
    document.getElementById("Matrix").style.display = "block";
}

function reset(){
    const elements = document.getElementsByClassName("MovieContents");
    for(var i = 0;i<elements.length;i++){
        elements[i].style.display = "none";
    }
}

function pressed(name){
    reset();
    document.getElementById(name).style.display = "block";
}