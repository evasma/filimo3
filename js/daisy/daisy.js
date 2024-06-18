let daisy=async()=>{
try {
   let rem=""
   let res=await axios.get("https://evasma.github.io/dbjson/db.json") 
   if(res.status===200 && res.request.readyState===4){
    rem=res.data.daisy.map((elem)=>{
        return`
        
          <h2 class="text-[#fff] font-['iransans'] font-[700]">${elem.text1} </h2>
        <span class="text-[12px] text-gray-400 font-['iransans'] font-[100]" >${elem.text2}</span>

      <div class=" w-[100%] ">
      ${elem.table.map((item)=>{

     return`
      <div class="collapse collapse-plus bg-base-200 text-right border-[1px] border-solid border-white w-[80%] mx-auto mb-[10px]">
          <input type="radio" name="my-accordion-3" checked="checked" /> 
          <div class="collapse-title text-xl font-medium   ">
            <span class="font-[500] font-['iransans'] text-[#f4843f] text-[13px]">${item.title} </span>
          </div>
          <div class="collapse-content"> 
            <p class="font-[400] font-['iransans'] text-[#b6b6b6] text-[11px] leading-[28px]">${item.span}</p>
          </div>
        </div>
     
     `

      }).join("")}

      </div>
        
        `
    })
   }
   document.querySelector('.daisy').insertAdjacentHTML("afterbegin",rem.join(""))
} catch (error) {
    console.log(error.message);
}
}
export default daisy