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
    console.log(randomList)
    return randomList
}

// export {createRandomList};

//test code:
createRandomList(10,1000);


