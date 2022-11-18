const countries = [ "usa", "mexico", "russia", "japan", "colombia", "nigeria"];

const randomString = () => {
    const string = countries[Math.floor(Math.random() * countries.length)];
    return string;
}

const reverseString2 = str => {
    return new Promise((resolve, reject) => {
        if(!str) {
            reject(Error("error"))
        }
        resolve(str.split("").reverse().join(""))
    });
};

module.exports = randomString;