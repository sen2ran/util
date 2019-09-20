/* eslint-disable no-useless-escape */

//Check if Value exist or not in array if object

export default function (arr, objName, val) {
    return arr.some(function (el) {
        return el[objName] === val;
    });
}