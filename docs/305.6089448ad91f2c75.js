"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[305],{5642:(f,g,e)=>{e.d(g,{K:()=>c});var n=e(4755),t=e(7002),r=e(3020);let c=(()=>{class s{}return s.\u0275fac=function(u){return new(u||s)},s.\u0275mod=r.oAB({type:s}),s.\u0275inj=r.cJS({imports:[n.ez,t.Pc]}),s})()},4662:(f,g,e)=>{e.d(g,{c:()=>r});var n=e(3020),t=e(7002);let r=(()=>{class c{constructor(o){this.navCtrl=o}ngOnInit(){}onClick(){this.navCtrl.navigateRoot("/proximamente")}}return c.\u0275fac=function(o){return new(o||c)(n.Y36(t.SH))},c.\u0275cmp=n.Xpm({type:c,selectors:[["app-footer"]],decls:29,vars:0,consts:[[1,"ion-justify-content-center"],["name","mail-outline",2,"color","#FEBD59","margin-right","10px"],["name","call-outline",2,"color","#FEBD59","margin-right","10px"],["name","location-outline",2,"color","#FEBD59","margin-right","10px"],["size","4"],["src","https://raw.githubusercontent.com/KeiverFajardo/historias/main/src/assets/facu_udelar.png"],["src","https://raw.githubusercontent.com/KeiverFajardo/historias/main/src/assets/facu_fing.png"],["src","https://raw.githubusercontent.com/KeiverFajardo/historias/main/src/assets/facu_fic.png"]],template:function(o,u){1&o&&(n.TgZ(0,"ion-footer"),n._UZ(1,"br"),n.TgZ(2,"ion-row",0)(3,"b")(4,"ion-label"),n._uU(5,"Contacto"),n.qZA()()(),n.TgZ(6,"ion-row",0)(7,"div"),n._UZ(8,"ion-icon",1),n.TgZ(9,"ion-label"),n._uU(10,"historias.reales@gmail.com"),n.qZA()()(),n.TgZ(11,"ion-row",0)(12,"div"),n._UZ(13,"ion-icon",2),n.TgZ(14,"ion-label"),n._uU(15,"095 555 555"),n.qZA()()(),n.TgZ(16,"ion-row",0)(17,"div"),n._UZ(18,"ion-icon",3),n.TgZ(19,"ion-label"),n._uU(20,"Montevideo, Uruguay"),n.qZA()()(),n.TgZ(21,"ion-row",0)(22,"ion-col",4),n._UZ(23,"img",5),n.qZA(),n.TgZ(24,"ion-col",4),n._UZ(25,"img",6),n.qZA(),n.TgZ(26,"ion-col",4),n._UZ(27,"img",7),n.qZA()(),n._UZ(28,"br"),n.qZA())},dependencies:[t.wI,t.fr,t.gu,t.Q$,t.Nd],styles:["ion-footer[_ngcontent-%COMP%]{background-color:#686868;color:#f0f8ff}ion-label[_ngcontent-%COMP%]{color:#f0f8ff}ion-row[_ngcontent-%COMP%]{padding-bottom:10px}"]}),c})()},3646:(f,g,e)=>{e.d(g,{G:()=>c});var n=e(3020),t=e(7002),r=e(5498);let c=(()=>{class s{constructor(u,_,h){this.menuCtrl=u,this.dataService=_,this.navCtrl=h,this.titulo=""}ngOnInit(){this.componentes=this.dataService.getMenuOpts()}mostrarMenu(){this.menuCtrl.open("first")}onClick(){this.navCtrl.navigateRoot("/menu")}}return s.\u0275fac=function(u){return new(u||s)(n.Y36(t._q),n.Y36(r.D),n.Y36(t.SH))},s.\u0275cmp=n.Xpm({type:s,selectors:[["app-header"]],inputs:{titulo:"titulo"},decls:6,vars:0,consts:[["translucent","true",1,"ion-no-border"],[1,"ion-text-capitalize"],["src","https://raw.githubusercontent.com/KeiverFajardo/historias/main/src/assets/ojoHeader.png","alt","ojo"],["slot","end",3,"click"],["name","menu-outline",2,"font-size","36px","color","#FEBD59"]],template:function(u,_){1&u&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title",1),n._UZ(3,"img",2),n.qZA(),n.TgZ(4,"ion-buttons",3),n.NdJ("click",function(){return _.onClick()}),n._UZ(5,"ion-icon",4),n.qZA()()())},dependencies:[t.Sm,t.Gu,t.gu,t.wd,t.sr],styles:["img[_ngcontent-%COMP%]{width:50%;height:50%}ion-header[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%], ion-buttons[_ngcontent-%COMP%], ion-title[_ngcontent-%COMP%]{background-color:#333232;color:#f0f8ff}"]}),s})()},305:(f,g,e)=>{e.r(g),e.d(g,{FormContactPageModule:()=>v});var n=e(4755),t=e(5030),r=e(7002),c=e(1350),s=e(5861),o=e(3020),u=e(3646),_=e(4662);const M=[{path:"",component:(()=>{class a{customCounterFormatter(i,l){return l-i+" characters remaining"}onInput(){var i=this;return(0,s.Z)(function*(){const l=yield i.textarea.getInputElement();l.style.height="auto",l.style.height=l.scrollHeight+"px"})()}constructor(i){this.navCtrl=i,this.usuario={nombre:"",email:"",tlf:"",mensaje:""}}ngOnInit(){}onSubmit(i){console.log("submit"),console.log(this.usuario),console.log(i),this.navCtrl.navigateRoot("/home")}}return a.\u0275fac=function(i){return new(i||a)(o.Y36(r.SH))},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-form-contact"]],viewQuery:function(i,l){if(1&i&&o.Gf(r.g2,5),2&i){let p;o.iGM(p=o.CRH())&&(l.textarea=p.first)}},decls:32,vars:7,consts:[["titulo","Contacto"],[3,"ngSubmit"],["formulario","ngForm"],[2,"color","#FEBD59"],[1,"my-item"],[1,"titulos"],["type","text","placeholder","Ingrese su nombre","name","nombre","required","",3,"ngModel","ngModelChange"],["type","email","placeholder","Ingrese su email","name","email","pattern","^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$","required","",3,"ngModel","ngModelChange"],[1,"forr"],["type","number","name","tlf","required","","placeholder","Ingrese su celular",3,"ngModel","ngModelChange"],["name","mensaje","required","","placeholder","Contanos tu historia o la de un conocido","maxlength","150",3,"ngModel","counter","counterFormatter","ngModelChange"],["type","submit","expand","block",1,"my-item",3,"disabled"]],template:function(i,l){if(1&i){const p=o.EpF();o._UZ(0,"app-header",0),o.TgZ(1,"ion-content")(2,"ion-grid")(3,"form",1,2),o.NdJ("ngSubmit",function(){o.CHM(p);const m=o.MAs(4);return o.KtG(l.onSubmit(m))}),o.TgZ(5,"ion-list-header")(6,"ion-label",3),o._uU(7,"INGRESE SU INFORMACI\xd3N"),o.qZA()(),o.TgZ(8,"ion-item",4)(9,"ion-label",5),o._uU(10,"Nombre"),o.qZA(),o.TgZ(11,"ion-input",6),o.NdJ("ngModelChange",function(m){return l.usuario.nombre=m}),o.qZA()(),o.TgZ(12,"ion-item",4)(13,"ion-label",5),o._uU(14,"Email"),o.qZA(),o.TgZ(15,"ion-input",7),o.NdJ("ngModelChange",function(m){return l.usuario.email=m}),o.qZA()(),o.TgZ(16,"ion-item",4)(17,"ion-label",8),o._uU(18,"Celular"),o.qZA(),o.TgZ(19,"ion-input",9),o.NdJ("ngModelChange",function(m){return l.usuario.tlf=m}),o.qZA()(),o.TgZ(20,"ion-item",4)(21,"ion-label",5),o._uU(22,"Mensaje"),o.qZA(),o.TgZ(23,"ion-textarea",10),o.NdJ("ngModelChange",function(m){return l.usuario.mensaje=m}),o.qZA()(),o.TgZ(24,"ion-button",11),o._uU(25," Enviar "),o.qZA(),o._UZ(26,"br")(27,"br")(28,"br")(29,"br")(30,"br"),o.qZA()(),o._UZ(31,"app-footer"),o.qZA()}if(2&i){const p=o.MAs(4);o.xp6(11),o.Q6J("ngModel",l.usuario.nombre),o.xp6(4),o.Q6J("ngModel",l.usuario.email),o.xp6(4),o.Q6J("ngModel",l.usuario.tlf),o.xp6(4),o.Q6J("ngModel",l.usuario.mensaje)("counter",!0)("counterFormatter",l.customCounterFormatter),o.xp6(1),o.Q6J("disabled",p.invalid)}},dependencies:[t._Y,t.JJ,t.JL,t.Q7,t.nD,t.c5,t.On,t.F,r.YG,r.W2,r.jY,r.pK,r.Ie,r.Q$,r.yh,r.g2,r.as,r.j9,u.G,_.c],styles:[".item[_ngcontent-%COMP%]{margin-bottom:24px;margin-top:16px}ion-textarea[_ngcontent-%COMP%]{height:auto;overflow-y:hidden}.form[_ngcontent-%COMP%]{background-color:#fff;padding:20px;border-radius:10px}.my-item[_ngcontent-%COMP%]{border-radius:50px!important;margin-left:20px;margin-right:20px}ion-grid[_ngcontent-%COMP%]{background-color:#333232;color:#f0f8ff;width:auto;height:auto}ion-label[_ngcontent-%COMP%]{color:#f0f8ff}"]}),a})()}];let Z=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[c.Bz.forChild(M),c.Bz]}),a})();var P=e(5642);let v=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[n.ez,t.u5,r.Pc,Z,P.K]}),a})()}}]);