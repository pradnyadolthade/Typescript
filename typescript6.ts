function MaximumArray(num : number[]) : number
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
  return largest;
}


console.log("max element from array is :",MaximumArray([12,45,658,41,23,3,22]));