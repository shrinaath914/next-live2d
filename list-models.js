const fs = require('fs');
const path = require('path');

const modelsDir = path.join(__dirname, 'models');

const models = fs.readdirSync(modelsDir).filter((file) => {
  const fullPath = path.join(modelsDir, file);
  return fs.statSync(fullPath).isDirectory();
});

console.log('Available Models:');
models.forEach((model) => console.log(`- ${model}`));

// Nếu bạn muốn export dạng JSON:
fs.writeFileSync(
  path.join(__dirname, 'models.json'),
  JSON.stringify(models, null, 2),
  'utf-8'
);
