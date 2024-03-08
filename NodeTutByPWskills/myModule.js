let add = (a,b) =>{
    return a+b;
}

// console.log(typeof add);   (let's run this in index.js)
//      We have to make this "add" a module

// module.exports = add;


// Now let's create another function and try to do it as we did previously

let prd = (a,b) =>{
    return a*b;
}

// module.exports = prd;

//  so we can create an object for using multiple functions as modules

module.exports = {
    add : add,
    prd : prd
}

//  otherwise we can do export the functions like this :
/*  
    export.add = (a,b) =>{
    return a+b;
    }  

    export.prd = (a,b) =>{
    return a*b;
    }

*/