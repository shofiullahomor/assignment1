// Problem 1
const formatValue = (value: string | number | boolean): string | number | boolean => {
    if(typeof value === 'string'){
        return value.toUpperCase();
    }
    if(typeof value === 'number'){
        return value * 10 ;
    }
    if(typeof value === 'boolean'){
        return !value ;
    }
    return value;
}
console.log(formatValue("shofiullah"));
console.log(formatValue(8));
console.log(formatValue(true));
