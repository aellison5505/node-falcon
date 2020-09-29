const { copyFileSync, readdirSync, existsSync, mkdirSync} = require('fs');

let main = async () => {
   // await copyFile();
   try{
    if(!existsSync('libaddon'))
        mkdirSync('libaddon');
   let files = readdirSync('build/Release');
   files.forEach((item) => {
       console.log(item);
        copyFileSync(`build/Release/${item}`,`libaddon/${item}`);
   });
    } catch (err) {
        console.log('No files to move', err);
    }
};
main();