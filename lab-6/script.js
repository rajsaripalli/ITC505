function sortNumbers() {
    let input = document.getElementById("numbers").value;
    let numberArray = input.split(",").map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    
    if (numberArray.length === 0) {
        document.getElementById("result").textContent = "Please enter valid numbers.";
        return;
    }
    
    bubbleSort(numberArray);
    document.getElementById("result").textContent = numberArray.join(", ");
}

function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
            }
        }
    }
}