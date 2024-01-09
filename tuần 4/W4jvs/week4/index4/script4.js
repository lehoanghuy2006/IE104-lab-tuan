
function info(){
    let weight = document.getElementById("w").value;
    let height = document.getElementById("h").value;
    let BMI = weight / (height * height);
    
    document.getElementById("kq-1").innerHTML = BMI.toFixed(2);


    if(BMI < 18.5){
        return document.getElementById("kq-2").innerHTML = "Dưới chuẩn";
    }
    else if(BMI >= 18.5 && BMI <= 24.9){
        return document.getElementById("kq-2").innerHTML = "Bình thường";
    }
    else if(BMI >= 25 && BMI <= 29.9){
        return document.getElementById("kq-2").innerHTML =  "Thừa cân";
    }
    else if(BMI >= 30 && BMI <= 34.9 && document.getElementById("loaituoi").value == "Trung niên"){
        return document.getElementById("kq-2").innerHTML = "BÉO PHÌ ĐỘ 1"; 
    }
    else if(BMI >= 30 && BMI <= 34.9 && document.getElementById("loaituoi").value == "Trung niên, Già lớn tuổi"){
        return document.getElementById("kq-2").innerHTML = "BÉO PHÌ ĐỘ 2"; 
    }
    else if(BMI >= 30 && BMI <= 34.9 && document.getElementById("loaituoi").value == "Già, lớn tuổi"){
        return document.getElementById("kq-2").innerHTML = "BÉO PHÌ ĐỘ 3"; 
    }
    else if(BMI >= 35 && BMI <= 39.9 && document.getElementById("loaituoi").value == "Trung niên"){
        return document.getElementById("kq-2").innerHTML = "BÉO PHÌ ĐỘ 2"; 
    }
    else if(BMI >= 35 && BMI <= 39.9 && document.getElementById("loaituoi").value == "Trung niên, Già lớn tuổi"){
        return document.getElementById("kq-2").innerHTML = "BÉO PHÌ ĐỘ 2"; 
    }
    else if(BMI >= 35 && BMI <= 39.9 && document.getElementById("loaituoi").value == "Già, lớn tuổi"){
        return document.getElementById("kq-2").innerHTML = "BÉO PHÌ ĐỘ 3"; 
    }
    else if(BMI >= 40){
        return document.getElementById("kq-2").innerHTML = "BÉO PHÌ ĐỘ 3";
    }
    if(document.getElementById("loaituoi").value == "Trung niên") {
        return document.getElementById("kq-3").innerHTML = "BÉO PHÌ ĐỘ 3";
    }

}