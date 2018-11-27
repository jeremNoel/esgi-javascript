
// type_check_v1(undefined, "undefdined");

function type_check_v1(val, type) {
    if(typeof val === type) {
        return true;
    } else {
        switch(true) {
            case Array.isArray(val) && type === "array":
                return true;
            case !val && type === "null":
                return true;
            case val && type === "undefined":
                return true;
            default:
                return false;
        }
    }
}