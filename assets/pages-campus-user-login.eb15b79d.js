import{_ as e,E as a,r as s,b as r,s as t,q as o,n as d,o as l,e as n,d as i,a as u,w as m,F as f,h as p,i as c,g,j as h}from"./index-81b0b15b.js";import{_ as w}from"./wx.22dfd836.js";const b=e({name:"login.vue",data:()=>({drawerWx:!1,form:{phone:"",password:""}}),methods:{formSubmit(){""!==this.form.phone&&""!==this.form.password?s({url:r+"/auth/login/phone/password/getUserDto",method:"POST",data:this.form,success:e=>{200===e.data.code?(t("token",e.data.data.token),t("userDto",JSON.stringify(e.data.data.userDto)),this.getFriendList(e.data.data.userDto.uid),a({message:e.data.message,type:"success"}),o({url:"/pages/campus/index/index"}).then((e=>{}))):a.error(e.data.message)},fail:()=>{}}):a.error("请输入手机号密码")},getFriendList(e){s({url:r+"/web/user-friend/getUserFriendList",success:a=>{200===a.data.code&&t(e+"myFriendList",JSON.stringify(a.data.data))}})},goTo(e){d({url:e})}}},[["render",function(e,a,s,r,t,o){const d=p("el-drawer"),b=p("van-field"),y=p("van-button"),_=p("van-form"),x=c;return l(),n(f,null,[i("div",null,[i("div",{onClick:a[0]||(a[0]=e=>t.drawerWx=!0),style:{color:"red","padding-top":"5%","padding-left":"5%"}},"有问题联系我")]),u(d,{modelValue:t.drawerWx,"onUpdate:modelValue":a[1]||(a[1]=e=>t.drawerWx=e),size:"100%"},{default:m((()=>[i("img",{src:w,alt:"",style:{width:"100%"}})])),_:1},8,["modelValue"]),u(x,{class:"container"},{default:m((()=>[u(x,null,{default:m((()=>[u(_,{ref:"form","lazy-validation":""},{default:m((()=>[u(b,{modelValue:t.form.phone,"onUpdate:modelValue":a[2]||(a[2]=e=>t.form.phone=e),label:"手机号",placeholder:"请输入手机号",required:"",clearable:""},null,8,["modelValue"]),u(b,{type:"password",modelValue:t.form.password,"onUpdate:modelValue":a[3]||(a[3]=e=>t.form.password=e),label:"密码",placeholder:"请输入密码",required:"",clearable:"","show-password":""},null,8,["modelValue"]),u(y,{type:"primary",onClick:o.formSubmit,class:"submit-button"},{default:m((()=>[g("登录")])),_:1},8,["onClick"]),u(y,{type:"default",class:"register-button",onClick:a[4]||(a[4]=e=>o.goTo("./register"))},{default:m((()=>[g("注册")])),_:1}),h(" 添加注册按钮 ")])),_:1},512)])),_:1})])),_:1})],64)}],["__scopeId","data-v-4a25f194"]]);export{b as default};
