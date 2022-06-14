var express = require('express');
var router = express.Router();

const messages = [
  {
    text:
      'I love the way you draw AB so much!!! Thank you for all the cute art and comics you draw of these two.',
    user: 'OTPLover4Ever',
    timestamp: new Date()
  },
  {
    text: `I love how your A's are so handsome and how cute your B's are!!! Always look forward to seeing new art from you 💖`,
    user: '🥤',
    timestamp: new Date()
  },
  {
    text: `The most recent comic you drew of AB having a Disneyland date is so funny and cute!!! The scene where they get on the Tower of Terror was so funny, I couldn't stop laughing. Looking forward to more of your cute AB content!!!🤍🤍🤍`,
    user: 'Conno',
    timestamp: new Date()
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Guestbook', message: messages });
});

router.get('/new', function (req, res, next) {
  res.render('new', { title: 'Guestbook' });
});

module.exports = router;
