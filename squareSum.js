
function squareSum(array){
    var ell = (element) => element ** 2;
    var mult = array.map(ell);
    
    function sum(total, curr){
        return total + curr;
    }
    const totalSum = mult.reduce(sum, 0);
    
    return totalSum;
}

const ourArr = [1,2,3,4,5];
squareSum(ourArr); 