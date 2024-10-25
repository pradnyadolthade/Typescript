function chkPrime(num) {
    var i;
    var result = false;
    for (i = 2; i <= num / 2; i++) {
        if ((num % i) == 0) {
            result = true;
            break;
        }
    }
    return result;
}
var ans = chkPrime(8);
if (ans == true) {
    console.log("It is Not Prime");
}
else {
    console.log("It is Prime");
}
