document.addEventListener("DOMContentLoaded", function () {

  var showtour = @@production;

  // Init these blocks in order

  // Maps

  maps.init();

  features.init();

  actions.init();

  // Ui

  ui.init();

  session.init();

  if (showtour)  {
      touring.init();
  }

});