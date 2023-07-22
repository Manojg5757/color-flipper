let colors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

let but = document.querySelector(".changeColor")
let color = document.querySelector(".color")

but.addEventListener('click',(()=>{
    let hex = "#"

    for(let i = 0;i<6;i++){
        let randomNum = getRandomNum()
        hex += colors[randomNum]
    }
    document.body.style.backgroundColor = hex
    color.innerHTML = hex
}))

function getRandomNum(){
    let random = Math.floor(Math.random()*colors.length)
    return random
}
