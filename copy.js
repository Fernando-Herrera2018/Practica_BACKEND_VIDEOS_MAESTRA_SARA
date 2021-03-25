var fs = require('fs');

if (process.argv.length !=4 ){
  console.log('Syntax:"node copy <orig> <dest>"');
  process.exit()
}
fs.readFile(
  process.argv[2],
  function(err,data){
    fs.writeFile(
      process.argv[3],
      data,
      function(err){
        if(err) throw err;
        console.log('file copied');
      }
    );
  }
);