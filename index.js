function playSoundPom(selectorAudio){
    const element = document.querySelector(selectorAudio);

    if(element && element.localName === 'audio'){
            element.play()      
    }else {
        alert('Elemento não encontrado ou seletor inválido');
    }

}


const ListKeys = document.querySelectorAll('.tecla');

for(let i = 0; i < ListKeys.length; i++){

    const key = ListKeys[i];
    const sound = key.classList[1];

    const idAudio = `#som_${sound}`;

    key.onclick = function (){
        playSoundPom(idAudio);
    };
    console.log(i)

    key.onkeydown = function (k){
        
        if(k.code === 'Enter'  || k.code === 'Space'){
            key.classList.add('ativa')
            console.log(k.code)
        }
        
    }

    key.onkeyup = function (){
        key.classList.remove('ativa')
    }
}