// Your code here
function mapToNegativize(sourceArray){
    return sourceArray.map(x => x * -1);
}
function mapToNoChange(sourceArray){
    return sourceArray
}
function mapToDouble(sourceArray){
    return sourceArray.map(x => x * 2);
}
function mapToSquare(sourceArray){
    return sourceArray.map(x => x * x);
}

function reduceToTotal(sourceArray, startingPoint=0){
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return (sourceArray.reduce(reducer)+startingPoint);
}
function reduceToAllTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (!sourceArray[i]) return false
    }
    return true
}
function reduceToAnyTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (sourceArray[i]) return true
    }
    return false
}
