"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1909],{1909:(y,c,n)=>{n.r(c),n.d(c,{CardPageModule:()=>P});var g=n(4755),v=n(5030),t=n(7002),a=n(1350),u=n(9663),m=n(366),o=n(3020),h=n(3646),C=n(4662);let p=(()=>{class r{ngAfterViewInit(){const i=new u.ZP(".carrusel-1",{navigation:{nextEl:".carrusel-1-next",prevEl:".carrusel-1-prev"}}),e=document.querySelector(".carrusel-1-next"),T=document.querySelector(".carrusel-1-prev");e.addEventListener("click",()=>{i.slideNext()}),T.addEventListener("click",()=>{i.slidePrev()});const d=new u.ZP(".carrusel-2",{navigation:{nextEl:".carrusel-2-next",prevEl:".carrusel-2-prev"}}),O=document.querySelector(".carrusel-2-next"),f=document.querySelector(".carrusel-2-prev");O.addEventListener("click",()=>{d.slideNext()}),f.addEventListener("click",()=>{d.slidePrev()});const l=new u.ZP(".carrusel-3",{navigation:{nextEl:".carrusel-3-next",prevEl:".carrusel-3-prev"}}),x=document.querySelector(".carrusel-3-next"),_=document.querySelector(".carrusel-3-prev");x.addEventListener("click",()=>{l.slideNext()}),_.addEventListener("click",()=>{l.slidePrev()});const Z=new u.ZP(".carrusel-4",{navigation:{nextEl:".carrusel-4-next",prevEl:".carrusel-4-prev"}}),w=document.querySelector(".carrusel-4-next"),M=document.querySelector(".carrusel-4-prev");w.addEventListener("click",()=>{Z.slideNext()}),M.addEventListener("click",()=>{Z.slidePrev()})}constructor(i){this.route=i,this.id=0,this.ids="0"}ngOnInit(){this.route.params.subscribe(i=>{this.id=i.id,console.log(this.id)}),this.usuarios=m.M,this.usuario=this.usuarios.find(i=>i.id==this.id),console.log(this.usuario)}}return r.\u0275fac=function(i){return new(i||r)(o.Y36(a.gz))},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-card"]],decls:131,vars:48,consts:[[3,"titulo"],["mode","md"],[1,"container"],[1,"half","left"],[3,"src"],[1,"half","right"],[2,"color","rgb(221, 221, 48)"],[1,"justified-text"],[3,"color"],["slot","start",3,"name"],[1,"swiper-container","carrusel-1"],[1,"swiper-wrapper"],[1,"swiper-slide"],[1,"swiper-button-next","carrusel-1-next"],[1,"swiper-button-prev","carrusel-1-prev"],[1,"swiper-container","carrusel-2"],[1,"swiper-button-next","carrusel-2-next"],[1,"swiper-button-prev","carrusel-2-prev"],[1,"swiper-container","carrusel-3"],[1,"swiper-button-next","carrusel-3-next"],[1,"swiper-button-prev","carrusel-3-prev"],[1,"swiper-container","carrusel-4"],[1,"swiper-button-next","carrusel-4-next"],[1,"swiper-button-prev","carrusel-4-prev"]],template:function(i,e){1&i&&(o._UZ(0,"app-header",0),o.TgZ(1,"ion-content")(2,"ion-grid")(3,"ion-card",1)(4,"div",2)(5,"div",3),o._UZ(6,"img",4),o.qZA(),o.TgZ(7,"div",5)(8,"ion-card-header")(9,"ion-card-subtitle"),o._uU(10),o.qZA(),o.TgZ(11,"ion-card-title",6),o._uU(12),o.qZA()(),o.TgZ(13,"ion-card-content"),o._uU(14),o.qZA()()()(),o.TgZ(15,"ion-card")(16,"ion-card-content")(17,"p",7),o._uU(18),o.qZA(),o._UZ(19,"br"),o.TgZ(20,"p",7),o._uU(21),o.qZA(),o._UZ(22,"br"),o.TgZ(23,"p",7),o._uU(24),o.qZA(),o._UZ(25,"br"),o.TgZ(26,"p",7),o._uU(27),o.qZA(),o._UZ(28,"br"),o.TgZ(29,"p",7),o._uU(30),o.qZA(),o._UZ(31,"br"),o.TgZ(32,"p",7),o._uU(33),o.qZA(),o._UZ(34,"br"),o.TgZ(35,"p",7),o._uU(36),o.qZA(),o._UZ(37,"br"),o.TgZ(38,"p",7),o._uU(39),o.qZA(),o._UZ(40,"br"),o.TgZ(41,"p",7),o._uU(42),o.qZA(),o._UZ(43,"br"),o.TgZ(44,"p",7),o._uU(45),o.qZA(),o._UZ(46,"br"),o.TgZ(47,"p",7),o._uU(48),o.qZA(),o._UZ(49,"br"),o.qZA()(),o.TgZ(50,"ion-card")(51,"ion-item",8),o._UZ(52,"ion-icon",9),o.TgZ(53,"ion-label"),o._uU(54),o.qZA()(),o.TgZ(55,"ion-card-content")(56,"div",10)(57,"div",11)(58,"div",12),o._UZ(59,"img",4),o.qZA(),o.TgZ(60,"div",12),o._UZ(61,"img",4),o.qZA(),o.TgZ(62,"div",12),o._UZ(63,"img",4),o.qZA(),o.TgZ(64,"div",12),o._UZ(65,"img",4),o.qZA(),o.TgZ(66,"div",12),o._UZ(67,"img",4),o.qZA()(),o._UZ(68,"div",13)(69,"div",14),o.qZA()()(),o.TgZ(70,"ion-card")(71,"ion-item",8),o._UZ(72,"ion-icon",9),o.TgZ(73,"ion-label"),o._uU(74),o.qZA()(),o.TgZ(75,"ion-card-content")(76,"div",15)(77,"div",11)(78,"div",12),o._UZ(79,"img",4),o.qZA(),o.TgZ(80,"div",12),o._UZ(81,"img",4),o.qZA(),o.TgZ(82,"div",12),o._UZ(83,"img",4),o.qZA(),o.TgZ(84,"div",12),o._UZ(85,"img",4),o.qZA(),o.TgZ(86,"div",12),o._UZ(87,"img",4),o.qZA()(),o._UZ(88,"div",16)(89,"div",17),o.qZA()()(),o.TgZ(90,"ion-card")(91,"ion-item",8),o._UZ(92,"ion-icon",9),o.TgZ(93,"ion-label"),o._uU(94),o.qZA()(),o.TgZ(95,"ion-card-content")(96,"div",18)(97,"div",11)(98,"div",12),o._UZ(99,"img",4),o.qZA(),o.TgZ(100,"div",12),o._UZ(101,"img",4),o.qZA(),o.TgZ(102,"div",12),o._UZ(103,"img",4),o.qZA(),o.TgZ(104,"div",12),o._UZ(105,"img",4),o.qZA(),o.TgZ(106,"div",12),o._UZ(107,"img",4),o.qZA()(),o._UZ(108,"div",19)(109,"div",20),o.qZA()()(),o.TgZ(110,"ion-card")(111,"ion-item",8),o._UZ(112,"ion-icon",9),o.TgZ(113,"ion-label"),o._uU(114),o.qZA()(),o.TgZ(115,"ion-card-content")(116,"div",21)(117,"div",11)(118,"div",12),o._UZ(119,"img",4),o.qZA(),o.TgZ(120,"div",12),o._UZ(121,"img",4),o.qZA(),o.TgZ(122,"div",12),o._UZ(123,"img",4),o.qZA(),o.TgZ(124,"div",12),o._UZ(125,"img",4),o.qZA(),o.TgZ(126,"div",12),o._UZ(127,"img",4),o.qZA()(),o._UZ(128,"div",22)(129,"div",23),o.qZA()()()(),o._UZ(130,"app-footer"),o.qZA()),2&i&&(o.s9C("titulo",e.usuario.name),o.xp6(6),o.s9C("src",e.usuario.avatar,o.LSH),o.xp6(4),o.Oqu(e.usuario.age),o.xp6(2),o.Oqu(e.usuario.name),o.xp6(2),o.hij(" ",e.usuario.summary," "),o.xp6(4),o.Oqu(e.usuario.history1),o.xp6(3),o.Oqu(e.usuario.history2),o.xp6(3),o.Oqu(e.usuario.history3),o.xp6(3),o.Oqu(e.usuario.history4),o.xp6(3),o.Oqu(e.usuario.history5),o.xp6(3),o.Oqu(e.usuario.history6),o.xp6(3),o.Oqu(e.usuario.history7),o.xp6(3),o.Oqu(e.usuario.history8),o.xp6(3),o.Oqu(e.usuario.history9),o.xp6(3),o.Oqu(e.usuario.history10),o.xp6(3),o.Oqu(e.usuario.history11),o.xp6(3),o.s9C("color",e.usuario.colorconcept1),o.xp6(1),o.s9C("name",e.usuario.iconconcept1),o.xp6(2),o.Oqu(e.usuario.concept1),o.xp6(5),o.s9C("src",e.usuario.photo1,o.LSH),o.xp6(2),o.s9C("src",e.usuario.photo2,o.LSH),o.xp6(2),o.s9C("src",e.usuario.photo3,o.LSH),o.xp6(2),o.s9C("src",e.usuario.photo4,o.LSH),o.xp6(2),o.s9C("src",e.usuario.photo5,o.LSH),o.xp6(4),o.s9C("color",e.usuario.colorconcept2),o.xp6(1),o.s9C("name",e.usuario.iconconcept2),o.xp6(2),o.Oqu(e.usuario.concept2),o.xp6(5),o.s9C("src",e.usuario.photo6,o.LSH),o.xp6(2),o.s9C("src",e.usuario.photo7,o.LSH),o.xp6(2),o.s9C("src",e.usuario.photo8,o.LSH),o.xp6(2),o.s9C("src",e.usuario.photo9,o.LSH),o.xp6(2),o.s9C("src",e.usuario.photo10,o.LSH),o.xp6(4),o.s9C("color",e.usuario.colorconcept3),o.xp6(1),o.s9C("name",e.usuario.iconconcept3),o.xp6(2),o.Oqu(e.usuario.concept3),o.xp6(5),o.s9C("src",e.usuario.photo11,o.LSH),o.xp6(2),o.s9C("src",e.usuario.photo12,o.LSH),o.xp6(2),o.s9C("src",e.usuario.photo13,o.LSH),o.xp6(2),o.s9C("src",e.usuario.photo16,o.LSH),o.xp6(2),o.s9C("src",e.usuario.photo15,o.LSH),o.xp6(4),o.s9C("color",e.usuario.colorconcept4),o.xp6(1),o.s9C("name",e.usuario.iconconcept4),o.xp6(2),o.Oqu(e.usuario.concept4),o.xp6(5),o.s9C("src",e.usuario.photo16,o.LSH),o.xp6(2),o.s9C("src",e.usuario.photo17,o.LSH),o.xp6(2),o.s9C("src",e.usuario.photo18,o.LSH),o.xp6(2),o.s9C("src",e.usuario.photo19,o.LSH),o.xp6(2),o.s9C("src",e.usuario.photo20,o.LSH))},dependencies:[t.PM,t.FN,t.Zi,t.tO,t.Dq,t.W2,t.jY,t.gu,t.Ie,t.Q$,h.G,C.c],styles:[".container[_ngcontent-%COMP%]{display:flex}.half[_ngcontent-%COMP%]{height:100%;box-sizing:border-box}.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%]{width:50%}ion-grid[_ngcontent-%COMP%], ion-card[_ngcontent-%COMP%]{background-color:#333232;color:#f0f8ff;width:auto;height:auto}ion-card-title[_ngcontent-%COMP%]{color:#f0f8ff}.justified-text[_ngcontent-%COMP%]{text-align:justify}.swiper-container[_ngcontent-%COMP%], .swiper-container2[_ngcontent-%COMP%], .swiper-container3[_ngcontent-%COMP%], .swiper-container4[_ngcontent-%COMP%]{width:auto;height:auto}.swiper-slide[_ngcontent-%COMP%], .swiper-slide2[_ngcontent-%COMP%], .swiper-slide3[_ngcontent-%COMP%], .swiper-slide4[_ngcontent-%COMP%]{text-align:center;font-size:18px;background:#fff;display:flex;justify-content:center;align-items:center}.swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .swiper-slide2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .swiper-slide3[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .swiper-slide4[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:auto;max-height:auto}"]}),r})();const q=[{path:"",component:p},{path:":id",component:p}];let U=(()=>{class r{}return r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[a.Bz.forChild(q),a.Bz]}),r})();var A=n(5642);let P=(()=>{class r{}return r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[g.ez,v.u5,t.Pc,U,A.K]}),r})()}}]);