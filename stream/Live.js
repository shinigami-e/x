window.onload = function() {
  const iframes = {
    live1: "https://z1.depoooo.com/albaplayer/bein-3/?serv=3",
    live2: "https://z1.depoooo.com/albaplayer/bein-3/?serv=3",
    live3: "https://sirtvnetwrok.one/hard/2908c7d4425d87350.html?match=4627902",
    live4: "https://z1.depoooo.com/albaplayer/bein-3/?serv=3"
  };

  // Charger les iframes
  for (let id in iframes) {
    const el = document.getElementById(id);
    if (el) el.src = iframes[id];
  }

  // Fonction pour arrêter toutes les vidéos
  function arreterVideos() {
    try {
      for (let id in iframes) {
        const el = document.getElementById(id);
        if (el) {
          try {
            const video = el.contentDocument?.querySelector('video');
            if (video) {
              video.pause();
              video.currentTime = 0;
            }
          } catch(e) {
            // Ignorer les erreurs cross-origin
          }
        }
      }
    } catch(e) {
      // Ignorer les erreurs
    }
  }

  // Arrêter les vidéos à différents intervalles
  const delais = [1000, 2000, 3000, 4000, 5000];
  delais.forEach(function(delai) {
    setTimeout(arreterVideos, delai);
  });
};
