import * as fs from 'fs';
import * as pathManager from 'path';

class PathCreator{
    public createPath(path: string){
        let folders = path.split('\\');
        let createFile: boolean;
        let currentPath: string;
        currentPath = folders[0];
        if(folders.length === 1){
            console.log(`Input path not right`);
            throw `Input path not right`;
        }

        createFile = folders[folders.length - 1].split('.').length === 2;

        for(let i=1; i<folders.length; i++){
            currentPath = pathManager.join(currentPath, folders[i]);
            if(i === folders.length - 1 && createFile){
                this.createFile(currentPath);
            } else {
                this.createFolder(currentPath)
            }
        }
    }

    private createFolder(folderPath: string){
        if(!fs.existsSync(folderPath)){
            fs.mkdirSync(folderPath);
            console.log(`created path ${folderPath}`);
        }
    }

    private createFile(filePath: string){
        if(!fs.existsSync(filePath)){
            fs.writeFileSync(filePath, '');
            console.log(`created path ${filePath}`);
        }
    }
}

let pathCreator = new PathCreator();

export default pathCreator;

(function main(){
    pathCreator.createPath('C:\\test\\test1\\test2\\test3\\test4\\test.txt');
})();