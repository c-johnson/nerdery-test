Notes:
  - Yeoman template (gulp-webapp) was used for initial scaffolding, Gulp build process, etc.  Tech is Gulp + SCSS
  - Using modernizr to help with IE8 compatibility while writing html5 markup.
  - "nav-tabs" width is inherently hard to do.  There's a fixed width for the whole thing (1000px) with variable padding in between the elements depending on length.  I'll hard-code these values, but it'll be inflexible.
  - Using linear-gradient css3 attribute -- might not polyfill down to IE8
  - "no-responsive" class is added for non-responsiveness.  Remove it if you'd make this responsive.
  - Icons are cut individually.  Normally, there'd be a sprite sheet of icons.
  - For CSS Triangles I used:
    - http://apps.eky.hk/css-triangle-generator/

Questions:
  - Is lack of JS a concern WRT accessibility?
  - Regarding accessibility, this is probably my least strong area.  Are there minimum accessibility requirements beyond ARIA roles and proper HTML attributes like placeholders, alt texts, etc?