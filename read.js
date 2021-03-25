const readline = require('readline')
const r1 = readline.createInterface({
  input:process.stdin,
  output:process.stdout,
  prompt:'\nType something: '
});
r1.prompt();
r1.on('line',(line)=>{
    console.log(`Did u type '${line}'`);
    r1.prompt();
}).on('close',()=>{
  console.log('\nHave agreat day!');
  process.exit(0);
});
