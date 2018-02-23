function loadPage() {

  $('.slider').slider(); //incializamos el slider de materialize
  $(".button-collapse").sideNav(); //inicializamos el burger menu de materialize
  $('.collapsible').collapsible();

   //inicializamos la galleria




}



$(document).ready(loadPage);

jQuery("#gallery").unitegallery({
	gallery_theme: "grid",
	theme_panel_position: "right"
});
