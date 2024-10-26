function SumArray(num : number[]) : number
{
    var i : number = 0;
    var sum :number = 0;

    for(i=0;i<num.length;i++)
    {
        sum = sum + num[i];
    }
  return sum;
}


console.log("max element from array is :",SumArray([23,6,7,4,5,7]));