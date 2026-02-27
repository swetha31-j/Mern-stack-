const fs = require("fs");

// Check if "documents" folder exists
if (!fs.existsSync("./documents")) {
    fs.mkdir("./documents", (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Folder created successfully");
        }
    });
}

// Create a file inside documents folder
fs.writeFile("./documents/hello.txt", "Hello Hello Hello", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File created successfully");
    }
});