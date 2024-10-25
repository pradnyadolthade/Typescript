function Maximum(num1, num2, num3) {
    var max = num1;
    if ((num1 < num2) && (num3 < num2)) {
        max = num2;
    }
    else if ((num1 < num3) && (num2 < num3)) {
        max = num3;
    }
    return max;
}
console.log(Maximum(10, 25, 1));
