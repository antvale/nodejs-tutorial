## Simple scripts to read and write text files
- file.js - Read file using async and no blocking IO
- file-check.js - Check if a file exists. Use self variable to maintain the reference across 
asynchronous contexts


### Appendix

File System interfaces

- fs.open(path, flags[, mode], callback)
- fs.read(fd, buffer, offset, length, position, callback)
- fs.close(fd, callback)
