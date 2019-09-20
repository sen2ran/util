// make first chaarater as captial
export default function (name) {
    let res, firstChar, tail

    name = name.trim().toLowerCase();
    res = name.split(" ");
    for (var i = 0; i < res.length; i++) {
        firstChar = res[i].substring(0, 1);
        firstChar = firstChar.toUpperCase();
        tail = tail = res[i].substring(1);
        res[i] = firstChar + tail;
        if (i == 0) {
            name = res[i];
        } else {
            name = name + " " + res[i];
        }
    }
    return name;
}