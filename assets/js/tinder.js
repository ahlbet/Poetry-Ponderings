var matches = [
  {
    name: 'Emma',
    bio: 'If I\'ve gotta keep rolling this boulder up the hill, might as well do it with someone who can bring a little unpredictability into the mix, eh?'
  },
  {
    name: 'Anna',
    bio: 'just moved back to Chicago so trying to form some ~human connections~ likes: coffee, fiction, bike rides, imagining and building toward our collective liberation dislikes: cats, toxic masculinity, capitalism, white supremacy, the gender binary so if that speaks to you in some way, hmu'
  },
  {
    name: 'Claire',
    bio: 'Yoga instructor Dietetic Intern Foodie'
  },
  {
    name: 'Yumiko',
    bio: 'NYC / CHI / Flavortown'
  },
  {
    name: 'Laura',
    bio: 'nursing student <br> Hi let\'s get a drink'
  },
  {
    name: 'Krissy',
    bio: 'Was truly underwhelmed by La la land'
  },
  {
    name: 'Maggie',
    bio: 'expert about milk'
  },
  {
    name: 'Sabreenah',
    bio: '20 <br> Hey cutie, <br> I like bad dad jokes and punny puns; I will also most likely adopt 5143 dogs instead of having kids'
  },
  {
    name: 'Abby',
    bio: 'I smile a lot. Theater and Psychology major. Exits pursued by bear.'
  },
  {
    name: 'Nora',
    bio: 'I am an aspiring dog owner, who\'s bad at eye contact, but has great posture.'
  },
  {
    name: 'Madison',
    bio: 'the plants in my apartment are dying, I don\'t know what kind of plant they are, and I need someone what can diagnose their issues and nurture them back to health <br> lil bit smart, lil bit workaholic, lil bit shy <br> always angry, always wearing business casual'
  },
  {
    name: 'Nicole',
    bio: 'Don\'t talk to me!!!!!!'
  },
  {
    name: 'Laura',
    bio: 'I am Beyoncé always. <br> In town til tomorrow !'
  },
  {
    name: 'Abigail',
    bio: 'What\'s your sign?'
  },
  {
    name: 'Fiona',
    bio: 'Nine-to-fiving as a software developer in downtown Chicago, but I live for books, travel, and the great outdoors. <br> Hobbies include: Lord of the Rings, rock climbing, and playing the harp.'
  },
  {
    name: 'Rose',
    bio: 'Here is an arbitrary list of things I don\'t like: <br> 1. The Full House theme song <br> 2. Brussel Sprouts <br> 3. RCN\'s internet service <br> 4. Wasps <br> 5. The word "suckling"'
  },
  {
    name: 'Gena',
    bio: 'I enjoy sitting quietly in the dark alone. <br> Open relationship.'
  },
  {
    name: 'Jennifer',
    bio: 'Ok where\'s the tequila'
  },
  {
    name: 'Jenna',
    bio: 'Just looking for the man I saw at The Gourmet Shop this morning.'
  },
  {
    name: 'Zhiwei',
    bio: 'I GOT THAT 4K HIGH DEF HD PUSSY GAME ON MAJOR KEY <br> Looking for a girl/guy/couple to hang out with me and my boiiii'
  }
];

function randomNoRepeats(array) {
  var copy = array.slice(0);
  return function() {
    if (copy.length < 1) { copy = array.slice(0); }
    var index = Math.floor(Math.random() * copy.length);
    var item = copy[index];
    copy.splice(index, 1);
    return item;
  };
}

var chooser = randomNoRepeats(matches);

window.setInterval(function(){
  // $('.text-area').empty();
  var genOne = chooser();
  var nameOne = genOne.name;
  var bioOne = genOne.bio;
  $('.text-area-one').append('<p>' + nameOne + '</p>');
  $('.text-area-one').append('<p>' + bioOne + '</p>');

  var genTwo = chooser();
  var nameTwo = genTwo.name;
  var bioTwo = genTwo.bio;
  $('.text-area-two').append('<p>' + nameTwo + '</p>');
  $('.text-area-two').append('<p>' + bioTwo + '</p>');
}, 3500);
