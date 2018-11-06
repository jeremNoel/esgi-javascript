function ucfirst(str) {
    if(typeof str === "string") {
        return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);
    } else {
        return "";
    }  
}

function capitalize(str) {
    if(typeof str === "string") {
        var array = str.split(' ');
        var result = [];
            
        for(var i = 0; i < array.length; i++){
            result.push(ucfirst(array[i].toLowerCase()));
        }
        return result.join(' ');
    } else {
        return "";
    } 
}

function camelCase(str) {
    if(typeof str === "string") {
        return capitalize(str.replace('_', ' ')).split(' ').join('');
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