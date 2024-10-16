function VowelCheck(y) {

    let count = 0;

    for (const char of y) {

        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    console.log(count);
}

let y = "abeiuoeee"

VowelCheck(y);
