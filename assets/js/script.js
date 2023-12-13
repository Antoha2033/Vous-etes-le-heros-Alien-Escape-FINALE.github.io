const gameData = {
  currentChapter: localStorage.getItem("currentChapter") || "start",
  inventory: JSON.parse(localStorage.getItem("inventory")) || [],
  twistActivated: localStorage.getItem("twistActivated") === "true" || false,
};




const chapters = {
  start: {
    subtitle: "Début",
    img: "./assets/images/Start.png",
    text: "Tu te réveilles avec un mal de tête lancinant, désorienté et entouré par l'obscurité inquiétante d'un ascenseur en panne. Le goût métallique du sang persiste dans ta bouche, et les échos lointains des machines bourdonnent en arrière-plan. En te levant avec peine, tu réalises que tu te trouves dans une mine industrielle, l'air épais du parfum de la terre humide et de la rouille. Le panneau de contrôle de l'ascenseur clignote de manière sporadique, projetant des ombres faibles sur les murs rugueux. Ta vision s'ajuste lentement à la faible lumière, révélant une myriade de tunnels menant aux profondeurs inconnues de la mine. Le son lointain de l'eau qui goutte et le grincement occasionnel du métal ajoutent à l'atmosphère inquiétante. Tu te tiens au bout d'un long couloir sombre, mais sur le côté, deux escaliers s'offrent à toi. L'un descend plus profondément dans les entrailles de la mine, tandis que l'autre s'élève vers une destination inconnue.",
    options: [
      {
        text: "Monter les escaliers",
        action: "upthestairs",
      },
      {
        text: "Descendre les escaliers",
        action: "downthestairs",
      },
      {
        text: "Traversez le couloir",
        action: "thecorridor",
      },
    ],
  },

  downthestairs: {
    subtitle: "GAMEOVER",
    img: "./assets/images/start-1.png",
    video: "./assets/videos/OVER.mp4",
    text: "Tu décide de descendre l'escalier, mais à mi-chemin, les marches rouillées et fragiles cèdent sous son poids. Le son strident du métal qui se tord résonne dans l'étroitesse du passage, et une seconde plus tard, le joueur se retrouve pris dans une chute incontrôlable. L'obscurité de l'abîme engloutit le joueur alors qu'il tombe sans fin. Le grondement sourd du métal et le sifflement du vent deviennent les derniers sons avant qu'un impact brutal ne mette fin à l'aventure du joueur dans cette mine inhospitalière. Votre exploration a pris une tournure tragique.",


  },

  upthestairs: {
    subtitle: "clé",
    img: "./assets/images/stair.png",
    text: "Après avoir grimpé les vieux escaliers, tu repère un sac à dos ensanglanté à côté de taches de sang séché. Face à cette découverte macabre, il doit décider s'il continue son chemin ou s'il fouille à l'intérieur du sac à dos pour obtenir des indices sur ce qui s'est passé.",
    options: [
      {
        text: "Continuer en haut des escaliers",
        action: "medbayorvents",
      },
      {
        text: "Fouiller à l'intérieur du sac",
        action: "pickupKey",
      },
    ],
  },

  pickupKey: {
    subtitle: "Vous avez ramassé une clé",
    img: "./assets/images/key.png",
    text: "Tu découvres une carte magnétique verte dans le sac, ne trouvant rien d'autre. Avec la carte en main, tu décides de poursuivre ta montée des escaliers.",
    options: [
      {
        text: "Continuer en haut des escaliers",
        action: "medbayorvents",
      },
    ],
  },
  
  

  medbayorvents: {
    subtitle: "Medbay ou bouches d'aération",
    img: "./assets/images/start-3.png",
    text: "Devant vous se trouve l'ancienne infirmerie et un petit passage par les bouches d'aération.",

    options: [
      {
        text: "Passer par les bouches d'aération",
        action: "vents",
      },
      {
        text: "Passer par le Medbay",
        action: "medbay",
      },
    ],
  },

  medbay: {
    subtitle: "Medbay ou bouches d'aération",
    img: "./assets/images/5.png",
    text: "Après être entré dans l'infirmerie, vous croisez d'innombrables sacs mortuaires, certains marqués, d'autres non. Au bout d'un moment, vous arrivez à un carrefour, avant de pouvoir décider quel chemin prendre, vous entendez au loin un bruit fort de fracas de métal, suivi de pas lents.",

    options: [
      {
        text: "Cacher",
        action: "hide",
      },
      {
        text: "Courez à droite",
        action: "runforward",
      },
    ],
  },

  vents: {
    subtitle: "GAMEOVER",
    img: "./assets/images/6.png",
    video: "./assets/videos/OVER.mp4",
    text: "Après être entré dans les vieux conduits, vous continuez à ramper jusqu'à ce que vous entendiez un faible bruit de gémissement devant vous. Avant que vous n'ayez la chance de faire demi-tour, quelque chose avance lentement vers vous.",


  },

  hide: {
    subtitle: "GAMEOVER",
    img: "./assets/images/5.png",
    video: "./assets/videos/OVER.mp4",
    text: "Vous vous cachez de ce qui s'approche, vous retenez votre souffle, fermez les yeux. Mais... cela vous a toujours trouvé.",


  },

  runforward: {
    subtitle: "close call",
    img: "./assets/images/5.png",
    text: "après avoir couru un moment, les pas lointains disparaissent, vous décidez de continuer",

    options: [
      {
        text: "Continuez dans le couloir",
        action: "crowbar",
      },
    ],
  },

  thecorridor: {
    subtitle: "Corridor",
    img: "./assets/images/4.png",
    text: "Après avoir traversé le long couloir, vous arrivez dans une zone lumineuse, avant de vous en rendre compte, toute la mine a commencé à trembler. Si vous courez jusqu’au bout du tunnel, allez plus lentement ou préparez-vous.",

    options: [
      {
        text: "Courir",
        action: "run",
      },
      {
        text: "marche doucement",
        action: "runslow",
      },
      {
        text: "Préparez vous",
        action: "brace",
      },
    ],
  },

  run: {
    subtitle: "GAMEOVER",
    img: "./assets/images/4.png",
    video: "./assets/videos/OVER.mp4",
    text: "Vous décidez de courir au lieu de rester immobile, une erreur, peu de temps après avoir commencé à courir, des débris vous tombent dessus.",


  },

  brace: {
    subtitle: "Préparez vous",
    img: "./assets/images/4.png",
    text: "Après vous être barricadé et avoir attendu la fin du remembrement de la station, cela se terminera aussi vite qu'il a commencé, vous décidez de continuer vers le bout du couloir.",

    options: [
      {
        text: "Continuez dans le couloir",
        action: "crowbar",
      },
    ],
  },

  crowbar: {
    subtitle: "Vous trouvez un outil",
    img: "./assets/images/7.png",
    text: "Après avoir traversé le couloir, tu trouves sur ta gauche une vieille salle de service. Elle est à peine éclairée, mais il se pourrait que tu y trouves quelque chose d'utile. Tu dois décider si tu veux explorer cette salle à la recherche de ressources ou continuer ton chemin sans détour.",
    options: [
      {
        text: "Fouillé la pièce",
        action: "pickupCrowbar",
      },
      {
        text: "Continuez dans le couloir",
        action: "blueDoor",
      },
    ],
  },

  pickupCrowbar: {
    subtitle: "Vous avez ramassé un pied de biche",
    img: "./assets/images/crowbar.webp",
    text: "Après avoir fouillé la pièce, tu découvres une vieille boîte à outils. À l'intérieur, un pied-de-biche rouillé attire ton attention. Mieux que rien, te dis-tu. Tu saisis l'outil improvisé, sentant son poids familier dans ta main.",
    options: [
      {
        text: "Continuez dans le couloir",
        action: "blueDoor",
      },
    ],
    onInit: function () {
      // Set a flag indicating that the player has found the crowbar
      foundTool = true;
      // Add the crowbar to the inventory
      gameData.inventory.push("crowbar");
      // Save the inventory state
      localStorage.setItem("inventory", JSON.stringify(gameData.inventory));
    },
  },
  
  
  

  blueDoor: {
    subtitle: "Vous trouvez une porte",
    img: "./assets/images/8.png",
    text: "Tu arrives dans la salle de l'ascenseur d'urgence, et la seule chose qui reste à faire est d'ouvrir la porte.",

    options: [
      {
        text: "Continuer",
        action: "escapepodroom",
      },
    ],
  },

  runslow: {
    subtitle: "Medbay ou bouches d'aération",
    img: "./assets/images/4.png",
    text: "Au lieu de courir dans le couloir, vous marchez prudemment et lentement en évitant les chutes de débris. Le couloir principal est bloqué par des débris incrustés, vous continuez dans un tunnel de service. Après avoir marché un moment, nous aboutissons à un carrefour, un chemin éclairé par un feu rouge et un autre par un feu vert.",

    options: [
      {
        text: "Allez vers le feu rouge",
        action: "redlight",
      },
      {
        text: "Allez vers le feu vert",
        action: "greenlight",
      },
      {
        text: "Décidez de faire demi-tour et de trouver un chemin différent.",
        action: "goback",
      },
    ],
  },

  greenlight: {
    subtitle: "GAMEOVER",
    img: "./assets/images/9.png",
    video: "./assets/videos/OVER.mp4",
    text: "Vous suivez la lumière verte pour trouver une porte verrouillée. Avant que vous ne puissiez rebrousser chemin, la station tremble à nouveau et vous êtes enseveli sous les décombres.",


  },

  goback: {
    subtitle: "GAMEOVER",
    img: "./assets/images/11.png",
    video: "./assets/videos/OVER.mp4",
    text: "Vous essayez de retourner d'où vous venez, mais avant de pouvoir revenir en arrière, la station tremble à nouveau, et vous êtes enseveli sous les débris.",


  },

  redlight: {
    subtitle: "Préparez vous",
    img: "./assets/images/10.png",
    text: "après avoir suivi le feu rouge, une grande porte d'où sort une faible lueur bleue.",

    options: [
      {
        text: "Approchez-vous de la porte",
        action: "escapepodroom",
      },
    ],
  },

  escapepodroom: {
    subtitle: "S'échapper",
    img: "./assets/images/9.png",
    text: "L'ascenseur se dresse devant toi, malheureusement, il est hors service et nécessite une carte magnétique pour ouvrir la porte. Cependant, en examinant de plus près, tu remarques qu'elle semble assez lâche. Tu te demandes s'il serait possible de l'ouvrir avec tes mains nues ou en utilisant un outil. Si tu te sens chanceux, tu pourrais même essayer de pirater le panneau de la carte magnétique. ",

    options: [
      {
        text: "Utilisez la clé",
        action: "usekey",
      },
      {
        text: "Utilisez l'outil",
        action: "usecrowbar",
      },
      {
        text: "Pirater",
        action: "rawhands",
      },
      {
        text: "Essayez de l'ouvrir à mains nues",
        action: "hack",
      },
    ],
  },

  usekey: {
    subtitle: "Utilisez la clé",
    img: "./assets/images/13.png",
    text: "",
    options: [],
    onInit: function () {
      // Check if the player has the key in their inventory
      if (gameData.inventory.includes("key")) {
        // If the player has the key, show the "YOU WIN" text
        this.text = "Tu réussis à ouvrir l'ascenseur, après avoir appuyé sur les bons boutons et tiré les bons leviers, l'ascenseur commence à monter. Tu t'assois sur un tabouret, prenant un moment pour te reposer, savourant le fait que bientôt tu seras en sécurité. La sensation rassurante de l'ascension te laisse avec l'espoir que cette épreuve dans la mine touche à sa fin. ";

      } else {
        // If the player doesn't have the key, show a message indicating they can't continue
        this.text = "Vous n'avez pas la clé pour ouvrir la capsule de sauvetage. Vous ne pouvez pas continuer.";
        // Add an option to return to escapepodroom
        this.options.push({
          text: "Retournez à la pièce des capsules",
          action: "escapepodroom",
        });
      }
    },
  },
  
  
  usecrowbar: {
    subtitle: "Utilisez le pied de biche",
    img: "./assets/images/13.png",
    text: "",
    options: [],
    onInit: function () {
      // Check if the player has the crowbar in their inventory
      if (gameData.inventory.includes("crowbar")) {
        // If the player has the crowbar, show the "YOU WIN" text
        this.text = "Tu réussis à ouvrir l'ascenseur, après avoir appuyé sur les bons boutons et tiré les bons leviers, l'ascenseur commence à monter. Tu t'assois sur un tabouret, prenant un moment pour te reposer, savourant le fait que bientôt tu seras en sécurité. La sensation rassurante de l'ascension te laisse avec l'espoir que cette épreuve dans la mine touche à sa fin. ";

      } else {
        // If the player doesn't have the crowbar, show a message indicating they can't continue
        this.text = "Vous n'avez pas le pied de biche pour ouvrir la capsule de sauvetage. Vous ne pouvez pas continuer.";
        // Add an option to return to escapepodroom
        this.options.push({
          text: "Retournez à la pièce des capsules",
          action: "escapepodroom",
        });
      }
    },
  },
  
  
  
  
  

  rawhands: {
    subtitle: "GAMEOVER",
    img: "./assets/images/12.png",
    video: "./assets/videos/OVER.mp4",
    text: "Vous essayez d'utiliser vos mains nues, vous frappez et tirez sur la porte, mais le tumulte attire un visiteur, quelque chose de gros et affamé.",

  
  },

  hack: {
    subtitle: "GAMEOVER",
    img: "./assets/images/14.png",
    video: "./assets/videos/OVER.mp4",
    text: "Vous essayez de pirater la console pour ouvrir la porte, mais vous activez une mesure de sécurité. Toutes les sorties se verrouillent derrière vous, et vous êtes piégé.",


  },
};


