"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3118],{5642:(p,u,e)=>{e.d(u,{K:()=>l});var n=e(4755),r=e(7002),c=e(3020);let l=(()=>{class a{}return a.\u0275fac=function(s){return new(s||a)},a.\u0275mod=c.oAB({type:a}),a.\u0275inj=c.cJS({imports:[n.ez,r.Pc]}),a})()},4662:(p,u,e)=>{e.d(u,{c:()=>c});var n=e(3020),r=e(7002);let c=(()=>{class l{constructor(o){this.navCtrl=o}ngOnInit(){}onClick(){this.navCtrl.navigateRoot("/proximamente")}}return l.\u0275fac=function(o){return new(o||l)(n.Y36(r.SH))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-footer"]],decls:28,vars:0,consts:[[1,"ion-justify-content-center"],["color","dark","mode","ios","outline","true",3,"click"],["name","mail-outline",2,"color","rgb(221, 221, 48)"],["name","call-outline",2,"color","rgb(221, 221, 48)"],["size","4"],["src","https://raw.githubusercontent.com/KeiverFajardo/historias/main/src/assets/facu_udelar.png"],["src","https://raw.githubusercontent.com/KeiverFajardo/historias/main/src/assets/facu_fing.png"],["src","https://raw.githubusercontent.com/KeiverFajardo/historias/main/src/assets/facu_fic.png"]],template:function(o,s){1&o&&(n.TgZ(0,"ion-footer"),n._UZ(1,"ion-row"),n.TgZ(2,"ion-row",0)(3,"ion-label"),n._uU(4,"Contacto"),n.qZA()(),n.TgZ(5,"ion-row",0)(6,"ion-chip",1),n.NdJ("click",function(){return s.onClick()}),n._UZ(7,"ion-icon",2),n.TgZ(8,"ion-label"),n._uU(9,"historias.reales@gmail.com"),n.qZA()()(),n.TgZ(10,"ion-row",0)(11,"ion-chip",1),n.NdJ("click",function(){return s.onClick()}),n._UZ(12,"ion-icon",3),n.TgZ(13,"ion-label"),n._uU(14,"097 397 077"),n.qZA()()(),n.TgZ(15,"ion-row",0)(16,"ion-chip",1),n.NdJ("click",function(){return s.onClick()}),n._UZ(17,"ion-icon",3),n.TgZ(18,"ion-label"),n._uU(19,"Montevideo, Uruguay"),n.qZA()()(),n.TgZ(20,"ion-row",0)(21,"ion-col",4),n._UZ(22,"img",5),n.qZA(),n.TgZ(23,"ion-col",4),n._UZ(24,"img",6),n.qZA(),n.TgZ(25,"ion-col",4),n._UZ(26,"img",7),n.qZA()(),n._UZ(27,"ion-row"),n.qZA())},dependencies:[r.hM,r.wI,r.fr,r.gu,r.Q$,r.Nd],styles:["ion-footer[_ngcontent-%COMP%]{background-color:#686868;color:#f0f8ff}ion-label[_ngcontent-%COMP%]{color:#f0f8ff}ion-row[_ngcontent-%COMP%]{padding-bottom:10px}"]}),l})()},3646:(p,u,e)=>{e.d(u,{G:()=>l});var n=e(3020),r=e(7002),c=e(5498);let l=(()=>{class a{constructor(s,g,_){this.menuCtrl=s,this.dataService=g,this.navCtrl=_,this.titulo=""}ngOnInit(){this.componentes=this.dataService.getMenuOpts()}mostrarMenu(){this.menuCtrl.open("first")}onClick(){this.navCtrl.navigateRoot("/menu")}}return a.\u0275fac=function(s){return new(s||a)(n.Y36(r._q),n.Y36(c.D),n.Y36(r.SH))},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-header"]],inputs:{titulo:"titulo"},decls:6,vars:0,consts:[["translucent","true",1,"ion-no-border"],[1,"ion-text-capitalize"],["src","https://raw.githubusercontent.com/KeiverFajardo/historias/main/src/assets/ojoHeader.png","alt","ojo"],["slot","end",3,"click"],["name","menu-outline",2,"color","rgb(221, 221, 48)"]],template:function(s,g){1&s&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title",1),n._UZ(3,"img",2),n.qZA(),n.TgZ(4,"ion-buttons",3),n.NdJ("click",function(){return g.onClick()}),n._UZ(5,"ion-icon",4),n.qZA()()())},dependencies:[r.Sm,r.Gu,r.gu,r.wd,r.sr],styles:["img[_ngcontent-%COMP%]{width:50px;height:30px}ion-header[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%], ion-buttons[_ngcontent-%COMP%], ion-title[_ngcontent-%COMP%]{background-color:#333232;color:#f0f8ff}"]}),a})()},3118:(p,u,e)=>{e.r(u),e.d(u,{GridPageModule:()=>Z});var n=e(4755),r=e(5030),c=e(7002),l=e(1350),a=e(366),o=e(3020),s=e(5498),g=e(3646),_=e(4662);function h(i,d){if(1&i){const t=o.EpF();o.TgZ(0,"ion-card",2),o.NdJ("click",function(){const v=o.CHM(t).$implicit,O=o.oxw();return o.KtG(O.onClick(v))}),o.TgZ(1,"div",3)(2,"div",4),o._UZ(3,"img",5),o.qZA(),o.TgZ(4,"div",6)(5,"ion-card-header")(6,"ion-card-subtitle"),o._uU(7),o.qZA(),o.TgZ(8,"ion-card-title",7),o._uU(9),o.qZA()(),o.TgZ(10,"ion-card-content"),o._uU(11),o.qZA()()()()}if(2&i){const t=d.$implicit;o.xp6(3),o.s9C("src",t.avatar,o.LSH),o.xp6(4),o.Oqu(t.age),o.xp6(2),o.Oqu(t.name),o.xp6(2),o.hij(" ",t.summary," ")}}const C=[{path:"",component:(()=>{class i{constructor(t,m){this.dataService=t,this.navCtrl=m}ngOnInit(){this.usuarios=a.M}onClick(t){console.log(t),this.navCtrl.navigateRoot("/card/"+t.id)}favorite(t){console.log("favorite",t),this.ionList.closeSlidingItems()}share(t){console.log("share",t),this.ionList.closeSlidingItems()}delete(t){console.log("delete",t.name),this.ionList.closeSlidingItems()}}return i.\u0275fac=function(t){return new(t||i)(o.Y36(s.D),o.Y36(c.SH))},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-grid"]],viewQuery:function(t,m){if(1&t&&o.Gf(c.q_,5),2&t){let f;o.iGM(f=o.CRH())&&(m.ionList=f.first)}},decls:5,vars:1,consts:[["titulo","Historias"],["mode","md",3,"click",4,"ngFor","ngForOf"],["mode","md",3,"click"],[1,"container"],[1,"half","left"],[3,"src"],[1,"half","right"],[2,"color","rgb(221, 221, 48)"]],template:function(t,m){1&t&&(o._UZ(0,"app-header",0),o.TgZ(1,"ion-content")(2,"ion-grid"),o.YNc(3,h,12,4,"ion-card",1),o.qZA(),o._UZ(4,"app-footer"),o.qZA()),2&t&&(o.xp6(3),o.Q6J("ngForOf",m.usuarios))},dependencies:[n.sg,c.PM,c.FN,c.Zi,c.tO,c.Dq,c.W2,c.jY,g.G,_.c],styles:[".container[_ngcontent-%COMP%]{display:flex}.half[_ngcontent-%COMP%]{height:100%;box-sizing:border-box}.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%]{width:50%}ion-grid[_ngcontent-%COMP%], ion-card[_ngcontent-%COMP%]{background-color:#333232;color:#f0f8ff;width:auto;height:auto}ion-card-title[_ngcontent-%COMP%]{color:#f0f8ff}ion-content[_ngcontent-%COMP%], ion-grid[_ngcontent-%COMP%]{background-color:#333232;color:#f0f8ff;width:auto;height:auto}"]}),i})()}];let M=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[l.Bz.forChild(C),l.Bz]}),i})();var P=e(5642);let Z=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[n.ez,r.u5,c.Pc,M,P.K]}),i})()}}]);