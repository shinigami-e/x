window.onload = function() {
  const iframes = {
    live1: "https://z1.depoooo.com/albaplayer/bein-2/",
    live2: "https://z1.depoooo.com/albaplayer/bein-2/",
    live3: "https://sirtvnetwrok.one/hard/2908c7d4425d87350.html?match=4627902",
    live4: "https://pl.kooralive.fit/albaplayer/bein4/?serv=0"
  };

  for (let id in iframes) {
    const el = document.getElementById(id);
    if (el) el.src = iframes[id];
  }
};

