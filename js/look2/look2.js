let look2=async()=>{
    try {
       let rem=""
       let res=await axios.get("https://evasma.github.io/dbjson/db.json") 
       if(res.status===200 && res.request.readyState===4){
        rem=res.data.look2.map((elem)=>{
         return`
           <div><img  src=${elem.image1} alt=""></div>
          <div class="flex flex-col items-end gap-y-[50px]">
            <span class="font-[iransans] text-[16px] font-[700] text-[#fff]">  ${elem.text1} </span>
            <span class="font-[100] text-[11px] ml-0 text-[#d8d8d8] font-['iransans'] text-right leading-[25px] sm:ml-[100px]">  
              ${elem.text2}</span>
            <div class="flex flex-col gap-y-[40px] items-end"> 
               ${elem.game.map((item)=>{
                return`
                
                  <div class="flex flex-col gap-y-[20px]">
                <div class="flex flex-row-reverse gap-x-[5px] items-center">
                  <img class="w-[30px]" src=${item.image} alt="">
                  <span class="look_span"> ${item.text} </span>
                </div>
                <span class="look_span2">${item.span}</span>
              </div>
                `
               }).join("")}
            
              
              <button class="flex flex-row items-center bg-[#737373] px-[16px] py-[10px] rounded-[8px] gap-x-[5px] active:scale-[0.9] transition-all duration-300 cursor-pointer">
                <img src=${elem.image2} alt="">
                 <span class="font-['iransans'] text-[12px] font-[500] text-[#fff] ">  ${elem.text3} </span></button>
            </div>
          </div>

         
         
         `
        })
       }
       document.querySelector(".look2").insertAdjacentHTML("afterbegin",rem.join(""))
    } catch (error) {
        console.log(error.message);
    }

}
export default look2