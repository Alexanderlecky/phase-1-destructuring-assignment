// Animal sounds object
const animalSounds = {
  moo: 'cow',
  neigh: 'horse',
  baa: 'sheep',
  oink: 'pig',
  cluck: 'chicken'
};

// Traditional animal names object
const traditionalAnimals = {
  bessie: 'cow',
  dolly: 'sheep',
  babe: 'pig',
  little: 'chicken'
};

// Animal colors object
const animalColors = {
  blackAndWhite: 'cow',
  black: 'sheep',
  pink: 'pig'
};

// Rainbow colors array
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Muppet object
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song1: 'Rainbow Connection',
  song2: 'Moving Right Along',
  song3: 'Bein’ Green',
  song4: 'I Hope That Something Better Comes Along',
  kermitJob: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};
// Destructuring operations

// Animal sounds
const { moo, neigh, baa, oink, cluck } = animalSounds;
console.log(moo); // => 'cow'
console.log(neigh); // => 'horse'
console.log(baa); // => 'sheep'
console.log(oink); // => 'pig'
console.log(cluck); // => 'chicken'

// Traditional animal names
const { bessie, dolly, babe, little } = traditionalAnimals;
console.log(bessie); // => 'cow'
console.log(dolly); // => 'sheep'
console.log(babe); // => 'pig'
console.log(little); // => 'chicken'

// Animal colors
const { blackAndWhite, black, pink } = animalColors;
console.log(blackAndWhite); // => 'cow'
console.log(black); // => 'sheep'
console.log(pink); // => 'pig'

// Rainbow colors
const [red, orange, yellow, green, blue, indigo, violet] = rainbow;
console.log(red); // => 'red'
console.log(orange); // => 'orange'
console.log(yellow); // => 'yellow'
console.log(green); // => 'green'
console.log(blue); // => 'blue'
console.log(indigo); // => 'indigo'
console.log(violet); // => 'violet'

// Rainbow initials
const [r, o, y, g, b, i, v] = rainbow;
console.log(r); // => 'red'
console.log(o); // => 'orange'
console.log(y); // => 'yellow'
console.log(g); // => 'green'
console.log(b); // => 'blue'
console.log(i); // => 'indigo'
console.log(v); // => 'violet'

// Specific rainbow color using a different variable name
const [, , , , , indg] = rainbow;
console.log(indg); // => 'indigo'

// Muppet variables
const { muppetName, color, song1, song2, song3, song4, kermitJob, partner } = muppet;
console.log(muppetName); // => 'Miss Piggy'
console.log(color); // => 'pink'
console.log(song1); // => 'Rainbow Connection'
console.log(song2); // => 'Moving Right Along'
console.log(song3); // => 'Bein’ Green'
console.log(song4); // => 'I Hope That Something Better Comes Along'
console.log(kermitJob); // => 'Host of The Muppet Show'
console.log(partner); // => 'Kermit'

// Destructuring all properties
const { muppetName: mName, color: mColor, song1: mSong1, song2: mSong2, song3: mSong3, song4: mSong4, kermitJob: mJob, partner: mPartner } = muppet;
console.log(mName); // => 'Miss Piggy'
console.log(mColor); // => 'pink'
console.log(mSong1); // => 'Rainbow Connection'
console.log(mSong2); // => 'Moving Right Along'
console.log(mSong3); // => 'Bein’ Green'
console.log(mSong4); // => 'I Hope That Something Better Comes Along'
console.log(mJob); // => 'Host of The Muppet Show'
console.log(mPartner); // => 'Kermit'

// Specific songs and job
const { song2: specificSong2, song4: specificSong4, kermitJob: nestedJob, partner: nestedPartner } = muppet;
console.log(specificSong2); // => 'Moving Right Along'
console.log(specificSong4); // => 'I Hope That Something Better Comes Along'
console.log(nestedJob); // => 'Host of The Muppet Show'
console.log(nestedPartner); // => 'Miss Piggy'
 



