const fs = require('fs');
const path = require('path');

const removeLogFiles = () => {
    const logsDir = path.join(process.cwd(), 'Logs');
    
    // Check if Logs directory exists
    if (fs.existsSync(logsDir)) {
        // Read all files in the directory
        const files = fs.readdirSync(logsDir);
        
        // Delete each file and output the filename
        files.forEach(file => {
            console.log(`delete files...${file}`);
            fs.unlinkSync(path.join(logsDir, file));
        });
        
        // Remove the Logs directory
        fs.rmdirSync(logsDir);
        console.log('Logs directory removed');
    } else {
        console.log('Logs directory does not exist');
    }
};

removeLogFiles();