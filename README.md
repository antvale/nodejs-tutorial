# nodejs-tutorial
Repo containing sample scripts used to learn around nodejs

A Node application is executed in a single thread with a single event cycle that calls functions,
callbacks, and external services. It adds the callback functions in a event queue and waits for
a response trying to optimizing the code execution.

As general recommendation you should avoid to use node to make complex computational work like
manipulating long array, matrix, and other kind of task that are sync by nature.
If you need for that the suggestion is to move this kind of work to extenal services built on other technologies and calling them from inside nodejs. 
See array/intersection.js to learn how uses node to perform complex computation operation. Be careful
to use that just in sporadic situations. 

In a nested function pipeline the scope of each function is preserved, furthemore each function
can access to the variables declared in the parent function. An exception to this rule is when a
'this' reference is used in the local function, in this event the reference to caller function
is lost given than the callback is detached from the caller. See file/file-check.js to learn how that
works.
