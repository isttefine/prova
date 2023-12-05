function informe(){
    let idade = parseFloat(document.getElementById("idade").value);

    if (idade>=0 && idade<=12){
       document.getElementById("informada").innerHTML = "É uma criança";
    }else if (idade>=12 && idade<=18){
        document.getElementById("informada").innerHTML = "Adolescente";
    }else if (idade>=18 && idade<=59){
            document.getElementById("informada").innerHTML = "Adulto";
    }else if (idade>=60){
        document.getElementById("informada").innerHTML = "Idoso";
    }         
    
}     
