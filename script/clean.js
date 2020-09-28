const { unlinkSync, readdirSync } = require('fs');

let main = async () => {
    // await copyFile();
    try{
    let files = readdirSync('addon');
    files.forEach((item) => {
        console.log(item);
         unlinkSync(`addon/${item}`);
    });
     } catch (err) {
         console.log('No files to moved!');
     }
 };
 main();