import os from 'os';
console.log(os.release());
console.log(os.platform());
console.log(os.cpus());
console.log(os.totalmem());
const total = os.totalmem();
console.log(total / (1024*1024*1024));
