const inlineBackgroundStyle = function (lightness) {
  return `
  background:
    radial-gradient(
      circle at 50% 50%,
      hsla(0, 0%, ${lightness}%, 1),
      hsla(0, 0%, ${lightness}%, .8),
      hsla(0, 0%, ${lightness}%, .6),
      hsla(0, 0%, ${lightness}%, .4),
      hsla(0, 0%, ${lightness}%, .2),
      hsla(0, 0%, ${lightness}%, 0) 80%),
    radial-gradient(
      ellipse at 0% 50%,
      hsla(180, 100%, ${lightness}%, .5),
      hsla(180, 100%, ${lightness}%, .2),
      hsla(180, 100%, ${lightness}%, .0) 20%),
    radial-gradient(
      ellipse at 50% 100%,
      hsla(90, 100%, ${lightness}%, .6),
      hsla(90, 100%, ${lightness}%, .2),
      hsla(90, 100%, ${lightness}%, .0) 20%),
    radial-gradient(
      ellipse at 75% 93%,
      hsla(60, 100%, ${lightness}%, .4),
      hsla(60, 100%, ${lightness}%, .2),
      hsla(60, 100%, ${lightness}%, .0) 20%),
    radial-gradient(
      ellipse at 100% 50%,
      hsla(0, 100%, ${lightness}%, 1),
      hsla(0, 100%, ${lightness}%, .6),
      hsla(0, 100%, ${lightness}%, .2),
      hsla(0, 100%, ${lightness}%, .0) 40%),
    radial-gradient(
      ellipse at 93% 75%,
      hsla(30, 100%, ${lightness}%, 1),
      hsla(30, 100%, ${lightness}%, .7),
      hsla(30, 100%, ${lightness}%, .4),
      hsla(30, 100%, ${lightness}%, .2),
      hsla(30, 100%, ${lightness}%, .2),
      hsla(30, 100%, ${lightness}%, .0) 40%),
    radial-gradient(
      ellipse at 75% 93%,
      hsla(60, 100%, ${lightness}%, 1),
      hsla(60, 100%, ${lightness}%, .7),
      hsla(60, 100%, ${lightness}%, .4),
      hsla(60, 100%, ${lightness}%, .2),
      hsla(60, 100%, ${lightness}%, .0) 40%),
    radial-gradient(
      ellipse at 50% 100%,
      hsla(90, 100%, ${lightness}%, 1),
      hsla(90, 100%, ${lightness}%, .7),
      hsla(90, 100%, ${lightness}%, .4),
      hsla(90, 100%, ${lightness}%, .2),
      hsla(90, 100%, ${lightness}%, .0) 40%),
    radial-gradient(
      ellipse at 25% 93%,
      hsla(120, 100%, ${lightness}%, 1),
      hsla(120, 100%, ${lightness}%, .6),
      hsla(120, 100%, ${lightness}%, .4),
      hsla(120, 100%, ${lightness}%, .2),
      hsla(120, 100%, ${lightness}%, .0) 40%),
    radial-gradient(
      ellipse at 7% 75%,
      hsla(150, 100%, ${lightness}%, 1),
      hsla(150, 100%, ${lightness}%, .8),
      hsla(150, 100%, ${lightness}%, .5),
      hsla(150, 100%, ${lightness}%, .3),
      hsla(150, 100%, ${lightness}%, .2),
      hsla(150, 100%, ${lightness}%, .0) 40%),
    radial-gradient(
      ellipse at 0% 50%,
      hsla(180, 100%, ${lightness}%, 1),
      hsla(180, 100%, ${lightness}%, .8),
      hsla(180, 100%, ${lightness}%, .4),
      hsla(180, 100%, ${lightness}%, .2),
      hsla(180, 100%, ${lightness}%, .0) 40%),
    radial-gradient(
      ellipse at 7% 25%,
      hsla(210, 100%, ${lightness}%, 1),
      hsla(210, 100%, ${lightness}%, .7),
      hsla(210, 100%, ${lightness}%, .4),
      hsla(210, 100%, ${lightness}%, .2),
      hsla(210, 100%, ${lightness}%, .0) 40%),
    radial-gradient(
      ellipse at 25% 7%,
      hsla(240, 100%, ${lightness}%, 1),
      hsla(240, 100%, ${lightness}%, .8),
      hsla(240, 100%, ${lightness}%, .4),
      hsla(240, 100%, ${lightness}%, .2),
      hsla(240, 100%, ${lightness}%, .0) 40%),
    radial-gradient(
      ellipse at 50% 0%,
      hsla(270, 100%, ${lightness}%, 1),
      hsla(270, 100%, ${lightness}%, .7),
      hsla(270, 100%, ${lightness}%, .4),
      hsla(270, 100%, ${lightness}%, .2),
      hsla(270, 100%, ${lightness}%, .0) 40%),
    radial-gradient(
      ellipse at 75% 7%,
      hsla(300, 100%, ${lightness}%, 1),
      hsla(300, 100%, ${lightness}%, .7),
      hsla(300, 100%, ${lightness}%, .4),
      hsla(300, 100%, ${lightness}%, .2),
      hsla(300, 100%, ${lightness}%, .0) 40%),
    radial-gradient(
      ellipse at 93% 25%,
      hsla(330, 100%, ${lightness}%, 1),
      hsla(330, 100%, ${lightness}%, .7),
      hsla(330, 100%, ${lightness}%, .4),
      hsla(330, 100%, ${lightness}%, .2),
      hsla(330, 100%, ${lightness}%, .0) 40%),
    radial-gradient(
      ellipse at 100% 50%,
      hsla(0, 100%, ${lightness}%, 1),
      hsla(0, 100%, ${lightness}%, .7),
      hsla(0, 100%, ${lightness}%, .4),
      hsla(0, 100%, ${lightness}%, .2),
      hsla(0, 100%, ${lightness}%, .0) 40%);`;
}

module.exports =  inlineBackgroundStyle;
