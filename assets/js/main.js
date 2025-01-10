function validateForm() {
    let name = document.forms["myForm"]["nome"].value;
    if (name == "") {
      alert("Campo de Nome obrigatório");
      return false;
    }

    let lastname = document.forms["myForm"]["sobrenome"].value;
    if(sobrenome ==""){
        alert("Campo de sobrenome obrigatório")
        return false;
    }

  }