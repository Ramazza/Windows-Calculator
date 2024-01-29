function c() { 
    document.getElementById('display').value = 0
    document.getElementById('display-conta').value = ''
    document.querySelectorAll('#display')[1].value = 0
    document.querySelectorAll('#display-conta')[1].value = ''
    document.getElementById('.').disabled = false
    console.clear()
}

function ce() {
    document.getElementById('display-conta').value = '' 
    document.querySelectorAll('#display-conta')[1].value = ''
    document.getElementById('.').disabled = false
}

function removeLast() {
    let num = document.getElementById('display').value 
    document.getElementById('display').value = num.slice(0,-1)
    document.querySelectorAll('#display')[1].value = num.slice(0,-1)
}

var foiCriado = false

var noHistory = true

var historyArray = [
    [],
    []
]

function historico() {

    const calculator = document.querySelector('.calculator')
    
    if(foiCriado) {
        const historico = document.querySelector('.history')
        calculator.removeChild(historico)
        foiCriado = false
    } else {
        
        const historico =  document.createElement('div')
        historico.className = 'history'

        const deleteHistory = document.createElement('button')
        deleteHistory.className = 'delete-history'
        deleteHistory.setAttribute("onclick", "deleteHistory()")

        historico.appendChild(deleteHistory)
        calculator.appendChild(historico)

        document.body.appendChild(calculator)

        foiCriado = true
    }

    if(historyArray[0] == '') {
        const history = document.querySelector('.history')
        const noHistory = document.createElement('h5')
        noHistory.className = 'no-history'
        noHistory.innerText = 'Ainda não há histórico'

        history?.appendChild(noHistory)
        document.body.appendChild(calculator)

        return

    }

    const deleteHistory = document.querySelector('.delete-history')
        
    if (deleteHistory == null) return

    deleteHistory.style.display = 'block'
        
    const history = document.querySelector('.history')

    const historyWraper = document.createElement('div')
    historyWraper.className = 'history-wraper'

    historyArray[0].forEach((element, index) => {

        const historyInnerWraper = document.createElement('div')
        historyInnerWraper.className = 'history-inner-wraper'

        historyInnerWraper.addEventListener('click', function(){
            document.querySelector('.display-conta').value = historyArray[0][index]
            document.querySelector('.display-numero').value = historyArray[1][index]
            document.querySelector('.full-calculator-main-display-numero').value = historyArray[1][index]
            document.querySelector('.full-calculator-main-display-conta').value = historyArray[0][index]
        })

        const historyCalculo = document.createElement('h5')
        historyCalculo.className = 'history-calculo'
        historyCalculo.innerHTML = `${historyArray[0][index]}`

        const historyResposta = document.createElement('h5')
        historyResposta.className = 'history-resposta'
        historyResposta.innerHTML = `${historyArray[1][index]}`

        historyInnerWraper.appendChild(historyCalculo)
        historyInnerWraper.appendChild(historyResposta)

        historyWraper.appendChild(historyInnerWraper)
        history.appendChild(historyWraper)
        calculator.appendChild(history)
        document.body.appendChild(calculator)

    });    

}

function deleteHistory() {
    historyArray = [
        [],
        []
    ]

    if(document.querySelector('.history-wraper') == null && 
       document.querySelector('.full-calculator').style.display == '') return


    const historyWraper = document.querySelector('.history-wraper')
    historyWraper?.remove()

    const history = document.querySelector('.history')

    const noHistoryH5 = document.createElement('h5')
    noHistoryH5.className = 'no-history'
    noHistoryH5.innerText = 'Ainda não há histórico'

    history?.appendChild(noHistoryH5)
    document.body.appendChild(calculator)

    if(document.querySelector('.no-full-history') != null) return

   const fullHistory = document.querySelectorAll('.full-history-inner-wraper')
   const fullHistoryButton = document.querySelector('.full-delete-history')

   fullHistoryButton.remove()

   fullHistory.forEach(element => {
        element.remove();
   });

   const fullHistoryWrapper = document.querySelector('.full-calculator-historico-wrapper')
   const noFullHistory = document.createElement('h5')

   noFullHistory.className = 'no-full-history'
   noFullHistory.innerText = 'Ainda não há histórico'

   fullHistoryWrapper?.appendChild(noFullHistory)

   noHistory = false  

}

