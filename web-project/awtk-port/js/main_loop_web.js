let MainLoopWeb = {
  eventQueue: [],
};

function mainLoopPost(event) {
  MainLoopWeb.eventQueue.push(event);
}

let s_lastTouchIds = {};

function mainLoopDispatchEvents(timestamp) {
  while (MainLoopWeb.eventQueue.length) {
    let e = MainLoopWeb.eventQueue.pop();
    switch (e.type) {
      case "keydown": {
        Awtk.onKeyDown(e.key, e.timeStamp);
        break;
      }
      case "keyup": {
        Awtk.onKeyUp(e.key, e.timeStamp);
        break;
      }
      case "im_commit": {
        Awtk.onImCommit(e.text, e.timeStamp);
        break;
      }
      case "wheel": {
        Awtk.onWheel(e.delta, e.timeStamp);
        break;
      }
      case "pointerdown": {
        Awtk.onPointerDown(e.x, e.y, e.timeStamp);
        break;
      }
      case "pointermove": {
        Awtk.onPointerMove(e.x, e.y, e.timeStamp);
        break;
      }
      case "pointerup": {
        Awtk.onPointerUp(e.x, e.y, e.timeStamp);
        break;
      }
      case "touchstart": {
        e.touches.forEach((touch) => {
          Awtk.onTouch(0, touch.id, touch.x, touch.y, e.timeStamp);
          s_lastTouchIds[touch.id.toString()] = {
            id: touch.id,
            x: touch.x,
            y: touch.y,
          };
        });
        break;
      }
      case "touchmove": {
        e.touches.forEach((touch) => {
          Awtk.onTouch(1, touch.id, touch.x, touch.y, e.timeStamp);
          s_lastTouchIds[touch.id.toString()] = {
            id: touch.id,
            x: touch.x,
            y: touch.y,
          };
        });
        break;
      }
      case "touchend": {
        if (e.touches.length == 0) {
          for (let key in s_lastTouchIds) {
            let iter = s_lastTouchIds[key];
            Awtk.onTouch(2, iter.id, iter.x, iter.y, e.timeStamp);
          }
          s_lastTouchIds = {};
          Awtk.onTouch(2, -1, 0, 0, e.timeStamp);
        } else {
          for (let key in s_lastTouchIds) {
            let iter = s_lastTouchIds[key];
            let notFound = !e.touches.find((t) => {
              return t.id === iter.id;
            });

            if (notFound) {
              Awtk.onTouch(2, iter.id, iter.x, iter.y, e.timeStamp);
            }
          }

          s_lastTouchIds = {};
          e.touches.forEach((touch) => {
            s_lastTouchIds[touch.id.toString()] = {
              id: touch.id,
              x: touch.x,
              y: touch.y,
            };
          });
        }

        break;
      }      
      default:
        break;
    }
  }
}

function mainLoopStep(timestamp) {
  try {
    mainLoopDispatchEvents(timestamp);
  } catch (e) {
    console.log(e);
  }

  try {
    if (Awtk.mainLoopStep(10) == 0) {
      window.requestAnimationFrame(mainLoopStep);
    } else {
      VGCanvas.canvas.remove();
      console.log("mainLoopStep quit");
    }
  } catch (e) {
    console.log(e);
  }
}

function mainLoopInit() {
  //手机上禁止touchmove滑动窗口
  document.addEventListener('touchmove', function(event) {
    event.preventDefault();
  }, { passive: false });

  window.requestAnimationFrame(mainLoopStep);
}
