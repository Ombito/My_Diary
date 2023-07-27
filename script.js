let entry_list = documents.getElementById('entries');
let postform = document.getElementById('postForm')
let dataUrl = 'https://localhost:3000/diaryEntries'

fetch(dataUrl)
.then(res => res.json())
.then(data => displayImages(data))

let displayImages = (data) => {
    data.map(i => {
        let entry = document.createElement('div')
        entry.innerHTML = `
        <h3>Title: ${i.title}</h3>
        <h6>Date ${i.date}</h6>
        <p>${i.content}</p>
        `
        entry_list.appendChild(entry)
    })
}

//POST
    //access the inputs value and store as vaeriables
    //fetch
        //define method
        //define headers and body
        //convert to json
        //add event listener
        //prevent default  

    let addDiaryEntry = (event) => {
        event.preventDefault()

        let title = document.getElementById('title').value
        console.log(title)
        let date = document.getElementById('date').value
        let experience = document.getElementById('experience').value
    }

    const entryObj = {
        title: title,
        date: date,
        content: experience
    }


    fetch(dataUrl, {
        method: 'POST',
        header:{ 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObj)
    })
    .then(res => res.json)
    .then(data => console.log(data))

    postform.addEventListener('submit',addDiaryEntry)