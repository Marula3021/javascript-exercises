const repeatString = function (str, num) {
    let result = "";

    for (let i = 0; i < num; i++) {
        if (num < 0) {
            result = "ERROR"
        } else
            result += str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
