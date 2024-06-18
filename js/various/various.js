let various=async()=>{
    try {
       let rem=""
       let res=await axios.get("https://evasma.github.io/dbjson/db.json") 
       if(res.status===200 && res.request.readyState===4){
        rem=res.data.various.map((elem)=>{
            return`
             <img src=${elem.image} alt="">
        <div class="flex flex-col items-end gap-y-[20px] w-fit "> 
          <span class="font-['iransans'] text-[#fff] font-[400] text-[20px] text-right">${elem.text1}</span>
          <span class="font-[100] text-[13px] text-[#fff] font-['iransans']  text-right leading-[28px] opacity-[0.5]">
          ${elem.text2}  </span>
          <div class="flex flex-row items-center gap-x-[10px]">
            <button class="bg-[#D6D6D6] rounded-[8px] active:scale-[0.9] cursor-pointer px-[10px] py-[10px] text-[12px]  text-gray-800 font-['iransans'] font-[700]">  ${elem.text3} </button>
            <button class="bg-[#D6D6D6] rounded-[8px] active:scale-[0.9] cursor-pointer px-[10px] py-[10px] text-[12px] text-gray-800 font-['iransans'] font-[700]"> ${elem.text4}  </button>
          </div>
        </div>
            `
        })
       }
       document.querySelector(".various").insertAdjacentHTML("afterbegin",rem.join(""))
    } catch (error) {
      console.log(error.message);  
    }

}
export default various