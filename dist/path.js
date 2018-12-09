"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var pathManager = require("path");
var PathCreator = (function () {
    function PathCreator() {
    }
    PathCreator.prototype.createPath = function (path) {
        var folders = path.split('\\');
        var createFile;
        var currentPath;
        currentPath = folders[0];
        if (folders.length === 1) {
            console.log("Input path not right");
            throw "Input path not right";
        }
        createFile = folders[folders.length - 1].split('.').length === 2;
        for (var i = 1; i < folders.length; i++) {
            currentPath = pathManager.join(currentPath, folders[i]);
            if (i === folders.length - 1 && createFile) {
                this.createFile(currentPath);
            }
            else {
                this.createFolder(currentPath);
            }
        }
    };
    PathCreator.prototype.createFolder = function (folderPath) {
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
            console.log("created path " + folderPath);
        }
    };
    PathCreator.prototype.createFile = function (filePath) {
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, '');
            console.log("created path " + filePath);
        }
    };
    return PathCreator;
}());
var pathCreator = new PathCreator();
exports.default = pathCreator;
(function main() {
    pathCreator.createPath('C:\\test\\test1\\test2\\test3\\test4\\test.txt');
})();
//# sourceMappingURL=path.js.map