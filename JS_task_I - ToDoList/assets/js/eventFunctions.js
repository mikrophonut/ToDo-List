
/** 
 * Function to change opacity level in task element inside ToDo list 
 */
function doneBtn(){
    let doneBtn = document.querySelectorAll('#rowHolder > div > div + div[class^="green_bac"]');
    let divRow = document.querySelectorAll("#rowHolder > div")

    doneBtn.forEach((btn, index) => {

        btn.addEventListener("click" , () =>{
            divRow[index].style.opacity = "0.4";
        })
    })
}

/**
 * Function to delete task element inside ToDo list
 */
function delBtn(){
    let delBtn = document.querySelectorAll('#rowHolder > div > div + div[class^="red_bac"]');
    let divRow = document.querySelectorAll("#rowHolder > div");

    delBtn.forEach((btn, index) => {

        btn.addEventListener("click" , () =>{
            divRow[index].remove();
        })
    })
}
export {doneBtn, delBtn};