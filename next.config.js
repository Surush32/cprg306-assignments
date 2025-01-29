const fs = require('fs');
const path = require('path');

const nextConfig = {
  // ...existing code...
  webpack: (config, { isServer }) => {
    console.log('Running webpack configuration');
    if (isServer) {
      const nextDir = path.join(__dirname, '.next');
      try {
        fs.accessSync(nextDir, fs.constants.W_OK);
        console.log('.next directory is writable');
      } catch (err) {
        if (err.code === 'EPERM') {
          console.log('Setting permissions for .next directory');
          fs.chmodSync(nextDir, 0o777);
        } else if (err.code === 'ENOENT') {
          console.log('.next directory does not exist, creating it');
          fs.mkdirSync(nextDir, { recursive: true });
          fs.chmodSync(nextDir, 0o777);
        }
      }
    }
    return config;
  },
  // ...existing code...
};

module.exports = nextConfig;
