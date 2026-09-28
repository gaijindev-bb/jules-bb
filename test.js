import mime from 'mime';
if (mime.getType('x.png') !== 'image/png') { console.error('FAIL'); process.exit(1); }
console.log('tests passed');
