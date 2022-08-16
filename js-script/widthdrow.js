// Step 1
document.getElementById('btn-Withdrow').addEventListener('click', function(){
    // step 2
    const widthdroField = document.getElementById('btn-Withdrow');
    const totalWidthdrowString = widthdroField.value;
    const newWidthdrowField = parseFloat(totalWidthdrowString);

    // step 3
    widthdroField.value= '';
})