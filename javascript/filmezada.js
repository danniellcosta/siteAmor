if (typeof(Storage) !== "undefined") {
    var salvarBotoes = document.querySelectorAll(".filme button");
    for (var i = 0; i < salvarBotoes.length; i++) {
      var tituloFilme = salvarBotoes[i].parentNode.querySelector("h2").innerText;
      var nota1 = localStorage.getItem(tituloFilme + "_nota1");
      var nota2 = localStorage.getItem(tituloFilme + "_nota2");
      var nota1Input = salvarBotoes[i].parentNode.querySelector("#nota1");
      var nota2Input = salvarBotoes[i].parentNode.querySelector("#nota");
      if (nota1 !== null) {
        nota1Input.value = nota1;
      }
      if (nota2 !== null) {
        nota2Input.value = nota2;
      }
      salvarBotoes[i].addEventListener("click", function(event) {
        var nota1 = parseFloat(this.parentNode.querySelector("#nota1").value);
        var nota2 = parseFloat(this.parentNode.querySelector("#nota").value);
        var tituloFilme = this.parentNode.querySelector("h2").innerText;
        localStorage.setItem(tituloFilme + "_nota1", nota1);
        localStorage.setItem(tituloFilme + "_nota2", nota2);
        alert("Notas salvas com sucesso!");
      });
    }
  } else {
    alert("Desculpe, o armazenamento local não é suportado neste navegador.");
  }
  
  
    // Verifica se há notas salvas no localStorage ao carregar a página
    window.onload = function() {
      var nota1_danniel = localStorage.getItem("nota1_danniel");
      var nota1_luisa = localStorage.getItem("nota1_luisa");
      if (nota1_danniel !== null) {
        document.getElementById("nota1-danniel").value = nota1_danniel;
      }
      if (nota1_luisa !== null) {
        document.getElementById("nota1-luisa").value = nota1_luisa;
      }
    }
  
    // Salva a nota de Danniel no localStorage quando ela é alterada
    document.getElementById("nota1-danniel").onchange = function() {
      var nota = document.getElementById("nota1-danniel").value;
      localStorage.setItem("nota1_danniel", nota);
    }
  
    // Salva a nota de Luisa no localStorage quando ela é alterada
    document.getElementById("nota1-luisa").onchange = function() {
      var nota = document.getElementById("nota1-luisa").value;
      localStorage.setItem("nota1_luisa", nota);
    }
  
    const salvarDanniel = document.getElementById("salvar1-danniel");
  salvarDanniel.addEventListener("click", () => {
    const notaDanniel = document.getElementById("nota1-danniel").value;
    localStorage.setItem("notaDanniel", notaDanniel);
    alert("Nota de Danniel salva com sucesso!");
  });
  
  const salvarLuisa = document.getElementById("salvar1-luisa");
  salvarLuisa.addEventListener("click", () => {
    const notaLuisa = document.getElementById("nota1-luisa").value;
    localStorage.setItem("notaLuisa", notaLuisa);
    alert("Nota de Luisa salva com sucesso!");
  });
  
  
  
  // selecionando os elementos HTML
  const inputNotaDanniel2 = document.querySelector("#nota2-danniel");
  const inputNotaLuisa2 = document.querySelector("#nota2-luisa");
  const botaoSalvarDanniel2 = document.querySelector("#salvar2-danniel");
  const botaoSalvarLuisa2 = document.querySelector("#salvar2-luisa");
  
  // identificadores únicos para as notas no localStorage
  const idNotaDanniel2 = "nota-danniel-2";
  const idNotaLuisa2 = "nota-luisa-2";
  
  // função para armazenar as notas no localStorage
  function salvarNotas() {
    localStorage.setItem(idNotaDanniel2, inputNotaDanniel2.value);
    localStorage.setItem(idNotaLuisa2, inputNotaLuisa2.value);
    alert("Notas salvas com sucesso!");
  }
  
  // adicionando o ouvinte de eventos "click" aos botões de salvar
  botaoSalvarDanniel2.addEventListener("click", salvarNotas);
  botaoSalvarLuisa2.addEventListener("click", salvarNotas);
  
  // função para preencher os inputs com as notas salvas no localStorage
  function carregarNotas() {
    const notaDannielSalva = localStorage.getItem(idNotaDanniel2);
    if (notaDannielSalva) {
      inputNotaDanniel2.value = notaDannielSalva;
    }
    
    const notaLuisaSalva = localStorage.getItem(idNotaLuisa2);
    if (notaLuisaSalva) {
      inputNotaLuisa2.value = notaLuisaSalva;
    }
  }
  
  // adicionando o ouvinte de eventos "load" ao objeto window
  window.addEventListener("load", carregarNotas);
   
  
  
  const input3Danniel = document.getElementById("nota3-danniel");
  const input3Luisa = document.getElementById("nota3-luisa");
  
  input3Danniel.value = localStorage.getItem("nota3Danniel");
  input3Luisa.value = localStorage.getItem("nota3Luisa");
  
  input3Danniel.addEventListener("change", function() {
    localStorage.setItem("nota3Danniel", input3Danniel.value);
    alert("Nota de Danniel salva!");
  });
  
  input3Luisa.addEventListener("change", function() {
    localStorage.setItem("nota3Luisa", input3Luisa.value);
    alert("Nota de Luisa salva!");
  });


  // Selecionar os elementos HTML
