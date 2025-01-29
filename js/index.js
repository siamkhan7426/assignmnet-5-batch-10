
// value Fucntion 
function getInputValue (id){
    return parseFloat(document.getElementById(id).value);
};

// coin function 
function DonateCoinvalue (id){
    return parseFloat(document.getElementById(id).innerText);
};
function hInnerText (id){
    return document.getElementById(id).innerText;
};


// innertext value function 
function setElementValue(id, value) {
    const element = document.getElementById(id);
     element.innerText = value;
}

// show modal function 
function showModal(id){
    document.getElementById(id).classList.remove("hidden");
    document.getElementById(id).classList.add("modal-open");
};
//  Hide modal function
function hideModal(id){
    document.getElementById(id).classList.add("hidden");
    document.getElementById(id).classList.remove("modal-open");
};

// // toggle button function remove
// function toggleColorBtnRemove (id){
//   const element = document.getElementById(id);
//   element.classList.add("border-none", "bg-[#B4F461]");
//   element.classList.remove("btn-outline");
// }
// // toggle button function add
// function toggleColorBtnRemove (id){
//     document.getElementById(id).classList.add("btn-outline");
//     document.getElementById(id).classList.remove("border-none", "bg-[#B4F461]");
// }

// modal close eventlistner
document.getElementById("modal-close").addEventListener("click", function () {
    hideModal("doantion-modal");
});


// function vitor 4ta parametter naw hoicha..! code not repit 
function setupDonation(buttonId, inputId, donateCoinId, balanceId, modalId, innerHt) {
    const button = document.querySelector(buttonId);
    button.addEventListener("click", function () {
        const inputValue = getInputValue(inputId);
        const donateCoin = DonateCoinvalue(donateCoinId);
        const totalBalance = DonateCoinvalue(balanceId);
        const hHtml = hInnerText(innerHt);
        console.log(hHtml)
        

        if (inputValue <= 0 || isNaN(inputValue)) {
            alert("invalid Donation Amount...!");
            return;
        }

        if (totalBalance - inputValue < 0) {
            alert("Insufficient balance!");
            return;
        }

        setElementValue(balanceId, totalBalance - inputValue);
        setElementValue(donateCoinId, donateCoin + inputValue);
        showModal(modalId);
        const historyDiv = document.createElement("div");
        historyDiv.innerHTML = `
          <div class="grid m-3 w-10/12  space-y-3 border border-solid border-gray-400 py-2 px-1 rounded-lg">
            <h4 class="text-xl font-bold">${inputValue} Taka is ${hHtml}</h4>
            <p class="text-lg text-gray-400">Date: ${new Date()}</p>
            </div>
          `
          const histroyCardSection = document.querySelector("#history-card-section");
          histroyCardSection.insertBefore(historyDiv, histroyCardSection.firstChild);
         
    });
   
}

// alda card jonno function agrumnet pass 
setupDonation("#noakhali-btn", "noakhali-input", "donate-nukhali","donate-balance", "doantion-modal", "n-title");
setupDonation("#btn-feni", "feni-input", "donate-feni","donate-balance", "doantion-modal", "f-title");
setupDonation("#quota-btn", "quota-input", "donate-quota","donate-balance", "doantion-modal", "q-title");

// toogle button and history card 
const historyBtn = document.querySelector("#history-button");
const donationBtn = document.querySelector("#donation-button");
historyBtn.addEventListener("click", function(){
    historyBtn.classList.add("border-none", "bg-[#B4F461]");
    donationBtn.classList.remove("border-none", "bg-[#B4F461]");
    document.querySelector("#card-section").classList.add("hidden")
    document.querySelector("#history-card-section").classList.remove("hidden");
})
donationBtn.addEventListener("click", function(){
    donationBtn.classList.add("border-none", "bg-[#B4F461]");
    historyBtn.classList.remove("border-none", "bg-[#B4F461]");
    document.querySelector("#card-section").classList.remove("hidden")
    document.querySelector("#history-card-section").classList.add("hidden");
})


    


