/* eslint-disable no-useless-escape */
//Check email
export default function (email) {
    let pattern
    pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(email);
}