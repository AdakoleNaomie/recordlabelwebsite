const b= document.querySelectorAll(".b")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
    console.log(entries)
})
b.forEach(b =>{
    observer.observe(b)
})
const e= document.querySelectorAll(".e")

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
    console.log(entries)
})
e.forEach(e =>{
    observer.observe(e)
})
const d= document.querySelectorAll(".d")

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
    console.log(entries)
})
d.forEach(d =>{
    observer.observe(d)
})
const g= document.querySelectorAll(".g")

const observer3= new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
    console.log(entries)
})
g.forEach(g =>{
    observer.observe(g)
})