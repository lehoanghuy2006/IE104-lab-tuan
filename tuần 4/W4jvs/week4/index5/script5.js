function myFunction() {
    var pass = document.getElementById("pass");
    
    if (confirm("Bạn muốn hiện mật khẩu") == true && pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
  }