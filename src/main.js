import * as PIXI from 'pixi.js';
import scaleToWindow from './utils/scaleToWindow.js';
import bgFar from 'url:./resources/bg-far.png';

document.addEventListener("DOMContentLoaded", () => {
  const renderer = PIXI.autoDetectRenderer(256, 256);
  // renderer.backgroundColor = 0x2C3539;

  document.body.appendChild(renderer.view);

  let scale = scaleToWindow(renderer.view);

  window.addEventListener("resize", () => {
    scaleToWindow(renderer.view);
  });

  const stage = new PIXI.Container();

  PIXI.Loader.shared.add(bgFar).load(setup);
  function setup() {
    let sprite = new PIXI.Sprite(
      PIXI.Loader.shared.resources[bgFar].texture
    );

    stage.addChild(sprite);

    renderer.render(stage);
  }
})