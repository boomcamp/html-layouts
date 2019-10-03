var toggle_view = true;

function changeDisplay(){
    
    if(toggle_view){
        let objsel = Document.getElementsByClassName('content');

        objsel.style.display = "none";

        toggle = !toggle_view;

        alert(objsel);
    }

}





