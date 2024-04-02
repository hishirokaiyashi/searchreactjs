// const binarySearch = (array, k) =>{

//     let left = 0;
//     let right = array.length -1;
//     let result = -1; 
//     while ( left <= right ) {
//         let middle = Math.floor( (left + right) / 2);
//         if (k < array[middle]) {
//             right = middle - 1;
//         } else if (k > array[middle]) {
//             left = middle + 1;
//         } else {
//             // Khi tìm thấy, lưu vị trí và tiếp tục tìm ở bên trái
//             result = middle; // result = 3 
//             right = middle - 1; // right = 2
//         }
//     }
//     if (result !== -1) {
//         return result;
//     } else {
//         return "Khong tim thay k trong mang array";
//     }
// }
// console.log(binarySearch([1,2,4,4,4,5,6,7,7,7], 4))
                        //   L M R RS
// 0 1 2 3 4 5 6 7 8 9
// 1 2 3 4 5 6 7 8 9 10
// L       M          R
//         L     M

// 1 2 3 4 5
// L   M   R

const quickSort = (array) => {
    if(array.length < 2) return array
    let pivotIndex = array.length - 1;
    let pivot = array[pivotIndex];
    let left = [], right = []
    for ( let i = 0 ; i < array.length - 1 ; i++ ) {
        let current = array[i]; // 1 
        if(current < pivot) {
            left.push(current);
        } else {
            right.push(current);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
console.log(quickSort([11,5,3,6,2,]))

// const quickSort = (array) =>{
//     let pivotIndex = array.length -1;
//     let pivot = array[pivotIndex];
//     for(let i = 0; i < array.length; i){
//         let current = 
//     }
// }