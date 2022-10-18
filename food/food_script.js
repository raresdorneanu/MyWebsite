function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

$(document).ready(function () {
    $('.drop-down-show-hide').hide();
    $('#dropDown').on('change', function () {
        if (this.value == 'meal0') {
            $('.breakfast-container').hide();
            $('.lunch-container').hide();
            $('.dinner-container').hide();
        }
        else if (this.value == 'meal1') {
            $('.breakfast-container').show();
            $('.lunch-container').hide();
            $('.dinner-container').hide();
        }
        else if (this.value == 'meal2') {
            $('.lunch-container').show();
            $('.dinner-container').hide();
            $('.breakfast-container').hide();
        } else {
            $('.dinner-container').show();
            $('.lunch-container').hide();
            $('.breakfast-container').hide();
        }
    });
});

var inputWeight1 = document.getElementById('body-count-1')
var calculateButton1 = document.getElementById('calculate-calories-bf')
var changeText1 = document.querySelector('.must-eat-calories')
var fifty = document.querySelector('.fifty')
var hundred = document.querySelector('.hundred')
var hundredFifty = document.querySelector('.hundred-fifty')
var hundred2 = document.querySelector('.hundred2')
    calculateButton1.addEventListener('click', () => {
        if (inputWeight1.value >= 0 && inputWeight1.value <= 50) {
            fifty.style.display = 'block'
            hundred.style.display = 'none'
            hundredFifty.style.display = 'none'
            hundred2.style.display = 'none'
        } else if (inputWeight1.value > 50 && inputWeight1.value <= 100){
            fifty.style.display = 'none'
            hundred.style.display = 'block'
            hundredFifty.style.display = 'none'
            hundred2.style.display = 'none'
        }else if (inputWeight1.value > 100 && inputWeight1.value <= 150){
            fifty.style.display = 'none'
            hundred.style.display = 'none'
            hundredFifty.style.display = 'block'
            hundred2.style.display = 'none'
        }else if (inputWeight1.value > 150 && inputWeight1.value <= 200){
            fifty.style.display = 'none'
            hundred.style.display = 'none'
            hundredFifty.style.display = 'none'
            hundred2.style.display = 'block'
        }
    });







var lis1 = document.querySelectorAll('.bf-li')
var checkboxes1 = document.querySelectorAll('.cell-bf')
console.log(checkboxes1)
var showResult1 = document.querySelector('.show-result-bf')
var addValues1 = 0;
for (let i = 0; i < checkboxes1.length; i++) {
    checkboxes1[i].checked = false;
    console.log(checkboxes1[i].checked)
    checkboxes1[i].addEventListener('click', () => {
        if (checkboxes1[i].checked) {
            addValues1 = addValues1 + lis1[i].value
            showResult1.innerHTML = addValues1
        } else {
            addValues1 = addValues1 - lis1[i].value
            showResult1.innerHTML = addValues1
        }
    });

}



var lis2 = document.querySelectorAll('.lunch-li')
var checkboxes2 = document.querySelectorAll('.cell-lunch')
console.log(checkboxes2)
var showResult2 = document.querySelector('.show-result-lunch')
var addValues2 = 0;
for (let i = 0; i < checkboxes2.length; i++) {
    checkboxes2[i].checked = false;
    console.log(checkboxes2[i].checked)
    checkboxes2[i].addEventListener('click', () => {
        if (checkboxes2[i].checked) {
            addValues2 = addValues2 + lis2[i].value
            showResult2.innerHTML = addValues2
        } else {
            addValues2 = addValues2 - lis2[i].value
            showResult2.innerHTML = addValues2
        }
    });

}



var lis3 = document.querySelectorAll('.dinner-li')
var checkboxes3 = document.querySelectorAll('.cell-dinner')
var showResult3 = document.querySelector('.show-result-dinner')
var addValues3 = 0;
for (let i = 0; i < checkboxes3.length; i++) {
    checkboxes3[i].checked = false;
    checkboxes3[i].addEventListener('click', () => {
        if (checkboxes3[i].checked) {
            addValues3 = addValues3 + lis3[i].value
            showResult3.innerHTML = addValues3
        } else {
            addValues3 = addValues3 - lis3[i].value
            showResult3.innerHTML = addValues3
        }
    });
}










