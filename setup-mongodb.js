#!/usr/bin/env node

/**
 * MongoDB Atlas Setup Helper
 * Run this script to easily set up your MongoDB connection
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('\n╔════════════════════════════════════════════════════════════╗');
console.log('║        🗄️  MongoDB Atlas Configuration Helper              ║');
console.log('╚════════════════════════════════════════════════════════════╝\n');

console.log('📝 Follow these steps to get your MongoDB connection string:\n');
console.log('1. Go to: https://www.mongodb.com/cloud/atlas');
console.log('2. Sign in to your account (or create one free)');
console.log('3. Click on your cluster');
console.log('4. Click "Connect" button');
console.log('5. Click "Drivers"');
console.log('6. Copy the connection string\n');

rl.question('❓ Paste your MongoDB connection string here:\n> ', (mongoUri) => {
    if (!mongoUri || !mongoUri.includes('mongodb')) {
        console.log('\n❌ Invalid MongoDB URI. Must start with "mongodb+srv://"');
        rl.close();
        process.exit(1);
    }

    // Replace password if needed
    if (mongoUri.includes('PASSWORD')) {
        rl.question('\n❓ Enter your MongoDB password:\n> ', (password) => {
            mongoUri = mongoUri.replace('PASSWORD', password);
            saveEnv(mongoUri);
        });
    } else {
        saveEnv(mongoUri);
    }
});

function saveEnv(mongoUri) {
    const envPath = path.join(__dirname, '.env');
    
    const envContent = `# MongoDB Connection
MONGO_URI=${mongoUri}

# Server Configuration
PORT=3000

# Session Secret
SESSION_SECRET=todo-secret-key-${Date.now()}

# Environment
NODE_ENV=development
`;

    try {
        fs.writeFileSync(envPath, envContent);
        console.log('\n✅ .env file updated successfully!\n');
        console.log('📋 Configuration:');
        console.log('   MongoDB URI: ' + mongoUri.substring(0, 50) + '...');
        console.log('   Port: 3000');
        console.log('   Environment: development\n');
        
        console.log('🚀 Next steps:');
        console.log('   1. Stop the server (Ctrl+C)');
        console.log('   2. Run: npm run dev');
        console.log('   3. Open: http://localhost:3000\n');
        
        rl.close();
        process.exit(0);
    } catch (error) {
        console.log('\n❌ Error writing .env file:', error.message);
        rl.close();
        process.exit(1);
    }
}
