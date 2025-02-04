const URLurl = "https://jsonplaceholder.typicode.com/posts"
// button elements
const btn = document.querySelector("#button-one")
// console.log('one')

// buttons that fire functions
btn.addEventListener("click", sendAPost)
// console.log('two')

// gets titles of all posts
async function sendAPost() {
    try {
        console.log('clicked')
        const response = await fetch(URLurl , {
            method: 'POST', 
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                title: "post post post"
            })
        })
        const post = await response.json()
        console.log(post)
    } catch (e) {
        response.error(e)
    }

}