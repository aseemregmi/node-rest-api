const env = process.env.NODE_ENV || 'development';
const localURL = 'mongodb://localhost:27017/';
const mLabURL = 'mongodb://aseemregmi:aseemregmi123@ds143242.mlab.com:43242/';

if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = `${localURL}TodoApp`;
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = `${localURL}TodoAppTest`;
} else {
  process.env.MONGODB_URI = `${mLabURL}TodoApp`;
}
