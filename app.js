var input1 = document.querySelector("#input1");
var input2 = document.querySelector("#input2");
var input3 = document.querySelector("#input3");
var checkButton = document.querySelector("#check-button");
var output = document.querySelector("#output");

var costPrice = Number(input1.value);
var stocks = Number(input2.value);
var sellingPrice = Number(input3.value);
// var costPrice = 20;
// var sellingPrice = 50 ;

function profit(sellingPrice,costPrice){
    return (sellingPrice-costPrice)
}
function profitPercentage(sellingPrice,costPrice){
    return (((sellingPrice-costPrice)/costPrice)*100)
}
function loss(sellingPrice,costPrice){
    return (costPrice-sellingPrice)
}
function lossPercentage(sellingPrice,costPrice){  
    return (((costPrice-sellingPrice)/costPrice)*100)
}
 
function calculateProfitAndLoss(){
    if(sellingPrice>costPrice){
    var profit = profit(sellingPrice,costPrice) ;
    var profitPercentage = profitPercentage(sellingPrice,costPrice) ;
    output.innerText = "profit : " + profit + "profitPercentage :" + profitPercentage ;
    }
    else if(costPrice>sellingPrice){
    var loss = loss(sellingPrice,costPrice) ;
    var lossPercentage = lossPercentage(sellingPrice,costPrice) ;
        output.innerText = "loss : " + loss + "lossPercentage : " + lossPercentage ;
    }
    else{
        output.innerText = "No Pain and No Gain";
    }
}



checkButton.addEventListener("click",calculateProfitAndLoss);