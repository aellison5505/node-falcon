const { unlinkSync, readdirSync } = require('fs');

let main = async () => {
    // await copyFile();
    try{
    let files = readdirSync('libaddon');
    files.forEach((item) => {
        console.log(item);
         unlinkSync(`libaddon/${item}`);
    });
     } catch (err) {
         console.log('No files to moved!', err);
     }
 };
 main();