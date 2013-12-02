var id = chrome.contextMenus.create({"title": "Save to Gif Cubby", "contexts":["image"],
                                      "onclick": gifClicked});
function gifClicked(info, tab) {
  if (info.mediaType == "image") {
    var url = "http://www.gifcubby.com/gifs/add?url=" + info.srcUrl;
    newwindow = window.open(url, "_blank", "resizable=no, scrollbars=no, titlebar=no, menubar=no, width=730, height=550, top=20, left=20");
  }
}
