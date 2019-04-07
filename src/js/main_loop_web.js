let MainLoopWeb = {
  eventQueue: []
};

function mainLoopPost(event) {
  MainLoopWeb.eventQueue.push(event);
}

function mainLoopStep(timestamp) {
  while (MainLoopWeb.eventQueue.length) {
    let e = MainLoopWeb.eventQueue.pop();
    switch (e.type) {
      case 'keydown':
        {
          if (e.key == KeyEvent.DOM_VK_ESCAPE) {
            mainLoopQuit();
          } else if (e.key == KeyEvent.DOM_VK_1) {
            mainLoopRun();
          }
          Awtk.onKeyDown(e.key, e.timeStamp);
          break;
        }
      case 'keyup':
        {
          Awtk.onKeyUp(e.key, e.timeStamp);
          break;
        }
      case 'wheel':
        {
          Awtk.onWheel(e.delta, e.timeStamp);
          break;
        }
      case 'pointerdown':
        {
          Awtk.onPointerDown(e.x, e.y, e.timeStamp);
          break;
        }
      case 'pointermove':
        {
          Awtk.onPointerMove(e.x, e.y, e.timeStamp);
          break;
        }
      case 'pointerup':
        {
          Awtk.onPointerUp(e.x, e.y, e.timeStamp);
          break;
        }
      default:
        break;
    }
  }

  Awtk.mainLoopStep(10);

  window.requestAnimationFrame(mainLoopStep);
}

function mainLoopInit() {
  window.requestAnimationFrame(mainLoopStep);
}
