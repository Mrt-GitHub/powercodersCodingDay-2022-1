function getLastValue(my_array) {
    return my_array.sort()[my_array.length - 1];
};

my_array = ["Monday","Thursday","Saturday","Wednesday","Tuesday"];
console.log(getLastValue(my_array));