
// const packIt = (...args) => console.log(args)

// packIt(1,2,3,5,5)

function packIt(){
    var values = Object.values(arguments)
    console.log(values)
}

packIt(1,2,3,5,5)

