var i1 = document.querySelector("#color1")
var i2 = document.querySelector("#color2")
var op = document.querySelector("h3")
var body = document.getElementById("grad")
var button = document.querySelector(".button-3")
// console.log(document.body.style.background)


// document.addEventListener('load', (event) => {
//     // op.appendChild(document.createTextNode(document.body.style.background + ";"))
//     console.log(document.body.style.background)
// }); 

button.addEventListener("click", function(){
    c1 = (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    c2 = (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    console.log(c1,c2)
    body.style.background = "linear-gradient(to right, #"+c1+", #"+c2 +")"
    op.textContent = body.style.background + ";"
    i1.value = "#"+c1
    i2.value = "#"+c2
})


function setColor(){
    body.style.background = "linear-gradient(to right, "+i1.value+", "+i2.value +")"
    op.textContent = body.style.background + ";"
}
i1.addEventListener("input", setColor)
i2.addEventListener("input", setColor)

