import{_ as e,l as t,v as l,E as s,r as a,b as d,o as n,c as i,w as o,i as u,d as r,a as c,e as h,f,F as p,h as m,t as y,j as b}from"./index-81b0b15b.js";const g=e({name:"index.vue",data:()=>({headers:{Authorization:t("token")},uploadData:{fileUseId:null},uploadUrl:"https://"+l+"/web/user/import",file:null,List:[]}),mounted(){this.getUserList()},methods:{handleSuccess(e,t){s.success(e.data.message)},getUserList(){a({url:d+"/web/user/list",method:"GET",success:e=>{200===e.data.code?this.List=e.data.data:s.error(e.data.message)}})}}},[["render",function(e,t,l,s,a,d){const g=m("el-upload"),L=u;return n(),i(L,null,{default:o((()=>[r("div",{style:{display:"flex","justify-content":"flex-end","align-items":"center"}},[r("div",{style:{"padding-top":"3%",width:"100%",display:"flex","justify-content":"center","align-items":"center","background-color":"#1b2864"}},[c(g,{"file-list":e.fileList,"onUpdate:fileList":t[0]||(t[0]=t=>e.fileList=t),action:a.uploadUrl,headers:a.headers,data:a.uploadData,"on-success":d.handleSuccess},{default:o((()=>[r("span",{style:{color:"white"}},"批量注册用户")])),_:1},8,["file-list","action","headers","data","on-success"])])]),r("div",{class:"table-container"},[r("table",{class:"table"},[r("thead",null,[r("tr",null,[r("th",null,"uid"),r("th",null,"username"),r("th",null,"phone"),r("th",null,"email"),r("th",null,"role")])]),r("tbody",null,[(n(!0),h(p,null,f(a.List,((e,t)=>(n(),h("tr",{key:t},[r("td",null,y(e.uid),1),r("td",null,y(e.username),1),r("td",null,y(e.phone),1),r("td",null,y(e.email),1),1==e.roleId?(n(),h("td",{key:0,style:{color:"red"}},"超级管理员")):2==e.roleId?(n(),h("td",{key:1,style:{color:"blue"}},"管理员")):3==e.roleId?(n(),h("td",{key:2},"用户")):b("v-if",!0)])))),128))])])])])),_:1})}],["__scopeId","data-v-d0c0e27a"]]);export{g as default};
