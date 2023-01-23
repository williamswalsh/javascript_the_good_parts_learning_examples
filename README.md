### Comments
// are preferred to /* */.  
The reason is that */ can be found in regex expressions which can end the comment prematurely.  

### JS Names
There are reserved words like in Java.  
Most of the reserved words are not used in the language.???  
**undefined**, **NaN** and **Infinity**, should be reserved, but are not.???  

### Numbers
JS has a single Number type.  
64-bit floating point like java's double type.  
JS doesn't have a separate integer type so 1 & 1.0 are the same value.  

#### NaN
NaN is a number value that is returned from an operation that can't produce a normal result.  
**NB:** NaN is not equal to any value, including itself.  
You can detect NaN by using the isNaN(number) function.  

#### Infinity
Infinity represents all numbers greater than 1.7...e+308.  

### Strings
Strings can be wrapped in single or double quotes.  
JS uses 16-bit character set -> so each character is 16bits wide.  
Strings are immutable.  
Strings have a property called length.  
Strings have methods, one of which is called toUpperCase.  

#### Compilation Unit
Each script element delivers a compilation unit.  
It is compiled and immediately executed.  
**NB:** All variables are in a global namespace.

#### var keyword
JS var is functionally scoped, not "block scoped".
Java types are block scoped.
When var is used to define variables inside a function, the variables are scoped to that function.

```java
    class A {
        {
            int x = 8;
        }
        A() {
            System.out.println(x);  // This will fail as the int is scoped inside the block.
        }
    }
```
```JS
    {
        var x = 8;
    }
    x;  // This will succeed as the var keyword in JS is "functionally scoped". Weird! Don't use the var keyword.
    function test{
        var y = 8;
    }
    y;  // This will fail as the var keyword in JS is "functionally scoped". Can't access the value outside the fx.
    
    {
        let z = 8;
    }
    z;  // This will fail as the let keyword in JS is "block scoped".
    
```

#### let keyword
let keyword is block scoped - use this instead of var.


### Characters
JS doesn't have a character type.  
To represent a character you use a String of length 1.  
Can use \u notation to represent unicode code points.

### Falsy
- false
- null
- undefined
- empty string
- number 0
- **NaN**??

### Truthy
- all objects
- the string "false"
- true

### Switch
The expression can return a number or a String.  

### foreach
- foreach will iterate through each of the object property keys.
- have to test if the property actually exists on the object or if it is just on the "prototype chain"
  can use the obj.hasOwnProperty(prop) to do so

#### Return value
- If the return keyword is executed with no expression - then the returned value is "undefined"??
- In Java the function has a void return value so it would cause a compile time error to try to use the return value from a void return method.

#### Built-in values
- true/false
- null
- undefined
- NaN
- Infinity

#### Operator Precedence
. [] ()
delete new typeof
Unary operators + -
* / %
+ -
>= <= > <
=== !== 
&& || Logical AND/OR
?: Ternary

