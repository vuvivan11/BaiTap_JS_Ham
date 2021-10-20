function tinhThue() {
    var fullName = document.getElementById("fullName").value;
    var total = document.getElementById("totalIncome").value;
    var people = document.getElementById("peopleDepend").value;


    total = parseInt(total);
    people = parseInt(people);


    var totalTax = total - 4000000 - people * 1600000;

    var result = tinhThueSub(totalTax);

    document.getElementById("txtBtn").innerHTML = "Số tiền đóng thuế của " + fullName + " là: " + result + " VND";
}

function tinhThueSub(totalTax) {
    var result = 0;
    if (0 < totalTax && totalTax <= 60000000) {
        result = totalTax * 0.05;
    } else if (60000000 < totalTax && totalTax <= 120000000) {
        result = totalTax * 0.1;
    } else if (120000000 < totalTax && totalTax <= 210000000) {
        result = totalTax * 0.15;
    } else if (210000000 < totalTax && totalTax <= 384000000) {
        result = totalTax * 0.2;
    } else if (384000000 < totalTax && totalTax <= 624000000) {
        result = totalTax * 0.25;
    } else if (624000000 < totalTax && totalTax <= 960000000) {
        result = totalTax * 0.3;
    } else {
        result = totalTax * 0.35;
    }

    return result;
}

document.getElementById("btnTinh").onclick = tinhThue;

// var total = 100;
// var people = 2;
// var totalTax = total - 40 - people * 1.6;
// console.log(totalTax);