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

let list = createRandomList(5,50);
console.log(list);



//selection sort repeatedly finds the smallest element
//moves it to the front of the list
//you must store the smallest element in a variable
//until you finish iterating through the list

function selectionSort(list) {

    //loops through the entire array from index i=0 to index i=(length-1)
    //stops at the end of the array
    for (i=0; i < list.length-1; i++) {

        //start with the value at the head of the list as the smallest value
        smallest_value = list[i];
        console.log("loop 1: the smallest value is " + smallest_value);
        
        //loops through the entire array from index i=1 to index i=(length-1)
        //because index i=1 is the second element in the list
        for (j=1; j < list.length; j++){
            
            //if the element at index j is less than the smallest value
            //then it becomes the variable 'smallest_value' 
            if (list[j] < smallest_value) {
                smallest_value = list[j];
                index = j;
                console.log("loop 2: the smallest_value is " + smallest_value + " at index" + j);
            
         
                //the resulting smallest_value from the iteration
                //replaces the head value at index i
                //BUT we need to save the old_value at index i
                old_value = list[i];
                list[i] = smallest_value;
                list[j] = old_value;
                console.log("here is the list " + list)
            }
        }
    }
    console.log(list)
}
selectionSort(list)
console.log(list)