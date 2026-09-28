import mime from 'mime';

const samples = ['photo.png', 'notes.txt', 'song.mp3', 'clip.mp4'];
for (const f of samples) {
  console.log(`${f} -> ${mime.getType(f)}`);
}
console.log('sample gallery processed');