let foundKey = false;
let foundTool = false;

// Sons
const sound1 = new Audio("./assets/sons/click3.mp3");
const sound2 = new Audio("./assets/sons/computer.mp3");



// Checkbox pour le silence
const muteCheckbox = document.getElementById("muteCheckbox");

// Initial localStorage
muteCheckbox.checked = localStorage.getItem("muteStatus") === "true";
toggleSound();

// Activer ou désactiver le son
function toggleSound() {
  const isChecked = muteCheckbox.checked;
  sound1.muted = isChecked;
  sound2.muted = isChecked;

  // Save mute status
  localStorage.setItem("muteStatus", isChecked);
}

// Écouteur d'événements pour la case à cocher
muteCheckbox.addEventListener("change", toggleSound);

function displayChapter(chapterKey, selectedOption) {
  const chapter = chapters[chapterKey];
  const storyElement = document.getElementById("story");
  const optionsElement = document.getElementById("options");
  const mediaWrapper = document.getElementById("media");
  storyElement.textContent = chapter.text;
  
  mediaWrapper.innerHTML = "";

  if (chapter.video != undefined) {
    const videoElement = document.createElement("video");
    videoElement.autoplay = true;
    videoElement.loop = true;
    videoElement.src = chapter.video;
    videoElement.muted = muteCheckbox.checked; // Mute the video based on checkbox state
    mediaWrapper.appendChild(videoElement);
  } else {
    const imageElement = document.createElement("img");
    imageElement.src = chapter.img;
    mediaWrapper.appendChild(imageElement);
  }

  optionsElement.innerHTML = "";

for (const option of chapter.options) {
    const optionButton = document.createElement("button");
    optionButton.textContent = option.text;
    optionButton.addEventListener("click", () => {
      if (!muteCheckbox.checked) {
        sound1.play();
      }
      selectOption(option);
    });
    optionsElement.appendChild(optionButton);
  }

  // Save current state
  localStorage.setItem("currentChapter", gameData.currentChapter);
  localStorage.setItem("inventory", JSON.stringify(gameData.inventory));
  localStorage.setItem("twistActivated", gameData.twistActivated);

  // Save the selected option in local storage
  localStorage.setItem("selectedOption", JSON.stringify(selectedOption));
}

// reset game and clear
function resetGame() {
  localStorage.clear();
  gameData.currentChapter = "start";
  gameData.inventory = [];
  gameData.twistActivated = false;
  displayChapter(gameData.currentChapter);
}

// reset button
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetGame);

function selectOption(option) {
  if (option.action === "treasure") {
    gameData.inventory.push("treasure");
  } else if (option.action === "pickupKey") {
    gameData.inventory.push("key");
  }

  sound2.play();

  gameData.currentChapter = option.action;

  // Save current state, including the selected option
  localStorage.setItem("currentChapter", gameData.currentChapter);
  localStorage.setItem("inventory", JSON.stringify(gameData.inventory));
  localStorage.setItem("twistActivated", gameData.twistActivated);

  // Save the selected option in local storage
  localStorage.setItem("selectedOption", JSON.stringify(option));

  // Check if the new chapter has an onInit function and call it
  if (chapters[gameData.currentChapter].onInit) {
    chapters[gameData.currentChapter].onInit();
  }

  displayChapter(gameData.currentChapter, option);
}


// Initialize the game
displayChapter(gameData.currentChapter);