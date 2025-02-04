// Local storage 10MB
// localStorage.setItem('Name', 'Yo Momma')
localStorage.setItem('Name', 'Joe Momma')
// sessionStorage.removeItem("Name")
console.log(localStorage.getItem('Name'))
// Cookies 4KB
const date = new Date(9999, 0, 1).toUTCString()
const pastDate = new Date(1999, 0, 1).toUTCString()
document.cookie = `name=Israel; expires=${date}`
console.log(document.cookie)

document.cookie = `name=; expires=${pastDate}`
console.log(document.cookie)

// Session storage 5MB
// sessionStorage.setItem("Age", "24")
sessionStorage.setItem("Age", "42")
console.log(sessionStorage.getItem('Age'))
