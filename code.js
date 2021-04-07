const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 
'C', 'D', 'E', 'F']
const btnGe = document.querySelector('#generator');
const hexLength = hex.length;
const indic = document.querySelector('#color');


function randomNum(){
    return Math.floor(Math.random() * hexLength)
}

btnGe.addEventListener('click', () => {
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hex[randomNum()]
    }
    indic.innerHTML = color;
    document.querySelector('body').style.backgroundColor = color;
})