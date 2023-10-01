import{_ as e,k as a,l,r as o,o as t,d as s,a as d,w as i,g as u,b as r,F as n,e as m,f as c,c as f}from"./index-686e78a4.js";import{P as p}from"./sort.25787466.js";const h=e({name:"details.vue",data:()=>({active:0,postSorts:p,dialogVisible:!1,goodsSortList:[],status:[{value:0,name:"出售中"},{value:1,name:"停止出售"}],FileUserList:[],form:{postImages:[],goodsImages:[]},fileList:[],headers:{Authorization:a("token")},uploadData:{fileUseId:null},uploadDataGoods:{fileUseId:null},uploadUrl:`https://${l}/web/file/upload`,dialogImageUrl:""}),onLoad(e){},created(){this.getFileUserList(),this.getGoodsSortList()},methods:{getGoodsSortList(){o({url:"/api/web/goodsSort/list",method:"GET",success:e=>{200===e.data.code&&(this.goodsSortList=e.data.data)}})},saveGoods(){o({url:"/api/web/goods/save",method:"POST",data:this.form,success:e=>{200===e.data.code&&this.$message.success(e.data.message)}})},savePost(){o({url:"/api/web/post/save",method:"POST",data:this.form,success:e=>{200===e.data.code&&this.$message.success(e.data.message)}})},handleSuccess(e,a){this.form.postImages.push(e.data.id),this.form.goodsImages.push(e.data.id)},handlePictureCardPreview(e){if(e.raw){const a=URL.createObjectURL(e.raw);this.dialogImageUrl=a,this.dialogVisible=!0}},handleRemove(e,a){const l=e.response.data.id,o=this.form.postImages.indexOf(l);o>-1&&this.form.postImages.splice(o,1)},getFileUserList(){o({url:"/api/web/fileUser/getIdByName/论坛",success:e=>{200===e.data.code&&(this.uploadData.fileUseId=e.data.data.id)}}),o({url:"/api/web/fileUser/getIdByName/商品",success:e=>{200===e.data.code&&(this.uploadDataGoods.fileUseId=e.data.data.id)}})}}},[["render",function(e,a,l,o,p,h){const v=u("el-input"),g=u("el-option"),V=u("el-select"),w=u("el-text"),U=u("el-icon"),b=u("el-upload"),I=u("el-dialog"),L=u("el-button"),_=u("van-tab"),S=u("el-input-number"),y=u("van-tabs");return t(),s("div",{class:"container"},[d(y,{modelValue:p.active,"onUpdate:modelValue":a[12]||(a[12]=e=>p.active=e)},{default:i((()=>[d(_,{title:"分享"},{default:i((()=>[r("div",null,[d(v,{placeholder:"标题",modelValue:p.form.title,"onUpdate:modelValue":a[0]||(a[0]=e=>p.form.title=e)},null,8,["modelValue"]),d(v,{placeholder:"内容",modelValue:p.form.content,"onUpdate:modelValue":a[1]||(a[1]=e=>p.form.content=e)},null,8,["modelValue"]),d(V,{modelValue:p.form.sort,"onUpdate:modelValue":a[2]||(a[2]=e=>p.form.sort=e),placeholder:"分类",style:{width:"100%"}},{default:i((()=>[(t(!0),s(n,null,m(p.postSorts,(e=>(t(),f(g,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),r("div",null,[d(w,{class:"mx-1",type:"info"},{default:i((()=>[c("注意：图片显示出来才算上传成功！")])),_:1})]),d(b,{"file-list":p.fileList,"onUpdate:fileList":a[3]||(a[3]=e=>p.fileList=e),action:p.uploadUrl,headers:p.headers,data:p.uploadData,"list-type":"picture-card","on-preview":h.handlePictureCardPreview,"on-remove":h.handleRemove,"on-success":h.handleSuccess},{default:i((()=>[d(U,null,{default:i((()=>[(t(),s("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","data-v-ea893728":""},[r("path",{fill:"currentColor",d:"M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"})]))])),_:1})])),_:1},8,["file-list","action","headers","data","on-preview","on-remove","on-success"]),d(I,{modelValue:p.dialogVisible,"onUpdate:modelValue":a[4]||(a[4]=e=>p.dialogVisible=e)},{default:i((()=>[r("img",{"w-full":"",src:p.dialogImageUrl,alt:"Preview Image",style:{width:"100%"}},null,8,["src"])])),_:1},8,["modelValue"]),d(L,{onClick:h.savePost,style:{width:"100%","background-color":"rgb(0, 8, 255)",color:"#fff"}},{default:i((()=>[c("添加")])),_:1},8,["onClick"])])])),_:1}),d(_,{title:"商品"},{default:i((()=>[r("div",null,[d(v,{placeholder:"名称",modelValue:p.form.name,"onUpdate:modelValue":a[5]||(a[5]=e=>p.form.name=e)},null,8,["modelValue"]),d(v,{placeholder:"描述",modelValue:p.form.description,"onUpdate:modelValue":a[6]||(a[6]=e=>p.form.description=e)},null,8,["modelValue"]),r("div",null,[d(S,{placeholder:"价格",modelValue:p.form.price,"onUpdate:modelValue":a[7]||(a[7]=e=>p.form.price=e),min:0,max:100},null,8,["modelValue"])]),d(V,{modelValue:p.form.status,"onUpdate:modelValue":a[8]||(a[8]=e=>p.form.status=e),placeholder:"状态"},{default:i((()=>[(t(!0),s(n,null,m(p.status,(e=>(t(),f(g,{key:e.value,label:e.name,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),d(V,{modelValue:p.form.goodsSortId,"onUpdate:modelValue":a[9]||(a[9]=e=>p.form.goodsSortId=e),placeholder:"分类"},{default:i((()=>[(t(!0),s(n,null,m(p.goodsSortList,(e=>(t(),f(g,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),d(b,{"file-list":p.fileList,"onUpdate:fileList":a[10]||(a[10]=e=>p.fileList=e),action:p.uploadUrl,headers:p.headers,data:p.uploadDataGoods,"list-type":"picture-card","on-preview":h.handlePictureCardPreview,"on-remove":h.handleRemove,"on-success":h.handleSuccess},{default:i((()=>[d(U,null,{default:i((()=>[(t(),s("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","data-v-ea893728":""},[r("path",{fill:"currentColor",d:"M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"})]))])),_:1})])),_:1},8,["file-list","action","headers","data","on-preview","on-remove","on-success"]),d(I,{modelValue:p.dialogVisible,"onUpdate:modelValue":a[11]||(a[11]=e=>p.dialogVisible=e)},{default:i((()=>[r("img",{"w-full":"",src:p.dialogImageUrl,alt:"Preview Image",style:{width:"100%"}},null,8,["src"])])),_:1},8,["modelValue"]),d(L,{onClick:h.saveGoods,style:{width:"100%","background-color":"rgb(0, 8, 255)",color:"#fff"}},{default:i((()=>[c("添加")])),_:1},8,["onClick"])])])),_:1})])),_:1},8,["modelValue"])])}],["__scopeId","data-v-b0f19173"]]);export{h as default};