const nota4DannielInput = document.querySelector("#nota4-danniel");
const nota4LuisaInput = document.querySelector("#nota4-luisa");
const salvar4DannielButton = document.querySelector("#salvar4-danniel");
const salvar4LuisaButton = document.querySelector("#salvar4-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota4DannielSalva = localStorage.getItem("nota4-danniel");
let nota4LuisaSalva = localStorage.getItem("nota4-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota4DannielSalva !== null) {
  nota4DannielInput.value = nota4DannielSalva;
}
if (nota4LuisaSalva !== null) {
  nota4LuisaInput.value = nota4LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar4DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota4-danniel", nota4DannielInput.value);
});
salvar4LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota4-luisa", nota4LuisaInput.value);
});

function p6(){
    alert("nota salva com sucesso");
}

// Selecionar os elementos HTML
const nota5DannielInput = document.querySelector("#nota5-danniel");
const nota5LuisaInput = document.querySelector("#nota5-luisa");
const salvar5DannielButton = document.querySelector("#salvar5-danniel");
const salvar5LuisaButton = document.querySelector("#salvar5-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota5DannielSalva = localStorage.getItem("nota5-danniel");
let nota5LuisaSalva = localStorage.getItem("nota5-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota5DannielSalva !== null) {
  nota5DannielInput.value = nota5DannielSalva;
}
if (nota5LuisaSalva !== null) {
  nota5LuisaInput.value = nota5LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar5DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota5-danniel", nota5DannielInput.value);
});
salvar5LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota5-luisa", nota5LuisaInput.value);
});


const nota6DannielInput = document.querySelector("#nota6-danniel");
const nota6LuisaInput = document.querySelector("#nota6-luisa");
const salvar6DannielButton = document.querySelector("#salvar6-danniel");
const salvar6LuisaButton = document.querySelector("#salvar6-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota6DannielSalva = localStorage.getItem("nota6-danniel");
let nota6LuisaSalva = localStorage.getItem("nota6-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota6DannielSalva !== null) {
  nota6DannielInput.value = nota6DannielSalva;
}
if (nota6LuisaSalva !== null) {
  nota6LuisaInput.value = nota6LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar6DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota6-danniel", nota6DannielInput.value);
});
salvar6LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota6-luisa", nota6LuisaInput.value);
});


const nota7DannielInput = document.querySelector("#nota7-danniel");
const nota7LuisaInput = document.querySelector("#nota7-luisa");
const salvar7DannielButton = document.querySelector("#salvar7-danniel");
const salvar7LuisaButton = document.querySelector("#salvar7-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota7DannielSalva = localStorage.getItem("nota7-danniel");
let nota7LuisaSalva = localStorage.getItem("nota7-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota7DannielSalva !== null) {
  nota7DannielInput.value = nota7DannielSalva;
}
if (nota7LuisaSalva !== null) {
  nota7LuisaInput.value = nota7LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar7DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota7-danniel", nota7DannielInput.value);
});
salvar7LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota7-luisa", nota7LuisaInput.value);
});



