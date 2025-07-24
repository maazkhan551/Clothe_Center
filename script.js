services = document.querySelectorAll("a")
div = document.querySelector('.services')
fashion = document.querySelector(".fashion_par")
support = document.querySelector(".suppo_par")
contact = document.querySelector(".con")
console.log(services)
services[1].addEventListener("click",()=>{
    div.style.display = "block"
    fashion.style.display = "none"
    support.style.display = "none"
    contact.style.display = "none"
})
services[0].addEventListener("click",()=>{
    div.style.display = "none"
    fashion.style.display = "block"
    support.style.display = "block"
    contact.style.display = "block"
})
services[2].addEventListener("click",()=>{
     support.style.display = "none"
    contact.style.display = "none"
})