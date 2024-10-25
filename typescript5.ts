function Fibonacci(num : number)
{
  
    const fib = [0,1]
    for (var i : number = 2; i< num ;i++)
    {
      fib[i] = fib[i-1] + fib[i-2];
    }
   return fib;
}

console.log(Fibonacci(7));