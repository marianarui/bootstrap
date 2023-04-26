
console.log("Hola desde un script externo"); 
/*function changeColorToRed(){
    const refName = document.getElementById("name");
    refName.style.color = "red";
}
function changeColorToBlue(){
    const refName = document.getElementById("name");
    refName.style.color = "blue";
}
function changeColorToGreen(){
    const refName = document.getElementById("name");
    refName.style.color = "green";
}*/

function changeColorTo(color){
    const refName = getReferenceFullName();
    refName.style.color = color;
}

function getReferenceFullName(){
    return document.getElementById("name");
}

function changeColorParagraph(color, refObj){
    console.log(refObj);
    refObj.style.color = color;
}

function resetColors(){
   const refObjects = document.getElementsByClassName("text-color");
    console.log(refObjects); 
    for (let index = 0; index < refObjects.length; index++) {
        const element = refObjects[index];
        console.log(element);
        element.style.color = "purple";
        
    }
}
