// spep 1
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step 2
    const depositField = document.getElementById('deposit-field');
    const depositFieldString = depositField.value;
    const newDepositAmount = parseFloat(depositFieldString);
   
    // step 3 clear
    depositField.value = '';

    // step 4
    const depositFieldElement =  document.getElementById('deposit-tatal');
    const depositeFiletotalString = depositFieldElement.innerText;
    const DepositeTotalAmount = parseFloat(depositeFiletotalString);
    console.log(DepositeTotalAmount)

    // step 5
    const newDepositeTotal = DepositeTotalAmount + newDepositAmount;
    depositFieldElement.innerText = newDepositeTotal;

    // step 6
    const BalanceElement = document.getElementById('Balance-tatal');
    const BalanceTotal = BalanceElement.innerText;
    const newBalanceTotal = parseFloat(BalanceTotal);

    // step 7
    const newBalanceTotalElement = newBalanceTotal+newDepositeTotal;
    BalanceElement.innerText = newBalanceTotalElement;
})