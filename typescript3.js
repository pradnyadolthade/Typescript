function DisplayFactors(num) {
    var i;
    for (i = 1; i <= num / 2; i++) {
        if ((num % i) == 0) {
            console.log(i);
        }
    }
}
DisplayFactors(20);
