"use strict";(self.webpackChunkblack_dashboard_pro_angular=self.webpackChunkblack_dashboard_pro_angular||[]).push([[469],{5469:function(S,g,a){a.r(g),a.d(g,{DashboardModule:function(){return C}});var l=a(3144),Z=a(5671),b=a(6267),A=a(9808),h=a(5642),n=a(8274),c=a(1465),p=a(9207),U=a(8332),d=a.n(U),t=a(540);function T(e,i){1&e&&(t.TgZ(0,"div",92)(1,"a",93),t._uU(2," Action "),t.qZA(),t.TgZ(3,"a",93),t._uU(4," Another action "),t.qZA(),t.TgZ(5,"a",93),t._uU(6," Something else "),t.qZA()())}function f(e,i){1&e&&(t.TgZ(0,"div",92)(1,"a",93),t._uU(2," Action "),t.qZA(),t.TgZ(3,"a",93),t._uU(4," Another action "),t.qZA(),t.TgZ(5,"a",93),t._uU(6," Something else "),t.qZA(),t.TgZ(7,"a",94),t._uU(8," Remove Data "),t.qZA()())}var q=[{path:"",children:[{path:"dashboard",component:function(){var e=function(){function i(){(0,Z.Z)(this,i),this.clicked=!0,this.clicked1=!1,this.clicked2=!1}return(0,l.Z)(i,[{key:"ngOnInit",value:function(){var u={maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#9a9a9a"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(233,32,16,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}]}};this.canvas=document.getElementById("chartLineRed"),this.ctx=this.canvas.getContext("2d"),(o=this.ctx.createLinearGradient(0,230,0,50)).addColorStop(1,"rgba(233,32,16,0.2)"),o.addColorStop(.4,"rgba(233,32,16,0.0)"),o.addColorStop(0,"rgba(233,32,16,0)");var s={labels:["JUL","AUG","SEP","OCT","NOV","DEC"],datasets:[{label:"Data",fill:!0,backgroundColor:o,borderColor:"#ec250d",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#ec250d",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#ec250d",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:[80,100,70,80,120,80]}]};new(d())(this.ctx,{type:"line",data:s,options:u}),this.canvas=document.getElementById("chartLineGreen"),this.ctx=this.canvas.getContext("2d"),(o=this.ctx.createLinearGradient(0,230,0,50)).addColorStop(1,"rgba(66,134,121,0.15)"),o.addColorStop(.4,"rgba(66,134,121,0.0)"),o.addColorStop(0,"rgba(66,134,121,0)"),s={labels:["JUL","AUG","SEP","OCT","NOV"],datasets:[{label:"My First dataset",fill:!0,backgroundColor:o,borderColor:"#00d6b4",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#00d6b4",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#00d6b4",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:[90,27,60,12,80]}]},new(d())(this.ctx,{type:"line",data:s,options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:50,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(0,242,195,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}}),this.datasets=[[100,70,90,70,85,60,75,60,90,80,110,100],[80,120,105,110,95,105,90,100,80,95,70,120],[60,80,65,130,80,105,90,130,70,115,60,130]],this.data=this.datasets[0],this.canvas=document.getElementById("chartBig1"),this.ctx=this.canvas.getContext("2d"),(o=this.ctx.createLinearGradient(0,230,0,50)).addColorStop(1,"rgba(233,32,16,0.2)"),o.addColorStop(.4,"rgba(233,32,16,0.0)"),o.addColorStop(0,"rgba(233,32,16,0)");var o,B={type:"line",data:{labels:["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],datasets:[{label:"My First dataset",fill:!0,backgroundColor:o,borderColor:"#ec250d",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#ec250d",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#ec250d",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:this.data}]},options:u};this.myChartData=new(d())(this.ctx,B),this.canvas=document.getElementById("CountryChart"),this.ctx=this.canvas.getContext("2d"),(o=this.ctx.createLinearGradient(0,230,0,50)).addColorStop(1,"rgba(29,140,248,0.2)"),o.addColorStop(.4,"rgba(29,140,248,0.0)"),o.addColorStop(0,"rgba(29,140,248,0)"),new(d())(this.ctx,{type:"bar",responsive:!0,legend:{display:!1},data:{labels:["USA","GER","AUS","UK","RO","BR"],datasets:[{label:"Countries",fill:!0,backgroundColor:o,hoverBackgroundColor:o,borderColor:"#1f8ef1",borderWidth:2,borderDash:[],borderDashOffset:0,data:[53,20,10,80,100,45]}]},options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:120,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}})}},{key:"updateOptions",value:function(){this.myChartData.data.datasets[0].data=this.data,this.myChartData.update()}}]),i}();return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-dashboard"]],decls:452,vars:6,consts:[[1,"content"],[1,"row"],[1,"col-12"],[1,"card","card-chart"],[1,"card-header"],[1,"col-sm-6","text-left"],[1,"card-category"],[1,"card-title"],[1,"card-body"],[1,"chart-area"],["id","chartBig1"],[1,"col-lg-3","col-md-6"],[1,"card","card-stats"],[1,"col-5"],[1,"info-icon","text-center","icon-warning"],[1,"tim-icons","icon-chat-33"],[1,"col-7"],[1,"numbers"],[1,"card-footer"],[1,"stats"],[1,"tim-icons","icon-refresh-01"],[1,"info-icon","text-center","icon-primary"],[1,"tim-icons","icon-shape-star"],[1,"tim-icons","icon-sound-wave"],[1,"info-icon","text-center","icon-success"],[1,"tim-icons","icon-single-02"],[1,"tim-icons","icon-trophy"],[1,"info-icon","text-center","icon-danger"],[1,"tim-icons","icon-molecule-40"],[1,"tim-icons","icon-watch-time"],[1,"col-lg-4"],[1,"tim-icons","icon-bell-55","text-primary"],["id","chartLineRed"],[1,"tim-icons","icon-delivery-fast","text-info"],["id","CountryChart"],[1,"tim-icons","icon-send","text-success"],["id","chartLineGreen"],[1,"col-lg-5"],[1,"card","card-tasks"],[1,"title","d-inline"],[1,"card-category","d-inline"],["dropdown","",1,"dropdown"],["data-toggle","dropdown","dropdownToggle","","type","button",1,"btn","btn-link","dropdown-toggle","btn-icon","dropdown-toggle"],[1,"tim-icons","icon-settings-gear-63"],["class"," dropdown-menu dropdown-menu-right",4,"dropdownMenu"],[1,"table-full-width","table-responsive"],[1,"table"],[1,"form-check"],[1,"form-check-label"],["type","checkbox","value","",1,"form-check-input"],[1,"form-check-sign"],[1,"check"],[1,"title"],[1,"text-muted"],[1,"td-actions","text-right"],["type","button","tooltip","Edit Task","placement","left",1,"btn","btn-link"],[1,"tim-icons","icon-pencil"],["checked","","type","checkbox","value","",1,"form-check-input"],[1,"col-lg-7"],[1,"card"],[1,"tools","float-right"],[1,"table-responsive"],[1,"text-primary"],[1,"text-center"],[1,"text-right"],[1,"photo"],["alt","photo","src","assets/img/tania.jpg"],[1,"progress-container","progress-sm"],[1,"progress"],[1,"progress-value"],[3,"value"],["tooltip","Refresh","type","button",1,"btn","btn-success","btn-link","btn-icon","btn-sm","btn-simple"],["tooltip","Delete","type","button",1,"btn","btn-danger","btn-link","btn-icon","btn-sm","btn-simple"],[1,"tim-icons","icon-simple-remove"],["alt","photo","src","assets/img/robi.jpg"],["tooltip","Refresh","type","button",1,"btn","btn-success","btn-link","btn-sm","btn-icon","btn-simple"],["tooltip","Delete","type","button",1,"btn","btn-danger","btn-link","btn-sm","btn-icon","btn-simple"],["alt","photo","src","assets/img/lora.jpg"],["alt","photo","src","assets/img/jana.jpg"],["tooltip","Refresh","type","button",1,"btn","btn-success","btn-link","btn-sm","btn-icon"],["tooltip","Delete","type","button",1,"btn","btn-danger","btn-link","btn-sm","btn-icon"],["alt","photo","src","assets/img/mike.jpg"],["alt","photo","src","assets/img/emilyz.jpg"],[1,"col-lg-12"],[1,"col-md-6"],[1,"flag"],["alt","flag","src","assets/img/US.png"],["alt","flag","src","assets/img/DE.png"],["alt","flag","src","assets/img/AU.png"],["alt","flag","src","assets/img/GB.png"],["alt","flag","src","assets/img/RO.png"],["alt","flag","src","assets/img/BR.png"],[1,"dropdown-menu","dropdown-menu-right"],["href","#pablo",1,"dropdown-item"],["href","#pablo",1,"dropdown-item","text-danger"]],template:function(r,_){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",1)(6,"div",5)(7,"h5",6),t._uU(8,"Total Shipments"),t.qZA(),t.TgZ(9,"h2",7),t._uU(10,"Performance"),t.qZA()()()(),t.TgZ(11,"div",8)(12,"div",9),t._UZ(13,"canvas",10),t.qZA()()()(),t.TgZ(14,"div",11)(15,"div",12)(16,"div",8)(17,"div",1)(18,"div",13)(19,"div",14),t._UZ(20,"i",15),t.qZA()(),t.TgZ(21,"div",16)(22,"div",17)(23,"p",6),t._uU(24,"Number"),t.qZA(),t.TgZ(25,"h3",7),t._uU(26,"150GB"),t.qZA()()()()(),t.TgZ(27,"div",18),t._UZ(28,"hr"),t.TgZ(29,"div",19),t._UZ(30,"i",20),t._uU(31," Update Now "),t.qZA()()()(),t.TgZ(32,"div",11)(33,"div",12)(34,"div",8)(35,"div",1)(36,"div",13)(37,"div",21),t._UZ(38,"i",22),t.qZA()(),t.TgZ(39,"div",16)(40,"div",17)(41,"p",6),t._uU(42,"Followers"),t.qZA(),t.TgZ(43,"h3",7),t._uU(44,"+45k"),t.qZA()()()()(),t.TgZ(45,"div",18),t._UZ(46,"hr"),t.TgZ(47,"div",19),t._UZ(48,"i",23),t._uU(49," Last Research "),t.qZA()()()(),t.TgZ(50,"div",11)(51,"div",12)(52,"div",8)(53,"div",1)(54,"div",13)(55,"div",24),t._UZ(56,"i",25),t.qZA()(),t.TgZ(57,"div",16)(58,"div",17)(59,"p",6),t._uU(60,"Users"),t.qZA(),t.TgZ(61,"h3",7),t._uU(62,"150,000"),t.qZA()()()()(),t.TgZ(63,"div",18),t._UZ(64,"hr"),t.TgZ(65,"div",19),t._UZ(66,"i",26),t._uU(67," Customers feedback "),t.qZA()()()(),t.TgZ(68,"div",11)(69,"div",12)(70,"div",8)(71,"div",1)(72,"div",13)(73,"div",27),t._UZ(74,"i",28),t.qZA()(),t.TgZ(75,"div",16)(76,"div",17)(77,"p",6),t._uU(78,"Errors"),t.qZA(),t.TgZ(79,"h3",7),t._uU(80,"12"),t.qZA()()()()(),t.TgZ(81,"div",18),t._UZ(82,"hr"),t.TgZ(83,"div",19),t._UZ(84,"i",29),t._uU(85," In the last hours "),t.qZA()()()(),t.TgZ(86,"div",30)(87,"div",3)(88,"div",4)(89,"h5",6),t._uU(90,"Total Shipments"),t.qZA(),t.TgZ(91,"h3",7),t._UZ(92,"i",31),t._uU(93," 763,215 "),t.qZA()(),t.TgZ(94,"div",8)(95,"div",9),t._UZ(96,"canvas",32),t.qZA()()()(),t.TgZ(97,"div",30)(98,"div",3)(99,"div",4)(100,"h5",6),t._uU(101,"Daily Sales"),t.qZA(),t.TgZ(102,"h3",7),t._UZ(103,"i",33),t._uU(104," 3,500\u20ac "),t.qZA()(),t.TgZ(105,"div",8)(106,"div",9),t._UZ(107,"canvas",34),t.qZA()()()(),t.TgZ(108,"div",30)(109,"div",3)(110,"div",4)(111,"h5",6),t._uU(112,"Completed Tasks"),t.qZA(),t.TgZ(113,"h3",7),t._UZ(114,"i",35),t._uU(115," 12,100K "),t.qZA()(),t.TgZ(116,"div",8)(117,"div",9),t._UZ(118,"canvas",36),t.qZA()()()()(),t.TgZ(119,"div",1)(120,"div",37)(121,"div",38)(122,"div",4)(123,"h6",39),t._uU(124,"Tasks(5)"),t.qZA(),t.TgZ(125,"p",40),t._uU(126,"today"),t.qZA(),t.TgZ(127,"div",41)(128,"button",42),t._UZ(129,"i",43),t.qZA(),t.YNc(130,T,7,0,"div",44),t.qZA()(),t.TgZ(131,"div",8)(132,"div",45)(133,"table",46)(134,"tbody")(135,"tr")(136,"td")(137,"div",47)(138,"label",48),t._UZ(139,"input",49),t.TgZ(140,"span",50),t._UZ(141,"span",51),t.qZA()()()(),t.TgZ(142,"td")(143,"p",52),t._uU(144,"Update the Documentation"),t.qZA(),t.TgZ(145,"p",53),t._uU(146," Dwuamish Head, Seattle, WA 8:47 AM "),t.qZA()(),t.TgZ(147,"td",54)(148,"button",55),t._UZ(149,"i",56),t.qZA()()(),t.TgZ(150,"tr")(151,"td")(152,"div",47)(153,"label",48),t._UZ(154,"input",57),t.TgZ(155,"span",50),t._UZ(156,"span",51),t.qZA()()()(),t.TgZ(157,"td")(158,"p",52),t._uU(159,"GDPR Compliance"),t.qZA(),t.TgZ(160,"p",53),t._uU(161," The GDPR is a regulation that requires businesses to protect the personal data and privacy of Europe citizens for transactions that occur within EU member states. "),t.qZA()(),t.TgZ(162,"td",54)(163,"button",55),t._UZ(164,"i",56),t.qZA()()(),t.TgZ(165,"tr")(166,"td")(167,"div",47)(168,"label",48),t._UZ(169,"input",49),t.TgZ(170,"span",50),t._UZ(171,"span",51),t.qZA()()()(),t.TgZ(172,"td")(173,"p",52),t._uU(174,"Solve the issues"),t.qZA(),t.TgZ(175,"p",53),t._uU(176," Fifty percent of all respondents said they would be more likely to shop at a company "),t.qZA()(),t.TgZ(177,"td",54)(178,"button",55),t._UZ(179,"i",56),t.qZA()()(),t.TgZ(180,"tr")(181,"td")(182,"div",47)(183,"label",48),t._UZ(184,"input",49),t.TgZ(185,"span",50),t._UZ(186,"span",51),t.qZA()()()(),t.TgZ(187,"td")(188,"p",52),t._uU(189,"Release v2.0.0"),t.qZA(),t.TgZ(190,"p",53),t._uU(191," Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM "),t.qZA()(),t.TgZ(192,"td",54)(193,"button",55),t._UZ(194,"i",56),t.qZA()()(),t.TgZ(195,"tr")(196,"td")(197,"div",47)(198,"label",48),t._UZ(199,"input",49),t.TgZ(200,"span",50),t._UZ(201,"span",51),t.qZA()()()(),t.TgZ(202,"td")(203,"p",52),t._uU(204,"Export the processed files"),t.qZA(),t.TgZ(205,"p",53),t._uU(206," The report also shows that consumers will not easily forgive a company once a breach exposing their personal data occurs. "),t.qZA()(),t.TgZ(207,"td",54)(208,"button",55),t._UZ(209,"i",56),t.qZA()()(),t.TgZ(210,"tr")(211,"td")(212,"div",47)(213,"label",48),t._UZ(214,"input",49),t.TgZ(215,"span",50),t._UZ(216,"span",51),t.qZA()()()(),t.TgZ(217,"td")(218,"p",52),t._uU(219,"Arival at export process"),t.qZA(),t.TgZ(220,"p",53),t._uU(221," Capitol Hill, Seattle, WA 12:34 AM "),t.qZA()(),t.TgZ(222,"td",54)(223,"button",55),t._UZ(224,"i",56),t.qZA()()()()()()()()(),t.TgZ(225,"div",58)(226,"div",59)(227,"div",4)(228,"div",60)(229,"div",41)(230,"button",42),t._UZ(231,"i",43),t.qZA(),t.YNc(232,f,9,0,"div",44),t.qZA()(),t.TgZ(233,"h5",7),t._uU(234,"Management Table"),t.qZA()(),t.TgZ(235,"div",8)(236,"div",61)(237,"table",46)(238,"thead",62)(239,"tr")(240,"th",63),t._uU(241,"#"),t.qZA(),t.TgZ(242,"th"),t._uU(243,"Name"),t.qZA(),t.TgZ(244,"th"),t._uU(245,"Job Position"),t.qZA(),t.TgZ(246,"th"),t._uU(247,"Milestone"),t.qZA(),t.TgZ(248,"th",64),t._uU(249,"Salary"),t.qZA(),t.TgZ(250,"th",64),t._uU(251,"Actions"),t.qZA()()(),t.TgZ(252,"tbody")(253,"tr")(254,"td",63)(255,"div",65),t._UZ(256,"img",66),t.qZA()(),t.TgZ(257,"td"),t._uU(258,"Tania Mike"),t.qZA(),t.TgZ(259,"td"),t._uU(260,"Develop"),t.qZA(),t.TgZ(261,"td",63)(262,"div",67)(263,"div",68)(264,"span",69),t._uU(265," 25% "),t.qZA(),t._UZ(266,"progressbar",70),t.qZA()()(),t.TgZ(267,"td",64),t._uU(268,"\u20ac 99,225"),t.qZA(),t.TgZ(269,"td",64)(270,"button",71),t._UZ(271,"i",20),t.qZA(),t.TgZ(272,"button",72),t._UZ(273,"i",73),t.qZA()()(),t.TgZ(274,"tr")(275,"td",63)(276,"div",65),t._UZ(277,"img",74),t.qZA()(),t.TgZ(278,"td"),t._uU(279,"John Doe"),t.qZA(),t.TgZ(280,"td"),t._uU(281,"CEO"),t.qZA(),t.TgZ(282,"td",63)(283,"div",67)(284,"div",68)(285,"span",69),t._uU(286," 77% "),t.qZA(),t._UZ(287,"progressbar",70),t.qZA()()(),t.TgZ(288,"td",64),t._uU(289,"\u20ac 89,241"),t.qZA(),t.TgZ(290,"td",64)(291,"button",75),t._UZ(292,"i",20),t.qZA(),t.TgZ(293,"button",76),t._UZ(294,"i",73),t.qZA()()(),t.TgZ(295,"tr")(296,"td",63)(297,"div",65),t._UZ(298,"img",77),t.qZA()(),t.TgZ(299,"td"),t._uU(300,"Alexa Mike"),t.qZA(),t.TgZ(301,"td"),t._uU(302,"Design"),t.qZA(),t.TgZ(303,"td",63)(304,"div",67)(305,"div",68)(306,"span",69),t._uU(307," 41% "),t.qZA(),t._UZ(308,"progressbar",70),t.qZA()()(),t.TgZ(309,"td",64),t._uU(310,"\u20ac 92,144"),t.qZA(),t.TgZ(311,"td",64)(312,"button",71),t._UZ(313,"i",20),t.qZA(),t.TgZ(314,"button",72),t._UZ(315,"i",73),t.qZA()()(),t.TgZ(316,"tr")(317,"td",63)(318,"div",65),t._UZ(319,"img",78),t.qZA()(),t.TgZ(320,"td"),t._uU(321,"Jana Monday"),t.qZA(),t.TgZ(322,"td"),t._uU(323,"Marketing"),t.qZA(),t.TgZ(324,"td",63)(325,"div",67)(326,"div",68)(327,"span",69),t._uU(328," 50% "),t.qZA(),t._UZ(329,"progressbar",70),t.qZA()()(),t.TgZ(330,"td",64),t._uU(331,"\u20ac 49,990"),t.qZA(),t.TgZ(332,"td",64)(333,"button",79),t._UZ(334,"i",20),t.qZA(),t.TgZ(335,"button",80),t._UZ(336,"i",73),t.qZA()()(),t.TgZ(337,"tr")(338,"td",63)(339,"div",65),t._UZ(340,"img",81),t.qZA()(),t.TgZ(341,"td"),t._uU(342,"Paul Dickens"),t.qZA(),t.TgZ(343,"td"),t._uU(344,"Develop"),t.qZA(),t.TgZ(345,"td",63)(346,"div",67)(347,"div",68)(348,"span",69),t._uU(349," 100% "),t.qZA(),t._UZ(350,"progressbar",70),t.qZA()()(),t.TgZ(351,"td",64),t._uU(352,"\u20ac 69,201"),t.qZA(),t.TgZ(353,"td",64)(354,"button",79),t._UZ(355,"i",20),t.qZA(),t.TgZ(356,"button",80),t._UZ(357,"i",73),t.qZA()()(),t.TgZ(358,"tr")(359,"td",63)(360,"div",65),t._UZ(361,"img",82),t.qZA()(),t.TgZ(362,"td"),t._uU(363,"Manuela Rico"),t.qZA(),t.TgZ(364,"td"),t._uU(365,"Manager"),t.qZA(),t.TgZ(366,"td",63)(367,"div",67)(368,"div",68)(369,"span",69),t._uU(370," 15% "),t.qZA(),t._UZ(371,"progressbar",70),t.qZA()()(),t.TgZ(372,"td",64),t._uU(373,"\u20ac 99,201"),t.qZA(),t.TgZ(374,"td",64)(375,"button",79),t._UZ(376,"i",20),t.qZA(),t.TgZ(377,"button",80),t._UZ(378,"i",73),t.qZA()()()()()()()()(),t.TgZ(379,"div",83)(380,"div",59)(381,"div",4)(382,"h4",7),t._uU(383,"Global Sales by Top Locations"),t.qZA(),t.TgZ(384,"p",6),t._uU(385,"All products that were shipped"),t.qZA()(),t.TgZ(386,"div",8)(387,"div",1)(388,"div",84)(389,"div",61)(390,"table",46)(391,"tbody")(392,"tr")(393,"td")(394,"div",85),t._UZ(395,"img",86),t.qZA()(),t.TgZ(396,"td"),t._uU(397,"USA"),t.qZA(),t.TgZ(398,"td",64),t._uU(399,"2.920"),t.qZA(),t.TgZ(400,"td",64),t._uU(401,"53.23%"),t.qZA()(),t.TgZ(402,"tr")(403,"td")(404,"div",85),t._UZ(405,"img",87),t.qZA()(),t.TgZ(406,"td"),t._uU(407,"Germany"),t.qZA(),t.TgZ(408,"td",64),t._uU(409,"1.300"),t.qZA(),t.TgZ(410,"td",64),t._uU(411,"20.43%"),t.qZA()(),t.TgZ(412,"tr")(413,"td")(414,"div",85),t._UZ(415,"img",88),t.qZA()(),t.TgZ(416,"td"),t._uU(417,"Australia"),t.qZA(),t.TgZ(418,"td",64),t._uU(419,"760"),t.qZA(),t.TgZ(420,"td",64),t._uU(421,"10.35%"),t.qZA()(),t.TgZ(422,"tr")(423,"td")(424,"div",85),t._UZ(425,"img",89),t.qZA()(),t.TgZ(426,"td"),t._uU(427,"United Kingdom"),t.qZA(),t.TgZ(428,"td",64),t._uU(429,"690"),t.qZA(),t.TgZ(430,"td",64),t._uU(431,"7.87%"),t.qZA()(),t.TgZ(432,"tr")(433,"td")(434,"div",85),t._UZ(435,"img",90),t.qZA()(),t.TgZ(436,"td"),t._uU(437,"Romania"),t.qZA(),t.TgZ(438,"td",64),t._uU(439,"600"),t.qZA(),t.TgZ(440,"td",64),t._uU(441,"5.94%"),t.qZA()(),t.TgZ(442,"tr")(443,"td")(444,"div",85),t._UZ(445,"img",91),t.qZA()(),t.TgZ(446,"td"),t._uU(447,"Brasil"),t.qZA(),t.TgZ(448,"td",64),t._uU(449,"550"),t.qZA(),t.TgZ(450,"td",64),t._uU(451,"4.34%"),t.qZA()()()()()()()()()()()()),2&r&&(t.xp6(266),t.Q6J("value",25),t.xp6(21),t.Q6J("value",77),t.xp6(21),t.Q6J("value",41),t.xp6(21),t.Q6J("value",50),t.xp6(21),t.Q6J("value",100),t.xp6(21),t.Q6J("value",15))},directives:[n.TO,n.Mq,n.Hz,p.i9,c.O1],encapsulation:2}),e}()}]}],C=function(){var e=(0,l.Z)(function i(){(0,Z.Z)(this,i)});return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[A.ez,b.Bz.forChild(q),n.mr.forRoot(),h.K,c.HC.forRoot(),p.z8.forRoot()]]}),e}()}}]);