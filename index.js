fetch('index.json').then ((response)=> {
    // console.log(response);
    return response.json();
}).then((data (array => {
    document.getElementById('make').innerHTML = h2
    document.getElementById('specs').innerHTML = ul
    console.log(data);
})));

// let carDealership = ""
// function cars () {
//     document.getElementById().innerHTML = carDealership;;
// };

// fetch ('index.json').then (function (response)){

// return response.json();
// }).then (function(obj){

// document.getElementById('make').innerHTML = car

// }).catch()
// }