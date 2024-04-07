function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);

    const minSum = arr.slice(0, 4).reduce((acc, curr) => acc + curr, 0);
    const maxSum = arr.slice(1).reduce((acc, curr) => acc + curr, 0);
    
    console.log(minSum, maxSum);
}

const arr = [1, 3, 5, 7, 9];
miniMaxSum(arr); 

const input = '1 2 3 4 5';
const numbers = input.split(' ').map(Number);
miniMaxSum(numbers);
