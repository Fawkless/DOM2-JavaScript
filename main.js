function cambiarPar(){
   clasePar = document.querySelectorAll(".par")
   clasePar.forEach(function(clasePar) {clasePar.style.background="deeppink"
    })    
    claseImpar = document.querySelectorAll(".impar")
    claseImpar.forEach(function(claseImpar) {claseImpar.style.background="grey"
    })
}

function cambiarImpar(){
   claseImpar = document.querySelectorAll(".impar")
   claseImpar.forEach(function(claseImpar) {claseImpar.style.background="deeppink" 
    })
    clasePar = document.querySelectorAll(".par")
    clasePar.forEach(function(clasePar) {clasePar.style.background="grey"
    }) 
}

function reset(){
    resetDeClases = document.querySelectorAll(".impar")
    resetDeClases.forEach(function(resetDeClases) {resetDeClases.style.background="grey"
})
    resetDeClases = document.querySelectorAll(".par")
    resetDeClases.forEach(function(resetDeClases) {resetDeClases.style.background="grey"
})
}
