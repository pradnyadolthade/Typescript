function SecondMaximumArray(num : number[]) : number
{
    var i : number = 0;
    var largest :number = num[0];

    for(i=0;i<num.length;i++)
    {
        if(largest < num[i])
        {
            largest = num[i];
        }
    }
  var slargest : number = -1;

  for(i=0;i<num.length;i++)
  {
    if((num[i]>slargest) && (num[i] != largest))
    {
        slargest = num[i]; 
    }
  }
  return slargest
}


console.log("max element from array is :",SecondMaximumArray([12,45,658,41,23,3,22]));