var noMemory = true

var memoryArray = [0]

function activateMemory() {
    const memoryButton1 = document.querySelectorAll('.memory-button1')

    memoryButton1.forEach(element => {
        element.disabled = false
        element.style.color = 'white'

        element.onmouseover = function() {
            this.style.backgroundColor = '#3a3a3b';
        };

        element.onmouseout = function() {
            this.style.backgroundColor = '#202121';
        }; 

   });

}

function deleteMemory() {
    memoryArray = [0]

    const memoryButton1 = document.querySelectorAll('.memory-button1')

    memoryButton1.forEach(element => {
        element.disabled = true
        element.style.color = 'grey'

        element.onmouseover = function() {
            this.style.backgroundColor = '#202121';
        };

   });

}

function mPlus() {

    activateMemory()

    const numDisplay = document.querySelector('.display-numero')

    memoryArray[0] += parseInt(numDisplay.value)     

}

function mMinus() {

    activateMemory()

    const numDisplay = document.querySelector('.display-numero')

    memoryArray[0] -= parseInt(numDisplay.value)     

    console.log(memoryArray)

}

function mRecall() {

    const numDisplay = document.querySelector('.display-numero')

    numDisplay.value = memoryArray[0]

}

function mAdd() {

    activateMemory()

    const numDisplay = document.querySelector('.display-numero')

    memoryArray.push(parseInt(numDisplay.value))
}

function memory() {
    //teste
}

function maisMenos() {
    let display = document.getElementById('display').value

    document.getElementById('display').value = display * (-1)
    document.querySelectorAll('#display')[1].value = display * (-1)
}

function divPorX() {
    let display = document.getElementById('display').value

    document.getElementById('display').value = 1 / display
    document.getElementById('display-conta').value = `1/(${display})`
    document.querySelectorAll('#display')[1].value = 1 / display
    document.querySelectorAll('#display-conta')[1].value = `1/(${display})`
}

function elevado() {
    let display = document.getElementById('display').value

    document.getElementById('display').value = display ** 2
    document.getElementById('display-conta').value = `sqr(${display})`
    document.querySelectorAll('#display')[1].value = display ** 2
    document.querySelectorAll('#display-conta')[1].value = `sqr(${display})`
}

function raizQuadrada() {
    let display = document.getElementById('display').value

    document.getElementById('display').value = Math.sqrt(display)
    document.getElementById('display-conta').value = `√(${display})`
    document.querySelectorAll('#display')[1].value = Math.sqrt(display)
    document.querySelectorAll('#display-conta')[1].value = `√(${display})`
}

function buttonPress(id) {
    
    let valorDisplay = document.getElementById('display').value 
    const displayConta = document.getElementById('display-conta').value 

    document.getElementById('+').disabled = false
    document.getElementById('-').disabled = false
    document.getElementById('x').disabled = false
    document.getElementById('÷').disabled = false

    if(displayConta.match(/=/)) {
        document.getElementById('display').value = id 
        document.getElementById('display-conta').value = ''
        document.querySelectorAll('#display')[1].value = id 
        document.querySelectorAll('#display-conta')[1].value = ''
        return
    }

    if(id == '.') {
        document.getElementById('display').value = valorDisplay + id
        document.querySelectorAll('#display')[1].value = valorDisplay + id
        document.getElementById('.').disabled = true
        return
    } 
    
    if(valorDisplay.match(/0./))  {
        document.getElementById('display').value = valorDisplay + id
        document.querySelectorAll('#display')[1].value = valorDisplay + id
        document.getElementById('.').disabled = true
        return
    }

    if(id.match(/[0-9]/)){
        if(valorDisplay == 0) {
            valorDisplay = ''
        }
        document.getElementById('display').value = valorDisplay + id
        document.querySelectorAll('#display')[1].value = valorDisplay + id
        return
    }

    
    
}

