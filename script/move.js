const { copyFileSync, readdirSync} = require('fs');

let main = async () => {
   // await copyFile();
   try{
   let files = readdirSync('build/Release');
   files.forEach((item) => {
       console.log(item);
        copyFileSync(`build/Release${item}`,`addon/${item}`);
   });
    } catch (err) {
        console.log('No files to move');
    }
};
main();