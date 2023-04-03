function checkDriverAge() {
  
  var age = parseInt(prompt("Olá, quantos anos você tem?"));

  if (age < 18){
    alert("Espere! Você é jovem demais para dirigir! Desligando sistema.");

  }else if(age === 18){
    alert("Parabéns pelo seu primeiro ano de direção! Aproveite e dirija com cuidado!");

  }else{
    alert("Ligando sistemas!");
  }

  return age;
}

//checkDriverAge();




function bonus(age) {
  if (age < 18){
    console.log("Espere! Você é jovem demais para dirigir! Desligando sistema.");

  }else if(age === 18){
    console.log("Parabéns pelo seu primeiro ano de direção! Aproveite e dirija com cuidado!");

  }else{
    console.log("Ligando sistemas!");
  }

  return age;
}



var checkDriverAge2 = function() {
  var age = parseInt(prompt("Olá, quantos anos você tem?"));

  if (age < 18){
    alert("Espere! Você é jovem demais para dirigir! Desligando sistema.");

  }else if(age === 18){
    alert("Parabéns pelo seu primeiro ano de direção! Aproveite e dirija com cuidado!");

  }else{
    alert("Ligando sistemas!");
  }

  return age;
};

checkDriverAge2();

