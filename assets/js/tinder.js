var matches = ['If I\'ve gotta keep rolling this boulder up the hill, might as well do it with someone who can bring a little unpredictability into the mix, eh?', 'just moved back to Chicago so trying to form some ~human connections~ likes: coffee, fiction, bike rides, imagining and building toward our collective liberation dislikes: cats, toxic masculinity, capitalism, white supremacy, the gender binary so if that speaks to you in some way, hmu', 'Yoga instructor Dietetic Intern Foodie', 'NYC / CHI / Flavortown', 'nursing student <br> Hi let\'s get a drink', 'Was truly underwhelmed by La la land', 'expert about milk', '20 <br> Hey cutie, <br> I like bad dad jokes and punny puns; I will also most likely adopt 5143 dogs instead of having kids', 'I smile a lot. Theater and Psychology major. Exits pursued by bear.', 'I am an aspiring dog owner, who\'s bad at eye contact, but has great posture.', 'the plants in my apartment are dying, I don\'t know what kind of plant they are, and I need someone what can diagnose their issues and nurture them back to health <br> lil bit smart, lil bit workaholic, lil bit shy <br> always angry, always wearing business casual', 'Don\'t talk to me!!!!!!', 'I am Beyoncé always. <br> In town til tomorrow !', 'What\'s your sign?', 'Nine-to-fiving as a software developer in downtown Chicago, but I live for books, travel, and the great outdoors. <br> Hobbies include: Lord of the Rings, rock climbing, and playing the harp.', 'Here is an arbitrary list of things I don\'t like: <br> 1. The Full House theme song <br> 2. Brussel Sprouts <br> 3. RCN\'s internet service <br> 4. Wasps <br> 5. The word "suckling"', 'I enjoy sitting quietly in the dark alone. <br> Open relationship.', 'Ok where\'s the tequila', 'Just looking for the man I saw at The Gourmet Shop this morning.', 'I GOT THAT 4K HIGH DEF HD PUSSY GAME ON MAJOR KEY <br> Looking for a girl/guy/couple to hang out with me and my boiiii', 'Just looking for someone I look forward to seeing as much I look forward to Fridays', 'U should be like a bowl of cornflakes. Sweet, cold, harmless, available, dry, wet, corn, sexless, dangerous, shy, extroverted, the Grand Canyon, hot, 2 inches tall, the opposite of urself, God also', 'latina. i design. i code. i hoop. i sample more than i should from costco. where\'s my tv show?', 'Good at Minesweeper, bad at everything else.', 'My life changed when I realized I could say any dumb thought on my mind and pass it off as my dry sense of humor.', 'Send me songs for my groovy playlist', 'Denver || Los Angeles || Chicago <br> my favorite scent is William Shakespearemint <br> Dancer', 'blahzy blahzy', 'I\'m a chemical engineering grad student at ND. I enjoy coffee and bad puns.', 'American doin some fuckshit out here in London. <br> P.S. If you start me talking about music, I prolly won\'t stop. Just warning you ahead of time.', 'power lady <br> MN // Chicago', '#savethebees', 'The first man in my life is John D Rockefeller. Then George Washington. Then Patton. Kanye West. Honestly you\'ll hit maybe 19th at best', 'Just like other girls.', 'music, hiking, coffee, beers, and many other things. <br> Adulting? <br> Not really looking for hookups, but always looking for cool shows and drinking buddies', 'Looking for someone to sleep over at my place when y roomate\'s busy with her lover']

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
  $('.text-area-one').append('<p>' + genOne + '</p>');

  // var genTwo = chooser();
  // var nameTwo = genTwo.name;
  // var bioTwo = genTwo.bio;
  // $('.text-area-two').append('<p>' + nameTwo + '</p>');
  // $('.text-area-two').append('<p>' + bioTwo + '</p>');
}, 3500);
