function tinhTienDien() {
    var soKw = document.getElementById("soKw").value;
    soKw = parseFloat(soKw);

    var result = ktraSoKW(soKw);

    document.getElementById("txtBtn").innerHTML = "Tổng số tiền phải trả là: " + result;

}

function ktraSoKW(soKw) {
    var result = 0;
    if (0 < soKw && soKw <= 50) {
        result = soKw * 500;
    } else if (50 < soKw && soKw <= 100) {
        result = 50 * 500 + (soKw - 50) * 650;
    } else if (100 < soKw && soKw <= 150) {
        result = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    } else if (150 < soKw && soKw <= 200) {
        result = 50 * 500 + 50 * 650 + 50 * 850 + (soKw - 150) * 1100;
    } else if (soKw > 200) {
        result = 50 * 500 + 50 * 650 + 50 * 850 + 50 * 1100 + (soKw - 200) * 1300;
    } else {
        alert("số KW điện chưa chính xác");
    }

    return result;
}



document.getElementById("btnTinh").onclick = tinhTienDien;