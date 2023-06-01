
function include(file){
  return HtmlService.createHtmlOutputFromFile(file).getContent()
}

function doGet(){
  return HtmlService.createTemplateFromFile('index').evaluate()
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}