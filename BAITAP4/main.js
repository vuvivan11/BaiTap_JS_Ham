
const XULY_CN = 4.5;
const DVU_CN = 20.5;
const THUE_CN = 7.5;
const XULY_DN = 15;
const DVU_DN = 75;
const THUE_DN = 50;

function xuatHoaDon() {
    var radioCaNhan = document.getElementById("caNhan").checked;
    var radioDN = document.getElementById("doanhNghiep").checked;
    var customer = document.getElementById("customer").value;
    var connection = document.getElementById("connection").value;
    var digital = document.getElementById("digital").value;

    connection = parseInt(connection);
    digital = parseInt(digital);

    var result = checkCustomer(radioCaNhan, radioDN,connection,digital);
    document.getElementById("txtBtn").innerHTML = "Tổng hóa đơn của mã khách hàng " + customer + " là: " + result + "$";
    
}

function checkCustomer(radioCaNhan, radioDN,connection,digital) {
    var result = 0;
    if (radioCaNhan) {
        result = XULY_CN + DVU_CN + digital * THUE_CN;
    } else if (radioDN) {
        if (0 < connection && connection <= 10) {
            result = XULY_DN + DVU_DN + digital * THUE_DN;
        } else {
            result = XULY_DN + DVU_DN + (connection - 10) * 5 + digital * THUE_DN ;
        }
    }

    return result;
}

document.getElementById("btnTinh").onclick = xuatHoaDon;






// kiểm tra loại khách hàng
function changeHandler(selector) {
    var checkRadio = selector.value;
    if (checkRadio === 'doanhnghiep') {
        document.getElementById('display').style.display = 'block';
    }
    if (checkRadio === 'canhan') {
        document.getElementById('display').style.display = 'none';
    }
}




