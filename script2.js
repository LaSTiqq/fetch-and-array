import fetch from "node-fetch";

const getData = (url) => 
    new Promise((resolve, reject) =>
        fetch(url)
            .then(Response => Response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    )

getData('https://dummyjson.com/comments')
    .then(data => console.log(data))
    .catch(error => console.error(error.message))

    // fetch('https://dummyjson.com/comments')
    // .then(Response => {
    //     console.log(Response)
    //     return Response.json()
    // })
    // .then(json => console.log(json))
    // .catch(error => console.error(error))