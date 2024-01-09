function info(){
    var a = document.getElementById('hoten').value;
    var b = document.getElementById('sdt').value;
    var c = document.getElementById('dichvu').value;
    var d = document.getElementById('noidung').value;
    var e = document.getElementById('mail').value;
    var f = document.getElementById('diachi').value;
    var g = document.getElementById('ghichu').value;
  
    return document.getElementById("xuatthongtin").innerHTML 
        =   ("Họ và tên: " + a  + "\n" +
            "Số điện thoại: " + b + "\n" +
            "Dịch vụ: " + c + "\n" +
            "Nội dung: " + d + "\n" +
            "Email: " + e + "\n" +
            "Địa chỉ: " + f + "\n" +
            "Ghi chú:" + g + "\n" );
  }