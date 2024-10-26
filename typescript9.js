function chkArmstrong(num) {
    var i = 0;
    var num1 = num;
    var sum = 0;
    var digit = 0;
    while (num != 0) {
        digit = num % 10;
        sum = sum + (Math.pow(digit, 3));
        num = Math.floor(num / 10);
    }
    if (sum == num1) {
        console.log("It is Armstrong", sum);
    }
    else {
        console.log("It is not Armstrong", sum);
    }
}
chkArmstrong(153);
