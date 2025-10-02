const fs = require('fs');
const path = require('path');

const createLogFiles = () => {
    const logsDir = path.join(process.cwd(), 'Logs');
    
    // Create Logs directory if it doesn't exist
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
        console.log('Logs directory created');
    }
    
    // Change current working directory to Logs
    process.chdir(logsDir);
    
    // Create 10 log files
    for (let i = 0; i < 10; i++) {
        const filename = `log${i}.txt`;
        fs.writeFileSync(filename, `This is log file ${i}`);
        console.log(filename);
    }
};

createLogFiles();