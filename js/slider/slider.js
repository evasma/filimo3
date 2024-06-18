let slider=async()=>{
try {
    let rem=''
    let res=await axios.get("https://evasma.github.io/dbjson/db.json")
    if(res.status===200 && res.request.readyState===4){
        rem=res.data.slider.map((elem)=>{
            return`
            
            <div class="swiper-slide h-[100%] shadow">
            <img class="slide_img " src=${elem.image} />
          </div>
          
            `
        })
    }
document.querySelector(".slider1").insertAdjacentHTML("afterbegin",rem.join(""))
} catch (error) {
    console.log(error.message);
}
//***slidertext****/

try {
    let rem=""
    let res=await axios.get("http://localhost:3000/slidertext")
    if(res.status===200 && res.request.readyState===4){
        rem=res.data.map((elem)=>{
         return`
         <div class="flex flex-col items-center justify-start">
         <span class="max-[940px]:text-[14px] min-[940px]:text-[18px] font-['IranSans'] text-[#F9A63D] font-[700]"> ${elem.text1} </span>
         <span class="font-[iransans] max-[940px]:text-[30px] min-[940px]:text-[45px] text-[#ffffff] font-[700]">${elem.text1}</span>
       </div>
       <div class="flex max-[940px]:flex-col max-[940px]:gap-y-[15px] min-[940px]:flex-row-reverse min-[940px]:gap-x-[40px] items-center">
         
       ${elem.tick.map((item)=>{
        return`
        <div class="slide_div"><img class="slide_tik" src=${item.image}  alt=""><span class="slide_span">  ${item.text}</span></div>
       
        `
       }).join("")}
       </div>
       <div class="flex flex-col gap-y-[15px] items-center justify-center">
         <button class="w-fit px-[60px] py-[15px] md:px-[40px] md:py-[20px] bg-[#1cb561] flex flex-row-reverse gap-x-[10px] rounded-[8px] items-center justify-center active:scale-[0.9] transition-all duration-300"><img class="h-[24px] w-[24px]" src=${elem.image3} alt="">
           <span class="font-[iransans] text-[15px] text-[#fff] ">${elem.text3} </span></button>
         <div class="flex flex-row-reverse items-center justify-center gap-x-[5px]">
           <img src=${elem.image4} alt=""><span class="text-[#959ba2] "> ${elem.text4} </span></div>
       </div>
         `
        })
    }
    document.querySelector(".textslider").insertAdjacentHTML("afterbegin",rem.join(""))
} catch (error) {
 console.log(error.message);   
}

}
export default slider
