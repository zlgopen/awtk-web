let MainLoopWeb = {
  waitQueue: [],
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
/*
  let canvas = document.getElementById('awtk-lcd');
  let ctx = canvas.getContext("2d");
  ctx.fillStyle='red';
  ctx.rect(0, 0, 100, 100);
  ctx.fill();
*/
  window.requestAnimationFrame(mainLoopStep);
}

async function mainLoopWaitForQuit() {
  return new Promise(resolve => {
    MainLoopWeb.waitQueue.push(resolve);
  });
}

async function mainLoopRun() {
  console.log('mainLoopRun enter');
  await mainLoopWaitForQuit();
  console.log('mainLoopRun leave');
}

function mainLoopQuit() {
  console.log('mainLoopQuit enter');
  if(MainLoopWeb.waitQueue.length > 0) {
    resolve = MainLoopWeb.waitQueue.pop();
    resolve("done");
    console.log('mainLoopQuit leave');
  } else {
    console.log('Application Quit');
  }
}

function mainLoopInit() {
  window.requestAnimationFrame(mainLoopStep);
}