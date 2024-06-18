let free=async()=>{
try {
    let rem=""
    let res=await axios.get("https://evasma.github.io/dbjson/db.json")
    if(res.status===200 && res.request.readyState===4){
        rem=res.data.free.map((elem)=>{
         return`
         
          <span class="font-['iransans'] font-[700] text-[17px] text-[#fff] "> ${elem.text}</span>
        <div class="swiper mySwiper1 hidden sm:flex bg-[#151515]">
          <div class="swiper-wrapper bg-[#151515]  ">

           ${elem.slider.map((item)=>{
           return`
            <div class="swiper-slide h-[300px] flex flex-col gap-y-[2px] items-end bg-[#151515] relative">
              <img class="w-[100%] rounded-[8px]"  src=${item.image1} alt="">
              <span class="font-[700] text-[13px] font-['iransans'] text-[#fff] ">${item.text1} </span>
              <div class="absolute top-[5px] right-[5px] flex flex-row items-center  bg-green-950 rounded-[12px]" >
                <span class="text-[#4dab56] text-[10px] m-[5px] ">${item.text2}</span><img class="m-[5px]" src=${item.image2} alt=""></div>
            </div>
           `

           }).join("")}

          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
     
         `
        })
    }
document.querySelector(".free").insertAdjacentHTML("afterbegin",rem.join(""))
} catch (error) {
    console.log(error.message);
}

}
export default free