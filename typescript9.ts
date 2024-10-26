function chkArmstrong(num : number) {
    var i : number = 0;
    var num1 : number = num;
    var sum = 0;
    var digit : number = 0;

    while(num!=0)
    {
       digit = num%10;
       sum = sum + (digit**3);
       num = Math.floor(num / 10);
    }

    if(sum==num1)
    {
        console.log("It is Armstrong",sum);
    }
    else
    {
        console.log("It is not Armstrong",sum);
    }


}

chkArmstrong(153);