const nota8DannielInput = document.querySelector("#nota8-danniel");
const nota8LuisaInput = document.querySelector("#nota8-luisa");
const salvar8DannielButton = document.querySelector("#salvar8-danniel");
const salvar8LuisaButton = document.querySelector("#salvar8-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota8DannielSalva = localStorage.getItem("nota8-danniel");
let nota8LuisaSalva = localStorage.getItem("nota8-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota8DannielSalva !== null) {
  nota8DannielInput.value = nota8DannielSalva;
}
if (nota8LuisaSalva !== null) {
  nota8LuisaInput.value = nota8LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar8DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota8-danniel", nota8DannielInput.value);
});
salvar8LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota8-luisa", nota8LuisaInput.value);
});



const nota9DannielInput = document.querySelector("#nota9-danniel");
const nota9LuisaInput = document.querySelector("#nota9-luisa");
const salvar9DannielButton = document.querySelector("#salvar9-danniel");
const salvar9LuisaButton = document.querySelector("#salvar9-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota9DannielSalva = localStorage.getItem("nota9-danniel");
let nota9LuisaSalva = localStorage.getItem("nota9-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota9DannielSalva !== null) {
  nota9DannielInput.value = nota9DannielSalva;
}
if (nota9LuisaSalva !== null) {
  nota9LuisaInput.value = nota9LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar9DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota9-danniel", nota9DannielInput.value);
});
salvar9LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota9-luisa", nota9LuisaInput.value);
});

const nota10DannielInput = document.querySelector("#nota10-danniel");
const nota10LuisaInput = document.querySelector("#nota10-luisa");
const salvar10DannielButton = document.querySelector("#salvar10-danniel");
const salvar10LuisaButton = document.querySelector("#salvar10-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota10DannielSalva = localStorage.getItem("nota10-danniel");
let nota10LuisaSalva = localStorage.getItem("nota10-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota10DannielSalva !== null) {
  nota10DannielInput.value = nota10DannielSalva;
}
if (nota10LuisaSalva !== null) {
  nota10LuisaInput.value = nota10LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar10DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota10-danniel", nota10DannielInput.value);
});
salvar10LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota10-luisa", nota10LuisaInput.value);
});


const nota11DannielInput = document.querySelector("#nota11-danniel");
const nota11LuisaInput = document.querySelector("#nota11-luisa");
const salvar11DannielButton = document.querySelector("#salvar11-danniel");
const salvar11LuisaButton = document.querySelector("#salvar11-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota11DannielSalva = localStorage.getItem("nota11-danniel");
let nota11LuisaSalva = localStorage.getItem("nota11-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota11DannielSalva !== null) {
  nota11DannielInput.value = nota11DannielSalva;
}
if (nota11LuisaSalva !== null) {
  nota11LuisaInput.value = nota11LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar11DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota11-danniel", nota11DannielInput.value);
});
salvar11LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota11-luisa", nota11LuisaInput.value);
});


const nota12DannielInput = document.querySelector("#nota12-danniel");
const nota12LuisaInput = document.querySelector("#nota12-luisa");
const salvar12DannielButton = document.querySelector("#salvar12-danniel");
const salvar12LuisaButton = document.querySelector("#salvar12-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota12DannielSalva = localStorage.getItem("nota12-danniel");
let nota12LuisaSalva = localStorage.getItem("nota12-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota12DannielSalva !== null) {
  nota12DannielInput.value = nota12DannielSalva;
}
if (nota12LuisaSalva !== null) {
  nota12LuisaInput.value = nota12LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar12DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota12-danniel", nota12DannielInput.value);
});
salvar12LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota12-luisa", nota12LuisaInput.value);
});


const nota13DannielInput = document.querySelector("#nota13-danniel");
const nota13LuisaInput = document.querySelector("#nota13-luisa");
const salvar13DannielButton = document.querySelector("#salvar13-danniel");
const salvar13LuisaButton = document.querySelector("#salvar13-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota13DannielSalva = localStorage.getItem("nota13-danniel");
let nota13LuisaSalva = localStorage.getItem("nota13-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota13DannielSalva !== null) {
  nota13DannielInput.value = nota13DannielSalva;
}
if (nota13LuisaSalva !== null) {
  nota13LuisaInput.value = nota13LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar13DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota13-danniel", nota13DannielInput.value);
});
salvar13LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota13-luisa", nota13LuisaInput.value);
});


