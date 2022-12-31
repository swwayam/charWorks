var text = document.getElementById("text"); // textarea

// function takeValue(){
//     return text.value
// }

const takeValue = () => {
    return text.value;
}

function allCap(){
    text.value = takeValue().toUpperCase(); // UPPER CASE
}

function allLow(){
    text.value = takeValue().toLowerCase();
}

function copy(){
    navigator.clipboard.writeText(takeValue())
}

function firstChar(){   
    var space = takeValue().split(" "); // ["abc", "bc3"]
    var newArr = [];

    for(var i = 0; i < space.length; i++){
        var value = space[i];
        var sum = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
        newArr.push(sum)
    }
    var finalValue = newArr.join("  ");
    console.log(finalValue);
    text.value = finalValue;
}

// Alternate
// function firstChar(){   
//     var space = takeValue().split(" "); // ["abc", "bc3"]
//     var newArr = [];

//     for(var i = 0; i < space.length; i++){
//         newArr.push(space[i].charAt(0).toUpperCase() + space[i].slice(1))
//     }

//     text.value = newArr.join("  ");
// }

function count(){
    var count = takeValue().length;
    var word= takeValue().split(" "); // ["abc", "sdfsf"]
    
    document.getElementById("count").innerHTML = count;
    document.getElementById("wordCount").innerHTML = word.length;
}