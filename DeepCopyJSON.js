/* eslint-disable no-useless-escape */
// return JSON and remove congig from framwork
export default function (JSONobject) {
    return JSON.parse(JSON.stringify(JSONobject))
}