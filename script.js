const no1img = document.querySelectorAll(".no1img")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
    console.log(entries)
})
no1img.forEach(no1img =>{
    observer.observe(no1img)
})
const no1img2 = document.querySelectorAll(".no1img2")

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
    console.log(entries)
})
no1img2.forEach(no1img2 =>{
    observer.observe(no1img2)
})
const no1img3 = document.querySelectorAll(".no1img3")

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
    console.log(entries)
})
no1img3.forEach(no1img3 =>{
    observer.observe(no1img3)
})
const no1img4 = document.querySelectorAll(".no1img4")

const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
    console.log(entries)
})
no1img4.forEach(no1img4 =>{
    observer.observe(no1img4)
})
const no1 = document.querySelectorAll(".no1img4")

const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
    console.log(entries)
})
no1.forEach(no1 =>{
    observer.observe(no1)
})
const img1 = document.querySelectorAll(".img1")

const observer5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
    console.log(entries)
})
img1.forEach(img1 =>{
    observer.observe(img1)
})
const img3 = document.querySelectorAll(".img3")

const observer6 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
    console.log(entries)
})
img3.forEach(img3 =>{
    observer.observe(img3)
})
const img5 = document.querySelectorAll(".img5")

const observer7 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
    console.log(entries)
})
img5.forEach(img5 =>{
    observer.observe(img5)
})
