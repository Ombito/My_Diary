// Bring data from db
    // fetch data

    let  entry_list = document.getElementById('entries')
    // GET
    fetch("http://localhost:3000/diaryEntries")
    .then(res => res.json())
    .then(data => manipulateEntries(data));
    
    const manipulateEntries = (data) => {
        data.map(i => {
            let entry = document.createElement('div')
            entry.innerHTML = `
            <h3>Title :${i.title} </h3>
            
            <h5>Date :${i.date} </h5><br>
            <p> ${i.content}</p>
            `
        entry.addEventListener('click', handleUpdate)
        entry_list.appendChild(entry);
    
    
        // PATCH
    function handleUpdate() {
        let updateContent = prompt("Update Experience")
        let newObj = {
            content: updateContent,
        }
        fetch(`http://localhost:3000/diaryEntries/${i.id}`,{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json',
                    Accept: 'application/json'
        
                     },
            body: JSON.stringify(newObj)
            
    
        })
        window.location.reload();
    }
        })
    
    }
    // POST
    // Post our experience
        //access the inputs 
    let addDiaryEntry = (e) =>{
        e.preventDefault();
        let title = document.getElementById('title').value;
        let date = document.getElementById('date').value;
        let experience = document.getElementById('experience').value;
        
        fetch("http://localhost:3000/diaryEntries",{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                Accept: 'application/json'} , 
            body: JSON.stringify({
                date: date,
                title: title,
                content: experience
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        form.reset();
    
        
    }
    let form = document.getElementsByTagName('form')[0]
    form.addEventListener('submit',addDiaryEntry)