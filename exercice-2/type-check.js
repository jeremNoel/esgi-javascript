myUndefined = undefined;

type_check_v1(myUndefined, "undefined");

function type_check_v1(val, type) {
    if(typeof val === type) {
        return true;
    } else {
        switch(true) {
            case Array.isArray(val) && type === "array":
                return true;
            case !val && type === "null":
                return true;
            case val && {}.toString.call(val) === '[object Function]' && type === "function":
                return true;
            case typeof val === type && check !== null && !Array.isArray(val):
                return true;
            default:
                return false;
        }
    }
}