How to run:

- This template uses the following build dependencies and tools:
  - npm (apt-get install npm)
  - bower (npm install -g bower)
  - gulp (npm install -g gulp)
  - Once these global dependencies are installed, the build process is as follows:
    - cd <app_directory>
    - npm install
    - bower install
    - gulp (& gulp serve -- to serve through node.js)

- It's being served through Gulp/nodejs, but this is of course swappable for any back-end CMS you prefer.

Notes:
  - Yeoman template (gulp-webapp) was used for initial scaffolding, Gulp build process, etc.  Tech is Gulp + SCSS
  - Using modernizr to help with IE8 compatibility while writing html5 markup.
  - Using selectivizr to help with IE8 compatibility while writing css3 selectors.
  - "nav-tabs" width is inherently hard to do.  There's a fixed width for the whole thing (1000px) with variable padding in between the elements depending on length.  I'll hard-code these values, but it'll be inflexible.
  - "no-responsive" class is added for non-responsiveness.  Remove it if you'd make this responsive.
  - Icons are cut individually.  Normally, there'd be a sprite sheet of icons.
  - For CSS Triangles I used:
    - http://apps.eky.hk/css-triangle-generator/
  - Some additional things could be done:  IE, the triangle for "Browse categories" could be flipped, animations could be added to carousel, etc.  Minor details I would note and take to acceptance (IE, the designer).

IE8 notes:
  - Using linear-gradient css3 attribute -- might not polyfill down to IE8.  Polyfills are available for this, but I'd normally take this to acceptance (IE, the designer) to look at substitutes.
  - One persistent issue with IE8 regards the combination of :after pseudo-elements and z-index.  This affects the carousel thumbnail border as well as the "play now" icon for the videos in the "Recent Videos" section

Questions:
  - Is lack of JS a concern WRT accessibility?
  - Regarding accessibility, this is probably my least strong area.  Are there minimum accessibility requirements beyond ARIA roles and proper HTML attributes like placeholders, alt texts, etc?