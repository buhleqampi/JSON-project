fetch('index.json')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    let results = data.carsCollection;
    let container = document.querySelector('.container');
    results.forEach( (item)=> {
        container.innerHTML += `
            <h2>${item.make}</h2>
            <ul>
                <li>${item.year}</li>
            </ul>
            <ul>
                <li>${item.model}</li>
            </ul>
            <ul>
                <li>${item.automatic}</li>
            </ul>

        `
    })
} )