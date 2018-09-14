var themes = {
   "default": "//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css",
   "darkly": "/css/darkly_bootstrap.min.css",
   "flatly": "/css/flatly_bootstrap.min.css",
   "sandstone": "/css/sandstone_bootstrap.min.css"
}

//switches
$(function() {
   var themesheet = $('<link href="' + themes['default'] + '" rel="stylesheet" />');
   themesheet.appendTo('head');
   $('.theme-link').click(function() {
      var themeurl = themes[$(this).attr('data-theme')];
      themesheet.attr('href', themeurl);
   });
});