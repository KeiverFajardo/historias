"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[305],{305:(F,c,r)=>{r.r(c),r.d(c,{FormContactPageModule:()=>b});var d=r(4755),i=r(5030),a=r(7002),s=r(1350),p=r(5861),e=r(3020),h=r(3646);const C=[{path:"",component:(()=>{class n{customCounterFormatter(o,t){return t-o+" characters remaining"}onInput(){var o=this;return(0,p.Z)(function*(){const t=yield o.textarea.getInputElement();t.style.height="auto",t.style.height=t.scrollHeight+"px"})()}constructor(o){this.navCtrl=o,this.usuario={nombre:"",email:"",tlf:"",mensaje:""}}ngOnInit(){}onSubmit(o){console.log("submit"),console.log(this.usuario),console.log(o),this.navCtrl.navigateRoot("/home")}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(a.SH))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-form-contact"]],viewQuery:function(o,t){if(1&o&&e.Gf(a.g2,5),2&o){let g;e.iGM(g=e.CRH())&&(t.textarea=g.first)}},decls:26,vars:8,consts:[["titulo","Contacto"],[1,"background"],[3,"ngSubmit"],["formulario","ngForm"],[1,"my-item"],["type","text","placeholder","Maria Lola Plaza Perez","name","nombre","required","",3,"ngModel","ngModelChange"],["type","email","placeholder","maria123@gmail.com","name","email","pattern","^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$","required","",3,"ngModel","ngModelChange"],["type","number","name","tlf","required","","placeholder","099666333",3,"ngModel","ngModelChange"],["name","mensaje","required","","placeholder","Quiero contar mi historia, estoy disponible de lunes a viernes","maxlength","150",3,"ngModel","autoGrow","counter","counterFormatter","ngModelChange"],["type","submit","expand","block",1,"my-item",3,"disabled"]],template:function(o,t){if(1&o){const g=e.EpF();e._UZ(0,"app-header",0),e.TgZ(1,"ion-content")(2,"div",1)(3,"form",2,3),e.NdJ("ngSubmit",function(){e.CHM(g);const u=e.MAs(4);return e.KtG(t.onSubmit(u))}),e.TgZ(5,"ion-list-header")(6,"ion-label"),e._uU(7,"Ingrese su informaci\xf3n"),e.qZA()(),e.TgZ(8,"ion-item",4)(9,"ion-label"),e._uU(10,"Nombres y apellidos:"),e.qZA(),e.TgZ(11,"ion-input",5),e.NdJ("ngModelChange",function(u){return t.usuario.nombre=u}),e.qZA()(),e.TgZ(12,"ion-item",4)(13,"ion-label"),e._uU(14,"Correo Electr\xf3nico:"),e.qZA(),e.TgZ(15,"ion-input",6),e.NdJ("ngModelChange",function(u){return t.usuario.email=u}),e.qZA()(),e.TgZ(16,"ion-item",4)(17,"ion-label"),e._uU(18,"Tel\xe9fono:"),e.qZA(),e.TgZ(19,"ion-input",7),e.NdJ("ngModelChange",function(u){return t.usuario.tlf=u}),e.qZA()(),e.TgZ(20,"ion-item",4)(21,"ion-label"),e._uU(22,"Mensaje:"),e.qZA(),e.TgZ(23,"ion-textarea",8),e.NdJ("ngModelChange",function(u){return t.usuario.mensaje=u}),e.qZA()(),e.TgZ(24,"ion-button",9),e._uU(25," Enviar "),e.qZA()()()()}if(2&o){const g=e.MAs(4);e.xp6(11),e.Q6J("ngModel",t.usuario.nombre),e.xp6(4),e.Q6J("ngModel",t.usuario.email),e.xp6(4),e.Q6J("ngModel",t.usuario.tlf),e.xp6(4),e.Q6J("ngModel",t.usuario.mensaje)("autoGrow",!0)("counter",!0)("counterFormatter",t.customCounterFormatter),e.xp6(1),e.Q6J("disabled",g.invalid)}},dependencies:[i._Y,i.JJ,i.JL,i.Q7,i.nD,i.c5,i.On,i.F,a.YG,a.W2,a.pK,a.Ie,a.Q$,a.yh,a.g2,a.as,a.j9,h.G],styles:[".item[_ngcontent-%COMP%]{margin-bottom:24px;margin-top:16px}ion-textarea[_ngcontent-%COMP%]{height:auto;overflow-y:hidden}div[_ngcontent-%COMP%]{background-image:url(5.5b9899f1fae3fb2a.jpg);background-size:cover;background-position:center center}.full[_ngcontent-%COMP%]{width:100%;height:100%}.form[_ngcontent-%COMP%]{background-color:#fff;padding:20px;border-radius:10px}.background[_ngcontent-%COMP%]{background-image:url(5.5b9899f1fae3fb2a.jpg);background-size:cover;background-position:center center;height:100vh;opacity:.9}.my-item[_ngcontent-%COMP%]{border-radius:50px!important;margin-left:20px;margin-right:20px}"]}),n})()}];let f=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[s.Bz.forChild(C),s.Bz]}),n})();var M=r(5642);let b=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,i.u5,a.Pc,f,M.K]}),n})()}}]);