const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Write Something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";

        let edit = document.createElement("edit");
        edit.innerHTML = "\u270E"
        
        li.appendChild(edit);
        li.appendChild(span);

        span.addEventListener("click", function(){
            li.remove()
        });

        edit.addEventListener("click", function(){
            if(li.isContentEditable){
                li.contentEditable = "false";
                edit.innerHTML = "\u270E";
            }else{
                li.contentEditable ="true";
                li.focus();
                edit.innerHTML = "\u2714";
            }
        });



        

        inputBox.value = '';

    }
}

