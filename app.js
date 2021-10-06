var initialPrice = document.querySelector("#initial-price");
var stocks = document.querySelector("#stock");
var currentPrice = document.querySelector("#current-price");
var checkButton = document.querySelector("#check-button");
var output = document.querySelector("#output");

// output.style.display = "none" ;
function calculateProfitAndLoss(costPrice,quantity,sellingPrice){

        if(sellingPrice<costPrice){
            var loss = (costPrice-sellingPrice)*quantity ;
            var lossPercentage = ((costPrice-sellingPrice)/costPrice)*100 ;
            output.style.display = "block";
            output.style.color = "#f50a16";
            output.innerText = "Your loss is : "+loss+" and loss percentage is : "+lossPercentage.toFixed(2)+"%";
        }else if(sellingPrice>costPrice){
            var profit = (sellingPrice-costPrice)*quantity ;
            var profitPercentage = ((sellingPrice-costPrice)/costPrice)*100 ;
            output.style.display = "block";
            output.style.color = "#26c40e";
            output.innerText = "Your profit is : "+profit+" and profit percentage is : "+profitPercentage.toFixed(2)+"%";
        }else{
            output.style.color ="black";
            output.innerText="No Pain-No Gain";
        }
        errorHandler();
}
function checkButtonHandler(){
        var cp = Number(initialPrice.value);
        var qty = Number(stocks.value);
        var sp = Number(currentPrice.value);

        calculateProfitAndLoss(cp,qty,sp);
}


function errorHandler() {
    let p = initialPrice.value;
    let q = stocks.value;
    let c = currentPrice.value; 
    output.style.display = "block";
    if(p === ''){
        output.style.color = "#f50a16";
        output.innerText = "Please Fill Out All Fields" ;
    }
    if(q === '') {
        output.style.color = "#f50a16";
        output.innerText = "Please Fill Out All Fields" ;    }
    if(q === '0') {
            output.style.color = "#f50a16";
            output.innerText = "Please Enter quantity of stocks" ;    }
    if(c === '') {
        output.style.color = "#f50a16";
        output.innerText = "Please Fill Out All Fields" ;    }
    if(p < 0 || q < 0 || c < 0) {
        output.style.color = "#f50a16";
        output.innerText = "Please Enter a Valid Number" ;    }
}
checkButton.addEventListener("click",checkButtonHandler);