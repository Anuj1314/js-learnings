/* 
There was an engine in web browser that runs the javascript code. People pulled out that engine from the browser and wrap around few more utilities.
The engine was known as v8 engine, that is known as nodejs.

In order to run js, nodejs is needed now.
v8, chakra etc engines are there. These engines are kinda compiler

npm is one of the utility of node 

Node. js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
*/

// 1. BASIC DECLARATION
console.log("Hello World");

/* 
variables declaration
var, let, const
we dont use var anymore as there is much spillage of memory in that
lately we use let keyword only
*/
let username = "Anuj Patel"
username = "Arpit"
console.log(username);

/* 
As the definition,
const values cannot be changed
*/
const love = "bikes"
console.log(love);

let userMobile = 9574381290
console.log(userMobile);

let isLoggedIn = false
console.log(isLoggedIn);

// these are just declared but not the defined, and using var keyword is not recommended
let letMeLet
var letMeVar
console.log(letMeLet)
console.log(letMeVar)

// 2. LEXICAL STRUCTURE
/* 
Lexical structure -  elementary rules for language specification,
rules that defines how a language should be written.
texts/variables/functions are case sensitive.

Literals represent values in JavaScript.
These are fixed values—not variables—that you literally provide in your script
Integer, Float, String, Array, Boolean, Object

23
23.45
"String type 'single quote is valis' one"
'string type "double quote is valid too "two'
[1,2,3,"four"]
true / false
{firstName:"John", lastName:"D", "rno" : 23, "marks" : 60 }
null
undefined - its not a literal

RESERVED KEYWORDS
basic reserved keywords we all know
enum - is a future reserved keyword in js
implements, interface, package, private, protected, public - these are future reserved keywords
similarly there are certain keywords which are future reserved, with evolution of js, they will be reserved.

UNICODE CHARS
If not english, but writing some other language strings,
a good practice is to use unicode of that char and not that char directly.
ë - direct chat
console.log("\u00E9"); - unicode of that char

USE OF SEMICOLON IN JS

let 
x 
= 
5
console
.log(x)
;
console.log(x+5)


the above written code is also valid in js
defensive approach of using the semicolon - my line of code starts and ends with semicolon,
it does not matter what is written above my code.


js IS COMPILED OR INTERPRETED?
js has evolved insanely till the time, its not both, it has been changed a lot in recent times
its difficult to answer now javascript is compiled or interpreted.

there are on static compiler for js - 10 years old
Now its not true because the v8 interpreter compiles to native code internally
rhino optionally compiles to java bytocode internally
various mozilla interpreters{(trace, spider, jager)monkey} use JIT(just in time) compiler

v8 increases performance by compiling js to native machine code before executing it.
tracemonkey adds native code compilation to mozilla's js engine(spidermonkey)

The emergence of JIT compilers for script languages has blurred the line between compilation and interpretation to a 
point where the question does not mean all that much

There are many shaded betwen compilation and interpretation
I think the most useful definition for interpretation is
"fed the source code of the program at execution time, without seperate ahead-of-time step
By this definition, all the js engines are interpreters. But this is certainly not the only possible definision of interpretation."

*/
console.log("end");

