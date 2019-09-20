//Url to obbject JSON
export default function (url) {
    let tmpURL = url
    let splitPath = tmpURL.split("?");
    let payload = {};
    let params = splitPath[1].split("&")
    for (let k = 0; k < params.length; k++) {
        let tmpParam = params[k].split("=");
        payload[tmpParam[0]] = tmpParam[1]
    }
    return payload;
}