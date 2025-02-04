// documentation fetch, gets one todo
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))



// button elements
const btn = document.querySelector("#button-one")
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
    } catch (e) {
        response.error(e)
    }

}
// console.log('three')