function operacao(id) { 

    let valorDisplay = document.getElementById('display').value 
    let valorDisplayConta = document.getElementById('display-conta').value
    let operation = /[+x\-÷]/g

    document.getElementById('.').disabled = false

    if_da_fer: if(valorDisplayConta != '' && !(valorDisplayConta.match(/=/))) { 

        if(valorDisplayConta.match(/[()]/) || valorDisplayConta.match(operation) != id) {
            break if_da_fer
        }
        calcular(id)
        return
    }

    if (valorDisplayConta.match(/[()]/)) {
        document.getElementById('display-conta').value = valorDisplayConta + ' ' + id
        document.getElementById('display').value = 0
        document.querySelectorAll('#display-conta')[1].value = valorDisplayConta + ' ' + id
        document.querySelectorAll('#display')[1].value = 0
        return
    }

    if(valorDisplayConta == '' || valorDisplayConta.includes('=')){
        document.getElementById('display-conta').value = valorDisplay + ' ' + id
        document.getElementById('display').value = 0
        document.querySelectorAll('#display-conta')[1].value = valorDisplay + ' ' + id
        document.querySelectorAll('#display')[1].value = 0
        return
    }

    document.getElementById('display-conta').value = valorDisplayConta.replace(operation, id)
    document.querySelectorAll('#display-conta')[1].value = valorDisplayConta.replace(operation, id)
    
}

