function Area (radius : number) : number
{
   var PI : number = 3.14;
   var area : number = 0;

   area = PI * radius * radius;
   return area;
}

console.log(Area(5));
