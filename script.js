services = document.querySelectorAll("a")
div = document.querySelector('.services')
fashion = document.querySelector(".fashion_par")
support = document.querySelector(".suppo_par")
contact = document.querySelector(".con")
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
fashion_box = document.querySelectorAll(".fashion_box")
console.log(fashion_box)
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('animate');
        }
        else{
            entry.target.classList.remove('animate');
        }
    });
},
);

fashion_box.forEach(box=>{
        observer.observe(box)
 });