function calcular(id) {
    let num1 = document.getElementById('display-conta').value
    let num2 = document.getElementById('display').value

    let operation = /[+x\-÷]/g
    let operador = num1.match(operation)

    var calculo = {
        '+': function (x, y) { return x + y },
        '-': function (x, y) { return x - y },
        'x': function (x, y) { return x * y },
        '÷': function (x, y) { return x / y },
    }

    document.getElementById('.').disabled = false

    if(num1.match(operation) == id) { 
        let resposta = calculo[operador[0]](parseFloat(num1), parseFloat(num2))
 
        document.getElementById('display-conta').value = `${resposta} ${id}`
        document.getElementById('display').value = '0' 
        document.querySelectorAll('#display-conta')[1].value = `${resposta} ${id}`
        document.querySelectorAll('#display')[1].value = resposta

        document.getElementById(`${id}`).disabled = true

        return
    }

    if(num1.match(/,/) || num2.match(/,/)) {
        num1 = num1.replace(',', '.')
        num2 = num2.replace(',', '.')
    }

    if(operador[0] == '-' && operador[1] != '') {
        operador = operador.pop()
    }

    if(num1.match(/=/)) { 
        num1 = num1.split(operation).pop() 
        let temp = num2
        num2 = num1
        num1 = temp
    }
        
    if(num1.match(/[()]/)) {
        
        let operadorti = num1.match(/(s|\/|√)/)
        num1 = num1.split(/[(]/).pop() 

        var calcul = {
            '√': function (x) { return  x = Math.sqrt(parseInt(x))},
            's': function (x) { return  x = parseInt(x) ** 2},
            '/': function (x) { return  x = 1 / parseInt(x)},
        }
        num1 = calcul[operadorti[0]](num1)
    }

    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    let conta = `${num1} ${operador[0]} ${num2} ${id} `
    let resposta = calculo[operador[0]](parseFloat(num1), parseFloat(num2))

    document.getElementById('display-conta').value = conta
    document.getElementById('display').value = resposta 
    document.querySelectorAll('#display-conta')[1].value = conta
    document.querySelectorAll('#display')[1].value = resposta

    historyArray[0].push(conta)
    historyArray[1].push(resposta)



    const fullCalculatorHistorico = document.querySelector('.full-calculator-historico')
    const fullCalculatorHistoricoWrapper = document.querySelector('.full-calculator-historico-wrapper')
    const noFullHistory = document.querySelector('.no-full-history')
    const lastIndex = historyArray[0].length - 1;

    noHistory = false
    noFullHistory?.remove()

    if(historyArray[0].length <= 1) {
        const fullDeleteHistory = document.createElement('button')
        fullDeleteHistory.className = 'full-delete-history'
        fullDeleteHistory.setAttribute("onclick", "deleteHistory()")
        fullCalculatorHistorico.appendChild(fullDeleteHistory)
    }

    if(lastIndex >= 0) {
        const fullHistoryInnerWraper = document.createElement('div')
        fullHistoryInnerWraper.className = 'full-history-inner-wraper'
        
        historyArray[0].forEach((element, index) => {
             fullHistoryInnerWraper.addEventListener('click', function(){
                 document.querySelector('.display-conta').value = historyArray[0][index]
                 document.querySelector('.display-numero').value = historyArray[1][index]
                 document.querySelector('.full-calculator-main-display-numero').value = historyArray[1][index]
                 document.querySelector('.full-calculator-main-display-conta').value = historyArray[0][index]
             })
         })

            
        const fullHistoryCalculo = document.createElement('h5')
        fullHistoryCalculo.className = 'full-history-calculo'
        fullHistoryCalculo.innerHTML = `${historyArray[0][lastIndex]}`
                
        const fullHistoryResposta = document.createElement('h5')
        fullHistoryResposta.className = 'frll-history-resposta'
        fullHistoryResposta.innerHTML = `${historyArray[1][lastIndex]}`
            
        fullHistoryInnerWraper.appendChild(fullHistoryCalculo)
        fullHistoryInnerWraper.appendChild(fullHistoryResposta)
            
        fullCalculatorHistoricoWrapper.appendChild(fullHistoryInnerWraper)
                
        fullCalculatorHistorico.appendChild(fullCalculatorHistoricoWrapper)
    }

}

function minimize() {

    let calculator = document.querySelector('.calculator')
    let fullCalculator = document.querySelector('.full-calculator')

    let getStyle = window.getComputedStyle(calculator);
    let leftVal = parseInt(getStyle.left);
    let topVal = parseInt(getStyle.top);

    if(calculator.style.display == '' || fullCalculator.style.display == 'flex') {
        
        calculator.style.display = 'none'
        fullCalculator.style.display = 'none'

        document.querySelector('body').style.backgroundColor = 'white'

        const minimizedCalculator = document.createElement('div')
        minimizedCalculator.className = 'minimized-calculator'
        
        const minimizedContainer = document.createElement('div')
        minimizedContainer.className = 'minimized-container'

        const minimizedHeader = document.createElement('div')
        minimizedHeader.className = 'minimized-header'
        
        const minimizedDiv1 = document.createElement('div')
        minimizedDiv1.className = 'header'
        
        const minimizedSpan = document.createElement('span')

        const minimizedH5 = document.createElement('h5')
        minimizedH5.innerText = 'Calculadora'

        const minimizedDiv2 = document.createElement('div')
        minimizedDiv2.className = 'header-buttons'

        const minimizedbutton1 = document.createElement('button')
        minimizedbutton1.className = 'minimize'
        minimizedbutton1.innerText = '−'
        minimizedbutton1.setAttribute("onclick", "minimize()")

        const minimizedbutton2 = document.createElement('button')
        minimizedbutton2.className = 'maximize'
        minimizedbutton2.innerText = '□'
        minimizedbutton2.setAttribute("onclick", "maximize()")

        const minimizedbutton3 = document.createElement('button')
        minimizedbutton3.className = 'exit'
        minimizedbutton3.innerText = '✕'
        minimizedbutton3.setAttribute("onclick", "exit()")

        minimizedCalculator.appendChild(minimizedContainer)
        minimizedContainer.appendChild(minimizedHeader)
        minimizedHeader.appendChild(minimizedDiv1)

        minimizedDiv1.appendChild(minimizedSpan)
        minimizedDiv1.appendChild(minimizedH5)

        minimizedHeader.appendChild(minimizedDiv2)

        minimizedDiv2.appendChild(minimizedbutton1)
        minimizedDiv2.appendChild(minimizedbutton2)
        minimizedDiv2.appendChild(minimizedbutton3)

        minimizedCalculator.style.left = `${leftVal}px`;
        minimizedCalculator.style.top = `${topVal}px`;

        document.body.appendChild(minimizedCalculator);

        return

    } 
    

    const minimizedCalculator = document.querySelector('.minimized-calculator')

    minimizedCalculator.remove()

    calculator.style.display = ''
        
    
}

function maximize() {

    let calculator = document.querySelector('.calculator')
    let fullCalculator = document.querySelector('.full-calculator')
    let minimizedCalculator = document.querySelector('.minimized-calculator')

    if(innerWidth > 896) {
        document.querySelector('.full-calculator-historico-btn').style.visibility = 'hidden'
    }

    if(minimizedCalculator != null) {
        calculator.style.display = 'none'
        fullCalculator.style.display = 'flex'
        minimizedCalculator.remove()
        return
    }

    if(historyArray[0] == '' && noHistory) {
        const fullHistory = document.querySelector('.full-calculator-historico-wrapper')
        const noFullHistory = document.createElement('h5')
        noFullHistory.className = 'no-full-history'
        noFullHistory.innerText = 'Ainda não há histórico'

        fullHistory?.appendChild(noFullHistory)

        noHistory = false

    }

    if(calculator.style.display == '') {
        calculator.style.display = 'none'
        fullCalculator.style.display = 'flex'
    } else {
        calculator.style.display = ''
        fullCalculator.style.display = 'none'
    }
}

function exit() {

    let minimizedCalculator = document.querySelector('.minimized-calculator')
    
    document.querySelector('.create-calculator').style.display = 'flex'
    document.querySelector('.full-calculator').style.display = 'none'
    document.querySelector('.calculator').style.display = 'none'

    c()
    historyArray = [
        [],
        []
    ]
    deleteHistory()

    if(minimizedCalculator == null) {
        return
    } else {
        minimizedCalculator.remove() 
    }
}

function create() {
    let calculator = document.querySelector('.calculator')
    let minimizedCalculator = document.querySelector('.minimized-calculator')

    let createCalculator = document.querySelector('.create-calculator')
    createCalculator.style.display = 'none'
    
    calculator.style.display = ""
    calculator.style.top = `0px`;
    calculator.style.left = `0px`;

    if(minimizedCalculator == null) {
        return
    } else {
        minimizedCalculator.remove()
    }

}

var calculator = document.querySelector(".calculator")

calculatorHeader = calculator?.querySelector("header")

function onDrag({movementX, movementY}){

    let getStyle = window.getComputedStyle(calculator);
    let leftVal = parseInt(getStyle.left);
    let topVal = parseInt(getStyle.top);

    // Largura da calculadora: 320px 160
    // Altura da calculadora: 521.6px 260.8

    let rightLimit = (window.innerWidth/2) - 160 
    let leftLimit = -(window.innerWidth/2) + 160

    let topLimit = -20
    let bottomLimit = (window.innerHeight - 521.7) -27
    
    if(leftVal < leftLimit) {
        calculator.style.left = `${leftLimit}px`;
    } else if (leftVal > rightLimit) {
        calculator.style.left = `${rightLimit}px`;
    } else {
        calculator.style.left = `${leftVal + movementX}px`;
    }

    if(topVal < topLimit) {
        calculator.style.top = `${topLimit}px`;
    } else if (topVal > bottomLimit) {
        calculator.style.top = `${bottomLimit}px`;
    } else {
        calculator.style.top = `${topVal + movementY}px`;
    }

}

calculatorHeader?.addEventListener("mousedown", ()=>{
    calculatorHeader.classList.add("active"); 
    calculatorHeader.addEventListener("mousemove", onDrag);
});

document.addEventListener("mouseup", ()=>{
    calculatorHeader.classList.remove("active");
    calculatorHeader.removeEventListener("mousemove", onDrag);
});

function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.style.display = (dropdown.style.display === "grid") ? "none" : "grid";
}

window.onclick = function(event) {

    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "grid") {
                openDropdown.style.display = "none";
            }
        }
    }

    if (!event.target.matches('.historico-btn') && !event.target.matches('.history') && !event.target.matches('.delete-history')) {
        const historico = document.querySelector('.history')

        if(historico == null) return

        calculator?.removeChild(historico)
        foiCriado = false
        
    }
}
