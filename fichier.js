function sectionVisibleDeBase() {
  // fonction qui affiche uniquement la section visible de base au chargement de la page
  const sectionsModulables = document.querySelectorAll(".sectionModulable");
  sectionsModulables.forEach(function (section) {
    console.log(section + "displayBlock");

    if (section.classList.contains("visibleDeBase")) {
      section.classList.add("displayBlock");
      console.log(section + "displayBlock");
      section.classList.remove("displayNone");
    } else {
      section.classList.add("displayNone");
      section.classList.remove("displayBlock");
      console.log(section + "displayNone");
    }
  });
}
function changeSizeAreaToSmall(area) {
  // fonction qui gére la taille des area ( division principales du main ici)
  document.querySelector("#" + area).classList.remove("normalWidth");
  document.querySelector("#" + area).classList.add("smallScreenWidth");
}
// ----------------------fonctionne
function adaptAreaSmallScreen() {
  // fonction qui gére l'adaptation aux petits écrans
  const mainContainer = document.getElementById("main");
  mainContainer.style.flexDirection = "column";
  showArea("modularArea1");
  showArea("modularArea2");
  changeSizeAreaToSmall("modularArea1");
  changeSizeAreaToSmall("modularArea2");
  showArea("modularAreaSmallScreen");
  revealAllSections();
  // -------enlever la photo qui se trouve dans modularAreaSmallScreen mnt--
  document.querySelector("#imgIdentiteProfil").classList.remove("displayBlock");
  document.querySelector("#imgIdentiteProfil").classList.add("displayNone");
}
// code ok
// code ok
function adaptAreaHideScreen() {
  // fonction qui gère l'adaptation aux grands écrans
  const mainContainer = document.getElementById("main");
  mainContainer.style.flexDirection = "row";
  console.log(adaptAreaHideScreen);
  showArea("modularArea1");
  hideArea("modularAreaSmallScreen");
  document.querySelector("#modularArea1").classList.remove("smallScreenWidth");
  document.querySelector("#modularArea1").classList.add("normalWidth");
  showArea("modularArea2");
  document.querySelector("#modularArea2").classList.remove("smallScreenWidth");
  document.querySelector("#modularArea2").classList.add("normalWidth");
  console.log("finadaptAreaHideScreen");
  // ---------------------------rajouter la photo car modularAreaSmallScreen enlevee--
  document.querySelector("#imgIdentiteProfil").classList.remove("displayBlock");
  document.querySelector("#imgIdentiteProfil").classList.add("displayNone");
}
function updateStylesForScreenSize() {
  // fonction qui permet de gérer le Responsive via l'appel de fonctions par rapport à certaines conditions
  const width = window.innerWidth;
  console.log(`Largeur actuelle de la fenêtre : ${width}`);
  if (width >= 0 && width <= 1000) {
    // Les area ici sont le résumé et le contenu container à coté
    adaptAreaSmallScreen();
    console.log("Écran petit (moins de 1000px) : adaptation en cours.");
  } else {
    adaptAreaHideScreen();
    console.log("adaptAreaHideScreen");
  }
}

function hideElementOfDiv(area, classToHide) {
  // fonction qui cache tous les éléments ayant une certaine class dans une partie bien défini (area)
  const areadiv = document.querySelector("#" + area);
  console.log("hideElementofDiv");
  if (!areadiv) {
    console.error("L'élément div spécifié n'existe pas.");
    return;
  }
  console.log(classToHide);
  const sectionsModulables = areadiv.querySelectorAll("." + classToHide);

  sectionsModulables.forEach(function (section) {
    if (!section.classList.contains("displayNone")) {
      console.log(section + "displayNone");
      section.classList.remove("displayBlock");
      section.classList.add("displayNone");
      console.log(section.classList);
    }
  });
  const elements = areadiv.querySelectorAll("*"); // Sélectionne tous les éléments à l'intérieur de la div
  console.log(elements);
}

