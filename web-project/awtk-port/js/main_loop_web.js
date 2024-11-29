let MainLoopWeb = {
  eventQueue: [],
};

function mainLoopPost(event) {
  MainLoopWeb.eventQueue.push(event);
}

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
      case "touchstart":
      case "touchmove":
      case "touchend": {
        let touch_type = ["touchstart", "touchmove", "touchend"].indexOf(
          e.type
        );
        if (e.touches.length) {
          for (let i = 0; i < e.touches.length; i++) {
            let touch = e.touches[i];
            Awtk.onTouch(touch_type, touch.id, touch.x, touch.y, e.timeStamp);
          }
        } else {
          Awtk.onTouch(touch_type, 0, 0, 0, e.timeStamp);
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
    Awtk.mainLoopStep(10);
  } catch (e) {
    console.log(e);
  }

  window.requestAnimationFrame(mainLoopStep);
}

function mainLoopInit() {
  window.requestAnimationFrame(mainLoopStep);
}
