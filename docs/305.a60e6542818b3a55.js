"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[305],{5642:(C,g,e)=>{e.d(g,{K:()=>u});var n=e(4755),t=e(7002),r=e(3020);let u=(()=>{class c{}return c.\u0275fac=function(s){return new(s||c)},c.\u0275mod=r.oAB({type:c}),c.\u0275inj=r.cJS({imports:[n.ez,t.Pc]}),c})()},4662:(C,g,e)=>{e.d(g,{c:()=>r});var n=e(3020),t=e(7002);let r=(()=>{class u{constructor(o){this.navCtrl=o}ngOnInit(){}onClick(){this.navCtrl.navigateRoot("/proximamente")}}return u.\u0275fac=function(o){return new(o||u)(n.Y36(t.SH))},u.\u0275cmp=n.Xpm({type:u,selectors:[["app-footer"]],decls:28,vars:0,consts:[[1,"ion-justify-content-center"],["color","dark","mode","ios","outline","true",3,"click"],["name","mail-outline",2,"color","rgb(221, 221, 48)"],["name","call-outline",2,"color","rgb(221, 221, 48)"],["size","4"],["src","https://raw.githubusercontent.com/KeiverFajardo/historias/main/src/assets/facu_udelar.png"],["src","https://raw.githubusercontent.com/KeiverFajardo/historias/main/src/assets/facu_fing.png"],["src","https://raw.githubusercontent.com/KeiverFajardo/historias/main/src/assets/facu_fic.png"]],template:function(o,s){1&o&&(n.TgZ(0,"ion-footer"),n._UZ(1,"ion-row"),n.TgZ(2,"ion-row",0)(3,"ion-label"),n._uU(4,"Contacto"),n.qZA()(),n.TgZ(5,"ion-row",0)(6,"ion-chip",1),n.NdJ("click",function(){return s.onClick()}),n._UZ(7,"ion-icon",2),n.TgZ(8,"ion-label"),n._uU(9,"historias.reales@gmail.com"),n.qZA()()(),n.TgZ(10,"ion-row",0)(11,"ion-chip",1),n.NdJ("click",function(){return s.onClick()}),n._UZ(12,"ion-icon",3),n.TgZ(13,"ion-label"),n._uU(14,"097 397 077"),n.qZA()()(),n.TgZ(15,"ion-row",0)(16,"ion-chip",1),n.NdJ("click",function(){return s.onClick()}),n._UZ(17,"ion-icon",3),n.TgZ(18,"ion-label"),n._uU(19,"Montevideo, Uruguay"),n.qZA()()(),n.TgZ(20,"ion-row",0)(21,"ion-col",4),n._UZ(22,"img",5),n.qZA(),n.TgZ(23,"ion-col",4),n._UZ(24,"img",6),n.qZA(),n.TgZ(25,"ion-col",4),n._UZ(26,"img",7),n.qZA()(),n._UZ(27,"ion-row"),n.qZA())},dependencies:[t.hM,t.wI,t.fr,t.gu,t.Q$,t.Nd],styles:["ion-footer[_ngcontent-%COMP%]{background-color:#686868;color:#f0f8ff}ion-label[_ngcontent-%COMP%]{color:#f0f8ff}ion-row[_ngcontent-%COMP%]{padding-bottom:10px}"]}),u})()},3646:(C,g,e)=>{e.d(g,{G:()=>u});var n=e(3020),t=e(7002),r=e(5498);let u=(()=>{class c{constructor(s,d){this.menuCtrl=s,this.dataService=d,this.titulo=""}ngOnInit(){this.componentes=this.dataService.getMenuOpts()}mostrarMenu(){this.menuCtrl.open("first")}}return c.\u0275fac=function(s){return new(s||c)(n.Y36(t._q),n.Y36(r.D))},c.\u0275cmp=n.Xpm({type:c,selectors:[["app-header"]],inputs:{titulo:"titulo"},decls:8,vars:0,consts:[["translucent","true",1,"ion-no-border"],["slot","start"],["defaultHref","/","text","Regresar",2,"color","rgb(221, 221, 48)"],[1,"ion-text-capitalize"],["src","https://raw.githubusercontent.com/KeiverFajardo/historias/main/src/assets/ojo4.png","alt","ojo"],["slot","end"],["menu","first",2,"color","rgb(221, 221, 48)"]],template:function(s,d){1&s&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),n._UZ(3,"ion-back-button",2),n.qZA(),n.TgZ(4,"ion-title",3),n._UZ(5,"img",4),n.qZA(),n.TgZ(6,"ion-buttons",5),n._UZ(7,"ion-menu-button",6),n.qZA()()())},dependencies:[t.oU,t.Sm,t.Gu,t.fG,t.wd,t.sr,t.cs],styles:["img[_ngcontent-%COMP%]{width:25px;height:25px}ion-header[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%], ion-buttons[_ngcontent-%COMP%], ion-title[_ngcontent-%COMP%]{background-color:#333232;color:#f0f8ff}"]}),c})()},305:(C,g,e)=>{e.r(g),e.d(g,{FormContactPageModule:()=>P});var n=e(4755),t=e(5030),r=e(7002),u=e(1350),c=e(5861),o=e(3020),s=e(3646),d=e(4662);const h=[{path:"",component:(()=>{class a{customCounterFormatter(i,l){return l-i+" characters remaining"}onInput(){var i=this;return(0,c.Z)(function*(){const l=yield i.textarea.getInputElement();l.style.height="auto",l.style.height=l.scrollHeight+"px"})()}constructor(i){this.navCtrl=i,this.usuario={nombre:"",email:"",tlf:"",mensaje:""}}ngOnInit(){}onSubmit(i){console.log("submit"),console.log(this.usuario),console.log(i),this.navCtrl.navigateRoot("/home")}}return a.\u0275fac=function(i){return new(i||a)(o.Y36(r.SH))},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-form-contact"]],viewQuery:function(i,l){if(1&i&&o.Gf(r.g2,5),2&i){let _;o.iGM(_=o.CRH())&&(l.textarea=_.first)}},decls:27,vars:7,consts:[["titulo","Contacto"],[3,"ngSubmit"],["formulario","ngForm"],[1,"my-item"],["type","text","placeholder","Maria Lola Plaza Perez","name","nombre","required","",3,"ngModel","ngModelChange"],["type","email","placeholder","maria123@gmail.com","name","email","pattern","^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$","required","",3,"ngModel","ngModelChange"],["type","number","name","tlf","required","","placeholder","099666333",3,"ngModel","ngModelChange"],["name","mensaje","required","","placeholder","Quiero contar mi historia, estoy disponible de lunes a viernes","maxlength","150",3,"ngModel","counter","counterFormatter","ngModelChange"],["type","submit","expand","block",1,"my-item",3,"disabled"]],template:function(i,l){if(1&i){const _=o.EpF();o._UZ(0,"app-header",0),o.TgZ(1,"ion-content")(2,"ion-grid")(3,"form",1,2),o.NdJ("ngSubmit",function(){o.CHM(_);const m=o.MAs(4);return o.KtG(l.onSubmit(m))}),o.TgZ(5,"ion-list-header")(6,"ion-label"),o._uU(7,"Ingrese su informaci\xf3n"),o.qZA()(),o.TgZ(8,"ion-item",3)(9,"ion-label"),o._uU(10,"Nombres y apellidos:"),o.qZA(),o.TgZ(11,"ion-input",4),o.NdJ("ngModelChange",function(m){return l.usuario.nombre=m}),o.qZA()(),o.TgZ(12,"ion-item",3)(13,"ion-label"),o._uU(14,"Correo Electr\xf3nico:"),o.qZA(),o.TgZ(15,"ion-input",5),o.NdJ("ngModelChange",function(m){return l.usuario.email=m}),o.qZA()(),o.TgZ(16,"ion-item",3)(17,"ion-label"),o._uU(18,"Tel\xe9fono:"),o.qZA(),o.TgZ(19,"ion-input",6),o.NdJ("ngModelChange",function(m){return l.usuario.tlf=m}),o.qZA()(),o.TgZ(20,"ion-item",3)(21,"ion-label"),o._uU(22,"Mensaje:"),o.qZA(),o.TgZ(23,"ion-textarea",7),o.NdJ("ngModelChange",function(m){return l.usuario.mensaje=m}),o.qZA()(),o.TgZ(24,"ion-button",8),o._uU(25," Enviar "),o.qZA()()(),o._UZ(26,"app-footer"),o.qZA()}if(2&i){const _=o.MAs(4);o.xp6(11),o.Q6J("ngModel",l.usuario.nombre),o.xp6(4),o.Q6J("ngModel",l.usuario.email),o.xp6(4),o.Q6J("ngModel",l.usuario.tlf),o.xp6(4),o.Q6J("ngModel",l.usuario.mensaje)("counter",!0)("counterFormatter",l.customCounterFormatter),o.xp6(1),o.Q6J("disabled",_.invalid)}},dependencies:[t._Y,t.JJ,t.JL,t.Q7,t.nD,t.c5,t.On,t.F,r.YG,r.W2,r.jY,r.pK,r.Ie,r.Q$,r.yh,r.g2,r.as,r.j9,s.G,d.c],styles:[".item[_ngcontent-%COMP%]{margin-bottom:24px;margin-top:16px}ion-textarea[_ngcontent-%COMP%]{height:auto;overflow-y:hidden}.form[_ngcontent-%COMP%]{background-color:#fff;padding:20px;border-radius:10px}.my-item[_ngcontent-%COMP%]{border-radius:50px!important;margin-left:20px;margin-right:20px}ion-grid[_ngcontent-%COMP%]{background-color:#333232;color:#f0f8ff;width:100%;height:70%}app-footer[_ngcontent-%COMP%]{position:fixed;bottom:0;height:30%;width:100%}ion-label[_ngcontent-%COMP%]{color:#f0f8ff}"]}),a})()}];let M=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[u.Bz.forChild(h),u.Bz]}),a})();var Z=e(5642);let P=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[n.ez,t.u5,r.Pc,M,Z.K]}),a})()}}]);