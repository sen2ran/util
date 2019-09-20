/* eslint-disable no-useless-escape */
//fine index from Array of obj base on obj Name
export default function (arr, objName, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][objName] == val) {
            return i;
        }
    }
    return -1;
}