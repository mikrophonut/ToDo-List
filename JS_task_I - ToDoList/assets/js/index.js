import { doneBtn, delBtn } from "./eventFunctions.js";   

const body = document.querySelector('body');
body.style.textAlign = 'center';

const eventBtn = body.querySelector('div > button');
const rowHolder = body.querySelector('#rowHolder');

let counter = 1;
eventBtn.addEventListener('click', () => {
    
    let divRow = document.createElement('div');

    let divTextField = document.createElement('div');
    divTextField.setAttribute("class", 'white_bac dgrey');
    let textHolder = document.createElement("p");
    textHolder.innerHTML = `Task ${counter}`;

    divTextField.append(textHolder);
    divRow.setAttribute("key", textHolder.innerHTML);

    let doneDiv = document.createElement("div");
    doneDiv.setAttribute("class", 'green_bac white');
    let doneDivParagraph = document.createElement('p');
    doneDivParagraph.innerHTML = 'done';

    doneDiv.append(doneDivParagraph);

    let delDiv = document.createElement("div");
    delDiv.setAttribute("class", 'red_bac white');
    let delDivParagraph = document.createElement('p');
    delDivParagraph.innerHTML = 'del';

    delDiv.append(delDivParagraph);

    divRow.append(divTextField);
    divRow.append(doneDiv);
    divRow.append(delDiv);

    rowHolder.append(divRow);

    counter++;
    doneBtn();
    delBtn();
});