const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walkDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walkDir(file));
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walkDir(srcDir);
let changedCount = 0;

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('alert(')) {

        let newContent = content.replace(/alert\(([^)]*?success[^)]*?)\)/gi, 'toast.success($1)');
        newContent = newContent.replace(/alert\(([^)]*?saved[^)]*?)\)/gi, 'toast.success($1)');
        // Default to toast.error for all others
        newContent = newContent.replace(/alert\(([^)]+)\)/g, 'toast.error($1)');

        // Ensure import is added if not present
        if (!newContent.includes("import toast from 'react-hot-toast'")) {
            const importMatches = [...newContent.matchAll(/^import /gm)];
            if (importMatches.length > 0) {
                const lastMatch = importMatches[importMatches.length - 1];
                const endOfLine = newContent.indexOf('\n', lastMatch.index);
                newContent = newContent.substring(0, endOfLine + 1) + "import toast from 'react-hot-toast';\n" + newContent.substring(endOfLine + 1);
            } else {
                newContent = "import toast from 'react-hot-toast';\n" + newContent;
            }
        }

        if (newContent !== content) {
            fs.writeFileSync(file, newContent, 'utf8');
            changedCount++;
            console.log(`Updated ${file}`);
        }
    }
}
console.log(`Total files updated: ${changedCount}`);
