function applicationInit() {
  var win = TWindow.open('button');
  var ok = win.lookup("ok", true);

  ok.on(TEventType.CLICK, function(evt) {
    var e = TPointerEvent.cast(evt);
    var target = TButton.cast(e.target);

    console.log("click at " + e.x + " " + e.y + " on " + target.name);
    console.log("global: " + TGlobal.getPointerX() + " " + TGlobal.getPointerY() + " " + TGlobal.isPointerPressed());

    return TRet.OK;
  });
  
  console.log("global: " + TGlobal.getPointerX() + " " + TGlobal.getPointerY() + " " + TGlobal.isPointerPressed());

  win.layout();
}

applicationInit()


