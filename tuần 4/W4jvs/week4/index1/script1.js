function giai_pt(){
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
         
    if (a == "" || b == ""){
        alert("Vui lòng nhập dữ liệu");
    }
    else{
        a = Number(a);
        b = Number(b);
        giai_pt_bac_nhat(a, b);
    }    
}
         
function giai_pt_bac_nhat(a, b){
    if (a == 0 && b == 0){
        return document.getElementById("kq").innerHTML = "Phương trình vô số nghiệm"
    }
    else if (a == 0 && b != 0){
        return document.getElementById("kq").innerHTML = "Phương trình vô nghiệm"
    }
    else{
        return document.getElementById("kq").innerHTML = "Phương trình có nghiệm x = " + (-b/a);
    }
}