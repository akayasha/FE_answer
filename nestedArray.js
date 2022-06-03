const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(number) {
    var i;
    var even =[]
    var odd =[]
    for(i = 1; i <= number.length; i++){
        if (i %2 == 0){
            even.push(i)
        }else{
            odd.push(i)
        }
    }return [odd ,even]
    
}

console.log(result(number));