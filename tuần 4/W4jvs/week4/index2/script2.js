function info(){
    var a = document.getElementById('hoten').value;
    var b = document.getElementById('mathe').value;
    var c = document.getElementById('sodth').value;
    var d = document.getElementById('email').value;
    var e = document.getElementById('loaikh').value;
    var f = document.getElementById('mahd').value;
    var g = document.getElementById('motact').value;
  
    confirm("Họ và tên: " + a  + "\n" +
            "Mã thẻ: " + b + "\n" +
            "Số điện thoại: " + c + "\n" +
            "E-mail: " + d + "\n" +
            "Loại KH: " + e + "\n" +
            "Mã HĐ: " + f + "\n" +
            "Nội dung góp ý:" + g + "\n" );
  }