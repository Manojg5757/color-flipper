let colors = ["red","black","green","brown","yellow","pink","grey","white","blue"]


let color = document.querySelector(".color")
let but = document.querySelector(".changeColor")

but.addEventListener('click',(()=>{
    let random = getRandomColor()
    document.body.style.backgroundColor = colors[random]
    color.innerHTML = colors[random]
}))


function getRandomColor(){
    let a = Math.floor(Math.random()*colors.length)
    return a
}