const nota14DannielInput = document.querySelector("#nota14-danniel");
const nota14LuisaInput = document.querySelector("#nota14-luisa");
const salvar14DannielButton = document.querySelector("#salvar14-danniel");
const salvar14LuisaButton = document.querySelector("#salvar14-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota14DannielSalva = localStorage.getItem("nota14-danniel");
let nota14LuisaSalva = localStorage.getItem("nota14-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota14DannielSalva !== null) {
  nota14DannielInput.value = nota14DannielSalva;
}
if (nota14LuisaSalva !== null) {
  nota14LuisaInput.value = nota14LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar14DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota14-danniel", nota14DannielInput.value);
});
salvar14LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota14-luisa", nota14LuisaInput.value);
});


const nota15DannielInput = document.querySelector("#nota15-danniel");
const nota15LuisaInput = document.querySelector("#nota15-luisa");
const salvar15DannielButton = document.querySelector("#salvar15-danniel");
const salvar15LuisaButton = document.querySelector("#salvar15-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota15DannielSalva = localStorage.getItem("nota15-danniel");
let nota15LuisaSalva = localStorage.getItem("nota15-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota15DannielSalva !== null) {
  nota15DannielInput.value = nota15DannielSalva;
}
if (nota15LuisaSalva !== null) {
  nota15LuisaInput.value = nota15LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar15DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota15-danniel", nota15DannielInput.value);
});
salvar15LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota15-luisa", nota15LuisaInput.value);
});


const nota16DannielInput = document.querySelector("#nota16-danniel");
const nota16LuisaInput = document.querySelector("#nota16-luisa");
const salvar16DannielButton = document.querySelector("#salvar16-danniel");
const salvar16LuisaButton = document.querySelector("#salvar16-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota16DannielSalva = localStorage.getItem("nota16-danniel");
let nota16LuisaSalva = localStorage.getItem("nota16-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota16DannielSalva !== null) {
  nota16DannielInput.value = nota16DannielSalva;
}
if (nota16LuisaSalva !== null) {
  nota16LuisaInput.value = nota16LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar16DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota16-danniel", nota16DannielInput.value);
});
salvar16LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota16-luisa", nota16LuisaInput.value);
});


const nota17DannielInput = document.querySelector("#nota17-danniel");
const nota17LuisaInput = document.querySelector("#nota17-luisa");
const salvar17DannielButton = document.querySelector("#salvar17-danniel");
const salvar17LuisaButton = document.querySelector("#salvar17-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota17DannielSalva = localStorage.getItem("nota17-danniel");
let nota17LuisaSalva = localStorage.getItem("nota17-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota17DannielSalva !== null) {
  nota17DannielInput.value = nota17DannielSalva;
}
if (nota17LuisaSalva !== null) {
  nota17LuisaInput.value = nota17LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar17DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota17-danniel", nota17DannielInput.value);
});
salvar17LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota17-luisa", nota17LuisaInput.value);
});


const nota18DannielInput = document.querySelector("#nota18-danniel");
const nota18LuisaInput = document.querySelector("#nota18-luisa");
const salvar18DannielButton = document.querySelector("#salvar18-danniel");
const salvar18LuisaButton = document.querySelector("#salvar18-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota18DannielSalva = localStorage.getItem("nota18-danniel");
let nota18LuisaSalva = localStorage.getItem("nota18-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota18DannielSalva !== null) {
  nota18DannielInput.value = nota18DannielSalva;
}
if (nota18LuisaSalva !== null) {
  nota18LuisaInput.value = nota18LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar18DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota18-danniel", nota18DannielInput.value);
});
salvar18LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota18-luisa", nota18LuisaInput.value);
});