function hideArea(area) {
  // fonction qui cache une area entière (division)
  const areaModulables = document.querySelector("#" + area);
  if (areaModulables) {
    console.log(area + "displayNone");
    areaModulables.classList.remove("displayBlock");
    // if (area=="modularArea1")
    // {
    //   document.querySelector("#modularAreaSmallScreen").remove("displayBlock");
    //   document.querySelector("#modularAreaSmallScreen").add("displayNone");
    // }
    areaModulables.classList.add("displayNone");
  } else {
    console.error("L'élément avec l'ID '" + area + "' n'a pas été trouvé.");
  }

  console.log("hideArea");
}
// .........................fonctionne

function showArea(area) {
  // fonction qui gére l'affichage des areas
  console.log(showArea);
  console.log(area + "displayBlock");
  document.querySelector("#" + area).classList.remove("displayNone");
  document.querySelector("#" + area).classList.add("displayBlock");
  console.log("finshowArea");
}
function revealAllSections() {
  // fonction qui gére permet d'afficher toutes les sections
  console.log("revealAll");
  showSection("aboutMeSection");
  showSection("competencesSection");
  showSection("realisationsSection");
  showSection("formationsSection");
  showSection("experiencesSection");
}

function showSection(section) {
  // fonction qui gère l'affichage d'une section
  console.log("showSection");
  console.log(section);
  const sectionToDisplay = document.getElementById(section);
  sectionToDisplay.classList.remove("displayNone");
  sectionToDisplay.classList.add("displayBlock");
  if (section == "aboutMeSection") {
    document
      .querySelector("#imgIdentiteProfil")
      .classList.remove("displayNone");
    document.querySelector("#imgIdentiteProfil").classList.add("displayBlock");
  }
}

function revealSectionOnly(section) {
  // fonction qui permet de cacher toutes les sections et ensuite de montrer la section concernée via l'appel des fonctions concernées
  console.log(section);
  hideElementOfDiv("modularArea2", "sectionModulable"); // Cache toutes les sections
  // ------------------------------peut etre à enlever-------------------
  document.querySelector("#imgIdentiteProfil").classList.remove("displayBlock");
  document.querySelector("#imgIdentiteProfil").classList.add("displayNone");
  // ______________________________________________________________________
  showSection(section);
}
function ecouteurDeBoutonsPourSideBar() {
  //Cette fonction permet l'affichage de la sideBar(menu burger ) quand au clique sur le bouton du menu burger
  const btn = document.getElementById("toggle-btn");
  const sideBar = document.getElementById("sideBar");
  const main = document.querySelector("main");
  const content = document.getElementById("content");
  btn.addEventListener("click", () => {
    console.log("clic");
    sideBar.classList.toggle("active");
    console.log("sideBar");
    btn.classList.toggle("active");
  });
  content.addEventListener("click", () => {
    sideBar.classList.remove("active");
  });
  main.addEventListener("click", () => {
    sideBar.classList.remove("active");
  });
}

