var readline = require('readline');
// create an instance of readline
var rl = readline.createInterface(process.stdin, process.stdout);
var realPerson = {
    name:'',
    sayings:[]
};

//prompt a question and get the answer
rl.question("Wath is the name of a real person?", function(answer){
    realPerson.name = answer;
    //set another question
    rl.setPrompt(`What would ${realPerson.name} say?`);
    //prompt the new question
    rl.prompt();
    //event that listen when the user answer
    rl.on('line',function(saying){     
        if(saying.toLowerCase().trim() === 'exit'){

            rl.close();
        }else{
            realPerson.sayings.push(saying.trim());
            rl.setPrompt(`what else would ${realPerson.name} say? ('exit') to leave \n`);
            rl.prompt();
        }
    });

});

rl.on('close',()=>{
    console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
    process.exit();
})