const nota19DannielInput = document.querySelector("#nota19-danniel");
const nota19LuisaInput = document.querySelector("#nota19-luisa");
const salvar19DannielButton = document.querySelector("#salvar19-danniel");
const salvar19LuisaButton = document.querySelector("#salvar19-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota19DannielSalva = localStorage.getItem("nota19-danniel");
let nota19LuisaSalva = localStorage.getItem("nota19-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota19DannielSalva !== null) {
  nota19DannielInput.value = nota19DannielSalva;
}
if (nota19LuisaSalva !== null) {
  nota19LuisaInput.value = nota19LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar19DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota19-danniel", nota19DannielInput.value);
});
salvar19LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota19-luisa", nota19LuisaInput.value);
});

const nota20DannielInput = document.querySelector("#nota20-danniel");
const nota20LuisaInput = document.querySelector("#nota20-luisa");
const salvar20DannielButton = document.querySelector("#salvar20-danniel");
const salvar20LuisaButton = document.querySelector("#salvar20-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota20DannielSalva = localStorage.getItem("nota20-danniel");
let nota20LuisaSalva = localStorage.getItem("nota20-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota20DannielSalva !== null) {
  nota20DannielInput.value = nota20DannielSalva;
}
if (nota20LuisaSalva !== null) {
  nota20LuisaInput.value = nota20LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar20DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota20-danniel", nota20DannielInput.value);
});
salvar20LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota20-luisa", nota20LuisaInput.value);
});

const nota21DannielInput = document.querySelector("#nota21-danniel");
const nota21LuisaInput = document.querySelector("#nota21-luisa");
const salvar21DannielButton = document.querySelector("#salvar21-danniel");
const salvar21LuisaButton = document.querySelector("#salvar21-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota21DannielSalva = localStorage.getItem("nota21-danniel");
let nota21LuisaSalva = localStorage.getItem("nota21-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota21DannielSalva !== null) {
  nota21DannielInput.value = nota21DannielSalva;
}
if (nota21LuisaSalva !== null) {
  nota21LuisaInput.value = nota21LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar21DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota21-danniel", nota21DannielInput.value);
});
salvar21LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota21-luisa", nota21LuisaInput.value);
});
const nota22DannielInput = document.querySelector("#nota22-danniel");
const nota22LuisaInput = document.querySelector("#nota22-luisa");
const salvar22DannielButton = document.querySelector("#salvar22-danniel");
const salvar22LuisaButton = document.querySelector("#salvar22-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota22DannielSalva = localStorage.getItem("nota22-danniel");
let nota22LuisaSalva = localStorage.getItem("nota22-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota22DannielSalva !== null) {
  nota22DannielInput.value = nota22DannielSalva;
}
if (nota22LuisaSalva !== null) {
  nota22LuisaInput.value = nota22LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar22DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota22-danniel", nota22DannielInput.value);
});
salvar22LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota22-luisa", nota22LuisaInput.value);
});

const nota23DannielInput = document.querySelector("#nota23-danniel");
const nota23LuisaInput = document.querySelector("#nota23-luisa");
const salvar23DannielButton = document.querySelector("#salvar23-danniel");
const salvar23LuisaButton = document.querySelector("#salvar23-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota23DannielSalva = localStorage.getItem("nota23-danniel");
let nota23LuisaSalva = localStorage.getItem("nota23-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota23DannielSalva !== null) {
  nota23DannielInput.value = nota23DannielSalva;
}
if (nota23LuisaSalva !== null) {
  nota23LuisaInput.value = nota23LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar23DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota23-danniel", nota23DannielInput.value);
});
salvar23LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota23-luisa", nota23LuisaInput.value);
});

const nota24DannielInput = document.querySelector("#nota24-danniel");
const nota24LuisaInput = document.querySelector("#nota24-luisa");
const salvar24DannielButton = document.querySelector("#salvar24-danniel");
const salvar24LuisaButton = document.querySelector("#salvar24-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota24DannielSalva = localStorage.getItem("nota24-danniel");
let nota24LuisaSalva = localStorage.getItem("nota24-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota24DannielSalva !== null) {
  nota24DannielInput.value = nota24DannielSalva;
}
if (nota24LuisaSalva !== null) {
  nota24LuisaInput.value = nota24LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar24DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota24-danniel", nota24DannielInput.value);
});
salvar24LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota24-luisa", nota24LuisaInput.value);
});

