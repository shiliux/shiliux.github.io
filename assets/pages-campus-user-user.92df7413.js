import{_ as s,n as e,r as a,b as t,E as d,s as i,q as r,o as l,c as u,w as c,i as n,a as o,d as m,t as g,j as h,g as p,e as f,f as y,F as b,h as k}from"./index-5ad73b38.js";const v=s({name:"user.vue",data:()=>({List:{},isFriend:!1,user:{}}),onLoad(s){this.user.uid=s.uid,this.getUser(this.user.uid),this.checkFriend(this.user.uid)},methods:{getDetails(s){e({url:"/pages/campus/post/details?id="+s})},getUserList(s){a({url:t+"/web/post/list/"+s,method:"GET",success:s=>{200===s.data.code?this.List=s.data.data:d.error(s.data.message)}})},navigateToChat(s){i("chatWithTuid",s),r({url:"/pages/campus/chat/index"})},addFriend(s){a({url:t+"/web/user-friend/add/"+s,method:"GET",success:s=>{200===s.data.code?d.success(s.data.message):d.error(s.data.message)}})},getUser(s){a({url:t+"/web/user/uid/"+s,method:"GET",success:s=>{200===s.data.code?(this.user=s.data.data,this.getUserList(this.user.id)):d.error(s.data.message)}})},checkFriend(s){a({url:t+"/web/user-friend/check/"+s,method:"GET",success:s=>{200===s.data.code&&(this.isFriend=!0)}})}}},[["render",function(s,e,a,t,d,i){const r=k("el-avatar"),v=k("el-button"),_=k("el-card"),F=n,L=k("el-col"),T=k("el-row");return l(),u(F,null,{default:c((()=>[o(F,null,{default:c((()=>[o(_,{style:{padding:"0"}},{default:c((()=>[m("div",{class:"avatar",style:{margin:"3%"}},[o(r,{size:150,src:d.user.icon},null,8,["src"])]),m("div",{style:{padding:"14px"}},[m("span",null,g("用户名: "+d.user.username),1),m("div",{class:"bottom"},[m("time",{class:"time"},g("UID: "+d.user.uid),1),h(" TODO "),d.isFriend?(l(),u(v,{key:0,type:"primary",onClick:e[0]||(e[0]=s=>i.navigateToChat(d.user.uid))},{default:c((()=>[p("聊天")])),_:1})):(l(),u(v,{key:1,class:"button",onClick:e[1]||(e[1]=s=>i.addFriend(d.user.uid))},{default:c((()=>[p("添加")])),_:1}))])])])),_:1})])),_:1}),o(F,null,{default:c((()=>[o(T,null,{default:c((()=>[(l(!0),f(b,null,y(d.List,((s,e)=>(l(),u(L,{span:22,key:s.id,style:{margin:"2%"}},{default:c((()=>[o(_,{"body-style":{padding:"0px"}},{default:c((()=>[m("div",{onClick:e=>i.getDetails(s.id)},[s.postImageList.length>0?(l(),f("img",{key:0,src:s.postImageList[0].image,class:"image"},null,8,["src"])):(l(),f("img",{key:1,src:"https://static.runoob.com/images/demo/demo2.jpg",class:"image"}))],8,["onClick"]),m("div",{style:{padding:"14px"}},[m("span",null,g(s.title),1),m("div",{class:"bottom"},[m("time",{class:"time"},g(s.content),1)])])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-254ff0b6"]]);export{v as default};
