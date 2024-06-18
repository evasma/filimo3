let freexs=async()=>{
  try {
    let rem=""
    let res=await axios.get("https://evasma.github.io/dbjson/db.json")
    if(res.status===200 && res.request.readyState===4){
        rem=res.data.freexs.map((elem)=>{
            return`
    
            <div class="swiper-slide h-[300px] flex flex-col gap-y-[2px] items-end bg-[#151515] relative">
              <img class="w-[100%] rounded-[8px]"  src=${elem.image1} alt="">
              <span class="font-[700] text-[13px] font-['iransans'] text-[#fff] ">${elem.text1}</span>
              <div class="absolute top-[5px] right-[5px] flex flex-row items-center  bg-green-950 rounded-[12px]" >
                <span class="text-[#4dab56] text-[10px] m-[5px] ">${elem.text2}</span><img class="m-[5px]" src=${elem.image2} alt=""></div>
            </div>

            `
        }) 
    }
    document.querySelector(".freexs").insertAdjacentHTML("afterbegin",rem.join(""))
  } catch (error) {
    console.log(error.message);
  }
}
export default freexs