const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const outDir = './public';
const srcDir = './src';
const dataFile = './src/data.json';

// Create output directory
if (!fs.existsSync(outDir)){
    fs.mkdirSync(outDir);
}

// Load the json data
const data = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));

// Get the top level ejs files in the srcDir
const ejsFiles = fs.readdirSync(srcDir)
    .filter(filename => filename.match(/\.ejs$/gm));

// Render each file and save it to the output dir
ejsFiles.forEach((ejsFile) => {
    ejs.renderFile(`${srcDir}/${ejsFile}`, data, {root: srcDir}, (err, str) => {
        writeHtmlFile(`${path.parse(ejsFile).name}`, str);
    });
});

function writeHtmlFile(filepath, strData) {
    filepath = `${outDir}/${filepath}.html`;
    try {
        fs.writeFileSync(filepath, strData);
        console.log(`Wrote output to file [${filepath}]`);
    } catch (err) {
        console.error(`Failed to write output to [${filepath}] html file`);
        console.error(err);
    }
}

