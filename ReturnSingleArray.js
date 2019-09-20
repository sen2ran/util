/* eslint-disable no-useless-escape */
//made 1D array from Array of obj base on obj Name
export default function (arr, objName) {
    let tmp = []
    for (let i = 0; i < arr.length; i++) {
        tmp.push(arr[i][objName])
    }
    return tmp
}