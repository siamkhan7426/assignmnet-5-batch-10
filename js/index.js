
// value Fucntion 

function getInputValue (id){
    return parseFloat(document.getElementById(id).value);

}

// coin function 
function DonateCoinvalue (id){
    return parseFloat(document.getElementById(id).innerText)
}

//  error function
function errorMessege (id){
   document.getElementById(id).classList.remove("hidden");
}

//  getIputvalue function call 
const noakhaliBtn = document.querySelector("#Noakhali-btn").addEventListener('click', function(){
        const noakhaliInputValue = getInputValue('noakhali-input');
        const donateNukhali = DonateCoinvalue('donate-nukhali');
        const nukhaliTotalBalacne = DonateCoinvalue('donate-balance');
        if(noakhaliInputValue <=0 || isNaN(noakhaliInputValue)){
           return errorMessege('income-error')
        }
        const totalBalance = nukhaliTotalBalacne - noakhaliInputValue;
        const balance = document.querySelector('#donate-balance').innerText = totalBalance
        const donateBalacne = donateNukhali + noakhaliInputValue ;
        const donateInnerBalance = document.querySelector('#donate-nukhali').innerText = donateBalacne;
        
       
})