const nota25DannielInput = document.querySelector("#nota25-danniel");
const nota25LuisaInput = document.querySelector("#nota25-luisa");
const salvar25DannielButton = document.querySelector("#salvar25-danniel");
const salvar25LuisaButton = document.querySelector("#salvar25-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota25DannielSalva = localStorage.getItem("nota25-danniel");
let nota25LuisaSalva = localStorage.getItem("nota25-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota25DannielSalva !== null) {
  nota25DannielInput.value = nota25DannielSalva;
}
if (nota25LuisaSalva !== null) {
  nota25LuisaInput.value = nota25LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar25DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota25-danniel", nota25DannielInput.value);
});
salvar25LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota25-luisa", nota25LuisaInput.value);
});

const nota26DannielInput = document.querySelector("#nota26-danniel");
const nota26LuisaInput = document.querySelector("#nota26-luisa");
const salvar26DannielButton = document.querySelector("#salvar26-danniel");
const salvar26LuisaButton = document.querySelector("#salvar26-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota26DannielSalva = localStorage.getItem("nota26-danniel");
let nota26LuisaSalva = localStorage.getItem("nota26-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota26DannielSalva !== null) {
  nota26DannielInput.value = nota26DannielSalva;
}
if (nota26LuisaSalva !== null) {
  nota26LuisaInput.value = nota26LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar26DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota26-danniel", nota26DannielInput.value);
});
salvar26LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota26-luisa", nota26LuisaInput.value);
});

const nota27DannielInput = document.querySelector("#nota27-danniel");
const nota27LuisaInput = document.querySelector("#nota27-luisa");
const salvar27DannielButton = document.querySelector("#salvar27-danniel");
const salvar27LuisaButton = document.querySelector("#salvar27-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota27DannielSalva = localStorage.getItem("nota27-danniel");
let nota27LuisaSalva = localStorage.getItem("nota27-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota27DannielSalva !== null) {
  nota27DannielInput.value = nota27DannielSalva;
}
if (nota27LuisaSalva !== null) {
  nota27LuisaInput.value = nota27LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar27DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota27-danniel", nota27DannielInput.value);
});
salvar27LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota27-luisa", nota27LuisaInput.value);
});

const nota28DannielInput = document.querySelector("#nota28-danniel");
const nota28LuisaInput = document.querySelector("#nota28-luisa");
const salvar28DannielButton = document.querySelector("#salvar28-danniel");
const salvar28LuisaButton = document.querySelector("#salvar28-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota28DannielSalva = localStorage.getItem("nota28-danniel");
let nota28LuisaSalva = localStorage.getItem("nota28-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota28DannielSalva !== null) {
  nota28DannielInput.value = nota28DannielSalva;
}
if (nota28LuisaSalva !== null) {
  nota28LuisaInput.value = nota28LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar28DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota28-danniel", nota28DannielInput.value);
});
salvar28LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota28-luisa", nota28LuisaInput.value);
});

const nota29DannielInput = document.querySelector("#nota29-danniel");
const nota29LuisaInput = document.querySelector("#nota29-luisa");
const salvar29DannielButton = document.querySelector("#salvar29-danniel");
const salvar29LuisaButton = document.querySelector("#salvar29-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota29DannielSalva = localStorage.getItem("nota29-danniel");
let nota29LuisaSalva = localStorage.getItem("nota29-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota29DannielSalva !== null) {
  nota29DannielInput.value = nota29DannielSalva;
}
if (nota29LuisaSalva !== null) {
  nota29LuisaInput.value = nota29LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar29DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota29-danniel", nota29DannielInput.value);
});
salvar29LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota29-luisa", nota29LuisaInput.value);
});

const nota30DannielInput = document.querySelector("#nota30-danniel");
const nota30LuisaInput = document.querySelector("#nota30-luisa");
const salvar30DannielButton = document.querySelector("#salvar30-danniel");
const salvar30LuisaButton = document.querySelector("#salvar30-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota30DannielSalva = localStorage.getItem("nota30-danniel");
let nota30LuisaSalva = localStorage.getItem("nota30-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota30DannielSalva !== null) {
  nota30DannielInput.value = nota30DannielSalva;
}
if (nota30LuisaSalva !== null) {
  nota30LuisaInput.value = nota30LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar30DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota30-danniel", nota30DannielInput.value);
});
salvar30LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota30-luisa", nota30LuisaInput.value);
});

