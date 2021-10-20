

function thongBao() {
    var diemChuan = document.getElementById("diemChuan").value;
    var diemMonA = document.getElementById("diemMonA").value;
    var diemMonB = document.getElementById("diemMonB").value;
    var diemMonC = document.getElementById("diemMonC").value;
    var diemArea = document.getElementById("diemArea").value;
    var diemDTuong = document.getElementById("diemDTuong").value;


    diemChuan = parseFloat(diemChuan);
    diemMonA = parseFloat(diemMonA);
    diemMonB = parseFloat(diemMonB);
    diemMonC = parseFloat(diemMonC);
    diemArea = parseFloat(diemArea);
    diemDTuong = parseFloat(diemDTuong);


    var tongDiem = diemMonA + diemMonB + diemMonC + diemArea + diemDTuong;

    document.getElementById("txtBtn").innerHTML = ktraTTuyen(tongDiem, diemChuan, diemMonA, diemMonB, diemMonC);

}


function ktraTTuyen(tongDiem, diemChuan, diemMonA, diemMonB, diemMonC){
    var result = "";
    if (tongDiem < diemChuan) {
        result = "Xin lỗi bạn không đủ điểm để trúng tuyển" + "<br>" + "<br>" + "Tổng số điểm đạt được là: " + tongDiem;
    } else if (diemMonA == 0) {
        result = "Xin lỗi! Điểm môn A của bạn không đủ điều kiện để trúng tuyển" + "<br>" + "<br>" + "Tổng số điểm đạt được là: " + tongDiem;
    } else if (diemMonB == 0) {
        result = "Xin lỗi! Điểm môn B của bạn không đủ điều kiện để trúng tuyển" + "<br>" + "<br>" + "Tổng số điểm đạt được là: " + tongDiem;
    } else if (diemMonC == 0) {
        result = "Xin lỗi! Điểm môn C của bạn không đủ điều kiện để trúng tuyển" + "<br>" + "<br>" + "Tổng số điểm đạt được là: " + tongDiem;
    } else {
        result = "Chúc mừng bạn đã trúng tuyển" + "<br>" + "<br>" + "Tổng số điểm đạt được là: " + tongDiem;
    }

    return result;
}

document.getElementById("btnThongbao").onclick = thongBao;

