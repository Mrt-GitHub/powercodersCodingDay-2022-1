function weekNumbersToWords(my_array) {
    A = [];
    for (let i = 0; i < my_array.length; i++) {
        switch (my_array[i]) {
            case 1:
                A.push('Monday')
                break
            case 2:
                A.push('Tuesday')
                break
            case 3:
                A.push('Wednesday')
                break
            case 4:
                A.push('Thursday')
                break
            case 5:
                A.push('Friday')
                break
            case 6:
                A.push('Saturday')
                break
            case 7:
                A.push('Sunday')
                break
        }
    }
return A;
};

my_array = [1,4,6,3,2]
console.log(weekNumbersToWords(my_array))