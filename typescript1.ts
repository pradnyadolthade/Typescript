function Maximum (num1 : number, num2: number, num3: number) : number
{
   var max : number = num1;
   if((num1<num2) && (num3 < num2))
   {
    max = num2;
   }
   else if ((num1<num3) && (num2 < num3))
   {
    max = num3;
   }
   return max;
}

console.log(Maximum(10,25,1));
