webpackJsonp([1,5],{353:function(e,t,n){"use strict";var a=n(0),o=n(347),i=n(768),r=(n.n(i),n(579));n.n(r);n.d(t,"a",function(){return d});var s=this&&this.__decorate||function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(){function e(e){this.router=e,this.auth0=new r.WebAuth({clientID:"T5yg5Lo4zEJzll3oTeZE01017ifzwQi8",domain:"megafuse.auth0.com",responseType:"token id_token",audience:"https://megafuse.auth0.com/userinfo",redirectUri:"http://localhost:4200/member",scope:"openid profile"})}return e.prototype.login=function(){this.auth0.authorize()},e.prototype.handleAuthentication=function(){var e=this;this.auth0.parseHash(function(t,n){n&&n.accessToken&&n.idToken?(window.location.hash="",e.setSession(n),e.router.navigate(["/home"])):t&&(e.router.navigate(["/home"]),console.log(t))})},e.prototype.setSession=function(e){var t=JSON.stringify(1e3*e.expiresIn+(new Date).getTime());localStorage.setItem("access_token",e.accessToken),localStorage.setItem("id_token",e.idToken),localStorage.setItem("expires_at",t)},e.prototype.getProfile=function(e){var t=localStorage.getItem("access_token");if(!t)throw new Error("Access token must exist to fetch profile");var n=this;this.auth0.client.userInfo(t,function(t,a){a&&(n.userProfile=a),e(t,a)})},e.prototype.isAuthenticated=function(){var e=JSON.parse(localStorage.getItem("expires_at"));return(new Date).getTime()<e},e=s([n.i(a.c)(),c("design:paramtypes",["function"==typeof(t=void 0!==o.b&&o.b)&&t||Object])],e);var t}()},429:function(e,t){function n(e){throw new Error("Cannot find module '"+e+"'.")}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=429},430:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(521),o=n(0),i=n(557),r=n(552);i.a.production&&n.i(o.a)(),n.i(a.a)().bootstrapModule(r.a)},551:function(e,t,n){"use strict";var a=n(0);n.d(t,"a",function(){return r});var o=this&&this.__decorate||function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=function(){function e(){this.title="app works!"}return e=o([n.i(a._6)({selector:"app-root",template:n(759),styles:[n(754)]}),i("design:paramtypes",[])],e)}()},552:function(e,t,n){"use strict";var a=n(158),o=n(0),i=n(511),r=n(517),s=n(347),c=n(551),d=n(556),l=n(555),p=n(554),b=n(553),g=n(353),u=n(356);n.d(t,"a",function(){return h});var f=this&&this.__decorate||function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},m=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v={apiKey:"AIzaSyA7PMoV-Miamu-utNm49NYb31hU8OdcBWQ",authDomain:"frontendug.firebaseapp.com",databaseURL:"https://frontendug.firebaseio.com",projectId:"frontendug",storageBucket:"",messagingSenderId:"1087846143117"},h=function(){function e(){}return e=f([n.i(o.b)({declarations:[c.a,d.a,l.a,p.a,b.a],imports:[a.a,u.a.initializeApp(v),i.a,r.a,s.a.forRoot([{path:"",component:p.a},{path:"project",component:d.a},{path:"member",component:l.a},{path:"event",component:b.a},{path:"*",redirectTo:"",pathMatch:"full"}])],providers:[g.a],bootstrap:[c.a]}),m("design:paramtypes",[])],e)}()},553:function(e,t,n){"use strict";var a=n(0);n.d(t,"a",function(){return r});var o=this&&this.__decorate||function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=function(){function e(){}return e.prototype.ngOnInit=function(){},e=o([n.i(a._6)({selector:"app-event",template:n(760),styles:[n(755)]}),i("design:paramtypes",[])],e)}()},554:function(e,t,n){"use strict";var a=n(0);n.d(t,"a",function(){return r});var o=this&&this.__decorate||function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=function(){function e(){}return e.prototype.ngOnInit=function(){},e=o([n.i(a._6)({selector:"app-index",template:n(761),styles:[n(756)]}),i("design:paramtypes",[])],e)}()},555:function(e,t,n){"use strict";var a=n(0),o=n(353),i=n(356);n.d(t,"a",function(){return c});var r=this&&this.__decorate||function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e,t){var n=this;this.auth=e,this.fb=t,e.handleAuthentication(),localStorage.getItem("access_token")&&this.auth.getProfile(function(e,t){n.fb.database.list("/members").subscribe(function(e){e.forEach(function(e){var a=e.sub_id.toString();console.log(a),a===t.sub.toString()?console.log("Already exist !!"):(console.log("Record Added !"),n.fb.database.list("/members").push({sub_id:t.sub,name:t.nickname,picture:t.picture,date:(new Date).toString()}))})})})}return e.prototype.ngOnInit=function(){var e=this;this.get_member=!1,this.fb.database.list("/members").subscribe(function(t){e.members=t,e.get_member=!0})},e.prototype.login=function(){this.auth.login()},e=r([n.i(a._6)({selector:"app-member",template:n(762),styles:[n(757)]}),s("design:paramtypes",["function"==typeof(t=void 0!==o.a&&o.a)&&t||Object,"function"==typeof(c=void 0!==i.b&&i.b)&&c||Object])],e);var t,c}()},556:function(e,t,n){"use strict";var a=n(0);n.d(t,"a",function(){return r});var o=this&&this.__decorate||function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=function(){function e(){}return e.prototype.ngOnInit=function(){},e=o([n.i(a._6)({selector:"app-project",template:n(763),styles:[n(758)]}),i("design:paramtypes",[])],e)}()},557:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={production:!0}},754:function(e,t){e.exports=""},755:function(e,t){e.exports=".section-slider{margin-top:50px;padding-top:50px;padding-bottom:70px}h1{font-family:HelveticaNeueCyr-Thin;padding-bottom:20px}p{font-size:15px}.section-header{background:linear-gradient(rgba(11,0,0,.75),rgba(11,0,0,.75)),url(../../assets/images/img-3.jpg);background-size:cover;background-position:50%;color:#fff}.navbar-default{background-color:transparent;border-color:transparent}.navbar-nav a{color:#fff;font-weight:700}.navbar-nav a:hover{color:#ccc}.code-edit{height:300px;width:100%;background:rgba(0,0,0,.5);border-radius:5px}.first-layer{padding-top:5px;padding-bottom:5px;padding-left:5px;color:#000;background-color:#ccc;border-top-left-radius:5px;border-top-right-radius:5px}.code-row{padding-top:10px;padding-left:5px;padding-right:5px;color:#666;font-weight:700}.keyword{color:#ff0}.expression{color:#fff}.orange{color:orange}.others{color:#fff}code{background-color:transparent;padding:0}.section-content{padding-top:50px;padding-bottom:50px}.btn-init{background-color:transparent;border:2px solid #fff;padding:10px 15px;border-radius:0!important}.btn-init:focus,.btn-init:hover{color:#666;border-color:#666}.image{width:200px;height:200px;max-width:100%}.imagize{width:400px;max-width:100%}.text-left{text-align:left!important}.text-center{text-align:center}.border-top{border-top:1px solid #eee;padding-top:50px;padding-bottom:50px}"},756:function(e,t){e.exports="@-webkit-keyframes bigeffect{0%{color:orange}90%{color:skyblue}}@keyframes bigeffect{0%{color:orange}90%{color:skyblue}}@-webkit-keyframes effect{0%{color:skyblue}90%{color:orange}}@keyframes effect{0%{color:skyblue}90%{color:orange}}@-webkit-keyframes bg{0%{background:linear-gradient(rgba(11,0,0,.75),rgba(11,0,0,.75)),url(../../assets/images/blog-bg17.jpg);background-position:-100px -200px}90%{background:linear-gradient(rgba(11,0,0,.75),rgba(11,0,0,.75)),url(../../assets/images/blog-bg17.jpg);background-position:-100px -100px}}@keyframes bg{0%{background:linear-gradient(rgba(11,0,0,.75),rgba(11,0,0,.75)),url(../../assets/images/blog-bg17.jpg);background-position:-100px -200px}90%{background:linear-gradient(rgba(11,0,0,.75),rgba(11,0,0,.75)),url(../../assets/images/blog-bg17.jpg);background-position:-100px -100px}}.group-title h1{font-size:50px}.group-title h3{font-family:HelveticaNeueCyr-Thin}.section-slider{margin-top:50px;padding-top:50px;padding-bottom:70px}h1{font-family:HelveticaNeueCyr-Thin;padding-bottom:20px}p{font-size:15px}.section-header{background:linear-gradient(rgba(11,0,0,.75),rgba(11,0,0,.75)),url(../../assets/images/blog-bg17.jpg);background-size:cover;background-position:50%;color:#fff;-webkit-animation:bg 10s infinite;animation:bg 10s infinite}.custom-bg{background:linear-gradient(rgba(11,0,0,.75),rgba(11,0,0,.75)),url(../../assets/images/join.jpeg);background-position:10px -200px;background-size:cover;color:#fff;padding-top:150px!important;padding-bottom:150px!important}.meetup-gallery{background:linear-gradient(rgba(0,0,0,.25),rgba(0,0,0,.25)),url(../../assets/images/bg.jpg);background-position:50%;background-attachment:fixed;background-repeat:no-repeat;background-size:cover;padding-top:100px!important;padding-bottom:100px!important}.meetup-gallery h1{color:#fff}.navbar-default{background-color:transparent;border-color:transparent}.navbar-nav a{color:#fff;font-weight:700}.navbar-nav a:hover{color:#ccc}.code-edit{height:300px;width:100%;background:rgba(0,0,0,.5);border-radius:5px}.first-layer{padding-top:5px;padding-bottom:5px;padding-left:5px;color:#000;background-color:#ccc;border-top-left-radius:5px;border-top-right-radius:5px}.code-row{padding-top:10px;padding-left:5px;padding-right:5px;color:#666;font-weight:700}.keyword{color:#ff0}.expression{color:#fff}.orange{color:orange}.others{color:#fff}code{background-color:transparent;padding:0}.more-padding{padding-top:100px!important;padding-bottom:100px!important}.more-padding h3{text-transform:uppercase;font-size:17px;font-family:HelveticaNeueCyr-Medium;color:#202a3c!important}.more-padding h1{color:#202a3c}.section-content{padding-top:50px;padding-bottom:50px}.btn-init{background-color:transparent;border:2px solid #fff;padding:10px 15px;border-radius:0!important;transition:all .7s ease}.btn-init:focus,.btn-init:hover{color:#666;border-color:#666}.btn-custom{background-color:transparent;border:2px solid #086154;padding:10px 15px;border-radius:0!important;color:#086154;transition:all .2s}.btn-custom:focus,.btn-custom:hover{color:#000;border-color:#000}.image{width:200px;height:200px;max-width:100%}.imagize{width:400px;max-width:100%}.text-left{text-align:left!important}.text-center{text-align:center}.border-top{border-top:1px solid #eee;padding-top:50px;padding-bottom:50px}"},757:function(e,t){e.exports='.section-slider{margin-top:50px;padding-top:50px;padding-bottom:70px}h1{font-family:HelveticaNeueCyr-Thin;padding-bottom:20px}p{font-size:15px}.section-header{background:linear-gradient(rgba(11,0,0,.75),rgba(11,0,0,.75)),url(../../assets/images/img-3.jpg);background-size:cover;background-position:50%;color:#fff}.navbar-default{background-color:transparent;border-color:transparent}.navbar-nav a{color:#fff;font-weight:700}.navbar-nav a:hover{color:#ccc}.code-edit{height:300px;width:100%;background:rgba(0,0,0,.5);border-radius:5px}.first-layer{padding-top:5px;padding-bottom:5px;padding-left:5px;color:#000;background-color:#ccc;border-top-left-radius:5px;border-top-right-radius:5px}.code-row{padding-top:10px;padding-left:5px;padding-right:5px;color:#666;font-weight:700}.keyword{color:#ff0}.expression{color:#fff}.orange{color:orange}.others{color:#fff}code{background-color:transparent;padding:0}.section-content{padding-top:50px;padding-bottom:50px}.btn-init{background-color:transparent;border:2px solid #fff;padding:10px 15px;border-radius:0!important}.btn-init:focus,.btn-init:hover{color:#666;border-color:#666}.btn-custom{background-color:transparent;border:2px solid rgba(255,0,0,.5);border-radius:0!important;padding:10px 15px;color:rgba(255,0,0,.5);transition:all .7s ease;-webkit-transition:all .7s ease;-moz-transition:all .7s ease}.btn-custom:focus,.btn-custom:hover{color:#000;border-color:#000}.image{width:200px;height:200px;max-width:100%}.imagize{width:400px;max-width:100%}.text-left{text-align:left!important}.text-center{text-align:center}.border-top{border-top:1px solid #eee;padding-top:50px;padding-bottom:50px}.team-member-a{height:350px;display:block;cursor:pointer}.team-member-a,div.team-member-a:before{-webkit-transition:all .7s ease;-moz-transition:all .7s ease}div.team-member-a:before{background-color:rgba(11,0,0,.5);width:100%;height:100%;position:absolute;top:0;left:0;content:""}div.team-member-a:hover:before{background-color:rgba(0,0,0,.8);color:#fff}div.team-member-a:hover .layer{display:block;color:#fff}.layer{position:absolute;bottom:15px;color:#000;font-family:HelveticaNeueCyr-Black;display:none;text-shadow:1px 1px 1px #000}'},758:function(e,t){e.exports=".section-slider{margin-top:50px;padding-top:50px;padding-bottom:70px}h1{font-family:HelveticaNeueCyr-Thin;padding-bottom:20px}p{font-size:15px}.section-header{background:linear-gradient(rgba(11,0,0,.75),rgba(11,0,0,.75)),url(../../assets/images/img-3.jpg);background-size:cover;background-position:50%;color:#fff}.navbar-default{background-color:transparent;border-color:transparent}.navbar-nav a{color:#fff;font-weight:700}.navbar-nav a:hover{color:#ccc}.code-edit{height:300px;width:100%;background:rgba(0,0,0,.5);border-radius:5px}.first-layer{padding-top:5px;padding-bottom:5px;padding-left:5px;color:#000;background-color:#ccc;border-top-left-radius:5px;border-top-right-radius:5px}.code-row{padding-top:10px;padding-left:5px;padding-right:5px;color:#666;font-weight:700}.keyword{color:#ff0}.expression{color:#fff}.orange{color:orange}.others{color:#fff}code{background-color:transparent;padding:0}.section-content{padding-top:50px;padding-bottom:50px}.btn-init{background-color:transparent;border:2px solid #fff;padding:10px 15px;border-radius:0!important}.btn-init:focus,.btn-init:hover{color:#666;border-color:#666}.btn-custom{background-color:transparent;border:2px solid rgba(255,0,0,.5);border-radius:0!important;padding:10px 15px;color:rgba(255,0,0,.5);transition:all .7s ease;-webkit-transition:all .7s ease;-moz-transition:all .7s ease}.btn-custom:focus,.btn-custom:hover{color:#000;border-color:#000}.image{width:200px;height:200px;max-width:100%}.imagize{width:400px;max-width:100%}.text-left{text-align:left!important}.text-center{text-align:center}.border-top{border-top:1px solid #eee;padding-top:50px;padding-bottom:50px}"},759:function(e,t){e.exports="<router-outlet></router-outlet>\n"},760:function(e,t){e.exports='<div class="section-header">\n  <nav class="navbar navbar-default">\n    <div class="container">\n      \x3c!-- Brand and toggle get grouped for better mobile display --\x3e\n      <div class="navbar-header">\n        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n          <span class="sr-only">Toggle navigation</span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n        </button>\n        <a class="navbar-brand" href="#">LOGO Here</a>\n      </div>\n      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n        <ul class="nav navbar-nav navbar-right">\n          <li >\n            <a routerLink = "/">Home</a>\n          </li>\n          <li >\n            <a routerLink="/project" > Project </a>\n          </li>\n          <li>\n            <a routerLink="/member"> Members </a>\n          </li>\n          <li>\n            <a routerLink = "/event"> Event </a>\n          </li>\n        </ul>\n      </div>\x3c!-- /.navbar-collapse --\x3e\n    </div>\x3c!-- /.container-fluid --\x3e\n  </nav>\n</div>\n\n<div class="section-content">\n  <div class="text-center col-md-6 col-md-offset-3">\n    <h1> Events </h1>\n    <div class="page-header"></div>\n  </div>\n  <div class="clearfix">\n  </div>\n  <div class="col-md-6 col-md-offset-3">\n    <div class="col-md-4">\n      <img src="../../assets/images/logo.jpeg" alt="" class="img-thumbnail">\n    </div>\n    <div class="col-md-8">\n      <h3> Design Pattern Explained</h3>\n      <p>Our recent meetup themed "Design Rule Explained" elaborate the usefulness of planning and thinking towards design creativity</p>\n      <p> Also the speaker discussed about some key point to be noted when crafting design either as frontend designer, coder, mobile developer, graphics designer, etc.</p>\n      <p>One of the speaker also discussed about creating logo for our startup with some guidelines</p>\n      <p> Lastly, the final speaker discussed about giving end user the best design experience, He also recommend a material titled \'\' </p>\n      <i class="fa fa-calendar"></i> 16th of Dec. 2017  &nbsp; &nbsp; <i class="fa fa-map-marker"></i> Africanex Ng. Ltd. Jide Jones, Abeokuta.\n      <h3>Speakers</h3>\n      <p>\n        <i class="fa fa-podcast"></i> Ogunjole Opeoluwa <small>(Design Rule Explained)\n          <a href="https://drive.google.com/open?id=1kcTT3Eq6u6gsyXSXA9p8ppL3N1MWEC-Q" target="_blank"><i class="fa fa-cloud-download"></i> download</a>\n        </small>\n      </p>\n      <p>\n        <i class="fa fa-podcast"></i> Ashade Francis <small>(Conceptualize Logo)\n        <a href="https://drive.google.com/open?id=1TADfzJ3PZxWgJYr5y1pkbQdXXdTsw6TU" target="_blank"><i class="fa fa-cloud-download"></i> download</a>\n      </small>\n      </p>\n      <p>\n        <i class="fa fa-podcast"></i> Segun Olumide <small>(UI/UX Design Pattern)\n        <a href="https://drive.google.com/open?id=12tMQ6mQm3_yum5iXx5--19Bnh2QLm-eO" target="_blank"><i class="fa fa-cloud-download"></i> download</a>\n      </small>\n      </p>\n\n    </div>\n    <div class="clearfix"></div>\n    <div class="page-header"></div>\n  </div>\n  <div class="clearfix">  </div>\n\n</div>\n\n<div class="section-content text-center">\n  <div class="col-md-6 col-md-offset-3  border-top">\n    <p>&copy; copyright. 2017</p>\n    <p>Web developed with love by FUG Ogun </p>\n  </div>\n  <div class="clearfix"></div>\n</div>\n'},761:function(e,t){e.exports='<div class="section-header">\n  <nav class="navbar navbar-default container">\n    <div class="container">\n      \x3c!-- Brand and toggle get grouped for better mobile display --\x3e\n      <div class="navbar-header">\n        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n          <span class="sr-only">Toggle navigation</span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n        </button>\n        <a class="navbar-brand" href="#">LOGO Here</a>\n      </div>\n      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n        <ul class="nav navbar-nav navbar-right">\n          <li >\n            <a routerLink = "/">Home</a>\n          </li>\n          <li >\n            <a routerLink="/project" > Project </a>\n          </li>\n          <li>\n            <a routerLink="/member"> Members </a>\n          </li>\n          <li>\n            <a routerLink = "/event"> Events </a>\n          </li>\n        </ul>\n      </div>\x3c!-- /.navbar-collapse --\x3e\n    </div>\x3c!-- /.container-fluid --\x3e\n  </nav>\n\n  <div class="section-slider">\n    <div class="container">\n      <div class="col-md-6 group-title">\n        <h1> <span class="letter-f">Front End</span> <span class="letter-end"> User Group</span> </h1>\n        <h3> Part of the community mission is to create a platform where you can meet and share ideas with others. </h3>\n\n      </div>\n      <div class="col-md-6">\n        <div class="code-edit">\n          <div class="first-layer">hello-world.js</div>\n          <div class="code-row" contenteditable="">\n            <code>1</code>&nbsp;&nbsp;<code class="orange">var</code>&nbsp;<code class="expression">title = </code><code class="string">"Welcome to Front End User Group";</code>\n            <p></p>\n              <code>2</code>&nbsp;&nbsp;<code class="keyword">console</code><code class="expression">.log(</code><code class="string">"FUG"</code><code class="expression">);</code>\n          </div>\n        </div>\n      </div>\n      <div class="clearfix">\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class="section-content  more-padding">\n  <div class="container text-center">\n    <div class="col-md-4 ">\n      <h1><i class="fa fa-archive"></i></h1>\n      <h3>Are you a graphics designer ?</h3>\n      <p>With a membership that boasts an interesting mix of professions, this community is a place to meet like minds like you.</p>\n    </div>\n    <div class="col-md-4">\n      <h1><i class="fa fa-area-chart"></i></h1>\n      <h3>Are you a frontend designer ?</h3>\n      <p>Moving forward in your career by meeting professional frontend designer that speak your language. </p>\n    </div>\n    <div class="col-md-4">\n      <h1><i class="fa fa-blind"></i></h1>\n      <h3>Are you tech beginner ?</h3>\n      <p>You are just getting started with programming, graphics design, front end development, we have your place in the community.</p>\n    </div>\n    <div class="clearfix"></div>\n  </div>\n  <div class="clearfix"></div>\n</div>\n\n<div class="section-content text-center custom-bg ">\n  <div class="container">\n    <h3>Want to be a part of this Community ?</h3>\n    <a routerLink="/member" class="btn btn-primary btn-init"><b>Join the Community </b></a> &nbsp;   <a style="cursor:pointer" class="btn btn-primary btn-init" data-toggle="modal" data-target="#myModal"><b>Next Meetup Notify Me</b></a>\n  </div>\n</div>\n\n<div class="section-content">\n  <div class="col-md-6 col-md-offset-3">\n    <h1 class="text-center">Recent Event</h1>\n    <div class="col-md-4">\n      <img src="../../assets/images/logo.jpeg" alt="" class="img-thumbnail">\n    </div>\n    <div class="col-md-8">\n      <h4>Design Rule Explained </h4>\n      <p>Our recent meetup themed "Design Rule Explained" which elaborate the usefulness of planning and thinking towards design creativity.</p>\n      \x3c!-- <p>The program was held on the 16th of Dec. 2017 at Africanex Ng. Ltd. Jide Jones, Abeokuta. </p> --\x3e\n      <a routerLink="/event">Read More</a>\n    </div>\n    <div class="clearfix"></div>\n  </div>\n  <div class="clearfix"></div>\n</div>\n\n<div class="section-content text-center meetup-gallery">\n  <div class="container">\n    <h1>Meetup Gallery</h1>\n    <div class="col-md-3">\n      <img src="../../assets/images/focus/1.jpeg" alt="" class="img-thumbnail">\n    </div>\n    <div class="col-md-3">\n      <img src="../../assets/images/focus/2.jpeg" alt="" class="img-thumbnail">\n    </div>\n    <div class="col-md-3">\n      <img src="../../assets/images/focus/4.jpeg" alt="" class="img-thumbnail">\n    </div>\n    <div class="col-md-3">\n      <img src="../../assets/images/focus/8.jpeg" alt="" class="img-thumbnail">\n    </div>\n  </div>\n</div>\n\n\n\n<div class="section-content text-center">\n  <h1>Our Sponsors</h1>\n  <a href="http://africanex.com" target="_blank">\n    <img src="../assets/images/sponsors/Africanex_logo2.jpg" alt="Africanex Nig. Ltd" class="imagize">\n  </a>\n</div>\n\n<div class="section-content text-center">\n  <div class="col-md-6 col-md-offset-3  border-top">\n    <p>&copy; copyright. 2017</p>\n    <p>Web developed with love by FUG Ogun </p>\n  </div>\n  <div class="clearfix"></div>\n</div>\n\n\n<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n  <div class="modal-dialog">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n        <h4 class="modal-title" id="myModalLabel"> Get Updated </h4>\n      </div>\n      <div class="modal-body">\n        <p>I want to receive Event update </p>\n\n        \x3c!-- <form class="" action="index.html" method="post"> --\x3e\n          <label for="">Email Address</label>\n          <input type="email" name="" class="form-control" style="border: 2px solid #666 !important;">\n          <br>\n          <button class="btn btn-primary btn-custom" name="button">Submit </button>\n        \x3c!-- </form> --\x3e\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n'},762:function(e,t){e.exports='\n<div class="section-header">\n  <nav class="navbar navbar-default">\n    <div class="container">\n      \x3c!-- Brand and toggle get grouped for better mobile display --\x3e\n      <div class="navbar-header">\n        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n          <span class="sr-only">Toggle navigation</span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n        </button>\n        <a class="navbar-brand" href="#">LOGO Here</a>\n      </div>\n      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n        <ul class="nav navbar-nav navbar-right">\n          <li >\n            <a routerLink = "/">Home</a>\n          </li>\n          <li >\n            <a routerLink="/project" > Project </a>\n          </li>\n          <li>\n            <a routerLink="/member"> Members </a>\n          </li>\n          <li>\n            <a routerLink = "/event"> Event </a>\n          </li>\n        </ul>\n      </div>\x3c!-- /.navbar-collapse --\x3e\n    </div>\x3c!-- /.container-fluid --\x3e\n  </nav>\n</div>\n\n<div class="section-content text-center">\n  <div class="container">\n    <h1> Core Members </h1>\n    <div class="col-md-4 team-member-a" style="background: url(https://avatars.io/twitter/habbeboy);background-size: cover;background-position: center;background-repeat: no-repeat;">\n      <div class="layer"><h3>Azeez Abiodun</h3>\n      <i class="fa fa-twitter"></i> @habbeboy &nbsp; | &nbsp; <i class="fa fa-github"></i> iamhabbeboy\n      </div>\n    </div>\n    <div class="col-md-4 team-member-a" style="background: url(https://avatars.io/twitter/moluwole);background-size: cover;background-position: center;background-repeat: no-repeat;">\n      <div class="layer"><h3>Majiyagbe Oluwole</h3><i class="fa fa-twitter"></i> @moluwole  &nbsp; | &nbsp; <i class="fa fa-github"></i> oluwole </div>\n    </div>\n    <div class="col-md-4 team-member-a" style="background: url(https://avatars.io/twitter/rheniytron0270);background-size: cover;background-position: center;background-repeat: no-repeat;">\n      <div class="layer"><h3>Dosunmu Ramon </h3><i class="fa fa-twitter"></i> @rheniytron0270 &nbsp;</div>\n    </div>\n    <div class="clearfix"></div>\n  </div>\n</div>\n\n<div class="section-content text-center">\n  <div class="container">\n    <h1> Members </h1>\n    <p>{{profile | json}}</p>\n\n    <div *ngIf="get_member==false" style="color: red"><img src="../../assets/images/loading-x.gif" border="0"/></div>\n    <div *ngIf="get_member==true">\n      <div class="col-md-3" *ngFor="let member of members" style="margin-left:auto;margin-right:auto;margin-bottom: 10px;color: #000;">\n        <div style="border: 1px solid #ccc;width:80%;">\n        <p></p>\n        <img src="{{member.picture}}" alt="" class="img-circle" style="margin: auto;" />\n        <h5>{{member.name}}</h5>\n        </div>\n      </div>\n      <div class="clearfix"></div>\n    </div>\n    <div class="text-center">\n      <br><br>\n      <button class="btn btn-primary btn-lg btn-custom" (click)="login()">Join Us Now </button>\n    </div>\n  </div>\n</div>\n\n<div class="section-content text-center">\n  <div class="col-md-6 col-md-offset-3  border-top">\n    <p>&copy; copyright. 2017</p>\n    <p>Web developed with love by FUG Ogun </p>\n  </div>\n  <div class="clearfix"></div>\n</div>\n'},763:function(e,t){e.exports='<div class="section-header">\n  <nav class="navbar navbar-default">\n    <div class="container">\n      \x3c!-- Brand and toggle get grouped for better mobile display --\x3e\n      <div class="navbar-header">\n        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n          <span class="sr-only">Toggle navigation</span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n        </button>\n        <a class="navbar-brand" href="#">LOGO Here</a>\n      </div>\n      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n        <ul class="nav navbar-nav navbar-right">\n          <li >\n            <a routerLink = "/">Home</a>\n          </li>\n          <li >\n            <a routerLink="/project" > Project </a>\n          </li>\n          <li>\n            <a routerLink="/member"> Members </a>\n          </li>\n          <li>\n            <a routerLink = "/event"> Event </a>\n          </li>\n        </ul>\n      </div>\x3c!-- /.navbar-collapse --\x3e\n    </div>\x3c!-- /.container-fluid --\x3e\n  </nav>\n</div>\n\n<div class="section-content text-center">\n  <div class="container animated flipInX">\n    <h1> Project Developed </h1>\n  <p>No project available !</p>\n  <p>In other to add new project, you must become member of the community </p>\n  <div class="text-center">\n    <br><br>\n    \x3c!-- <button class="btn btn-primary btn-lg btn-custom" data-toggle="modal" data-target="#myModal">Add New Project </button> --\x3e\n  </div>\n  </div>\n</div>\n\n<div class="section-content text-center">\n  <div class="col-md-6 col-md-offset-3  border-top">\n    <p>&copy; copyright. 2017</p>\n    <p>Web developed with love by FUG Ogun </p>\n  </div>\n  <div class="clearfix"></div>\n</div>\n\n<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n  <div class="modal-dialog">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n        <h4 class="modal-title" id="myModalLabel"> Add Project </h4>\n      </div>\n      <div class="modal-body">\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\n        <h2> Slides</h2>\n        <a href="#">Download</a>\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n'},807:function(e,t,n){e.exports=n(430)}},[807]);