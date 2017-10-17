
function add(a, b) {

    a++;
    a++;
    b--

    return a + b;
}


console.log(add(2, 3));



function addAsync(a, b, cb) {

    setTimeout(function () {
        var c = a + b;
        cb(c);
    }, 2000);  //min 2 sec

    //return undefined;
}


function callback(result) {
    console.log(result);
}

addAsync(2, 3, callback);


//javascript dynamic lang
// 1. Node runtime
// 2. Asynchrounous
// 3. Single threaded

function print(a) {
    return a;
}

// function myFun() { return 20; }

// console.log(print(10));
// console.log(print("Mujib"));
// console.log(print([1, 2, 3]));
// console.log(print(myFun));
// console.log(print(10, 20, 30));
// console.log(print());


// var obj = {
//     name: "Mujib",
//     display: function () {
//         console.log(this.name);
//     },
//     "name of prop": "This looks like an invalid prop but its not"
// };


// for(var key in obj){
//     console.log(obj[key])
// }



// console.log(obj["name of prop"]);

// obj.display();