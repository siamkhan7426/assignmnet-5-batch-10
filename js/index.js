
// value Fucntion 
function getInputValue (id){
    return parseFloat(document.getElementById(id).value);
}


// coin function 
function DonateCoinvalue (id){
    return parseFloat(document.getElementById(id).innerText);
}
// innertext value function 
function setElementValue(id, value) {
    document.getElementById(id).innerText = value;
}
// show modal function 
function showModal(id){
    document.getElementById(id).classList.remove("hidden");
    document.getElementById(id).classList.add("modal-open");
}
//  Hide modal function
function hideModal(id){
    document.getElementById(id).classList.add("hidden");
    document.getElementById(id).classList.remove("modal-open");
}
//  error function
function errorMessege (id){
   return document.getElementById(id).classList.remove("hidden");
}
// Event listener for the modal close button
document.getElementById("modal-close").addEventListener("click", function(){
    hideModal("doantion-modal");
});

//  getIputvalue function call noakhali
const noakhaliBtn = document.querySelector("#Noakhali-btn").addEventListener('click', function(){
        const noakhaliInputValue = getInputValue('noakhali-input');
        const donateNukhali = DonateCoinvalue('donate-nukhali');
        const nukhaliTotalBalacne = DonateCoinvalue('donate-balance');
        if(noakhaliInputValue <=0 || isNaN(noakhaliInputValue)){
           return errorMessege('income-error')
        }
        if(nukhaliTotalBalacne - noakhaliInputValue <0){
            return alert("Invalid Balance");
        }
        setElementValue("donate-balance", nukhaliTotalBalacne - noakhaliInputValue);
        setElementValue("donate-nukhali", donateNukhali + noakhaliInputValue);

        // show modal function 
        showModal("doantion-modal");
});