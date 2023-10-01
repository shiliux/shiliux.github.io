import{_ as e,k as s,r as t,s as i,n as a,E as l,u as d,v as n,x as r,y as o,o as u,c as h,w as c,i as g,b as f,a as m,f as L,d as y,e as p,F as b,t as v,g as x,I as C,h as M}from"./index-6d9172db.js";const k=e({name:"index.vue",data:()=>({drawerChatBox:!1,currentChatMessage:{},drawer:!1,addList:null,activeTab:null,socket:null,message:null,MyPhone:null,MyUid:null,MyIcon:null,phone:null,sendMsg:{uid:null,message:null},friendList:[]}),methods:{getFriendList(){const e=JSON.parse(s(`${this.MyUid}myFriendList`))||[];t({url:"/api/web/user-friend/getUserFriendList",success:s=>{if(200===s.data.code){const t=s.data.data;let a=0;for(let s=0;s<t.length;s++){for(let i=0;i<e.length;i++)t[s].id==e[i].id&&(a=1);1!=a&&e.push(t[s]),a=0}this.friendList=e,i(`${this.MyUid}myFriendList`,JSON.stringify(e))}}})},navToPage(e){a({url:"/pages/campus/user/user?uid="+e})},tranCurrentChat(e){this.drawerChatBox=!0,this.currentChatMessage=this.friendList.find((s=>s.tuid===e)),this.$nextTick((()=>{null!=this.$refs.box&&(this.$refs.box.scrollTop=this.$refs.box.scrollHeight)}));for(var s=0;s<this.friendList.length;s++)this.friendList[s].tuid==e&&(this.friendList[s].mesCount=0,i(`${this.MyUid}myFriendList`,JSON.stringify(this.friendList)))},sendMessage(e){if(""!=this.message){this.uid=e,this.sendMsg={tid:this.uid,message:this.message},d(JSON.stringify(this.sendMsg)),console.log("length："+this.friendList.length);for(var s=0;s<this.friendList.length;s++)if(console.log("uid："+this.friendList[s].uid),this.friendList[s].tuid===e){null==this.friendList[s].messages?this.friendList[s].messages=[["ME",this.message]]:this.friendList[s].messages.push(["ME",this.message]);break}i(`${this.MyUid}myFriendList`,JSON.stringify(this.friendList)),this.$nextTick((()=>{null!=this.$refs.box&&(this.$refs.box.scrollTop=this.$refs.box.scrollHeight)})),this.message=""}else l.error("请输入消息")},getAddList(){this.drawer=!0,t({url:"/api/web/user-friend/getAddList",success:e=>{200===e.data.code&&(this.addList=e.data.data)}})},agree(e){t({url:`/api/web/user-friend/agree/${e}`,success:e=>{200===e.data.code&&(this.$message.success(e.data.message),this.getFriendList())}})}},mounted(){const e=JSON.parse(s(`${this.MyUid}myFriendList`))||[];this.friendList=e,0==this.friendList.length&&this.getFriendList(),n((e=>{console.log("收到服务器内容："+e.data);const t=e.data,[a,l]=t.split(","),d=JSON.parse(s("userDto")),n=JSON.parse(s(`${d.uid}myFriendList`));console.log(n),console.log(this.friendList),console.log(this.friendList);for(let s=0;s<this.friendList.length;s++)if(console.log("uid："+this.friendList[s].uid),this.friendList[s].tuid===a){null==this.friendList[s].messages?this.friendList[s].messages=[["HE",l]]:this.friendList[s].messages.push(["HE",l]),null==this.friendList[s].mesCount?this.friendList[s].mesCount=1:this.friendList[s].mesCount++;break}console.log(n),console.log(this.friendList),this.friendList=this.friendList,i(`${this.MyUid}myFriendList`,JSON.stringify(this.friendList)),this.$nextTick((()=>{null!=this.$refs.box&&(this.$refs.box.scrollTop=this.$refs.box.scrollHeight)}))}))},onLoad(){this.activeTab=s("chatWithTuid");const e=JSON.parse(s("userDto"));this.MyPhone=e.phone,this.MyUid=e.uid,this.MyIcon=e.icon,r()},beforeDestroy(){console.log("beforeDestroy: 实例销毁之前"),o({code:1e3,reason:"用户退出",success(e){console.log("WebSocket已关闭！")}})},destroyed(){console.log("destroyed: 实例销毁完成")}},[["render",function(e,s,t,i,a,l){const d=x("el-button"),n=x("el-card"),r=x("el-drawer"),o=x("el-avatar"),k=x("van-col"),_=x("van-cell"),$=x("van-row"),w=x("van-cell-group"),F=C,U=g;return u(),h(U,null,{default:c((()=>[f("div",{style:{"margin-bottom":"3%"}},[m(d,{type:"primary",onClick:s[0]||(s[0]=e=>l.getAddList()),id:"getAddList"},{default:c((()=>[L("新朋友")])),_:1}),m(d,{type:"primary",onClick:s[1]||(s[1]=e=>l.getFriendList()),id:"getAddList"},{default:c((()=>[L("刷新")])),_:1}),m(r,{modelValue:a.drawer,"onUpdate:modelValue":s[2]||(s[2]=e=>a.drawer=e),title:"新朋友",size:"70%"},{default:c((()=>[(u(!0),y(b,null,p(a.addList,(e=>(u(),y("div",{key:e.id},[m(n,null,{default:c((()=>[f("div",{style:{padding:"14px"}},[f("div",{class:"bottom"},[f("time",{class:"time"},"uid："+v(e.tuid),1),m(d,{type:"primary",class:"button",onClick:s=>l.agree(e.tuid)},{default:c((()=>[L("同意")])),_:2},1032,["onClick"]),M(' <el-button class="button">拒绝</el-button> ')])])])),_:2},1024)])))),128))])),_:1},8,["modelValue"])]),(u(!0),y(b,null,p(a.friendList,(e=>(u(),h(w,null,{default:c((()=>[m($,{style:{"margin-top":"3%"},onClick:s=>l.tranCurrentChat(e.tuid)},{default:c((()=>[m(k,{span:"4"},{default:c((()=>[m(o,{size:60,style:{"margin-top":"5%"}},{default:c((()=>[f("img",{src:e.ticon,alt:""},null,8,["src"])])),_:2},1024)])),_:2},1024),m(k,{span:"17"},{default:c((()=>[f("div",null,[m(_,{title:e.tnickname,label:"描述信息"},null,8,["title"])])])),_:2},1024),m(k,{span:"2"},{default:c((()=>[null!=e.mesCount&&e.mesCount>0?(u(),y("div",{key:0,style:{color:"red"}},v(e.mesCount),1)):M("v-if",!0)])),_:2},1024)])),_:2},1032,["onClick"])])),_:2},1024)))),256)),m(r,{modelValue:a.drawerChatBox,"onUpdate:modelValue":s[6]||(s[6]=e=>a.drawerChatBox=e),size:"100%"},{header:c((()=>[f("h4",null,v(a.currentChatMessage.tnickname),1),m(o,{size:30,onClick:s[3]||(s[3]=e=>l.navToPage(a.currentChatMessage.tuid))},{default:c((()=>[f("img",{src:a.currentChatMessage.ticon,alt:""},null,8,["src"])])),_:1})])),default:c((()=>[f("div",{style:{"overflow-y":"auto",height:"calc(100vh - 60px - 120px)"},ref:"box"},[f("div",{id:"box"},[(u(!0),y(b,null,p(a.currentChatMessage.messages,(e=>(u(),y("div",{class:"box"},["ME"===e[0]?(u(),y("div",{key:0,class:"chatBoxMessageRight"},[f("div",{style:{"background-color":"#5ac95a","border-radius":"20%",padding:"10px","margin-right":"10%"}},v(e[1]),1),f("div",null,[m(o,{size:30},{default:c((()=>[f("img",{src:a.MyIcon,alt:""},null,8,["src"])])),_:1})])])):M("v-if",!0),"HE"===e[0]?(u(),y("div",{key:1,class:"chatBoxMessageLeft"},[f("div",null,[m(o,{size:30},{default:c((()=>[f("img",{src:a.currentChatMessage.ticon,alt:""},null,8,["src"])])),_:1})]),f("div",{style:{"background-color":"#eee","border-radius":"20%",padding:"10px","margin-left":"3%"}},v(e[1]),1)])):M("v-if",!0)])))),256))])],512)])),footer:c((()=>[m($,null,{default:c((()=>[m(k,{span:"18"},{default:c((()=>[f("div",null,[m(F,{type:"text",modelValue:a.message,"onUpdate:modelValue":s[4]||(s[4]=e=>a.message=e),placeholder:"输入内容..."},null,8,["modelValue"])])])),_:1}),m(k,{span:"6"},{default:c((()=>[m(d,{type:"primary",onClick:s[5]||(s[5]=e=>l.sendMessage(a.currentChatMessage.tuid))},{default:c((()=>[L("发送")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}],["__scopeId","data-v-1f731df1"]]);export{k as default};
