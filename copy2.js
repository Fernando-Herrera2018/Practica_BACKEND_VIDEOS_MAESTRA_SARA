const fs = require("fs");
function readFileP (file) {
  return new Promise(
    (resolve, reject) => fs.readFile(
      file, 
      (err, data) =>err ? reject(err) : resolve(data)
    )
  );
}
function writeFileP (file, data) {
  return new Promise(
    (resolve, reject) => fs.writeFile(
      file, 
      data, 
      (err) => err ? reject(err) : resolve()
    )
  );
}
if (process.argv.length != 4) {
  console.log('    Syntax: "node copy2 <orig> <dest>"');
  process.exit();
}
const [, , orig, dest] = process.argv;
async function copy() {
  try {
    let data = await readFileP(orig);
    await writeFileP(dest, data);
    console.log("filed copied");
  } catch (err) {
    console.log(err);
  }
}
copy();
