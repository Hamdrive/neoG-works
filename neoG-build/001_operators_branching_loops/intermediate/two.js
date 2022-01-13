// 2. Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *

const star = count => {
    for (let i = 1; i <= count; i++) {
        let stars=""
        for(let j = 0; j < i; j++){
            stars += "* "
        }
        console.log(stars)
    }
}

star(5)