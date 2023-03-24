function challenge1(){
    if(document.getElementById("subscribe").checked==true){
        console.log("I'm here!")
        document.querySelector("#emailDiv").style.display="block";
    }
    else{
        document.querySelector("#emailDiv").style.display="none";
    }
}