

document.getElementById('btn-withdraw').addEventListener('click',function(){
   const withdrawField = document.getElementById('withdraw-field');
   const newWithdrawAmountString = withdrawField.value;
   const newWithdrawAmount = parseFloat(newWithdrawAmountString);
//    console.log(newWithdrawAmount);
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // console.log(previousWithdrawTotal);

    const currentWitdhdrtawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWitdhdrtawTotal;


    const balanceTotalElement = document.getElementById('balanc-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal =parseFloat(previousBalanceTotalString);
    // console.log(previousBalanceTotal)
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


    withdrawField.value ='';
})