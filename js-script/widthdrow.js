// Step 1
document.getElementById('btn-Withdrow').addEventListener('click', function () {
    // step 2
    const widthdrowField = document.getElementById('widthdrow-field');
    const newWidthdrowFieldString = widthdrowField.value;
    const newWidthdrowField = parseFloat(newWidthdrowFieldString);
    // step 3
    widthdrowField.value = '';
    // step 4
    const widthdrowToral = document.getElementById('withdrow-tatal');
    const widthdrowToralString = widthdrowToral.innerText;
    const newWidthdrowTotal = parseFloat(widthdrowToralString);
    // steap 5
    const newWidthdrowTotalElement = newWidthdrowTotal + newWidthdrowField;
    widthdrowToral.innerText = newWidthdrowTotalElement;

    // step 6
    const balanceElement = document.getElementById('Balance-tatal');
    const previousnewTotalbalance = balanceElement.innerText;
    const CurrentTotalBalance = parseFloat('previousnewTotalbalance');

    // step 7

    const NewBalance = CurrentTotalBalance - newWidthdrowField;
    balanceElement.innerText = NewBalanceTotal;
})
