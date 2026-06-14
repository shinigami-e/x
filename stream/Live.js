window.onload = function() {
  const iframes = {
    live1: "https://sirtvnetwrok.one/hard/2908c7d4425d87350.html?match=4627884",
    live2: "https://player.syria-live.site/albaplayer/bein1/?serv=0",
    live3: "https://pl.kooralive.fit/albaplayer/bein3/?serv=0",
    live4: "https://pl.kooralive.fit/albaplayer/bein4/?serv=0"
  };

  for (let id in iframes) {
    const el = document.getElementById(id);
    if (el) el.src = iframes[id];
  }
};

