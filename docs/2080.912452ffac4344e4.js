"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2080],{2080:(Z,c,n)=>{n.r(c),n.d(c,{HomePageModule:()=>C});var u=n(4755),d=n(5030),i=n(7002),l=n(1350),g=n(366),p=n(9663),e=n(3020),m=n(5498),v=n(3646),h=n(4662);const f=[{path:"",component:(()=>{class t{ngAfterViewInit(){const o=new p.ZP(".carrusel-1",{navigation:{nextEl:".carrusel-1-next",prevEl:".carrusel-1-prev"}}),s=document.querySelector(".carrusel-1-next"),a=document.querySelector(".carrusel-1-prev");s.addEventListener("click",()=>{o.slideNext()}),a.addEventListener("click",()=>{o.slidePrev()})}onClick(){this.navCtrl.navigateRoot("/grid")}constructor(o,s,a){this.menuCtrl=o,this.dataService=s,this.navCtrl=a,this.slideOpts={initialSlide:0,speed:400,slidesPerView:1,spaceBetween:10,loop:!0,autoplay:{delay:2e3}}}ngOnInit(){this.componentes=this.dataService.getMenuOpts(),this.usuario=g.M[0]}mostrarMenu(){this.menuCtrl.open("first")}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(i._q),e.Y36(m.D),e.Y36(i.SH))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],decls:19,vars:0,consts:[["titulo","Historias reales sobre personas reales"],[1,"swiper-container","carrusel-1","container"],[1,"swiper-wrapper"],[1,"swiper-slide"],["src","../../../assets/h1.jpeg"],["src","../../../assets/h2.jpeg"],["src","../../../assets/h3.jpeg"],["src","../../../assets/h4.jpeg"],[1,"swiper-button-next","carrusel-1-next"],[1,"swiper-button-prev","carrusel-1-prev"],[1,"button-container"],["expand","full","fill","clear","shape","round","color","warning","size","default",3,"click"]],template:function(o,s){1&o&&(e._UZ(0,"app-header",0),e.TgZ(1,"ion-content")(2,"ion-grid")(3,"div",1)(4,"div",2)(5,"div",3),e._UZ(6,"img",4),e.qZA(),e.TgZ(7,"div",3),e._UZ(8,"img",5),e.qZA(),e.TgZ(9,"div",3),e._UZ(10,"img",6),e.qZA(),e.TgZ(11,"div",3),e._UZ(12,"img",7),e.qZA()(),e._UZ(13,"div",8)(14,"div",9),e.qZA(),e.TgZ(15,"div",10)(16,"ion-button",11),e.NdJ("click",function(){return s.onClick()}),e._uU(17," HISTORIAS "),e.qZA()()(),e._UZ(18,"app-footer"),e.qZA())},dependencies:[i.YG,i.W2,i.jY,v.G,h.c],styles:['@charset "UTF-8";ion-icon[_ngcontent-%COMP%]{font-size:24px;margin-right:8px}div[_ngcontent-%COMP%], ion-grid[_ngcontent-%COMP%]{background-color:#333232;color:#f0f8ff;width:auto;height:auto}.swiper-container[_ngcontent-%COMP%]{width:auto;height:auto}.swiper-slide[_ngcontent-%COMP%]{text-align:center;font-size:18px;background:#fff;display:flex;justify-content:center;align-items:center}.swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:auto;max-height:auto}.container[_ngcontent-%COMP%]{position:relative}.button-container[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:2}button[_ngcontent-%COMP%]{background-color:none}img[_ngcontent-%COMP%], .swiper-slide[_ngcontent-%COMP%]{justify-content:center;align-items:center;width:100%!important;height:100%!important}']}),t})()}];let P=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild(f),l.Bz]}),t})();var M=n(5642);let C=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,d.u5,i.Pc,P,M.K]}),t})()}}]);