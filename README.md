# Micro SPA Routing System
*[Micro SPA Routing System](https://github.com/JiayangShen/routing), A infrastructure framework to bulid SPA applications.*

This framework is based on [jQuery](http://jquery.com), [HTML5 History API](https://github.com/devote/HTML5-History-API), and [jQuery NeedJS](https://github.com/JiayangShen/jquery-need/)

## Features:

- A light weight framework for SPA(standared for "Single Page Application"), especially for large, multi-module SPAs.
- The core of this framework is a micro routing system based on HTML History API and a CSS、JS file loader -- [jQuery NeedJS](https://github.com/JiayangShen/jquery-need/).
- The rule of routing is to watch the changes of `pathname` and `search` part of a url, not `hash`.
- When the url change is captured, load CSS、JS and AJAX related to the module of the new url in parallel while preserving execution order.
- All routing infomation is stored in a static route tale, including CSS、JS files and AJAX actions infomation to initialize a module, and most of the route infomation is optional.
- Conventionally, use `pathname` of a url to identify the rule of a route, module's name and namespace is also mapped to `pathname`.
- Though not well sealed and decoupled, the source code is simple, you can change it in your demand freely.

## Directories and files in this projects

- `/.htaccess`: Because this route system is not based on hash of a url, so it need the server side to configure some url rewrite rules, so url changes can be all mapped to the only one page file `index.htm`. Server side url rewrite rules are written in this file, which is based on Apache server. You can use othe server and write the rule in your demand. The demo of this project is all based on relative path that relative to the root path of a web site.
- `/index.htm`: The only page file in this project to handle every thing related to a SPA. You can see the source code in this file to learn how to load the common static resources used for all modules.
- `/server`: Mock data of response from server is contained in this directory.
- `/img`: Images files are contained in this directory.
- `/css`: css files are contained in this directory.
- `/js`: js files are contained in this directory.
- `/js/config.js`: Global configuration infomation is contained in this file.
- `/js/ajax.js` and `ajax.dev.js`: Ajax APIs infomation is contained in this two file.  `/js/ajax.js` is used for deployment, and `ajax.dev.js` is used for development stage.
- `/base/lang.js`: Some functionality to extend JavaScript language.
- `/lib`: third party libraries are included in this directory.
- `/polyfill`: Polyfills to enable old browers supporting new features of HTML, JavaScript And CSS language.
- `/utils`: Some util method and functionalities are contained in this directory.
- `/module`: Business logics of each module are contained in this directory.
- `/route/router.js`: Rules of routing are contained in this file. See source code of this file to learn how it works.
- `/route/routes.js` and `/route/routes.dev.js`: Static route table including all routing information. `/route/routes.js` is for deployment stage, and `/route/routes.dev.js` is for development stage.

## License

**[The MIT License](http://www.opensource.org/licenses/MIT)**

© 2015 [JiayangShen](https://github.com/JiayangShen) (the "Author").
All Rights Reserved.