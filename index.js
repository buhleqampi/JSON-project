fetch('index.json').then ((response)=> {
    // console.log(response);
    return response.json();
}).then((data (function () {
        let car1= document.getElementById().value,
        let car2= document.getElementById().value,
        let car3= document.getElementById().value,
        let car4= document.getElementById().value,
    let carCollection = {
        cars: [BMW, Toyota , Volkswagen, Mercedes AMG ]
    }
    
    for (const x of carCollection.car) {
        document.getElementById('specs').innerHTML = '<li>' + car1 + '</li>',
        document.getElementById('specs').innerHTML = '<li>' + car2 + '</li>',
        document.getElementById('specs').innerHTML = '<li>' + car3 + '</li>',
        document.getElementById('specs').innerHTML = '<li>' + car4 + '</li>',
    }
    
    };
    getCars();
    console.log(data);
})));


function getCars(){
    let car1= document.getElementById().value;
    let car2= document.getElementById().value;
    let car3= document.getElementById().value;
    let car4= document.getElementById().value;
let carCollection = {
    cars: [BMW, Toyota , Volkswagen, Mercedes AMG ]
}

for (const x of carCollection.car) {
    document.getElementById('specs').innerHTML = '<li>' + car1 + '</li>';
    document.getElementById('specs').innerHTML = '<li>' + car2 + '</li>';
    document.getElementById('specs').innerHTML = '<li>' + car3 + '</li>';
    document.getElementById('specs').innerHTML = '<li>' + car4 + '</li>';
}

};
getCars();
