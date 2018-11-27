// var str = "anaconda";
// leet(str);


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

function leet(str) {
    if(typeof str === "string") {
        var checker = str.split('');
        for(var i = 0; i < checker.length; i++){
            switch (checker[i]) {
                case 'a':
                    checker[i] = '4';
                    break;
                case 'e':
                    checker[i] = '3';
                    break;
                case 'i':
                    checker[i] = '1';
                    break;
                case 'o':
                    checker[i] = '0';
                    break;
                case 'u':
                    checker[i] = '(_)';
                    break;
                case 'y':
                    checker[i] = '7';
                    break;
                default:
                    break;
              }
        }
        return checker.join('');
    } else {
        return "";
    } 
}