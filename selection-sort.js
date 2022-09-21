//Part 1:
//creates a list of random numbers
//given 2 parameters: size and range
//size: the number of elements in the array
//range: the maximum value of any element

function createRandomList(size,range) {
    const randomList = [];
    for (let i = 0; i < size; i++) {
        var num = Math.floor(Math.random() * range) + 1;
        randomList.push(num);
    };
    //console.log(randomList)
    return randomList
}

let list = createRandomList(10,10);
console.log(list);


//selection sort repeatedly finds the smallest element
//moves it to the front of the list
//you must store the smallest element in a variable
//until you finish iterating through the list

const selectionSort = (list) => {
    for (i=0; i < list.length-1; i++) {
        smallest_value = list[i];
        console.log(smallest_value)
        for (j=1; j < list.length-2; j++){
            if (list[j] < smallest_value) {
                smallest_value = list[j];
            }
            list[i] = smallest_value
        }
    }
}

console.log(list)