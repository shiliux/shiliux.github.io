import{_ as e,r as t,b as a,o as s,e as i,d as l,a as n,w as o,F as d,h as r,t as p,j as u,g,f as m,k as c,c as h}from"./index-c4b61f01.js";const C=e({name:"details.vue",data:()=>({likeColor:"#000",details:{id:1,title:"标题1",content:"内容1",userId:1,createTime:"2020-01-01 12:00:00",likeCount:10,userDto:{id:1,uid:1,phone:"12345678910",email:"123456@qq.com",username:"张三",icon:""},postImageList:[{id:1,postId:1,fileId:1,image:"",createTime:"2020-01-01 12:00:00"}]},dialogFormVisible:!1,postComment:null,parentComment:null,post:null,isPostLikeDisabled:!1,id:null,postId:null,parentId:null,parentCommentList:[],pageDto:{id:null,total:10,current:1,size:3,pages:0,pageList:null},currentPage:1,pageSize:3,totalValue:0,small:!0,disabled:!1,background:!1,drawer:!1}),onLoad(e){this.details.id=e.id,console.log(this.details.id),this.getDetails(this.details.id),this.checkLike(this.details.id),new URLSearchParams(location.search),this.postId=this.details.id,this.pageDto.id=this.details.id,this.getPageList()},created(){},methods:{checkLike(e){t({url:a+"/web/postLike/check/"+e,success:e=>{1===e.data.data&&(this.likeColor="#f00",this.isPostLikeDisabled=!0)}})},getDetails(e){t({url:a+"/web/post/"+e,success:e=>{200===e.data.code&&(this.details=e.data.data,this.post=e.data.data)}})},addComment(){console.log(0===this.parentCommentList.length),0===this.parentCommentList.length?(console.log("this.addPostComment()"),this.addPostComment()):this.addParentComment()},addParentComment(){""!=this.postComment?t({url:a+"/web/postController/addCommentWithParent",method:"POST",data:{postId:this.postId,content:this.postComment,parentId:this.parentId},success:e=>{200===e.data.code&&(this.pageDto.pageList.unshift(e.data.data),this.$message.success(e.data.message))}}):ElMessage.error("请输入评论")},addPostComment(){""!=this.postComment?t({url:a+"/web/postController/addCommentWithPost",method:"POST",data:{postId:this.postId,content:this.postComment},success:e=>{200===e.data.code&&(this.pageDto.pageList.unshift(e.data.data),this.$message.success(e.data.message))}}):ElMessage.error("请输入评论")},likePost(e){this.isPostLikeDisabled||t({url:a+"/web/postLike/"+e,success:e=>{200===e.data.code&&(this.post.likeCount=this.post.likeCount+1,this.details.likeCount=this.details.likeCount+1,this.isPostLikeDisabled=!0,this.likeColor="#f00")}})},tranPage(){console.log("tranPage"),this.totalValue=parseInt(this.pageDto.total),this.currentPage=parseInt(this.pageDto.current),this.pageSize=parseInt(this.pageDto.size)},getPageList(){t({url:a+"/web/postController/getTopComment",method:"POST",data:{current:this.currentPage,size:this.pageSize,id:this.postId},success:e=>{200===e.data.code&&(this.pageDto=e.data.data,this.tranPage(),this.$message.success(e.data.message))}})},getPageListWithParent(e,s){0===s&&(this.currentPage=1,this.parentId=e.id,this.parentCommentList.push({total:this.pageDto.total,current:this.pageDto.current,size:this.pageDto.size,pages:this.pageDto.pages,data:e})),t({url:a+"/web/postController/getCommentByParent",method:"POST",data:{current:this.currentPage,size:this.pageSize,id:this.parentId},success:e=>{200===e.data.code&&(this.pageDto=e.data.data,this.tranPage(),this.$message.success(e.data.message))}})},returnParent(e){console.log("returnParent:"+e),this.id=e;const s=this.parentCommentList.length;if(1===s)this.parentCommentList.pop(),this.getPageList();else{let i;for(let t=s-1;t>=0;t--){if(i=this.parentCommentList[t].data.id,console.log(i),e===i){this.id=this.parentCommentList[t-1].data.id,this.parentCommentList.pop();break}this.parentCommentList.pop()}console.log(this.id),this.parentId=this.id,t({url:a+"/web/postController/getCommentByParent",method:"POST",data:{current:this.currentPage,size:this.pageSize,id:this.id},success:e=>{200===e.data.code&&(console.log(e.data.data),this.pageDto=e.data.data,this.tranPage(),this.$message.success(e.data.message))}})}},handleSizeChange(e){console.log("handleSizeChange"),console.log(e),this.pageDto.current=e,this.currentPage=e,0===this.parentCommentList.length?this.getPageList():this.getPageListWithParent(this.pageDto.data,1)},handleCurrentChange(e){console.log("handleCurrentChange"),console.log(e),this.pageDto.current=e,this.currentPage=e,0===this.parentCommentList.length?this.getPageList():this.getPageListWithParent(this.pageDto.data,1)},closeDrawer(){this.parentCommentList=[]}}},[["render",function(e,t,a,C,k,P){const y=c,b=r("van-icon"),f=r("el-card"),L=r("el-input"),v=r("el-button"),D=r("el-col"),z=r("el-pagination"),S=r("el-row"),_=r("el-drawer");return s(),i(d,null,[l("div",{class:"container"},[n(f,{class:"redbook-card",onClick:t[1]||(t[1]=e=>P.getDetails(k.details.id))},{default:o((()=>[l("div",{class:"card-content-wrapper"},[l("div",{class:"author-info"},[n(y,{url:"../user/user?uid="+k.details.userDto.uid,"open-type":"navigate"},{default:o((()=>[null!=k.details.userDto.icon?(s(),i("img",{key:0,src:k.details.userDto.icon,class:"author-avatar",alt:"icon"},null,8,["src"])):(s(),i("img",{key:1,src:"https://static.runoob.com/images/demo/demo1.jpg",class:"author-avatar",alt:"icon"})),l("span",{class:"author-name"},p(k.details.userDto.username),1)])),_:1},8,["url"]),u('          <el-button type="primary" style="margin-left: 16px" @click="drawer = true">评论</el-button>'),l("span",{class:"like-count",onClick:t[0]||(t[0]=e=>P.likePost(k.details.id))},[g(p(k.details.likeCount)+" ",1),n(b,{name:"like",color:k.likeColor,size:"20px"},null,8,["color"])])]),l("h3",{class:"title"},p(k.details.title),1),l("div",null,[l("span",{class:"author-desc"},p(k.details.content),1)])]),k.details.postImageList.length>0?(s(!0),i(d,{key:0},m(k.details.postImageList,((e,t)=>(s(),i("div",null,[l("img",{src:e.image,class:"image"},null,8,["src"])])))),256)):u("v-if",!0)])),_:1})]),l("div",null,[n(S,null,{default:o((()=>[n(D,{style:{"margin-bottom":"2%"}},{default:o((()=>[l("div",{style:{display:"flex","justify-content":"center","align-items":"center"}},[u(" 不加评论二字，评论框显示较慢"),l("div",null,"评论："),l("div",null,[n(L,{modelValue:k.postComment,"onUpdate:modelValue":t[2]||(t[2]=e=>k.postComment=e),placeholder:"输入评论!"},null,8,["modelValue"])]),l("div",null,[n(v,{type:"primary",onClick:t[3]||(t[3]=e=>P.addComment())},{default:o((()=>[g("发送")])),_:1})]),g("· ")])])),_:1}),u(" 父评论 "),k.parentCommentList.length>0?(s(!0),i(d,{key:0},m(k.parentCommentList,((e,t)=>(s(),h(D,{span:22,key:e.id,style:{margin:"2%"}},{default:o((()=>[n(f,{"body-style":{padding:"0px"}},{default:o((()=>[l("div",{style:{padding:"14px"}},[l("span",null,p(e.data.userDto.username),1),l("div",{class:"bottom"},[l("time",{class:"time"},p(e.data.content),1),n(v,{size:"small",type:"primary",style:{"margin-left":"16px"},onClick:t=>P.returnParent(e.data.id)},{default:o((()=>[g("返回")])),_:2},1032,["onClick"])])])])),_:2},1024)])),_:2},1024)))),128)):u("v-if",!0),u(" 分页 "),l("div",{class:"demo-pagination-block"},[n(z,{"current-page":k.currentPage,"onUpdate:currentPage":t[4]||(t[4]=e=>k.currentPage=e),"page-size":k.pageSize,"onUpdate:pageSize":t[5]||(t[5]=e=>k.pageSize=e),total:k.totalValue,"onUpdate:total":t[6]||(t[6]=e=>k.totalValue=e),small:k.small,disabled:k.disabled,background:k.background,layout:"prev, pager, next, jumper",onSizeChange:P.handleSizeChange,onCurrentChange:P.handleCurrentChange},null,8,["current-page","page-size","total","small","disabled","background","onSizeChange","onCurrentChange"])]),u(" 评论列表 "),(s(!0),i(d,null,m(k.pageDto.pageList,((e,t)=>(s(),h(D,{span:22,key:e.id,style:{margin:"2%"}},{default:o((()=>[n(f,{"body-style":{padding:"0px"}},{default:o((()=>[l("div",{style:{padding:"14px"}},[l("span",null,p(e.userDto.username),1),l("div",{class:"bottom"},[l("time",{class:"time"},p(e.content),1),n(v,{size:"small",type:"primary",style:{"margin-left":"16px"},onClick:t=>P.getPageListWithParent(e,0)},{default:o((()=>[g("展开")])),_:2},1032,["onClick"])])])])),_:2},1024)])),_:2},1024)))),128))])),_:1})]),l("div",null,[n(_,{modelValue:k.drawer,"onUpdate:modelValue":t[12]||(t[12]=e=>k.drawer=e),title:"评论区",direction:"btt",size:"70%"},{default:o((()=>[l("div",null,[n(S,null,{default:o((()=>[n(D,{style:{"margin-bottom":"2%"}},{default:o((()=>[l("div",{style:{display:"flex","justify-content":"center","align-items":"center"}},[u(" 不加评论二字，评论框显示较慢"),l("div",null,"评论："),l("div",null,[n(L,{modelValue:k.postComment,"onUpdate:modelValue":t[7]||(t[7]=e=>k.postComment=e),placeholder:"输入评论!"},null,8,["modelValue"])]),l("div",null,[n(v,{type:"primary",onClick:t[8]||(t[8]=e=>P.addComment())},{default:o((()=>[g("发送")])),_:1})]),g("· ")])])),_:1}),u(" 父评论 "),k.parentCommentList.length>0?(s(!0),i(d,{key:0},m(k.parentCommentList,((e,t)=>(s(),h(D,{span:22,key:e.id,style:{margin:"2%"}},{default:o((()=>[n(f,{"body-style":{padding:"0px"}},{default:o((()=>[l("div",{style:{padding:"14px"}},[l("span",null,p(e.data.userDto.username),1),l("div",{class:"bottom"},[l("time",{class:"time"},p(e.data.content),1),n(v,{size:"small",type:"primary",style:{"margin-left":"16px"},onClick:t=>P.returnParent(e.data.id)},{default:o((()=>[g("返回")])),_:2},1032,["onClick"])])])])),_:2},1024)])),_:2},1024)))),128)):u("v-if",!0),u(" 分页 "),l("div",{class:"demo-pagination-block"},[n(z,{"current-page":k.currentPage,"onUpdate:currentPage":t[9]||(t[9]=e=>k.currentPage=e),"page-size":k.pageSize,"onUpdate:pageSize":t[10]||(t[10]=e=>k.pageSize=e),total:k.totalValue,"onUpdate:total":t[11]||(t[11]=e=>k.totalValue=e),small:k.small,disabled:k.disabled,background:k.background,layout:"prev, pager, next, jumper",onSizeChange:P.handleSizeChange,onCurrentChange:P.handleCurrentChange},null,8,["current-page","page-size","total","small","disabled","background","onSizeChange","onCurrentChange"])]),u(" 评论列表 "),(s(!0),i(d,null,m(k.pageDto.pageList,((e,t)=>(s(),h(D,{span:22,key:e.id,style:{margin:"2%"}},{default:o((()=>[n(f,{"body-style":{padding:"0px"}},{default:o((()=>[l("div",{style:{padding:"14px"}},[l("span",null,p(e.userDto.username),1),l("div",{class:"bottom"},[l("time",{class:"time"},p(e.content),1),n(v,{size:"small",type:"primary",style:{"margin-left":"16px"},onClick:t=>P.getPageListWithParent(e,0)},{default:o((()=>[g("展开")])),_:2},1032,["onClick"])])])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])])),_:1},8,["modelValue"])])],64)}],["__scopeId","data-v-4808c095"]]);export{C as default};
