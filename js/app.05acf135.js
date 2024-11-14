(function(){"use strict";var e={6548:function(e,t,a){a.d(t,{Or:function(){return se},P4:function(){return v},ge:function(){return pe},Hz:function(){return _e},a2:function(){return Be},nw:function(){return H},j5:function(){return B},r_:function(){return xe}});var n=a(6768),o=a(4232);const r={class:"autocomplete-input"},i={key:0,class:"city-list"},s=["onClick"];function l(e,t,a,l,c,u){const d=(0,n.g2)("MyInput");return(0,n.uX)(),(0,n.CE)("div",r,[(0,n.bF)(d,{modelValue:c.query,"onUpdate:modelValue":t[0]||(t[0]=e=>c.query=e),placeholder:e.$t("placeholderInput")},null,8,["modelValue","placeholder"]),c.suggestions.length&&c.query.length>2?((0,n.uX)(),(0,n.CE)("ul",i,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(c.suggestions,((e,t)=>((0,n.uX)(),(0,n.CE)("li",{class:"city-item",key:t,onClick:t=>u.selectCity(e)},(0,o.v_)(e.fullName),9,s)))),128))])):(0,n.Q3)("",!0)])}const c=["type","value","placeholder"];function u(e,t,a,o,r,i){return(0,n.uX)(),(0,n.CE)("input",{type:a.type,value:a.modelValue,onInput:t[0]||(t[0]=(...e)=>i.updateValue&&i.updateValue(...e)),placeholder:a.placeholder},null,40,c)}var d={props:{modelValue:String,type:{type:String,default:"text"},placeholder:{type:String}},methods:{updateValue(e){this.$emit("update:modelValue",e.target.value)}}},h=a(1241);const y=(0,h.A)(d,[["render",u],["__scopeId","data-v-0bb29a63"]]);var m=y,g=a(3801),k={props:{index:{type:Number,required:!0}},components:{MyInput:m},data(){return{query:"",suggestions:[],ignoreWatch:!1}},watch:{query(e){this.ignoreWatch?this.ignoreWatch=!1:e.length>2?this.getCitySuggestions(e):this.suggestions=[]}},methods:{async getCitySuggestions(e){try{this.suggestions=await(0,g.JM)(e)}catch(t){console.error("Failed to fetch city suggestions",t)}},selectCity(e){this.query=e.fullName,this.suggestions=[],this.ignoreWatch=!0,this.$store.commit("setCitySuggestions",{index:this.index,city:e.city}),(0,g.a0)(this.query).then((e=>this.$store.commit("setGetHourlyRate",{index:this.index,hourlyRate:e}))),this.$store.commit("setRegime",{index:this.index,regime:"day"})}}};const p=(0,h.A)(k,[["render",l],["__scopeId","data-v-140548aa"]]);var v=p;const f={key:0,class:"weather-card-list"},w={class:"weather-main-item"},b={class:"weather-card-title"},C={class:"weather-info"},W={class:"temperature-section"},_={class:"temp-main"},S={class:"weather-details-item"},L={key:1,class:"weekly-weather-list"},D={class:"weekly-weather-day-text"},$={class:"weekly-temp"},x={class:"weekly-description"};function M(e,t,a,r,i,s){return s.isDay?((0,n.uX)(),(0,n.CE)("ul",f,[(0,n.Lk)("li",w,[(0,n.Lk)("h2",b,(0,o.v_)(a.weatherDataDay.name)+", "+(0,o.v_)(a.weatherDataDay.sys.country),1),(0,n.Lk)("div",C,[(0,n.Lk)("p",null,[(0,n.Lk)("strong",null,(0,o.v_)(e.$t("day"))+":",1),(0,n.eW)(" "+(0,o.v_)(s.day),1)]),(0,n.Lk)("p",null,[(0,n.Lk)("strong",null,(0,o.v_)(e.$t("date"))+":",1),(0,n.eW)(" "+(0,o.v_)(s.formattedDate),1)])]),(0,n.Lk)("div",W,[(0,n.Lk)("p",_,[(0,n.Lk)("strong",null,(0,o.v_)(s.temperatureC)+"°C",1)]),(0,n.Lk)("p",null,[(0,n.Lk)("small",null,(0,o.v_)(e.$t("feelsLike"))+": "+(0,o.v_)(s.feelsLikeC)+"°C",1)])])]),(0,n.Lk)("li",S,[(0,n.Lk)("p",null,[(0,n.Lk)("strong",null,(0,o.v_)(e.$t("tempMin"))+":",1),(0,n.eW)(" "+(0,o.v_)(s.tempMinC)+"°C ",1)]),(0,n.Lk)("p",null,[(0,n.Lk)("strong",null,(0,o.v_)(e.$t("tempMax"))+":",1),(0,n.eW)(" "+(0,o.v_)(s.tempMaxC)+"°C ",1)]),(0,n.Lk)("p",null,[(0,n.Lk)("strong",null,(0,o.v_)(e.$t("pressure"))+":",1),(0,n.eW)(" "+(0,o.v_)(a.weatherDataDay.main.pressure)+" "+(0,o.v_)(e.$t("hpa")),1)]),(0,n.Lk)("p",null,[(0,n.Lk)("strong",null,(0,o.v_)(e.$t("humidity"))+":",1),(0,n.eW)(" "+(0,o.v_)(a.weatherDataDay.main.humidity)+"% ",1)]),(0,n.Lk)("p",null,[(0,n.Lk)("strong",null,(0,o.v_)(e.$t("cloudiness"))+":",1),(0,n.eW)(" "+(0,o.v_)(a.weatherDataDay.clouds.all)+"% ",1)]),(0,n.Lk)("p",null,[(0,n.Lk)("strong",null,(0,o.v_)(e.$t("description"))+":",1),(0,n.eW)(" "+(0,o.v_)(s.translatedDescription),1)]),(0,n.Lk)("p",null,[(0,n.Lk)("strong",null,(0,o.v_)(e.$t("wind"))+":",1),(0,n.eW)(" "+(0,o.v_)(a.weatherDataDay.wind.speed)+" "+(0,o.v_)(e.$t("ms"))+", "+(0,o.v_)(a.weatherDataDay.wind.deg)+"° ",1)])])])):((0,n.uX)(),(0,n.CE)("ul",L,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(a.weatherDataWeek,((t,a)=>((0,n.uX)(),(0,n.CE)("li",{key:a,class:"weekly-weather-item"},[(0,n.Lk)("p",D,(0,o.v_)(s.getDayOfWeek(t.dayWeek)),1),(0,n.Lk)("p",$,(0,o.v_)(t.temp.toFixed(1))+"°C",1),(0,n.Lk)("p",x,(0,o.v_)(e.$t(`weatherDescriptions.${t.description}`)!==`weatherDescriptions.${t.description}`?e.$t(`weatherDescriptions.${t.description}`):t.description),1)])))),128))]))}var E={props:{weatherDataDay:{type:Object,required:!0},weatherDataWeek:{type:Array,required:!0},index:{type:Number,required:!0}},methods:{getDayOfWeek(e){const t=new Date(1e3*e),a=t.toLocaleDateString("en-US",{weekday:"long"}).toLowerCase();return this.$t(a)}},computed:{temperatureC(){return(this.weatherDataDay.main.temp-273.15).toFixed(1)},feelsLikeC(){return(this.weatherDataDay.main.feels_like-273.15).toFixed(1)},tempMinC(){return(this.weatherDataDay.main.temp_min-273.15).toFixed(1)},tempMaxC(){return(this.weatherDataDay.main.temp_max-273.15).toFixed(1)},formattedDate(){const e=new Date(1e3*this.weatherDataDay.dt);return e.toLocaleDateString("uk-UA")},day(){const e=new Date(1e3*this.weatherDataDay.dt),t=e.toLocaleDateString("en-US",{weekday:"long"}).toLowerCase();return this.$t(t)},translatedDescription(){const e=this.weatherDataDay.weather[0].description;return this.$t(`weatherDescriptions.${e}`)},isDay(){return"day"===this.$store.state.cities[this.index]?.regime}}};const A=(0,h.A)(E,[["render",M],["__scopeId","data-v-1ee45ea2"]]);var B=A;const F={key:0,class:"temperature-chart"},R={ref:"myChart"},I={key:1,class:"temperature-chart"},O={ref:"myChart"};function T(e,t,a,o,r,i){return e.isDay?((0,n.uX)(),(0,n.CE)("div",F,[(0,n.Lk)("canvas",R,null,512)])):((0,n.uX)(),(0,n.CE)("div",I,[(0,n.Lk)("canvas",O,null,512)]))}a(8992),a(3949),a(1454);var X=a(144),N=a(782),V=a(3456),j={name:"TemperatureChart",props:{hourlyRate:{type:Object,required:!0},weeklyRate:{type:Array,required:!0},index:{type:Number,required:!0}},setup(e){const t=(0,X.KR)(null),a=(0,X.KR)(null),o=(0,X.KR)([]),r=(0,X.KR)([]),i=(0,N.Pj)(),s=(0,n.EW)((()=>"day"===i.state.cities[e.index]?.regime)),l=()=>{if(t.value){const e=t.value.getContext("2d");a.value=new V.Ay(e,{type:"line",data:{labels:r.value,datasets:[{label:"Temperature (°C)",data:o.value,backgroundColor:"rgba(75, 192, 192, 0.2)",borderColor:"rgba(75, 192, 192, 1)",borderWidth:1,spanGaps:!0}]},options:{responsive:!0,animation:!1,scales:{y:{beginAtZero:!1}}}})}},c=()=>{if(t.value){const e=t.value.getContext("2d");a.value=new V.Ay(e,{type:"line",data:{labels:r.value,datasets:[{label:"Temperature (°C)",data:o.value,backgroundColor:"rgba(75, 192, 192, 0.2)",borderColor:"rgba(75, 192, 192, 1)",borderWidth:1,spanGaps:!0}]},options:{responsive:!0,animation:!1,scales:{y:{beginAtZero:!1}}}})}},u=()=>{y(),s.value?(d(),l()):(h(),c())},d=()=>{const t=(new Date).toISOString().split("T")[0],a=Array.from({length:8},((e,t)=>3*t+":00")),n=Array(8).fill(null);e.hourlyRate&&e.hourlyRate.list&&e.hourlyRate.list.forEach((e=>{const a=e.dt_txt.split(" ")[0],o=e.dt_txt.split(" ")[1].slice(0,2);if(a===t){const t=parseInt(o);if(t%3===0&&t<=21){const a=e.main.temp-273.15;n[t/3]=a}}})),o.value=n,r.value=a},h=()=>{const t=e.weeklyRate.map((e=>{const t=new Date(1e3*e.dayWeek);return t.toLocaleDateString("uk-UA",{weekday:"long"})})),a=e.weeklyRate.map((e=>e.temp));o.value=a,r.value=t},y=()=>{a.value&&(a.value.stop(),a.value.destroy(),a.value=null)};return(0,n.sV)((()=>{u()})),(0,n.wB)((()=>e.hourlyRate),(()=>{u()}),{immediate:!0}),(0,n.wB)((()=>e.weeklyRate),(()=>{u()}),{immediate:!0}),(0,n.wB)(s,(()=>{u()}),{immediate:!0}),(0,n.xo)((()=>{y()})),{myChart:t}}};const q=(0,h.A)(j,[["render",T]]);var H=q;const P={class:"add-btn"},K={class:"modal-title"},Q={class:"modal-text"};function G(e,t,a,r,i,s){const l=(0,n.g2)("MyButton"),c=(0,n.g2)("ModalWindow");return(0,n.uX)(),(0,n.CE)("div",P,[(0,n.bF)(l,{handleClick:s.addBlock,styles:{backgroundColor:"aliceblue"},hoverStyles:{backgroundColor:"rgb(139, 139, 250)"}},{default:(0,n.k6)((()=>[(0,n.eW)((0,o.v_)(e.$t("addBlock")),1)])),_:1},8,["handleClick"]),(0,n.bF)(c,{show:i.showModalWindow},{default:(0,n.k6)((()=>[(0,n.Lk)("h3",K,(0,o.v_)(e.$t("maxBlock")),1),(0,n.Lk)("p",Q,(0,o.v_)(e.$t("addInfo")),1),(0,n.bF)(l,{handleClick:s.closeModalWindow,styles:{backgroundColor:"aliceblue"},hoverStyles:{backgroundColor:"rgb(139, 139, 250)"}},{default:(0,n.k6)((()=>[(0,n.eW)((0,o.v_)(e.$t("ok")),1)])),_:1},8,["handleClick"])])),_:1},8,["show"])])}function U(e,t,a,r,i,s){return(0,n.uX)(),(0,n.CE)("button",{onClick:t[0]||(t[0]=(...e)=>a.handleClick&&a.handleClick(...e)),style:(0,o.Tr)(s.computedStyles),onMouseenter:t[1]||(t[1]=e=>i.isHovered=!0),onMouseleave:t[2]||(t[2]=e=>i.isHovered=!1)},[(0,n.RG)(e.$slots,"default",{},void 0,!0)],36)}var J={props:{handleClick:{type:Function,required:!0},styles:{type:Object,default:()=>({})},hoverStyles:{type:Object,default:()=>({})}},data(){return{isHovered:!1}},computed:{computedStyles(){return this.isHovered?{...this.styles,...this.hoverStyles}:this.styles}}};const z=(0,h.A)(J,[["render",U],["__scopeId","data-v-bd873f2e"]]);var Z=z;const Y={key:0,class:"modal-window"},ee={class:"modal-content"};function te(e,t,a,o,r,i){return a.show?((0,n.uX)(),(0,n.CE)("div",Y,[(0,n.Lk)("div",ee,[(0,n.RG)(e.$slots,"default",{},void 0,!0)])])):(0,n.Q3)("",!0)}var ae={props:{show:{type:Boolean,default:!1}}};const ne=(0,h.A)(ae,[["render",te],["__scopeId","data-v-6c2ced5e"]]);var oe=ne,re={components:{MyButton:Z,ModalWindow:oe},data(){return{showModalWindow:!1}},methods:{addBlock(){this.$store.state.cities.length>=5?this.showModalWindow=!0:this.$store.commit("incrementBlocks")},closeModalWindow(){this.showModalWindow=!1}}};const ie=(0,h.A)(re,[["render",G],["__scopeId","data-v-cda17520"]]);var se=ie;const le={class:"remove-btn"},ce={class:"modal-title"},ue={class:"modal-text"},de={class:"modal-btn-list"},he={class:"modal-btn-item"},ye={class:"modal-btn-item"};function me(e,t,a,r,i,s){const l=(0,n.g2)("MyButton"),c=(0,n.g2)("ModalWindow");return(0,n.uX)(),(0,n.CE)("div",le,[(0,n.bF)(l,{handleClick:s.confirmRemove,styles:{backgroundColor:"rgb(255, 81, 81)",color:"white"},hoverStyles:{backgroundColor:"rgb(255, 0, 0)"}},{default:(0,n.k6)((()=>[(0,n.eW)((0,o.v_)(e.$t("removeBlock")),1)])),_:1},8,["handleClick"]),(0,n.bF)(c,{show:i.showModalWindow},{default:(0,n.k6)((()=>[(0,n.Lk)("h3",ce,(0,o.v_)(e.$t("remove"))+"?",1),(0,n.Lk)("p",ue,(0,o.v_)(e.$t("warning")),1),(0,n.Lk)("ul",de,[(0,n.Lk)("li",he,[(0,n.bF)(l,{handleClick:s.closeModal,styles:{backgroundColor:"aliceblue"},hoverStyles:{backgroundColor:"rgb(139, 139, 250)"}},{default:(0,n.k6)((()=>[(0,n.eW)((0,o.v_)(e.$t("cancel")),1)])),_:1},8,["handleClick"])]),(0,n.Lk)("li",ye,[(0,n.bF)(l,{handleClick:s.removeBlock,styles:{backgroundColor:"rgb(255, 81, 81)",color:"white"},hoverStyles:{backgroundColor:"rgb(255, 0, 0)"}},{default:(0,n.k6)((()=>[(0,n.eW)((0,o.v_)(e.$t("remove")),1)])),_:1},8,["handleClick"])])])])),_:1},8,["show"])])}var ge={components:{MyButton:Z,ModalWindow:oe},data(){return{showModalWindow:!1}},methods:{confirmRemove(){this.showModalWindow=!0},removeBlock(){this.showModalWindow=!1,this.$emit("remove")},closeModal(){this.showModalWindow=!1}}};const ke=(0,h.A)(ge,[["render",me]]);var pe=ke;const ve={class:"selected-btn"},fe={class:"modal-title"},we={class:"modal-title"};function be(e,t,a,r,i,s){const l=(0,n.g2)("MyButton"),c=(0,n.g2)("ModalWindow");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("div",ve,[(0,n.bF)(l,{styles:{backgroundColor:"aliceblue"},hoverStyles:{backgroundColor:"rgb(139, 139, 250)"},handleClick:s.addLocalStorage},{default:(0,n.k6)((()=>[(0,n.eW)((0,o.v_)(e.$t("selected")),1)])),_:1},8,["handleClick"])]),(0,n.bF)(c,{show:i.showWarningModal,onClose:t[0]||(t[0]=e=>i.showWarningModal=!1)},{default:(0,n.k6)((()=>[(0,n.Lk)("h2",fe,(0,o.v_)(e.$t("addWarningCity")),1),(0,n.bF)(l,{styles:{backgroundColor:"aliceblue"},hoverStyles:{backgroundColor:"rgb(139, 139, 250)"},handleClick:()=>{i.showWarningModal=!1}},{default:(0,n.k6)((()=>[(0,n.eW)((0,o.v_)(e.$t("close")),1)])),_:1},8,["handleClick"])])),_:1},8,["show"]),(0,n.bF)(c,{show:i.showSuccessModal,onClose:t[1]||(t[1]=e=>i.showSuccessModal=!1)},{default:(0,n.k6)((()=>[(0,n.Lk)("h2",we,(0,o.v_)(e.$t("addCity")),1),(0,n.bF)(l,{styles:{backgroundColor:"aliceblue"},hoverStyles:{backgroundColor:"rgb(139, 139, 250)"},handleClick:()=>{i.showSuccessModal=!1}},{default:(0,n.k6)((()=>[(0,n.eW)((0,o.v_)(e.$t("close")),1)])),_:1},8,["handleClick"])])),_:1},8,["show"])],64)}a(4114),a(7550);var Ce={props:{cities:{type:Object}},data(){return{selectedBlocks:[],showWarningModal:!1,showSuccessModal:!1}},components:{MyButton:Z,ModalWindow:oe},methods:{addLocalStorage(){if(this.checkingAddedCity(this.cities))this.showWarningModal=!0;else{const e=localStorage.getItem("cities")?JSON.parse(localStorage.getItem("cities")):[];e.push(this.cities),localStorage.setItem("cities",JSON.stringify(e)),this.showSuccessModal=!0}},checkingAddedCity(e){const t=localStorage.getItem("cities")?JSON.parse(localStorage.getItem("cities")):[];return t.some((t=>t.citySuggestions&&t.citySuggestions.coord.lat===e.citySuggestions.coord.lat&&t.citySuggestions.coord.lon===e.citySuggestions.coord.lon))}}};const We=(0,h.A)(Ce,[["render",be]]);var _e=We;const Se={class:"weather-toggle-list"};function Le(e,t,a,r,i,s){const l=(0,n.g2)("MyButton");return(0,n.uX)(),(0,n.CE)("ul",Se,[(0,n.Lk)("li",null,[(0,n.bF)(l,{styles:{backgroundColor:"aliceblue"},hoverStyles:{backgroundColor:"rgb(139, 139, 250)"},onClick:s.setDayView,disabled:i.isDayViewClicked},{default:(0,n.k6)((()=>[(0,n.eW)((0,o.v_)(e.$t("day")),1)])),_:1},8,["onClick","disabled"])]),(0,n.Lk)("li",null,[(0,n.bF)(l,{styles:{backgroundColor:"aliceblue"},hoverStyles:{backgroundColor:"rgb(139, 139, 250)"},onClick:s.setWeekView,disabled:i.isWeekViewClicked},{default:(0,n.k6)((()=>[(0,n.eW)((0,o.v_)(e.$t("week")),1)])),_:1},8,["onClick","disabled"])])])}var De={props:{weather:{type:Object},index:{type:Number}},components:{MyButton:Z},data(){return{weeklyTemperatures:[],weeklyWeather:[],isDayViewClicked:!0,isWeekViewClicked:!1}},methods:{async setWeekView(){const e=await(0,g.zM)(this.weather.coord.lat,this.weather.coord.lon);this.isWeekViewClicked=!0,this.isDayViewClicked=!1,console.log("data",this.calculateWeeklyWeather(e.list)),this.weeklyWeather=this.calculateWeeklyWeather(e.list),this.$store.commit("seWeeklyWeather",{index:this.index,weeklyWeather:this.weeklyWeather}),console.log("weeklyWeather",this.weeklyWeather),this.$store.commit("setRegime",{index:this.index,regime:"week"})},async setDayView(){this.isDayViewClicked=!0,this.isWeekViewClicked=!1,this.$store.commit("setRegime",{index:this.index,regime:"day"})},calculateWeeklyWeather(e){const t=[];let a=null,n=0,o=0;return e.forEach((e=>{const r=new Date(1e3*e.dt),i=r.toLocaleDateString();a&&a!==i&&(t.push({temp:n/o,description:e.weather[0].description,dayWeek:e.dt,entry:e}),n=0,o=0),n+=e.main.temp-273.15,o++,a=i})),o>0&&t.push(n/o),t.splice(0,5)}}};const $e=(0,h.A)(De,[["render",Le]]);var xe=$e;function Me(e,t,a,o,r,i){return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.Lk)("button",{onClick:t[0]||(t[0]=e=>i.changeLanguage("en")),class:"languages-btn"},"En"),t[2]||(t[2]=(0,n.eW)(" / ")),(0,n.Lk)("button",{onClick:t[1]||(t[1]=e=>i.changeLanguage("uk")),class:"languages-btn"},"Укр")])}var Ee={methods:{changeLanguage(e){this.$i18n.locale=e,localStorage.setItem("languages",e)}}};const Ae=(0,h.A)(Ee,[["render",Me],["__scopeId","data-v-9780e32c"]]);var Be=Ae},3908:function(e,t,a){var n=a(5130),o=a(6768),r=a(4232);const i={class:"container"},s={class:"header"},l={class:"header-nav"};function c(e,t,a,n,c,u){const d=(0,o.g2)("router-link"),h=(0,o.g2)("SwitchLanguages"),y=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",i,[(0,o.Lk)("header",s,[(0,o.Lk)("nav",l,[(0,o.bF)(d,{class:"nav-menu-link",to:"/"},{default:(0,o.k6)((()=>[(0,o.eW)((0,r.v_)(e.$t("home")),1)])),_:1}),(0,o.bF)(d,{class:"nav-menu-link",to:"/selected"},{default:(0,o.k6)((()=>[(0,o.eW)((0,r.v_)(e.$t("selected")),1)])),_:1})]),(0,o.bF)(h)]),t[0]||(t[0]=(0,o.Lk)("hr",{class:"header-hr"},null,-1)),(0,o.bF)(y)])}var u=a(6548),d={components:{SwitchLanguages:u.a2}},h=a(1241);const y=(0,h.A)(d,[["render",c]]);var m=y,g=a(1387);const k={class:"home"},p={key:0,class:"home-title"},v={class:"btn-list"};function f(e,t,a,n,i,s){const l=(0,o.g2)("AutocompleteInput"),c=(0,o.g2)("WeatherToggle"),u=(0,o.g2)("SelectedBlock"),d=(0,o.g2)("WeatherCard"),h=(0,o.g2)("TemperatureChart"),y=(0,o.g2)("RemoveBlock"),m=(0,o.g2)("AddBlocks");return(0,o.uX)(),(0,o.CE)("div",k,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.$store.state.cities,((t,a)=>((0,o.uX)(),(0,o.CE)("div",{key:t.id},[(0,o.bF)(l,{index:a},null,8,["index"]),t.citySuggestions?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("h1",p,(0,r.v_)(e.$t("homeTitle")),1)),(0,o.Lk)("ul",v,[(0,o.Lk)("li",null,[t.citySuggestions?((0,o.uX)(),(0,o.Wv)(c,{key:0,weather:t.citySuggestions,index:a},null,8,["weather","index"])):(0,o.Q3)("",!0)]),(0,o.Lk)("li",null,[t.citySuggestions?((0,o.uX)(),(0,o.Wv)(u,{key:0,cities:t,weeklyWeather:t.weeklyWeather},null,8,["cities","weeklyWeather"])):(0,o.Q3)("",!0)])]),t.citySuggestions?((0,o.uX)(),(0,o.Wv)(d,{key:1,weatherDataDay:t.citySuggestions,weatherDataWeek:t.weeklyWeather,index:a},null,8,["weatherDataDay","weatherDataWeek","index"])):(0,o.Q3)("",!0),t.hourlyRate?((0,o.uX)(),(0,o.Wv)(h,{key:2,hourlyRate:t.hourlyRate,weeklyRate:t.weeklyWeather,index:a},null,8,["hourlyRate","weeklyRate","index"])):(0,o.Q3)("",!0),e.$store.state.cities.length>1?((0,o.uX)(),(0,o.Wv)(y,{key:3,onRemove:e=>s.handleRemoveBlock(a)},null,8,["onRemove"])):(0,o.Q3)("",!0)])))),128)),e.$store.state.isFirstCitySelected&&null!==e.$store.state.cities[0].citySuggestions?((0,o.uX)(),(0,o.Wv)(m,{key:0})):(0,o.Q3)("",!0)])}var w=a(3801),b={components:{AutocompleteInput:u.P4,WeatherCard:u.j5,TemperatureChart:u.nw,AddBlocks:u.Or,RemoveBlock:u.ge,SelectedBlock:u.Hz,WeatherToggle:u.r_},async created(){try{const e=await(0,w.vM)();if(e){const{lat:t,lon:a,city:n}=e,o=await(0,w.lN)(t,a);if(o){const e=0;this.$store.commit("setCitySuggestions",{index:e,city:o.city}),(0,w.a0)(n).then((t=>this.$store.commit("setGetHourlyRate",{index:e,hourlyRate:t})))}}}catch(e){console.error(e)}},methods:{handleRemoveBlock(e){this.$store.commit("removeBlock",e)},handleAddBlock(){this.$store.commit("incrementBlocks"),this.$store.commit("setFirstCitySelected",!1)}}};const C=(0,h.A)(b,[["render",f],["__scopeId","data-v-5c187946"]]);var W=C;const _=[{path:"/",name:"home",component:W},{path:"/selected",name:"selected",component:()=>a.e(122).then(a.bind(a,1122))}],S=(0,g.aE)({history:(0,g.LA)("/weather/"),routes:_});var L=S,D=(a(4114),a(782)),$=(0,D.y$)({state:{cities:[{id:1,citySuggestions:null,hourlyRate:null,weeklyWeather:null,regime:"day"}],isFirstCitySelected:!1},mutations:{setCitySuggestions(e,{index:t,city:a}){e.cities[t]&&(e.cities[t].citySuggestions=a)},setGetHourlyRate(e,{index:t,hourlyRate:a}){e.cities[t]&&(e.cities[t].hourlyRate=a,e.isFirstCitySelected=!0)},seWeeklyWeather(e,{index:t,weeklyWeather:a}){e.cities[t]&&(e.cities[t].weeklyWeather=a)},setRegime(e,{index:t,regime:a}){e.cities[t]&&(e.cities[t].regime=a)},incrementBlocks(e){e.cities.length<5&&(e.cities.push({id:e.cities.length+1,citySuggestions:null,hourlyRate:null}),e.isFirstCitySelected=!1)},removeBlock(e,t){e.cities.length>1&&e.cities.splice(t,1),e.isFirstCitySelected=!0}},actions:{}}),x=a(5931);const M={en:{home:"Home",homeTitle:"Enter the city and find out the weather",aboutTitle:"You did not choose, not one city",placeholderInput:"Enter the city",day:"Day",date:"Date",feelsLike:"Feels like",tempMin:"Min. temperature",tempMax:"Max. temperature",pressure:"Pressure",humidity:"Humidity",cloudiness:"Cloudiness",description:"Description",wind:"Wind",hpa:"hPa",ms:"m/s",day:"Day",monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",sunday:"Sunday",weatherDescriptions:{"clear sky":"clear sky","few clouds":"few clouds","scattered clouds":"scattered clouds","overcast clouds":"gloomy clouds","light rain":"light rain","broken clouds":"broken clouds","shower rain":"shower rain",rain:"rain",thunderstorm:"thunderstorm",snow:"snow",mist:"mist"},week:"Week",selected:"Selected",addWarningCity:"The city has already been added to the selected cities",addCity:"The city has been successfully added to the favorites",close:"Close",ok:"OK",addBlock:"Add Block",removeBlock:"Delete Block",remove:"Delete",cancel:"Cancel",maxBlock:"Maximum 5 blocks",addInfo:"To add another block, first delete the previous blocks",warning:"After you press Delete, the block with this city will be deleted",temperature:"Temperature"},uk:{home:"Головна",homeTitle:"Введіть місто і дізнайтеся погоду",aboutTitle:"Ви не обрали, не одне місто",placeholderInput:"Введіть місто",day:"День",date:"Дата",feelsLike:"Відчувається як",tempMin:"Мін. температура",tempMax:"Макс. температура",pressure:"Тиск",humidity:"Вологість",cloudiness:"Хмарність",description:"Опис",wind:"Вітер",hpa:"гПа",ms:"м/с",day:"День",monday:"Понеділок",tuesday:"Вівторок",wednesday:"Середа",thursday:"Четвер",friday:"П’ятниця",saturday:"Субота",sunday:"Неділя",weatherDescriptions:{"clear sky":"ясне небо","few clouds":"мало хмар","scattered clouds":"розсіяні хмари","overcast clouds":"похмурі хмари","light rain":"дрібний дощ","broken clouds":"зламані хмари","shower rain":"зливовий дощ",rain:"дощ",thunderstorm:"гроза",snow:"сніг",mist:"туман"},week:"Тиждень",selected:"Обране",addWarningCity:"Місто вже додане до обраних міст",addCity:"Місто успішно додано до обраних",close:"Закрити",ok:"Добре",addBlock:"Додати блок",removeBlock:"Видалити Блок",remove:"Видалити",cancel:"Відмінити",maxBlock:"Максимум 5 блоків",addInfo:" Щоб додавти ще один блок спочатку видаліть попередні блоки",warning:" Після того як ви натиснете Видалити, блок з цим містом буде видалено"},temperature:"Температура"},E=(0,x.hU)({locale:localStorage.getItem("languages")||"en",fallbackLocale:"en",messages:M});var A=E;(0,n.Ef)(m).use($).use(L).use($).use(A).mount("#app")},3801:function(e,t,a){a.d(t,{lN:function(){return u},zM:function(){return d},JM:function(){return s},a0:function(){return l},vM:function(){return c}});a(1454);var n=a(4373);const o="f37891486a87c66b3df368d3ce6f63cb",r="6cb42f2157244f",i="https://api.openweathermap.org/data/2.5";async function s(e){try{const t=await n.A.get(`${i}/find`,{params:{q:e,type:"like",appid:o}});return t.data.list.map((e=>({name:e.name,country:e.sys.country,fullName:`${e.name}, ${e.sys.country}`,city:e})))}catch(t){return console.error("Error getting city hints:",t),[]}}async function l(e){try{const t=await n.A.get(`${i}/forecast`,{params:{q:e,appid:o}});return t.data}catch(t){console.error("Error getting city hints:",t)}}async function c(){try{const e=await n.A.get(`https://ipinfo.io?token=${r}`),t=e.data,a=t.loc.split(","),o={lat:a[0],lon:a[1],city:t.city};return o}catch(e){return console.error("Error fetching user location",e),null}}async function u(e,t){try{const a=await n.A.get(`${i}/weather`,{params:{lat:e,lon:t,appid:o}}),r={name:a.data.name,country:a.data.sys.country,fullName:`${a.data.name}, ${a.data.country}`,city:a.data};return r}catch(a){return console.error("Error getting city hints:",a),[]}}async function d(e,t){try{const a=await n.A.get(`${i}/forecast`,{params:{lat:e,lon:t,appid:o}});return a.data}catch(a){return console.error("Error getting city hints:",a),[]}}}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,r){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],r=e[u][2];for(var s=!0,l=0;l<n.length;l++)(!1&r||i>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(s=!1,r<i&&(i=r));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,o,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+e+".1a046eb7.js"}}(),function(){a.miniCssF=function(e){return"css/"+e+".48e3c3e8.css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="weather:";a.l=function(n,o,r,i){if(e[n])e[n].push(o);else{var s,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+r){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+r),s.src=n),e[n]=[o];var h=function(t,a){s.onerror=s.onload=null,clearTimeout(y);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(a)})),t)return t(a)},y=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/weather/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",a.nc&&(i.nonce=a.nc);var s=function(a){if(i.onerror=i.onload=null,"load"===a.type)o();else{var n=a&&a.type,s=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+s+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=n,l.request=s,i.parentNode&&i.parentNode.removeChild(i),r(l)}};return i.onerror=i.onload=s,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var o=a[n],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],r=o.getAttribute("data-href");if(r===e||r===t)return o}},n=function(n){return new Promise((function(o,r){var i=a.miniCssF(n),s=a.p+i;if(t(i,s))return o();e(n,s,null,o,r)}))},o={524:0};a.f.miniCss=function(e,t){var a={122:1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=n(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};a.f.j=function(t,n){var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(a,n){o=e[t]=[a,n]}));n.push(o[2]=r);var i=a.p+a.u(t),s=new Error,l=function(n){if(a.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,o[1](s)}};a.l(i,l,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,i=n[0],s=n[1],l=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(l)var u=l(a)}for(t&&t(n);c<i.length;c++)r=i[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},n=self["webpackChunkweather"]=self["webpackChunkweather"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(3908)}));n=a.O(n)})();
//# sourceMappingURL=app.05acf135.js.map