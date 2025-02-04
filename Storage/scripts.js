// Local storage 10MB
// localStorage.setItem('Name', 'Yo Momma')
localStorage.setItem('Name', 'Joe Momma')
// sessionStorage.removeItem("Name")
console.log(localStorage.getItem('Name'))
// Cookies 4KB
document.cookie = 'name=Israel'

// Session storage 5MB
// sessionStorage.setItem("Age", "24")
sessionStorage.setItem("Age", "42")
console.log(sessionStorage.getItem('Age'))
