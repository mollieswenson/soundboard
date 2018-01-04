

var dungeonToggleStatus = document.getElementById("Dungeon");
function toggleDungeon() {   //there has to be a better way to do these
  document.getElementById('Forest').pause();
  document.getElementById('Town').pause();
  document.getElementById('Tavern').pause();
  dungeonToggleStatus.paused ? dungeonToggleStatus.play() : dungeonToggleStatus.pause();
};

var forestToggleStatus = document.getElementById("Forest");
function toggleForest() {
  document.getElementById('Dungeon').pause();
  document.getElementById('Town').pause();
  document.getElementById('Tavern').pause();
  forestToggleStatus.paused ? forestToggleStatus.play() : forestToggleStatus.pause();
};

var tavernToggleStatus = document.getElementById("Tavern");
function toggleTavern() {
  document.getElementById('Forest').pause();
  document.getElementById('Town').pause();
  document.getElementById('Dungeon').pause();
  tavernToggleStatus.paused ? tavernToggleStatus.play() : tavernToggleStatus.pause();
};

var townToggleStatus = document.getElementById("Town");
function toggleTown() {
  document.getElementById('Forest').pause();
  document.getElementById('Dungeon').pause();
  document.getElementById('Tavern').pause();
  townToggleStatus.paused ? townToggleStatus.play() : townToggleStatus.pause();
};


var element = 0;

function playHitSounds() {
    var sounds = ["arrow_hit.wav",
              "sword_hit.wav",
              "hit.wav",
              "hit_hard.wav"];
    var index = Math.floor(Math.random() * (sounds.length));
        thisSound = sounds[index];
        $("body").append("<audio id=\"element" + element + "\"src=\"" + thisSound + "\">new</p>");
	    document.getElementById("element" + element).play();
	    element++;
}

function playMissSounds() {
    var sounds = ["arrow_miss.mp3",
              "arrow_miss.mp3",
              "arrow_stick.mp3",
              "arrow_stick.mp3"];
    var index = Math.floor(Math.random() * (sounds.length));
        thisSound = sounds[index];
        $("body").append("<audio id=\"element" + element + "\"src=\"" + thisSound + "\">new</p>");
	    document.getElementById("element" + element).play();
	element++;
}

function playRoarSounds() {
    var sounds = ["bear.wav",
              "bear_1.wav",
              "bear_2.wav",
			  "bear_3.wav",
              "bear_4.wav"];
    var index = Math.floor(Math.random() * (sounds.length));
        thisSound = sounds[index];
        $("body").append("<audio id=\"element" + element + "\"src=\"" + thisSound + "\">new</p>");
	    document.getElementById("element" + element).play();
	element++;
}

function playColorSounds() {
    var sounds = ["colorspray.wav",  //find more sounds to add ?
              "colorspray.wav",
              "colorspray.wav",
              "colorspray.wav"];
    var index = Math.floor(Math.random() * (sounds.length));
        thisSound = sounds[index];
        $("body").append("<audio id=\"element" + element + "\"src=\"" + thisSound + "\">new</p>");
	    document.getElementById("element" + element).play();
	    element++;
}

function playBabyDragonSounds() {
    var sounds = ["dragon.wav",
              "dragon_1.wav",
              "dragon_2.wav",
			  "dragon_3.wav",
			  "dragon_4.wav",
		      "dragon_5.wav",
              "dragon_6.wav"];
    var index = Math.floor(Math.random() * (sounds.length));
        thisSound = sounds[index];
        $("body").append("<audio id=\"element" + element + "\"src=\"" + thisSound + "\">new</p>");
	    document.getElementById("element" + element).play();
	    element++;
}

var playFireballSounds = function () {
    var sounds = ["fireball.wav",  //find more sounds to add
              "fireball.wav",
              "fireball.wav",
              "fireball.wav"];
    var index = Math.floor(Math.random() * (sounds.length));
        thisSound = sounds[index];
        $("body").append("<audio id=\"element" + element + "\"src=\"" + thisSound + "\">new</p>");
	    document.getElementById("element" + element).play();
	    element++;
}

var playMagicSounds = function () {
    var sounds = ["magic_black.wav",  //find more sounds to add
              "magic_backward.mp3",
              "magic_bells.mp3",
              "magic_backward.mp3"];
    var index = Math.floor(Math.random() * (sounds.length));
        thisSound = sounds[index];
        $("body").append("<audio id=\"element" + element + "\"src=\"" + thisSound + "\">new</p>");
	    document.getElementById("element" + element).play();
	    element++;
}
