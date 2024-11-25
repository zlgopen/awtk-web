async function on_update_clicked(evt) {
  var e = TPointerEvent.cast(evt);
  var widget = TButton.cast(e.target);  
  const win = widget.getWindow();
  const url = "/AwtkApplicationJSHttp/design/default/data/weather.json";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const json = await response.json();
    win.setChildText("city", json.cityInfo.city);
    win.setChildText("wendu", json.data.wendu);
    win.setChildText("ganmao", json.data.ganmao);
    win.setChildText("quality", json.data.quality);
    win.setChildText("shidu", json.data.shidu);
    win.setChildTextWithDouble("pm25", "%.0f", json.data.pm25);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

function home_page_open() {
  var win = TWindow.open("home_page");
  var update = win.lookup("update", true);

  update.on(TEventType.CLICK, on_update_clicked);

  win.layout();
}
