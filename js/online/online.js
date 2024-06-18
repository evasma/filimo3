let online=async()=>{
try {
   let rem=""
   let res=await axios.get("https://evasma.github.io/dbjson/db.json") 
   if(res.status===200 && res.request.readyState===4){
   rem=res.data.online.map((elem)=>{
   
    return`

          <span class="font-['iransans'] font-[700] text-[#fff] text-[17px] "> ${elem.text} </span>
      
          <div class="flex max-[880px]:flex-col max-[880px]:items-center  max-[880px]:pr-[10px] max-[880px]:gap-y-[10px] min-[880px]:flex-row-reverse min-[880px]:justify-around min-[880px]:pr-0 w-[100%]">

          ${elem.tik.map((item)=>{
        
            return`
            <div class="flex flex-row-reverse justify-end gap-x-[5px] items-center"><img class="bg-green-950 p-[5px] rounded-[50%] w-[25px]"   src=${item.image} alt="">
              <span class="font-['iransans'] text-[13px] text-[#8d8d8d] font-[100]">  ${item.text}</span></div>
            
            `
          }).join("")}

          </div>
        
     
        <div class="max-[880px]:flex max-[880px]:flex-col min-[880px]:grid min-[880px]:grid-cols-2 min-[880px]:grid-rows-[repeat(3,300px)]         h-[600px] overflow-y-scroll    min-[880px]:justify-between w-[100%] gap-3">

        ${elem.table.map((x)=>{
         
            return`
             <div class="flex flex-row-reverse  gap-x-[10px] p-[30px] border-[1px] border-solid border-[#fff] rounded-[8px]  bg-transparent">
            <img class="rounded-[8px]" src=${x.image1} alt="">
          
            <div class="flex flex-col items-end gap-y-[40px] w-[100%] bg-transparent">
              
            <div class="flex flex-row-reverse w-[100%] justify-between items-center ">
                <span class="font-[700] font-['iransans'] text-[#fff] text-[13px]">${x.text1}</span>
                <div class="flex flex-row-reverse items-center p-[10px] bg-[#151515] rounded-[15px]"><img class="w-[15px] h-[15px]"           src=${x.image2} alt=""> <span class="font-[100] font-['iransans'] text-[#fff] text-[10px]"> ${x.text2}</span></div>
                
              </div>

              <span class="font-[100] font-['iransans'] text-[12px] text-[#8d8d8d]">${x.text3}</span>
             
              <div class="flex flex-row-reverse gap-x-[15px] items-center">
                <span class="font-[iransans] text-[#fff] text-[11px] bg-[#2b2b2b] rounded-[8px] py-[3px] px-[8px]" >${x.text4} </span>
                <span class="font-[100] font-['iransans'] text-[11px] text-[#fff] bg-[#2b2b2b] rounded-[8px] py-[3px] px-[8px]"> ${x.text5}</span>
               </div>

               <button class="font-[400] font-['iransans'] text-[11px] text-[#fff] bg-transparent rounded-[8px] p-[10px] border-[1px] border-solid border-[#fff] ">${x.text6} </button>
            </div>
            </div>
            
            `

        }).join("")}
           
          

        </div>
    
    `
   })
   }
   document.querySelector(".online").insertAdjacentHTML("afterbegin",rem.join(""))
} catch (error) {
   console.log(error.message); 
}
}
export default online