const navLinks = document.querySelectorAll('.nav-link')
const sections = document.querySelectorAll('.select-section')
const form = document.querySelector('.form')

const options = {
  rootMargin: '-100px 0px -100px 0px',
}
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry)
    if (!entry.isIntersecting) return
    const sectionName = entry.target.dataset.name
    navLinks.forEach(link => {
      link.classList.remove('active')
      if (link.dataset.name === sectionName) {
        link.classList.add('active')
      }
    })
  })
}, options)

sections.forEach(section => {
  observer.observe(section)
})
form.addEventListener('submit', (e) => {
  e.preventDefault()
})