import{_ as t,n as e,r as s,o as a,d as i,a as o,w as l,g as n,F as c,e as r,c as d,b as m,t as g}from"./index-b95b6c97.js";const u=t({name:"login.vue",data:()=>({isLoading:!1,listPage:[],list:{total:0,current:1,size:6,pageList:[{id:1,title:"标题1",content:"内容1",userId:1,createTime:"2020-01-01 12:00:00",likeCount:10,userDto:{id:1,uid:1,phone:"12345678910",email:"123456@qq.com",username:"张三",icon:"https://static.runoob.com/images/demo/demo1.jpg"},postImageList:[{id:1,postId:1,fileId:1,image:"https://static.runoob.com/images/demo/demo1.jpg",createTime:"2020-01-01 12:00:00"}]}]}}),created(){this.getList()},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)},methods:{getDetails(t){console.log("getDetails"),e({url:"/pages/campus/post/details?id="+t})},getList(){s({url:"/api/web/post/page",method:"POST",data:{current:this.list.current,size:this.list.size},success:t=>{200===t.data.code&&(this.listPage=this.listPage.concat(t.data.data.pageList),this.list=t.data.data)}})},handleScroll(){const t=document.documentElement.scrollHeight,e=document.documentElement.scrollTop,s=document.documentElement.clientHeight;!this.isLoading&&e+s>=t&&(this.isLoading=!0,setTimeout((()=>{this.getNextPage()}),100))},getNextPage(){this.list.current<this.list.total&&(this.list.current++,this.getList()),this.isLoading=!1},prevPage(){this.list.current>1&&(this.list.current--,this.getList())},nextPage(){this.list.current<this.list.total&&(this.list.current++,this.getList())},formatDate:t=>new Date(t).toLocaleString()}},[["render",function(t,e,s,u,h,p){const L=n("el-card"),v=n("el-col"),k=n("el-row");return a(),i("div",{class:"container"},[o(k,null,{default:l((()=>[(a(!0),i(c,null,r(h.listPage,((t,e)=>(a(),d(v,{span:12,key:t.id,style:{"margin-bottom":"20px"}},{default:l((()=>[o(L,{class:"redbook-card",onClick:e=>p.getDetails(t.id)},{default:l((()=>[m("div",{class:"image-wrapper"},[t.postImageList.length>0?(a(),i("img",{key:0,src:t.postImageList[0].image,class:"image"},null,8,["src"])):(a(),i("img",{key:1,src:"https://static.runoob.com/images/demo/demo2.jpg",class:"image"}))]),m("div",{class:"card-content-wrapper"},[m("h3",{class:"title"},g(t.title),1),m("div",{class:"author-info"},[null!=t.userDto.icon?(a(),i("img",{key:0,src:t.userDto.icon,class:"author-avatar",alt:"icon"},null,8,["src"])):(a(),i("img",{key:1,src:"https://static.runoob.com/images/demo/demo1.jpg",class:"author-avatar",alt:"icon"})),m("span",{class:"author-name"},g(t.userDto.username),1),m("span",{class:"like-count"},g(t.likeCount),1)])])])),_:2},1032,["onClick"])])),_:2},1024)))),128))])),_:1})])}],["__scopeId","data-v-24298d52"]]);export{u as default};
