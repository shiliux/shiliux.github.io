import{_ as e,k as a,l,r as s,o,d as t,b as d,a as i,w as r,g as n,F as u,e as c,f as m,c as f}from"./index-b95b6c97.js";import{P as p}from"./sort.25787466.js";const h=e({name:"details.vue",data:()=>({sorts:p,dialogVisible:!1,goodsSortList:[],FileUserList:[],form:{postImages:[]},fileList:[],headers:{Authorization:a("token")},uploadData:{fileUseId:null},uploadUrl:`https://${l}/web/file/upload`,dialogImageUrl:""}),onLoad(e){},created(){this.getFileUserList()},methods:{saveGoods(){s({url:"/api/web/post/save",method:"POST",data:this.form,success:e=>{200===e.data.code&&this.$message.success(e.data.message)}})},handleSuccess(e,a){this.form.postImages.push(e.data.id)},handlePictureCardPreview(e){if(e.raw){const a=URL.createObjectURL(e.raw);this.dialogImageUrl=a,this.dialogVisible=!0}},handleRemove(e,a){const l=e.response.data.id,s=this.form.postImages.indexOf(l);s>-1&&this.form.postImages.splice(s,1)},getFileUserList(){s({url:"/api/web/fileUser/getIdByName/论坛",success:e=>{200===e.data.code&&(this.uploadData.fileUseId=e.data.data.id)}})}}},[["render",function(e,a,l,s,p,h){const g=n("el-input"),v=n("el-option"),w=n("el-select"),U=n("el-text"),V=n("el-icon"),b=n("el-upload"),I=n("el-dialog"),L=n("el-button");return o(),t("div",{class:"container"},[d("div",null,[i(g,{placeholder:"标题",modelValue:p.form.title,"onUpdate:modelValue":a[0]||(a[0]=e=>p.form.title=e)},null,8,["modelValue"]),i(g,{placeholder:"内容",modelValue:p.form.content,"onUpdate:modelValue":a[1]||(a[1]=e=>p.form.content=e)},null,8,["modelValue"]),i(w,{modelValue:p.form.sort,"onUpdate:modelValue":a[2]||(a[2]=e=>p.form.sort=e),placeholder:"分类",style:{width:"100%"}},{default:r((()=>[(o(!0),t(u,null,c(p.sorts,(e=>(o(),f(v,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),d("div",null,[i(U,{class:"mx-1",type:"info"},{default:r((()=>[m("注意：图片显示出来才算上传成功！")])),_:1})]),i(b,{"file-list":p.fileList,"onUpdate:fileList":a[3]||(a[3]=e=>p.fileList=e),action:p.uploadUrl,headers:p.headers,data:p.uploadData,"list-type":"picture-card","on-preview":h.handlePictureCardPreview,"on-remove":h.handleRemove,"on-success":h.handleSuccess},{default:r((()=>[i(V,null,{default:r((()=>[(o(),t("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","data-v-ea893728":""},[d("path",{fill:"currentColor",d:"M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"})]))])),_:1})])),_:1},8,["file-list","action","headers","data","on-preview","on-remove","on-success"]),i(I,{modelValue:p.dialogVisible,"onUpdate:modelValue":a[4]||(a[4]=e=>p.dialogVisible=e)},{default:r((()=>[d("img",{src:p.dialogImageUrl,alt:"Preview Image",style:{width:"100%"}},null,8,["src"])])),_:1},8,["modelValue"]),i(L,{onClick:h.saveGoods,style:{width:"100%","background-color":"rgb(0, 8, 255)",color:"#fff"}},{default:r((()=>[m("添加")])),_:1},8,["onClick"])])])}],["__scopeId","data-v-a32bf9c5"]]);export{h as default};