const nota31DannielInput = document.querySelector("#nota31-danniel");
const nota31LuisaInput = document.querySelector("#nota31-luisa");
const salvar31DannielButton = document.querySelector("#salvar31-danniel");
const salvar31LuisaButton = document.querySelector("#salvar31-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota31DannielSalva = localStorage.getItem("nota31-danniel");
let nota31LuisaSalva = localStorage.getItem("nota31-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota31DannielSalva !== null) {
  nota31DannielInput.value = nota31DannielSalva;
}
if (nota31LuisaSalva !== null) {
  nota31LuisaInput.value = nota31LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar31DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota31-danniel", nota31DannielInput.value);
});
salvar31LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota31-luisa", nota31LuisaInput.value);
});

const nota32DannielInput = document.querySelector("#nota32-danniel");
const nota32LuisaInput = document.querySelector("#nota32-luisa");
const salvar32DannielButton = document.querySelector("#salvar32-danniel");
const salvar32LuisaButton = document.querySelector("#salvar32-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota32DannielSalva = localStorage.getItem("nota32-danniel");
let nota32LuisaSalva = localStorage.getItem("nota32-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota32DannielSalva !== null) {
  nota32DannielInput.value = nota32DannielSalva;
}
if (nota32LuisaSalva !== null) {
  nota32LuisaInput.value = nota32LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar32DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota32-danniel", nota32DannielInput.value);
});
salvar32LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota32-luisa", nota32LuisaInput.value);
});

const nota33DannielInput = document.querySelector("#nota33-danniel");
const nota33LuisaInput = document.querySelector("#nota33-luisa");
const salvar33DannielButton = document.querySelector("#salvar33-danniel");
const salvar33LuisaButton = document.querySelector("#salvar33-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota33DannielSalva = localStorage.getItem("nota33-danniel");
let nota33LuisaSalva = localStorage.getItem("nota33-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota33DannielSalva !== null) {
  nota33DannielInput.value = nota33DannielSalva;
}
if (nota33LuisaSalva !== null) {
  nota33LuisaInput.value = nota33LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar33DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota33-danniel", nota33DannielInput.value);
});
salvar33LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota33-luisa", nota33LuisaInput.value);
});

const nota34DannielInput = document.querySelector("#nota34-danniel");
const nota34LuisaInput = document.querySelector("#nota34-luisa");
const salvar34DannielButton = document.querySelector("#salvar34-danniel");
const salvar34LuisaButton = document.querySelector("#salvar34-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota34DannielSalva = localStorage.getItem("nota34-danniel");
let nota34LuisaSalva = localStorage.getItem("nota34-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota34DannielSalva !== null) {
  nota34DannielInput.value = nota34DannielSalva;
}
if (nota34LuisaSalva !== null) {
  nota34LuisaInput.value = nota34LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar34DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota34-danniel", nota34DannielInput.value);
});
salvar34LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota34-luisa", nota34LuisaInput.value);
});

const nota35DannielInput = document.querySelector("#nota35-danniel");
const nota35LuisaInput = document.querySelector("#nota35-luisa");
const salvar35DannielButton = document.querySelector("#salvar35-danniel");
const salvar35LuisaButton = document.querySelector("#salvar35-luisa");

// Obter as notas salvas anteriormente do Local Storage, se existirem
let nota35DannielSalva = localStorage.getItem("nota35-danniel");
let nota35LuisaSalva = localStorage.getItem("nota35-luisa");

// Preencher os inputs com as notas salvas anteriormente, se existirem
if (nota35DannielSalva !== null) {
  nota35DannielInput.value = nota35DannielSalva;
}
if (nota35LuisaSalva !== null) {
  nota35LuisaInput.value = nota35LuisaSalva;
}

// Adicionar um evento de clique ao botão Salvar para salvar as notas no Local Storage
salvar35DannielButton.addEventListener("click", () => {
  localStorage.setItem("nota35-danniel", nota35DannielInput.value);
});
salvar35LuisaButton.addEventListener("click", () => {
  localStorage.setItem("nota35-luisa", nota35LuisaInput.value);
});