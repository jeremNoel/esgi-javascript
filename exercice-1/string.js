function ucfirst(str) {
    if(typeof str === "string") {
        return str.charAt(0).toUpperCase() + str.slice(1);
    } else {
        return "";
    }  
}

function capitalize(str) {
    if(typeof str === "string") {
        var array = str.split(' ');
        var result = [];
            
        for(var x = 0; x < array.length; x++){
            result.push(ucfirst(array[x]));
        }
        return result.join(' ');
    } else {
        return "";
    } 
}

function camelCase(str) {
    if(typeof str === "string") {
        return capitalize(str).split(' ').join('');
    } else {
        return "";
    } 
}

function snake_case(str) {
    if(typeof str === "string") {
        return str.toLowerCase().split(' ').join('_');
    } else {
        return "";
    } 
}