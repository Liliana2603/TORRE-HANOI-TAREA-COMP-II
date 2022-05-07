const container = document.getElementById('hanoi')

const title = document.querySelector('h1')

const stopDisco = document.createElement('div')
stopDisco.id = 'stopDisco'

const victoryMsg = document.createElement('div')
victoryMsg.id = 'm'

const button = document.createElement('button')
button.id = 'btn'
button.innerText = 'Refresh'

const palo1 = document.createElement('div')
palo1.classList.add('palo')

const palo2 = document.createElement('div')
palo2.classList.add('palo')

const palo3 = document.createElement('div')
palo3.classList.add('palo')

container.appendChild(palo1)
container.appendChild(palo2)
container.appendChild(palo3)

const disco1 = document.createElement('div')
disco1.classList.add('disco1')

const disco2 = document.createElement('div')
disco2.classList.add('disco2')

const disco3 = document.createElement('div')
disco3.classList.add('disco3')

const disco4 = document.createElement('div')
disco4.classList.add('disco4')

const disco5 = document.createElement('div')
disco5.classList.add('disco5')

document.body.appendChild(button)
document.body.appendChild(victoryMsg)

document.body.prepend(stopDisco)
document.body.prepend(title)

palo1.appendChild(disco1);
palo1.appendChild(disco2);
palo1.appendChild(disco3);
palo1.appendChild(disco4);
palo1.appendChild(disco5);

palo1.addEventListener('click', selecDisco);
palo2.addEventListener('click', selecDisco);
palo3.addEventListener('click', selecDisco);

function selecDisco (event) { ;
    const e = event.currentTarget ;
    const discoSelec = e.lastElementChild ;

    if(stopDisco.childElementCount === 1){ 
        if (e.childElementCount === 0 || stopDisco.firstChild.clientWidth < discoSelec.clientWidth){  
            e.appendChild(stopDisco.firstChild) ;
        }
    } else { 
        stopDisco.appendChild(discoSelec);
    }
}

button.addEventListener('click', reset);
function reset() { 
    palo1.appendChild(disco1);
    palo1.appendChild(disco2);
    palo1.appendChild(disco3);
    palo1.appendChild(disco4);
    palo1.appendChild(disco5);
    
}