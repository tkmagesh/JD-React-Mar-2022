export function add(x,y){
    return x + y;
}

export function subtract(x,y){
    return x - y;
}

const utils = {
    isEven(no){
        return no % 2 === 0;
    }
}

export default utils;