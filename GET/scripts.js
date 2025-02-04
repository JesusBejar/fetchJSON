// documentation fetch, gets one todo
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))



// button elements
const btn = document.querySelector("#button-one")
const btn2 = document.querySelector("#button-two")
const btn3 = document.querySelector("#button-three")
// console.log('one')

// buttons that fire functions
btn.addEventListener("click", getAllPosts)
// console.log('two')

// gets titles of all posts
async function getAllPosts() {
    try {
        console.log('clicked')
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await response.json()
        const postTitle = await json.map(postTitle => postTitle.title)
        console.log(postTitle)
    } catch (e) {
        response.error(e)
    }

}
// console.log('three')

btn2.addEventListener("click", getAllNames)
// gets all names of users 
async function getAllNames() {
console.log('clicked')
try {
    // change url
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()
    const user = await json.map(user => user.name)
    console.log(user)
} catch (e) {
    response.error(e)
}
}

btn3.addEventListener("click", getAllComments)
// get all comments
async function getAllComments() {
console.log('clicked')
try {
    // change url
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    const json = await response.json()
    // change dot notation
    const comment = await json.map(comment => comment.email)
    console.log(comment)
} catch (e) {
    response.error(e)
}
} 