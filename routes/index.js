const router = require('express').Router();

router.use('/api-docs', require('./swagger'));

router.get('/', (req, res) => {
  res.send('Hello world :)!');
});

router.use('/contacts', require('./contacts'));

module.exports = router;