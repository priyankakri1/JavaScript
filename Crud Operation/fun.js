let inputs=document.querySelectorAll("input")
let button=document.querySelector("button")
let table=document.querySelector("table")
let row

function formHandle(){
    event.preventDefault()
    let name=inputs[0].value;
    let salary=inputs[1].value;
    let company=inputs[2].value;

    if(name==""||salary==""||company==""){
        alert("input fielda are empty")
    }
    else{
        let tr=document.createElement("tr")
        let td1=document.createElement("td")
        let td2=document.createElement("td")
        let td3=document.createElement("td")
        let td4=document.createElement("td")

        let update=document.createElement("button")
        let deletee=document.createElement("button")

        if(button.innerText=="Submit"){

            update.innerText="update"
            deletee.innerText="delete"

            td1.innerText=name
            td2.innerText=salary
            td3.innerText=company
            td4.appendChild(update)
            td4.appendChild(deletee)

            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            tr.appendChild(td4)

            table.appendChild(tr)

            update.addEventListener("click",()=>{
                inputs[0].value=name
                inputs[1].value=salary
                inputs[2].value=company

                button.innerText="Update"
                row=tr
          })

          deletee.addEventListener("click",()=>{
            tr.remove()
          })

          
          inputs[0].value=""
          inputs[1].value=""
          inputs[2].value=""
        }
        else if(button.innerText=="Update"){
            row.cells[0].innerText=name
            row.cells[1].innerText=salary
            row.cells[2].innerText=company

            inputs[0].value=""
            inputs[1].value=""
            inputs[2].value=""

        }
    }
}
function x(){
    let name=inputs[0].value;
    let salary=inputs[1].value;
    let company=inputs[2].value;

    if(name==""||salary==""||company==""){
        button.style.cursor="not-allowed"
        button.style.backgroundColor="red"
    }
    else{
        button.style.cursor="pointer"
        button.style.background="green"
    }
}
function y(){
    button.style.background="black"
    // button.style.display="inline"
}


   


        
  
