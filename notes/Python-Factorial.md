## Non-Recursive

```python
      
def factorial(input\_number: int) -> int:

 if input\_number < 0:

  raise ValueError("Not Defined")

 if not isinstance(input\_number,int):

  raise ValueError("Enter Integer")

   result = 1

 for i in range(1,input\_number):

  result = result \* (i+1)

 return result

 if \_\_name\_\_ == "\_\_main\_\_":

  import doctest

doctest.testmod()
```

## Recursive

```python

def factorial2(n: int) -> int:

 if not isinstance(n, int):

 raise ValueError("factorial() only accepts integral values")

 if n < 0:

 raise ValueError("factorial() not defined for negative values")

 return 1 if n == 0 or n == 1 else n \* factorial(n - 1)

  

  

if \_\_name\_\_ == "\_\_main\_\_":

 import doctest

  

 doctest.testmod()

```