function ecouteurDeBoutonsPourAffichageArea() {
  //Sur la sideBar petit écran il ne faut montrer uniquement l'area de la section que l'on veut afficher et donc cacher l'autre, Cette section permet de cacher ces area suivants les classes affectées dans le doc html
  document.querySelectorAll("button").forEach((button) => {
    console.log("classbutton");
    button.addEventListener("click", function () {
      // Si le bouton a la classe 'hideModularArea1', on cache 'modularArea1'
      if (button.classList.contains("accueil")) {
        showArea("modularArea1");
        showArea("modularArea2");
        showArea("modularAreaSmallScreen");
        revealAllSections();
        document
          .querySelector("#imgIdentiteProfil")
          .classList.remove("displayBlock");
        document
          .querySelector("#imgIdentiteProfil")
          .classList.add("displayNone");
      }
      if (button.classList.contains("hideModularArea1")) {
        hideArea("modularArea1");
        hideArea("modularAreaSmallScreen");
      }
      // Si le bouton a la classe 'hideModularArea2', on cache 'modularArea2'
      if (button.classList.contains("hideModularArea2")) {
        hideArea("modularArea2");
      }

      // Si le bouton a la classe 'showModularArea1', on affiche 'modularArea1'
      if (button.classList.contains("showModularArea1")) {
        showArea("modularArea1");
        hideArea("modularAreaSmallScreen");
      }
      // Si le bouton a la classe 'showModularArea2', on affiche 'modularArea2'
      if (button.classList.contains("showModularArea2")) {
        showArea("modularArea2");
      }
      if (button.classList.contains("showAllSectionsArea2")) {
        showArea("modularArea2");
        revealAllSections();
        document
          .querySelector("#imgIdentiteProfil")
          .classList.remove("displayNone");
        document
          .querySelector("#imgIdentiteProfil")
          .classList.add("displayBlock");
      }
      if (button.classList.contains("contacts")) {
        hideArea("modularArea1");
        hideArea("modularArea2");
      }
      if (button.classList.contains("telechargement")) {
        hideArea("modularArea1");
        hideArea("modularArea2");
      }
    });
  });
}
// Gestion des événements de clic

// --------------------------------Partie ok---------------------------------/
function ecouteurDeBoutonsPourSections() {
  //fonction qui définit quelle fonction appelée et la section affichée suivant le boutonCliqué
  console.log("DOM loaded");

  // Tableau d'objets associant chaque bouton à sa section correspondante
  const sections = [
    { buttonClassName: "buttonAboutMe", sectionId: "aboutMeSection" },
    { buttonClassName: "buttonCompetences", sectionId: "competencesSection" },
    { buttonClassName: "buttonRealisations", sectionId: "realisationsSection" },
    { buttonClassName: "buttonFormations", sectionId: "formationsSection" },
    { buttonClassName: "buttonExperiences", sectionId: "experiencesSection" },
  ];
  console.log("DOM loaded");
  // Boucle pour ajouter l'événement à chaque bouton
  sections.forEach((section) => {
    const width = window.innerWidth;
    const buttons = document.getElementsByClassName(section.buttonClassName);
    // La propriété buttons.length fait partie des collections d'éléments renvoyées par des méthodes comme document.getElementsByClassName, qui retourne une HTMLCollection. Cette propriété indique le nombre d'éléments dans la collection, c'est-à-dire combien d'éléments HTML possèdent la classe spécifiée.
    if (buttons.length > 0) {
      // Utilisation d'une boucle for pour itérer sur les boutons
      for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener("click", function () {
          console.log("button clicked");
          console.log("revealsection");
          if (width > 1000) {
            showArea("modularArea1");
          }
          showArea("modularArea2");
          revealSectionOnly(section.sectionId);
        });
      }
    } else {
      console.log(`Button ${section.buttonClassName} not found`);
    }
  });
}

function ecouteurDeBoutonsPourFooter() {
  //fonction qui permet d'afficher uniquement le footer
  console.log("ecouteurfooter");
  const header = document.querySelector("header");
  header.querySelectorAll("div").forEach((divBtn) => {
    console.log("classbutton");
    divBtn.addEventListener("click", function () {
      if (divBtn.classList.contains("versFooter")) {
        hideArea("modularArea1");
        hideArea("modularArea2");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // fonction qui gère l'affichage (sections,area) en fonctions des événements utilisateurs(appui sur boutons nav) et le responsive
  sectionVisibleDeBase();
  updateStylesForScreenSize();
  ecouteurDeBoutonsPourSections();
  ecouteurDeBoutonsPourAffichageArea();
  ecouteurDeBoutonsPourSideBar();
  ecouteurDeBoutonsPourFooter();
});
window.addEventListener("resize", function () {
  // fonction qui gère  le responsive au redimensionnement
  updateStylesForScreenSize();
});
