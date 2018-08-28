if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI: 'mongodb://khoi:abc.123@ds131942.mlab.com:31942/creativetube'
  };
} else {
  module.exports = { mongoURI: 'mongodb://localhost/creativetube-dev' };
}
