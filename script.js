/* Python Mastery — frontend-only educational platform */
(() => {
"use strict";

const lessons = [
{id:"intro",title:"Introduction to Python",level:"beginner",category:"Fundamentals",desc:"Understand what Python is, why it is popular, and where it is used.",content:{
concept:"Python is a high-level, general-purpose programming language known for readable syntax and a large ecosystem. It is used for scripting, automation, web development, data work, scientific computing and many other tasks.",
syntax:`print("Hello, Python!")`,
example:`name = "Python Learner"\nprint(f"Welcome, {name}!")`,
output:`Welcome, Python Learner!`,
use:"Use Python when you want expressive code, rapid development and access to a broad collection of libraries.",
mistakes:["Forgetting indentation where a code block is required.","Assuming Python syntax is identical to another language.","Mixing incompatible data types without conversion."],
practice:"Write a program that prints your name and your favorite Python topic.",
interview:"What makes Python a high-level programming language?"
}},
{id:"variables",title:"Variables & Data Types",level:"beginner",category:"Fundamentals",desc:"Store values and understand Python's core built-in types.",content:{
concept:"A variable is a name bound to an object. Common built-in types include int, float, complex, bool, str, list, tuple, set, dict and NoneType.",
syntax:`name = value\nage = 20\nprice = 99.5`,
example:`name = "Nisarg"\nage = 20\nskills = ["Python", "HTML", "CSS"]\nprint(type(age))\nprint(isinstance(name, str))`,
output:`<class 'int'>\nTrue`,
use:"Variables let programs keep and transform information.",
mistakes:["Using a name before assigning it.","Confusing = with ==.","Relying on a variable's apparent spelling rather than its actual type."],
practice:"Create variables for a product name, quantity and price, then print them.",
interview:"What is the difference between a variable and an object in Python?"
}},
{id:"operators",title:"Operators",level:"beginner",category:"Fundamentals",desc:"Use arithmetic, comparison, logical, assignment, membership and identity operators.",content:{
concept:"Operators combine or compare values. Python supports arithmetic (+, -, *, /, %, **, //), comparisons, logical operators, assignment operators, bitwise operators, membership and identity operators.",
syntax:`result = 10 + 5\nis_valid = age >= 18\n"py" in "python"`,
example:`a, b = 10, 3\nprint(a + b)\nprint(a // b)\nprint(a > b and b > 0)\nprint("p" in "python")`,
output:`13\n3\nTrue\nTrue`,
use:"Operators are the building blocks of calculations and decisions.",
mistakes:["Confusing / and //.","Using is when == is intended for value comparison.","Forgetting operator precedence."],
practice:"Build a small expression using arithmetic and comparison operators.",
interview:"What is the difference between == and is?"
}},
{id:"conditions",title:"Conditional Logic",level:"beginner",category:"Control Flow",desc:"Make decisions with if, elif, else and match-case.",content:{
concept:"Conditional statements select code based on Boolean expressions. Python provides if/elif/else and, in modern Python versions, match-case for structural pattern matching.",
syntax:`if condition:\n    statement\nelif other_condition:\n    statement\nelse:\n    statement`,
example:`score = 78\nif score >= 90:\n    grade = "A"\nelif score >= 70:\n    grade = "B"\nelse:\n    grade = "C"\nprint(grade)`,
output:`B`,
use:"Conditions are useful for validation, menus, business rules and program decisions.",
mistakes:["Incorrect indentation.","Using assignment instead of comparison.","Writing conditions that overlap unexpectedly."],
practice:"Write a program that prints whether a number is positive, negative or zero.",
interview:"When would you use elif instead of several separate if statements?"
}},
{id:"loops",title:"Loops",level:"beginner",category:"Control Flow",desc:"Repeat work with for, while, range, break and continue.",content:{
concept:"Loops repeat a block of code. for commonly iterates over an iterable, while repeats while a condition remains true. break exits a loop and continue skips to the next iteration.",
syntax:`for item in iterable:\n    statement\n\nwhile condition:\n    statement`,
example:`for n in range(1, 6):\n    if n == 3:\n        continue\n    print(n)`,
output:`1\n2\n4\n5`,
use:"Loops are essential for processing collections, repeated calculations and automation.",
mistakes:["Creating an infinite while loop.","Changing a collection unexpectedly while iterating.","Off-by-one errors with range()."],
practice:"Print the multiplication table of 7 using a for loop.",
interview:"What is the difference between break, continue and pass?"
}},
{id:"strings",title:"Strings & String Methods",level:"beginner",category:"Data Structures",desc:"Work with text, slicing and common string methods.",content:{
concept:"Strings are immutable sequences of Unicode characters. You can index, slice, concatenate and call methods such as upper(), lower(), replace(), split(), join(), find(), count(), startswith() and isdigit().",
syntax:`text = "Python"\ntext[0]\ntext[1:4]`,
example:`text = "  python mastery  "\nprint(text.strip().title())\nprint("a,b,c".split(","))\nprint("-".join(["Python", "Mastery"]))`,
output:`Python Mastery\n['a', 'b', 'c']\nPython-Mastery`,
use:"Strings appear in user input, files, APIs, logs and almost every application.",
mistakes:["Trying to modify a string character in place.","Forgetting that many methods return a new string.","Confusing find() with index() when no match exists."],
practice:"Count how many times the letter 'a' occurs in a sentence.",
interview:"Why are Python strings immutable?"
}},
{id:"lists",title:"Lists & List Comprehension",level:"beginner",category:"Data Structures",desc:"Store ordered mutable collections and process them efficiently.",content:{
concept:"A list is an ordered, mutable collection. Common methods include append(), extend(), insert(), remove(), pop(), sort(), reverse() and copy().",
syntax:`items = [1, 2, 3]\nitems.append(4)\nitems[0]`,
example:`squares = [x*x for x in range(6)]\nprint(squares)\nnums = [3, 1, 2]\nnums.sort()\nprint(nums)`,
output:`[0, 1, 4, 9, 16, 25]\n[1, 2, 3]`,
use:"Lists are useful when order matters and the collection needs modification.",
mistakes:["Aliasing a list accidentally.","Using remove() for an index instead of pop().","Forgetting list comprehensions create a new list."],
practice:"Create a list of numbers and produce a second list containing only even values.",
interview:"What is list comprehension and why is it useful?"
}},
{id:"tuples",title:"Tuples",level:"beginner",category:"Data Structures",desc:"Use immutable ordered collections with packing and unpacking.",content:{
concept:"A tuple is an ordered, immutable collection. Tuples support indexing, slicing, packing and unpacking. Their immutability makes them useful for fixed groups of values.",
syntax:`point = (10, 20)\nx, y = point`,
example:`student = ("Nisarg", 20, "Python")\nname, age, skill = student\nprint(name, age, skill)`,
output:`Nisarg 20 Python`,
use:"Tuples are useful for fixed records, multiple return values and values that should not be changed.",
mistakes:["Forgetting the comma in a one-item tuple: (5,).","Expecting tuple methods to match list methods.","Trying to assign to a tuple element."],
practice:"Create a tuple containing three subjects and unpack it.",
interview:"How is a tuple different from a list?"
}},
{id:"sets",title:"Sets",level:"intermediate",category:"Data Structures",desc:"Work with unique unordered values and set operations.",content:{
concept:"A set is a collection of distinct hashable elements. It supports union, intersection, difference and symmetric difference.",
syntax:`a = {1, 2, 3}\nb = {3, 4, 5}\na | b`,
example:`a = {"Python", "C++", "Java"}\nb = {"Python", "SQL"}\nprint(a & b)\nprint(a | b)`,
output:`{'Python'}\n{'Python', 'C++', 'Java', 'SQL'}`,
use:"Sets are useful for uniqueness checks and mathematical-style collection operations.",
mistakes:["Expecting stable positional indexing.","Putting unhashable values such as lists directly in a set.","Confusing set notation with a dictionary."],
practice:"Find the common values in two lists by converting them to sets.",
interview:"Why can't a list normally be an element of a set?"
}},
{id:"dicts",title:"Dictionaries",level:"intermediate",category:"Data Structures",desc:"Store key-value data with lookup and comprehension.",content:{
concept:"A dictionary maps keys to values. Useful methods include get(), keys(), values(), items(), update(), pop(), popitem(), setdefault() and copy().",
syntax:`person = {"name": "Nisarg", "age": 20}\nperson["name"]`,
example:`scores = {"Python": 92, "SQL": 84}\nfor subject, score in scores.items():\n    print(subject, score)`,
output:`Python 92\nSQL 84`,
use:"Dictionaries are fundamental for structured data, configuration and JSON-like information.",
mistakes:["Using an unhashable key.","Assuming a missing key returns None when direct indexing is used.","Mutating a dictionary while iterating over it."],
practice:"Create a dictionary of three products and prices, then print the most expensive item.",
interview:"What makes a Python dictionary different from a list?"
}},
{id:"functions",title:"Functions & Scope",level:"intermediate",category:"Functions",desc:"Build reusable logic with parameters, return values, *args, **kwargs and LEGB scope.",content:{
concept:"Functions package reusable behavior. Python supports positional and keyword arguments, defaults, *args, **kwargs, lambda expressions and nested functions. Name lookup follows the LEGB model: Local, Enclosing, Global, Built-in.",
syntax:`def greet(name="Learner"):\n    return f"Hello, {name}"`,
example:`def total(*numbers):\n    return sum(numbers)\n\nprint(total(10, 20, 30))`,
output:`60`,
use:"Functions improve reuse, testing, organization and maintainability.",
mistakes:["Forgetting return when a value is needed.","Using mutable default arguments carelessly.","Confusing local and global scope."],
practice:"Write a function that accepts a list and returns its average.",
interview:"Explain the LEGB rule in Python."
}},
{id:"oop",title:"Object-Oriented Python",level:"intermediate",category:"OOP",desc:"Learn classes, objects, constructors, inheritance, polymorphism and encapsulation.",content:{
concept:"Python supports object-oriented programming through classes and objects. Important concepts include instance attributes, class attributes, methods, inheritance, overriding, composition and polymorphism.",
syntax:`class Student:\n    def __init__(self, name):\n        self.name = name`,
example:`class Student:\n    def __init__(self, name):\n        self.name = name\n    def introduce(self):\n        return f"I am {self.name}"\n\ns = Student("Nisarg")\nprint(s.introduce())`,
output:`I am Nisarg`,
use:"OOP helps model related data and behavior in larger applications.",
mistakes:["Forgetting self in instance methods.","Confusing class and instance attributes.","Using inheritance where composition would be clearer."],
practice:"Create a Book class with title, author and a method that displays its details.",
interview:"What is the role of self in an instance method?"
}},
{id:"exceptions",title:"Exception Handling",level:"intermediate",category:"Core Python",desc:"Handle runtime problems with try, except, else, finally and raise.",content:{
concept:"Exception handling separates normal program flow from error handling. Use try for risky operations, except for handling known errors, else for successful execution and finally for cleanup.",
syntax:`try:\n    risky_operation()\nexcept ValueError:\n    handle_error()\nfinally:\n    cleanup()`,
example:`try:\n    age = int("abc")\nexcept ValueError:\n    print("Please enter a valid number.")`,
output:`Please enter a valid number.`,
use:"Robust applications validate input and handle expected failures without hiding bugs.",
mistakes:["Catching Exception everywhere.","Using exceptions instead of normal validation when unnecessary.","Ignoring the original error context."],
practice:"Safely convert user input into an integer and handle invalid input.",
interview:"What is the purpose of finally?"
}},
{id:"files",title:"File Handling & JSON",level:"intermediate",category:"Core Python",desc:"Read, write and append files and work with JSON data.",content:{
concept:"Python's open() supports reading, writing and appending. The with statement manages resources. The json module converts between Python data and JSON representations.",
syntax:`with open("data.txt", "r", encoding="utf-8") as file:\n    text = file.read()`,
example:`import json\nperson = {"name": "Nisarg", "age": 20}\ntext = json.dumps(person)\nprint(text)`,
output:`{"name": "Nisarg", "age": 20}`,
use:"Files and JSON are common in configuration, data exchange, logging and persistence.",
mistakes:["Forgetting encoding for text files when portability matters.","Opening a file without closing it.","Confusing json.dumps() with json.dump()."],
practice:"Write a list of three names to a text file and read it back.",
interview:"Why is with preferred for file handling?"
}},
{id:"modules",title:"Modules, Packages & Virtual Environments",level:"intermediate",category:"Tools",desc:"Organize code and manage dependencies with imports, pip and venv.",content:{
concept:"Modules are Python files containing code. Packages organize modules. Virtual environments isolate project dependencies. pip is commonly used to install Python packages.",
syntax:`python -m venv .venv\n# Windows\n.venv\\Scripts\\activate\n# macOS/Linux\nsource .venv/bin/activate`,
example:`import math\nprint(math.sqrt(81))`,
output:`9.0`,
use:"Project isolation prevents dependency conflicts and makes development reproducible.",
mistakes:["Installing packages globally when project isolation is intended.","Committing a virtual environment directory.","Forgetting to record dependencies."],
practice:"Create a requirements.txt containing two example dependencies.",
interview:"Why use a virtual environment?"
}},
{id:"iterators",title:"Iterators & Generators",level:"advanced",category:"Advanced Python",desc:"Understand iterable vs iterator, iter(), next() and lazy generators.",content:{
concept:"An iterable can produce an iterator. An iterator implements the iteration protocol. Generators are a convenient way to create iterators with yield and evaluate values lazily.",
syntax:`def count_up_to(n):\n    i = 1\n    while i <= n:\n        yield i\n        i += 1`,
example:`def squares(n):\n    for i in range(n):\n        yield i * i\n\nprint(list(squares(5)))`,
output:`[0, 1, 4, 9, 16]`,
use:"Generators can process large sequences without storing every result at once.",
mistakes:["Trying to reuse an exhausted iterator without recreating it.","Confusing iterable and iterator.","Assuming yield behaves exactly like return."],
practice:"Create a generator that yields even numbers up to a limit.",
interview:"What is the main benefit of a generator?"
}},
{id:"decorators",title:"Decorators & Closures",level:"advanced",category:"Advanced Python",desc:"Wrap functions and retain state with closures.",content:{
concept:"A decorator is a callable that takes a function and returns a modified callable. Closures allow an inner function to retain access to variables from an enclosing scope.",
syntax:`def decorator(func):\n    def wrapper(*args, **kwargs):\n        return func(*args, **kwargs)\n    return wrapper`,
example:`from functools import wraps\n\ndef log_call(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        print("Calling function")\n        return func(*args, **kwargs)\n    return wrapper`,
output:`Calling function`,
use:"Decorators appear in logging, authorization, caching, routing and framework APIs.",
mistakes:["Forgetting functools.wraps when metadata matters.","Making decorators too magical to understand.","Mixing decorator configuration with function arguments incorrectly."],
practice:"Create a decorator that prints before and after a function runs.",
interview:"What problem does functools.wraps solve?"
}},
{id:"async",title:"Async Programming",level:"advanced",category:"Advanced Python",desc:"Use async, await and asyncio for cooperative asynchronous I/O.",content:{
concept:"Asynchronous programming allows a program to suspend a waiting operation and let other work proceed. asyncio provides an event loop and tools for coroutines and tasks.",
syntax:`async def main():\n    await operation()\n\nasyncio.run(main())`,
example:`import asyncio\n\nasync def hello():\n    await asyncio.sleep(0.1)\n    return "done"\n\nprint(asyncio.run(hello()))`,
output:`done`,
use:"Async programming is especially useful for many I/O-bound operations such as network clients.",
mistakes:["Using blocking operations inside async code without considering their effect.","Forgetting await on a coroutine when appropriate.","Assuming async automatically makes CPU-heavy code faster."],
practice:"Create two small coroutines and run them together with asyncio.gather().",
interview:"What is an event loop?"
}},
{id:"regex",title:"Regular Expressions",level:"advanced",category:"Libraries",desc:"Search and transform text using the re module.",content:{
concept:"Regular expressions describe text patterns. Python's re module provides search, match, findall, split and sub plus groups, character classes, quantifiers and anchors.",
syntax:`import re\nre.findall(pattern, text)`,
example:`import re\ntext = "Email: student@example.com"\nprint(re.findall(r"[\\w.-]+@[\\w.-]+", text))`,
output:`['student@example.com']`,
use:"Regex is useful for validation, extraction and structured text processing.",
mistakes:["Writing patterns that are too broad.","Forgetting raw strings for patterns with backslashes.","Assuming regex is always the best parser."],
practice:"Extract all numbers from a sentence.",
interview:"What is the difference between re.search() and re.match()?"
}},
{id:"sqlite",title:"SQLite & Database Programming",level:"advanced",category:"Professional Python",desc:"Connect Python to SQLite and use parameterized SQL.",content:{
concept:"The sqlite3 module provides a DB-API interface to SQLite. Typical operations include connection, cursor, CREATE, INSERT, SELECT, UPDATE, DELETE and transactions.",
syntax:`import sqlite3\nconn = sqlite3.connect("app.db")\ncur = conn.cursor()`,
example:`cur.execute("CREATE TABLE IF NOT EXISTS users (name TEXT, age INTEGER)")\ncur.execute("INSERT INTO users VALUES (?, ?)", ("Nisarg", 20))\nconn.commit()`,
output:`Row inserted using a parameterized query.`,
use:"SQLite is useful for local applications, prototypes and learning database programming.",
mistakes:["Building SQL by string concatenation with user input.","Forgetting commit when needed.","Leaving connections open."],
practice:"Create a products table and query products above a chosen price.",
interview:"Why are parameterized queries important?"
}},
{id:"concurrency",title:"Threading vs Multiprocessing",level:"advanced",category:"Professional Python",desc:"Understand concurrency choices and the practical role of the GIL.",content:{
concept:"Threading can be useful for overlapping I/O-bound work. Multiprocessing uses separate processes and can provide parallel CPU execution. The exact behavior depends on the Python implementation and version; CPython's GIL has historically limited simultaneous execution of Python bytecode in threads.",
syntax:`from threading import Thread\nfrom multiprocessing import Process`,
example:`# Conceptual choice\n# I/O-bound: consider threading/asyncio\n# CPU-bound: consider multiprocessing`,
output:`Choose the concurrency model based on workload and implementation details.`,
use:"Concurrency decisions matter in network services, data processing and automation.",
mistakes:["Assuming threads always speed up CPU-bound Python code.","Ignoring synchronization.","Sharing mutable state unnecessarily."],
practice:"Write a comparison table for an I/O-heavy downloader and a CPU-heavy calculation.",
interview:"Why can multiprocessing help with CPU-bound workloads in CPython?"
}}
];

const projects = [
["Calculator","beginner","Practice variables, operators, functions and input validation.","Build a menu-driven calculator.","Inputs, arithmetic operations, validation.","Add history and scientific operations."],
["Number Guessing Game","beginner","Practice loops, conditions and random.","Create a secret-number game.","Attempts, hints, replay.","Add difficulty levels and scores."],
["Expense Tracker","intermediate","Practice lists/dictionaries, files and functions.","Record and summarize personal expenses.","CRUD, categories, totals.","Export JSON/CSV and add charts."],
["Library Management","intermediate","Practice OOP, collections and persistence.","Manage books, members and lending.","Classes, search, issue/return.","Add SQLite storage and reports."],
["File Organizer","intermediate","Practice pathlib, exceptions and automation.","Sort files into folders by type.","Scanning, rules, safe moves.","Add dry-run mode and logs."],
["REST API Concept","advanced","Learn HTTP, JSON, routing and backend architecture.","Design a Python API service.","Endpoints, validation, auth concepts.","Implement later with Flask/FastAPI."],
["Web Scraper","advanced","Practice requests, parsing and ethical scraping.","Extract structured public information.","Requests, HTML parsing, storage.","Add retries and rate limiting."],
["Data Analysis Project","advanced","Practice NumPy, Pandas and Matplotlib concepts.","Analyze a CSV dataset.","Cleaning, filtering, aggregation, charts.","Build a reusable analysis report."]
].map((p,i)=>({id:"p"+i,title:p[0],level:p[1],objective:p[2],requirements:p[3],features:p[4],extensions:p[5]}));

const questions = [
["Which type is immutable?","List","Tuple","Dictionary","Set",1,"Tuples are immutable sequences."],
["What does len() return?","The memory address","The number of items/characters","The data type","A Boolean",1,"len() returns the number of items in a container or characters in a string."],
["Which keyword defines a function?","func","define","def","function",2,"Python uses def."],
["Which operator checks membership?","is","in","==","=>",1,"in checks membership."],
["What does // perform?","Exponentiation","True division","Floor division","Modulo",2,"// performs floor division."],
["Which collection stores key-value pairs?","List","Tuple","Dictionary","Set",2,"Dictionaries map keys to values."],
["What does append() do to a list?","Adds one item","Sorts it","Deletes an item","Copies it",0,"append() adds one item to the end."],
["Which block always runs for handled exceptions?","try","except","finally","else",2,"finally is used for cleanup that should run whether an exception occurred or not."],
["What does yield create/produce in a generator?","A class","A sequence of yielded values over time","A module","A thread",1,"yield suspends a generator and produces a value."],
["Which module is used for JSON?","json","csvx","data","http",0,"Python's standard json module handles JSON encoding and decoding."],
["What is a decorator commonly used for?","Changing Python syntax","Wrapping/enhancing callables","Creating databases","Compiling code",1,"Decorators wrap callables to add behavior."],
["Which library provides asyncio?","asyncio","threading","sqlite3","re",0,"asyncio provides asynchronous programming facilities."],
["Which method returns dictionary key-value pairs?","keys()","values()","items()","pairs()",2,"items() returns key-value pairs."],
["What does isinstance(x, T) test?","Equality","Whether x is an instance of T","Whether x is callable","Length",1,"It tests type/instance relationship."],
["Which is a valid virtual environment command?","python -m venv .venv","python install env","pip make env","venv python create",0,"python -m venv creates a virtual environment."]
].map((q,i)=>({id:"q"+i,text:q[0],options:q.slice(1,5),answer:q[5],explanation:q[6],category:i<7?"Beginner":i<11?"Core Python":"Advanced Python"}));

const glossary = [
["Variable","A name bound to an object."],["Object","A runtime entity with identity, type and value."],["Class","A blueprint used to create objects."],["Function","A reusable block of callable behavior."],["Method","A function associated with an object or class."],["Module","A Python file/module containing definitions."],["Package","A way to organize related Python modules."],["Iterator","An object that produces values one at a time through the iteration protocol."],["Generator","A convenient iterator-producing construct using yield."],["Decorator","A callable that wraps another callable to modify or extend behavior."],["Exception","An event representing an error or unusual condition during execution."],["API","A defined interface through which software components communicate."],["Library","Reusable code that applications can call."],["Framework","A structured environment that typically controls application flow."],["Interpreter","Software that executes a programming language."],["Virtual Environment","An isolated environment for project Python dependencies."],["Dependency","A package or component required by software."],["Coroutine","An awaitable computation used in asynchronous programming."]
];

const defaultState = {
theme:"light", completedLessons:[], currentLesson:"intro", bookmarks:[], notes:[],
quizScores:[], streak:{days:[],current:0,longest:0}, badges:[], profile:{name:"Python Learner",level:"Beginner",goal:"Learn Python"}
};
let state = loadData("pythonMasteryState", defaultState);
let quizState = {index:0, selected:null, score:0, started:false};
let practiceFilter = {difficulty:"all",topic:"all",query:""};

function loadData(key, fallback){try{const raw=localStorage.getItem(key);return raw?merge(fallback,JSON.parse(raw)):structuredClone(fallback)}catch{return structuredClone(fallback)}}
function merge(base, incoming){if(!incoming||typeof incoming!=="object")return structuredClone(base);const out=structuredClone(base);Object.keys(incoming).forEach(k=>out[k]=incoming[k]);return out}
function save(){try{localStorage.setItem("pythonMasteryState",JSON.stringify(state))}catch{}}
function route(){return location.hash.replace("#","")||"home"}
function navigate(r){location.hash=r}
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function toast(msg,type="success"){const el=document.createElement("div");el.className="toast "+type;el.textContent=msg;document.getElementById("toastRegion").appendChild(el);setTimeout(()=>el.remove(),2800)}
function copy(text){navigator.clipboard?.writeText(text).then(()=>toast("Code copied!")).catch(()=>toast("Clipboard is unavailable; select and copy the code.","error"))}
function percent(){return Math.round(state.completedLessons.length/lessons.length*100)}
function completed(id){return state.completedLessons.includes(id)}
function markComplete(id){if(!completed(id)){state.completedLessons.push(id);save();toast("Lesson completed!");render()}else toast("Already completed.")}
function toggleBookmark(id){const i=state.bookmarks.indexOf(id);if(i>=0){state.bookmarks.splice(i,1);toast("Bookmark removed.")}else{state.bookmarks.push(id);toast("Bookmark saved!")}save();render()}
function updateStreak(){const today=new Date().toISOString().slice(0,10);if(!state.streak.days.includes(today)){state.streak.days.push(today);state.streak.days=state.streak.days.slice(-100);let n=0;for(let i=0;i<100;i++){const d=new Date();d.setDate(d.getDate()-i);const key=d.toISOString().slice(0,10);if(state.streak.days.includes(key))n++;else break}state.streak.current=n;state.streak.longest=Math.max(state.streak.longest,n);save()}}
function unlockBadges(){const add=(name,cond)=>{if(cond&&!state.badges.includes(name))state.badges.push(name)};add("First Lesson",state.completedLessons.length>=1);add("10 Lessons Completed",state.completedLessons.length>=10);add("First Quiz",state.quizScores.length>=1);add("10 Problems Solved",false);add("Python Basics Completed",state.completedLessons.filter(id=>lessons.find(x=>x.id===id)?.level==="beginner").length>=5);add("OOP Completed",completed("oop"));add("Advanced Python Completed",lessons.filter(x=>x.level==="advanced").every(x=>completed(x.id)));add("First Project",false);add("Course Completed",percent()===100);save()}

function render(){
 document.body.classList.toggle("dark",state.theme==="dark");
 const r=route(); const main=document.getElementById("main");
 if(r==="home")main.innerHTML=homePage();
 else if(r==="learn")main.innerHTML=learnPage();
 else if(r.startsWith("lesson/"))main.innerHTML=lessonPage(r.split("/")[1]);
 else if(r==="roadmap")main.innerHTML=roadmapPage();
 else if(r==="practice")main.innerHTML=practicePage();
 else if(r==="quiz")main.innerHTML=quizPage();
 else if(r==="projects")main.innerHTML=projectsPage();
 else if(r==="resources")main.innerHTML=resourcesPage();
 else if(r==="profile")main.innerHTML=profilePage();
 else main.innerHTML=homePage();
 bind();
 main.focus({preventScroll:true});
}

function homePage(){return `<div class="container">
<section class="hero"><div><div class="eyebrow">● Hands-on Python learning</div><h1>Master Python <span>From Zero to Advanced</span></h1><p>A complete learning platform for Python fundamentals, advanced concepts, practical projects, interview preparation and revision.</p><div class="actions"><button class="btn primary" data-route="learn">Start Learning →</button><button class="btn" data-route="roadmap">Explore Roadmap</button></div></div>
<div class="terminal"><div class="terminal-head"><span class="dots"><i class="dot"></i><i class="dot"></i><i class="dot"></i></span><span>python_demo.py</span></div><pre class="code"><span class="prompt">$</span> python python_demo.py

name = "Python Learner"
print(f"Welcome, {name}!")</pre><div class="output">Welcome, Python Learner!</div></div></section>
<div class="stats">${stat("Lessons",lessons.length+"+","real sample lessons")}${stat("Examples",lessons.length+"+","working examples")}${stat("Practice","15+","curated problems")}${stat("Projects",projects.length+"+","project blueprints")}${stat("Quiz Questions",questions.length+"+","sample questions")}${stat("Advanced Topics",lessons.filter(x=>x.level==="advanced").length+"+","deep topics")}</div>
<section class="section"><div class="section-head"><div><h2>Why learn Python?</h2><p>Explore where Python skills can take you.</p></div></div><div class="grid">${["Beginner Friendly","Automation","Web Development","Data Science","Artificial Intelligence","Data Engineering"].map((x,i)=>`<article class="card feature"><div class="icon">${["◈","⚙","⌘","▦","✦","◫"][i]}</div><h3>${x}</h3><p>${["Readable syntax and a gentle learning curve.","Automate repetitive files, reports and workflows.","Build APIs and web applications with Python frameworks.","Analyze data using the Python ecosystem.","Explore the foundations behind AI and ML workflows.","Process, transform and move data reliably."][i]}</p></article>`).join("")}</div></section>
<section class="section"><div class="section-head"><div><h2>My Learning</h2><p>Your progress is stored locally in this browser.</p></div><button class="btn" data-route="profile">Open Dashboard</button></div>${dashboard()}</section>
</div>`}
function stat(a,b,c){return `<div class="stat"><strong>${b}</strong><span>${a} · ${c}</span></div>`}
function dashboard(){return `<div class="dashboard"><div class="card"><div style="display:flex;justify-content:space-between"><div><span class="pill">Overall progress</span><h3>Python Mastery</h3></div><strong>${percent()}%</strong></div><div class="progress-wrap"><div class="progress-bar" style="width:${percent()}%"></div></div><div class="metric-row"><div class="metric"><strong>${state.completedLessons.length}</strong><span>Lessons done</span></div><div class="metric"><strong>${lessons.length-state.completedLessons.length}</strong><span>Remaining</span></div><div class="metric"><strong>${state.quizScores.length?Math.round(state.quizScores.reduce((a,b)=>a+b,0)/state.quizScores.length):0}%</strong><span>Quiz average</span></div><div class="metric"><strong>${state.streak.current}</strong><span>Day streak</span></div></div></div><div class="card"><span class="pill">Continue learning</span><h3>${esc(lessons.find(x=>x.id===state.currentLesson)?.title||lessons[0].title)}</h3><p>Pick up where you left off.</p><button class="btn primary" data-route="lesson/${state.currentLesson}">Continue →</button></div></div>`}

function learnPage(){const levels=[["beginner","Beginner","Start with fundamentals, control flow and core data structures."],["intermediate","Intermediate","Build reusable programs with functions, OOP, files and modules."],["advanced","Advanced","Study generators, decorators, async, databases and professional concepts."]];return `<div class="container"><section class="page-head"><span class="eyebrow">Learning library</span><h1>Learn Python step by step</h1><p>Every lesson follows a consistent structure: concept, syntax, example, output, explanation, real-world use, common mistakes, practice and an interview question.</p></section><div class="searchbar" style="margin-bottom:20px"><input id="lessonSearch" placeholder="Search lessons, topics and keywords…" value="${esc(practiceFilter.query)}"><button class="btn" id="clearSearch">Clear</button></div><div id="lessonList">${lessonCards(lessons)}</div></div>`}
function lessonCards(arr){if(!arr.length)return `<div class="card"><h3>No matching lessons</h3><p>Try a different Python topic.</p></div>`;return `<div class="grid">${arr.map(l=>`<article class="card"><span class="pill">${esc(l.level)}</span><h3>${completed(l.id)?"✓ ":""}${esc(l.title)}</h3><p>${esc(l.desc)}</p><small style="color:var(--muted)">${esc(l.category)}</small><div class="actions"><button class="btn primary" data-route="lesson/${l.id}">Open Lesson</button><button class="btn" data-bookmark="${l.id}">${state.bookmarks.includes(l.id)?"★":"☆"}</button></div></article>`).join("")}</div>`}

function lessonPage(id){const l=lessons.find(x=>x.id===id)||lessons[0];state.currentLesson=l.id;updateStreak();save();unlockBadges();return `<div class="container"><section class="page-head"><span class="eyebrow">${esc(l.level)} · ${esc(l.category)}</span><h1>${esc(l.title)}</h1><p>${esc(l.desc)}</p></section><div class="layout"><aside class="sidebar"><div class="side-title">Course modules</div><div class="lesson-nav">${lessons.map(x=>`<button class="${x.id===l.id?"active ":""}${completed(x.id)?"done":""}" data-route="lesson/${x.id}">${completed(x.id)?"✓ ":""}${esc(x.title)}</button>`).join("")}</div></aside><article class="lesson-main"><div class="lesson-card"><h1>${esc(l.title)}</h1><h2>Concept</h2><p>${esc(l.content.concept)}</p><h2>Syntax</h2>${codeBlock(l.content.syntax)}<h2>Example</h2>${codeBlock(l.content.example)}<h2>Output</h2><div class="outputbox">${esc(l.content.output)}</div><h2>Explanation</h2><p>The example applies the concept directly and keeps the code small enough to experiment with. Try changing one value at a time and observe how the result changes.</p><h2>Real-World Use</h2><div class="callout">${esc(l.content.use)}</div><h2>Common Mistakes</h2><ul>${l.content.mistakes.map(x=>`<li>${esc(x)}</li>`).join("")}</ul><h2>Practice</h2><div class="callout"><strong>Your task:</strong> ${esc(l.content.practice)}</div><h2>Interview Question</h2><div class="callout"><strong>Q:</strong> ${esc(l.content.interview)}</div><div class="lesson-actions"><button class="btn" data-bookmark="${l.id}">${state.bookmarks.includes(l.id)?"★ Bookmarked":"☆ Bookmark"}</button><button class="btn primary" data-complete="${l.id}">${completed(l.id)?"✓ Completed":"Mark as Complete"}</button></div></div></article><aside class="sidepanel"><span class="pill">Progress</span><h3>${percent()}%</h3><div class="progress-wrap"><div class="progress-bar" style="width:${percent()}%"></div></div><p style="color:var(--muted);font-size:13px">${state.completedLessons.length} of ${lessons.length} lessons complete.</p><button class="btn" data-route="practice">Practice</button><button class="btn" data-route="quiz" style="margin-top:7px">Take Quiz</button></aside></div></div>`}
function codeBlock(code){const safe=esc(code);return `<div class="codebox"><button class="copy-code" data-copy="${esc(code)}">Copy</button><pre>${safe}</pre></div>`}

function roadmapPage(){const nodes=[["Python Beginner","Start with syntax, variables and I/O"],["Python Fundamentals","Operators, conditions, loops and core concepts"],["Data Structures","Strings, lists, tuples, sets and dictionaries"],["Functions","Parameters, return values, scope and recursion"],["OOP","Classes, objects, inheritance and polymorphism"],["Intermediate Python","Exceptions, files, modules and environments"],["Advanced Python","Iterators, generators, decorators and internals"],["Libraries","Regex, JSON, SQLite, NumPy, Pandas and Matplotlib"],["Projects","Build practical programs and document your work"],["Specialization","Developer, data, automation, backend or AI/ML path"]];return `<div class="container"><section class="page-head"><span class="eyebrow">Your route</span><h1>Python Learning Roadmap</h1><p>Follow the sequence or jump to a specialization based on your goal.</p></section><div class="roadmap">${nodes.map((n,i)=>`<article class="road-node"><span class="pill">Step ${i+1}</span><h3>${n[0]}</h3><p style="color:var(--muted)">${n[1]}</p></article>`).join("")}</div><section class="section"><div class="section-head"><div><h2>Specializations</h2><p>Recommended topic groups without ranking one career path above another.</p></div></div><div class="grid">${[["Python Developer","Core Python → OOP → APIs → Testing"],["Data Scientist","Python → NumPy → Pandas → Visualization"],["Automation Developer","Python → Files → APIs → Scheduling"],["Backend Developer","Python → HTTP → APIs → Database → Frameworks"],["AI/ML Learner","Python → Data → NumPy/Pandas → ML concepts"],["Data Engineer","Python → SQL → Data processing → Pipelines"]].map(x=>`<article class="card"><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div></section></div>`}

function practicePage(){let arr=lessons.flatMap((l,i)=>[...Array(i%2?2:1)].map((_,j)=>({id:l.id+"-"+j,title:`Practice: ${l.title}`,difficulty:i<6?"Easy":i<12?"Medium":"Hard",topic:l.category,question:l.content.practice,solution:`Review the ${l.title} lesson, write the solution yourself first, then compare it with the lesson example.`})));let filtered=arr.filter(x=>(practiceFilter.difficulty==="all"||x.difficulty===practiceFilter.difficulty)&&(practiceFilter.topic==="all"||x.topic===practiceFilter.topic)&&(x.title.toLowerCase().includes(practiceFilter.query.toLowerCase())||x.question.toLowerCase().includes(practiceFilter.query.toLowerCase())));return `<div class="container"><section class="page-head"><span class="eyebrow">Hands-on practice</span><h1>Practice Python</h1><p>Try a problem before reading the suggested approach.</p></section><div class="card" style="margin-bottom:18px"><div class="form-grid"><input class="field" id="practiceSearch" placeholder="Search problems…" value="${esc(practiceFilter.query)}"><select class="select" id="difficulty"><option value="all">All difficulties</option><option ${practiceFilter.difficulty==="Easy"?"selected":""}>Easy</option><option ${practiceFilter.difficulty==="Medium"?"selected":""}>Medium</option><option ${practiceFilter.difficulty==="Hard"?"selected":""}>Hard</option></select></div></div><div class="grid">${filtered.map(x=>`<article class="card"><span class="pill">${x.difficulty}</span><h3>${esc(x.title)}</h3><p>${esc(x.question)}</p><details><summary>Show hint / approach</summary><p>${esc(x.solution)}</p></details></article>`).join("")}</div></div>`}

function quizPage(){if(quizState.finished)return `<div class="container"><section class="page-head"><span class="eyebrow">Quiz complete</span><h1>Quiz Result</h1></section><div class="card quiz" style="text-align:center"><div style="font-size:52px">🏆</div><h2>${quizState.score} / ${questions.length}</h2><p>You scored ${Math.round(quizState.score/questions.length*100)}%.</p><p>Review the explanations, then retry when you are ready.</p><button class="btn primary" id="retryQuiz">Retry Quiz</button></div></div>`;const q=questions[quizState.index];return `<div class="container"><section class="page-head"><span class="eyebrow">Knowledge check</span><h1>Python Quiz</h1><p>Question ${quizState.index+1} of ${questions.length} · ${q.category}</p></section><div class="quiz card"><div class="progress-wrap"><div class="progress-bar" style="width:${(quizState.index/questions.length)*100}%"></div></div><h2>${esc(q.text)}</h2>${q.options.map((o,i)=>`<button class="quiz-option ${quizState.selected===i?"selected":""}" data-option="${i}">${String.fromCharCode(65+i)}. ${esc(o)}</button>`).join("")}<div class="lesson-actions"><span>${quizState.selected===null?"Choose an answer.":"Answer selected."}</span><button class="btn primary" id="quizNext">${quizState.index===questions.length-1?"Finish":"Next"}</button></div></div></div>`}

function projectsPage(){return `<div class="container"><section class="page-head"><span class="eyebrow">Build portfolio skills</span><h1>Project Marketplace</h1><p>Project blueprints include objectives, requirements, skills and extension ideas.</p></section><div class="project-grid">${projects.map(p=>`<article class="card project-card"><span class="pill">${p.level}</span><h3>${esc(p.title)}</h3><p>${esc(p.objective)}</p><p><strong>Requirements:</strong> ${esc(p.requirements)}</p><p><strong>Features:</strong> ${esc(p.features)}</p><button class="btn" data-project="${p.id}">View Project</button></article>`).join("")}</div></div>`}

function resourcesPage(){return `<div class="container"><section class="page-head"><span class="eyebrow">Reference library</span><h1>Resources</h1><p>Quick revision tools, searchable terminology and interview preparation.</p></section><div class="resource-grid"><section class="card"><h2>Python Cheat Sheet</h2><p>Core syntax and commonly used operations.</p><div class="table-wrap"><table class="table"><tr><th>Topic</th><th>Quick reference</th></tr>${[["Variables","x = 10"],["Condition","if x > 5:"],["Loop","for x in items:"],["Function","def add(a,b):"],["List","items.append(x)"],["Dictionary","data.get('key')"],["Exception","try / except / finally"],["File","with open(...) as f:"]].map(x=>`<tr><td>${x[0]}</td><td><code>${esc(x[1])}</code></td></tr>`).join("")}</table></div><div class="actions"><button class="btn" id="printCheat">Print</button></div></section><section class="card"><h2>Interview Questions</h2><p>Practice explaining concepts clearly.</p><div class="lesson-nav">${["What is the difference between list and tuple?","Explain mutable vs immutable objects.","What is the LEGB rule?","How do generators save memory?","What are decorators?","Threading vs multiprocessing?","What is a virtual environment?","Why use parameterized SQL?"].map((x,i)=>`<button data-interview="${i}">▸ ${x}</button>`).join("")}</div></section></div><section class="section"><div class="section-head"><div><h2>Python Glossary</h2><p>Instant search across common terminology.</p></div></div><input class="field" id="glossarySearch" placeholder="Search glossary…"><div class="glossary" id="glossaryGrid" style="margin-top:14px">${glossary.map(x=>`<div class="term"><b>${x[0]}</b><span>${x[1]}</span></div>`).join("")}</div></section><section class="section"><div class="card"><h2>My Bookmarks</h2><p>Saved lessons and examples stay in your browser.</p>${state.bookmarks.length?`<div class="lesson-nav">${state.bookmarks.map(id=>{const l=lessons.find(x=>x.id===id);return l?`<button data-route="lesson/${l.id}">★ ${esc(l.title)}</button>`:""}).join("")}</div>`:`<p>You haven't bookmarked any lessons yet.</p>`}</div></section></div>`}

function profilePage(){unlockBadges();return `<div class="container"><section class="page-head"><span class="eyebrow">My learning</span><h1>Dashboard & Profile</h1><p>Your learning data is stored locally. No account or sensitive personal information is required.</p></section><div class="dashboard"><section class="card"><h2>Profile</h2><div class="form-grid"><label>Name<input class="field" id="profileName" value="${esc(state.profile.name)}"></label><label>Level<select class="select" id="profileLevel"><option ${state.profile.level==="Beginner"?"selected":""}>Beginner</option><option ${state.profile.level==="Intermediate"?"selected":""}>Intermediate</option><option ${state.profile.level==="Advanced"?"selected":""}>Advanced</option></select></label><label class="full">Goal<select class="select" id="profileGoal">${["Learn Python","College studies","Interview preparation","Web development","Data science","Automation","AI/ML","General programming"].map(x=>`<option ${state.profile.goal===x?"selected":""}>${x}</option>`).join("")}</select></label></div><div class="actions"><button class="btn primary" id="saveProfile">Save Profile</button></div></section><section class="card"><h2>Progress</h2><h3>${percent()}%</h3><div class="progress-wrap"><div class="progress-bar" style="width:${percent()}%"></div></div><p>${state.completedLessons.length} / ${lessons.length} lessons completed.</p><p>Quiz attempts: ${state.quizScores.length}</p><p>Current streak: 🔥 ${state.streak.current} days</p></section></div><section class="section"><div class="section-head"><div><h2>Achievements</h2><p>Badges unlock from real activity in this browser.</p></div></div><div class="badges">${["First Lesson","10 Lessons Completed","First Quiz","10 Problems Solved","Python Basics Completed","OOP Completed","Advanced Python Completed","First Project","Course Completed"].map(b=>`<div class="badge ${state.badges.includes(b)?"":"locked"}">${state.badges.includes(b)?"🏆":"🔒"} ${b}</div>`).join("")}</div></section><section class="section"><div class="card"><h2>My Notes</h2><p>Create a personal note attached to the current learning journey.</p><textarea class="note-input" id="newNote" rows="4" placeholder="Write your note…"></textarea><div class="actions"><button class="btn primary" id="addNote">Create Note</button></div><div class="notes">${state.notes.map((n,i)=>`<article class="note"><b>${esc(n.title)}</b><small>${esc(n.date)}</small><p>${esc(n.text)}</p><button class="btn danger" data-delete-note="${i}">Delete</button></article>`).join("")||"<p>No notes yet.</p>"}</div></div></section><section class="section"><div class="card"><h2>Certificate</h2><p>Complete all lessons to unlock a printable course-completion certificate.</p><button class="btn primary" id="certificateBtn" ${percent()===100?"":"disabled"}>Open Certificate</button></div></section></div>`}

function openModal(html){document.getElementById("modalContent").innerHTML=html;document.getElementById("modalBackdrop").classList.remove("hidden");document.getElementById("modalClose").focus()}
function closeModal(){document.getElementById("modalBackdrop").classList.add("hidden")}
function bind(){
 document.querySelectorAll("[data-route]").forEach(b=>b.onclick=()=>navigate(b.dataset.route));
 document.querySelectorAll("[data-bookmark]").forEach(b=>b.onclick=()=>toggleBookmark(b.dataset.bookmark));
 document.querySelectorAll("[data-complete]").forEach(b=>b.onclick=()=>markComplete(b.dataset.complete));
 document.querySelectorAll("[data-copy]").forEach(b=>b.onclick=()=>copy(b.dataset.copy));
 document.querySelectorAll("[data-project]").forEach(b=>b.onclick=()=>{const p=projects.find(x=>x.id===b.dataset.project);openModal(`<span class="pill">${p.level}</span><h2>${esc(p.title)}</h2><p>${esc(p.objective)}</p><h3>Requirements</h3><p>${esc(p.requirements)}</p><h3>Skills / Features</h3><p>${esc(p.features)}</p><h3>Extension ideas</h3><p>${esc(p.extensions)}</p>`);});
 document.querySelectorAll("[data-interview]").forEach(b=>b.onclick=()=>openModal(`<h2>Interview question</h2><p>${["What is the difference between list and tuple?","Explain mutable vs immutable objects.","What is the LEGB rule?","How do generators save memory?","What are decorators?","Threading vs multiprocessing?","What is a virtual environment?","Why use parameterized SQL?"][+b.dataset.interview]}</p><p><strong>Tip:</strong> Explain the concept, give a small example, and mention one practical use.</p>`));
 const ls=document.getElementById("lessonSearch");if(ls)ls.oninput=()=>{practiceFilter.query=ls.value;document.getElementById("lessonList").innerHTML=lessonCards(lessons.filter(l=>(l.title+" "+l.desc+" "+l.category).toLowerCase().includes(ls.value.toLowerCase())));bind()};
 const clear=document.getElementById("clearSearch");if(clear)clear.onclick=()=>{practiceFilter.query="";render()};
 const ps=document.getElementById("practiceSearch");if(ps)ps.oninput=()=>{practiceFilter.query=ps.value;render()};
 const df=document.getElementById("difficulty");if(df)df.onchange=()=>{practiceFilter.difficulty=df.value;render()};
 const gs=document.getElementById("glossarySearch");if(gs)gs.oninput=()=>{const q=gs.value.toLowerCase();document.getElementById("glossaryGrid").innerHTML=glossary.filter(x=>(x[0]+" "+x[1]).toLowerCase().includes(q)).map(x=>`<div class="term"><b>${x[0]}</b><span>${x[1]}</span></div>`).join("")||`<div class="card"><p>No glossary terms found.</p></div>`};
 const pc=document.getElementById("printCheat");if(pc)pc.onclick=()=>window.print();
 document.querySelectorAll("[data-option]").forEach(b=>b.onclick=()=>{quizState.selected=+b.dataset.option;render()});
 const qn=document.getElementById("quizNext");if(qn)qn.onclick=()=>{if(quizState.selected===null){toast("Please choose an answer.","error");return}if(quizState.selected===questions[quizState.index].answer)quizState.score++;if(quizState.index===questions.length-1){const pct=Math.round(quizState.score/questions.length*100);state.quizScores.push(pct);save();unlockBadges();quizState.finished=true;render();}else{quizState.index++;quizState.selected=null;render()}};
 const retry=document.getElementById("retryQuiz");if(retry)retry.onclick=()=>{quizState={index:0,selected:null,score:0,started:true,finished:false};render()};
 const sp=document.getElementById("saveProfile");if(sp)sp.onclick=()=>{state.profile.name=document.getElementById("profileName").value.trim()||"Python Learner";state.profile.level=document.getElementById("profileLevel").value;state.profile.goal=document.getElementById("profileGoal").value;save();toast("Profile saved!");render()};
 const an=document.getElementById("addNote");if(an)an.onclick=()=>{const text=document.getElementById("newNote").value.trim();if(!text){toast("Write a note first.","error");return}state.notes.unshift({title:lessons.find(x=>x.id===state.currentLesson)?.title||"Python Mastery",text,date:new Date().toLocaleString()});save();toast("Note created!");render()};
 document.querySelectorAll("[data-delete-note]").forEach(b=>b.onclick=()=>{state.notes.splice(+b.dataset.deleteNote,1);save();toast("Note deleted.");render()});
 const cb=document.getElementById("certificateBtn");if(cb)cb.onclick=()=>{openModal(`<div class="certificate"><div>PYTHON MASTERY</div><h1>Certificate of Completion</h1><p>This certifies that</p><div class="cert-name">${esc(state.profile.name)}</div><p>has completed the Python Mastery learning curriculum.</p><p><strong>Completion: ${percent()}%</strong></p><p>${new Date().toLocaleDateString()}</p></div><div class="actions" style="justify-content:center"><button class="btn primary" onclick="window.print()">Print Certificate</button></div>`)};
}
document.getElementById("themeBtn").onclick=()=>{state.theme=state.theme==="dark"?"light":"dark";save();render()};
document.getElementById("globalSearchBtn").onclick=()=>openModal(`<h2>Search Python Mastery</h2><input class="field" id="globalSearch" placeholder="Try: lists, decorators, OOP, JSON…"><div id="globalResults" style="margin-top:15px"></div>`);
document.getElementById("modalClose").onclick=closeModal;document.getElementById("modalBackdrop").onclick=e=>{if(e.target.id==="modalBackdrop")closeModal()};
document.getElementById("menuBtn").onclick=()=>openModal(`<h2>Navigation</h2><div class="lesson-nav">${["home","learn","roadmap","practice","projects","quiz","resources","profile"].map(x=>`<button data-route="${x}">${x[0].toUpperCase()+x.slice(1)}</button>`).join("")}</div>`);
document.addEventListener("input",e=>{if(e.target.id==="globalSearch"){const q=e.target.value.toLowerCase();document.getElementById("globalResults").innerHTML=lessons.filter(l=>(l.title+" "+l.desc+" "+l.category).toLowerCase().includes(q)).slice(0,8).map(l=>`<button class="btn" data-route="lesson/${l.id}" style="display:block;width:100%;text-align:left;margin:7px 0">${esc(l.title)} <small>· ${esc(l.category)}</small></button>`).join("")||"<p style='color:var(--muted)'>No results yet.</p>";bind()}});
window.addEventListener("hashchange",()=>{closeModal();render()});
updateStreak();unlockBadges();render();
})();