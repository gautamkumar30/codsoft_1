window.addEventListener("scroll", () => {
  const header = document.getElementById("home");
  const series = document.getElementById("series");
  const movies = document.getElementById("topmovies");
  const pricing = document.getElementById("pricing");

  const link_home = document.getElementById("link-home");
  const link_series = document.getElementById("link-series");
  const link_movies = document.getElementById("link-topmovies");
  const link_pricing = document.getElementById("link-pricing");

  function removeCurrentView() {
    const links = [link_home, link_series, link_movies, link_pricing];

    links.forEach((link) => {
      link.style.backgroundColor = "transparent";
      link.style.color = "white";
    });
  }

  function setCurrentView(link) {
    link.style.backgroundColor = "white";
    link.style.color = "#e86471";
    link.style.borderRadius = "10px";
  }

  if (window.scrollY > 0) {
    removeCurrentView();
    setCurrentView(link_home);
  }
  if (window.scrollY > header.scrollHeight) {
    removeCurrentView();
    setCurrentView(link_series);
  }
  if (window.scrollY > header.scrollHeight + series.scrollHeight) {
    removeCurrentView();
    setCurrentView(link_movies);
  }
  if (
    window.scrollY >
    header.scrollHeight + series.scrollHeight + movies.scrollHeight
  ) {
    removeCurrentView();
    setCurrentView(link_pricing);
  }
  if (
    window.scrollY >
    header.scrollHeight +
      series.scrollHeight +
      movies.scrollHeight +
      pricing.scrollHeight
  ) {
    removeCurrentView();
  }
});
