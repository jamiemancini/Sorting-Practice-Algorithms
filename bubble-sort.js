
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

//Bubble Sort
//this takes multiple passes through the array
//depending on the size of the data set

//Step 1: Start with comparing each element (i) 
//to its adjacent element (i+1)
//swap the larger value to the right
//with each iteration the last value is always the largest
//therefore you only need to iterate 1 less each time

const bubbleSort = (list) => {

    //
    for (let j = 0; j < list.length; j++){

        for (let i = 0; i < list.length; i++) {
            
            if (list[i]>list[i+1]) {
                let largerValue=list[i];
                let smallerValue=list[i+1];
                list[i+1]=largerValue;
                list[i]=smallerValue;
            }
        }
    console.log(list)
    }
}



bubbleSort(list);
console.log(list);


