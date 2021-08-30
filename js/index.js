
const table = document.createElement("table")
document.querySelector(".aa").append(table)

async function ifsc(){ 

    let  value = document.querySelector("#searchbox").value
    
    if(value.length===0){
        document.querySelector("table").innerHTML= ""
        table.setAttribute("class" , "errortab")
        document.querySelector("table").innerHTML= `
        <h2 class='sorrymsg'>Sorry!! Something Went Wrong</h2>   `
    }
  
    const response = await fetch("https://ifsc.razorpay.com/" + value)
    if(response.ok){
        const data = await response.json()
        displayData(data)
    }else{
        document.querySelector("table").innerHTML= ""
        table.setAttribute("class" , "errortab")
        document.querySelector("table").innerHTML= `
        <h2 class='sorrymsg'> Sorry!! Something Went Wrong</h2>   `
       
    }

}



function displayData(value){
   
// for getting table heading row
    document.querySelector("table").innerHTML= ""
    let index = 0
    let array = ["BANK","IFSC","BRANCH","ADDRESS","CONTACT","CITY"]

    let thead = document.querySelector("table").insertRow(0)
    for(i=0; i<array.length; i++){
        let tableData = thead.insertCell(i)
        tableData.innerText = array[(i)]
        
    }
    index++;

    // logic to get teh table row added
     let tBody = document.querySelector("table").insertRow(index)
     for(i=0;i<array.length;i++){
         let tableData = tBody.insertCell(i)
         if(value[array[(i)]]== ""){
             tableData.innerHTML = "<span>Not Available</span>"
         }else{
            tableData.innerText = value[array[(i)]]
         }
        
     }
    
     index--;
    //  reset textbox value to blank
     document.querySelector("#searchbox").value =""
}


// WHEN USER PRESS ENTER KEY INSTEAD OF CLICKING SEARCH BUTTON

document.onkeydown = function entryKey(event){
    if(event.keyCode== 13){
        ifsc()
    }
}
// THE END //

