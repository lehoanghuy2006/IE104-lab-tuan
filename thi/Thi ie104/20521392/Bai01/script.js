function password(){
    let pass = document.getElementById("mk");
    
    if (pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
  }