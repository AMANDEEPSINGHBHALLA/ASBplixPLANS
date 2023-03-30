var i = 0;

while(i<3){
    document.getElementsByClassName("btnd")[i].addEventListener("click", ()=>{
        alert("Site is Under Maintenance. Sorry for inconvenience")
    })
    i++;
}