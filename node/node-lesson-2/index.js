const commander = require('commander');
const program = new commander.Command();
const tree = require('./tree');

program.version('0.0.1');

program
  .option('-p, --path <path>', 'insert path', './')
  .option('-l, --level <level>', 'deep level', '2')
  .action(function(){
    console.log(program.path, program.level)
    tree(program.path, program.level).then(res => console.log(res))
                .catch(err => console.log(err))
  })

program.parse(process.argv);

if(parseInt(typeof program.level !== 'number') || parseInt(program.level) < 1){
  console.error('Level must be a number more then 0')
  process.exit(1)
} 