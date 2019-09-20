export default function (obj) {
    let tem;
    for (let i = 0; i < obj.length; i++) {
        if (i == 0) {
            tem = obj[i];
        } else {
            if (obj.length - 1 == i) {
                tem = tem + " and " + obj[i]; //And or coma
            } else {
                tem = tem + ", " + obj[i];
            }
        }
    }
    return tem;
}