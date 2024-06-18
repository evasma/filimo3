let favorite=async()=>{
 try {
    let rem=""
    let res=await axios.get("https://evasma.github.io/dbjson/db.json")
    if(res.status===200 && res.request.readyState===4){
      rem=res.data.favorite.map((elem)=>{
        return`
       
        <div class="flex flex-row-reverse gap-x-[10px] items-center mr-[80px]   ">
          <span class="font-[iransans] text-[17px] text-[#fff] font-[700]">${elem.text1}</span>
          <div class="flex flex-row w-fit  py-[5px]  border-[1px] border-white border-solid rounded-[35px] bg-[#151515] gap-x-[30px] items-center">
            <span class="text-[12px] font-[iransans] font-[700] text-[#fff] ml-[15px]" >${elem.text2}</span><span class="text-[12px] font-[iransans]      font-[700] text-[#fff] mr-[5px] px-[20px] py-[5px] bg-[#2b2b2b] rounded-[35px] border-[1px] border-white border-solid">${elem.text3}</span></div>
        </div>
        <div class="pl-[30px] w-[100%] mx-0 grid grid-cols-2  gap-[20px]  sm:flex sm:flex-row-reverse sm:items-center  sm:justify-around sm:mx-[30px] sm:pl-0">
          ${elem.pictures.map((item)=>{
            return`
            <img class="fav_img hover:fav_hover active:fav_active transition-all duration-300" src=${item.image} alt="">
            `
          }).join("")} 
        </div>
        <div class="flex flex-col gap-y-[20px] items-end mr-[10px]  sm:mr-[80px]">
          <span class="text-[16px] font-[700] font-[iransans] text-white">${elem.text4}</span>
          <span class="text-[10px] font-[100] font-[iransans] text-[#fff]"> ${elem.text5}</span>
           <div class="flex flex-row gap-x-[10px]">
            <span class="font-[iransans] text-[10px] bg-[#282828] px-[15px] py-[3px] text-[#fff] rounded-[24px]">${elem.text6} </span>
            <span class="font-[iransans] text-[10px] bg-[#282828] px-[15px] py-[3px] text-[#fff] rounded-[24px]"> ${elem.text7} </span>
           </div>
           <span class="font-[iransans] font-[100] text-[12px] text-[#fff] overflow-hidden text-ellipsis line-clamp-1 ">${elem.text8}</span>
        </div>
      


        <div class="swiper mySwiper3 mx-0 sm:mx-[30px] ">
        <div class="swiper-wrapper">
          ${elem.favslide.map((x)=>{
            if(x.lock.length>0){
                return `
                <div class="swiper-slide flex flex-col gap-y-[5px] bg-transparent items-end">
                <img class="blur-[4px]" src=${x.image} alt="">
                <div class="absolute top-0 left-0 w-[100%] h-[90%] "><span class=" absolute w-[48px]  h-[48px] rounded-[50%] bg-black top-[calc(50%-(48px/2))]  left-[calc(50%-(48px/2))] flex items-center justify-center">
                ${x.lock.map((y)=>{
                    return `
                    <img class="lock" src=${y.image} alt="">
                    `
                })}
                  </span></div>
                <span class="font-[700] font-['iransans'] text-[11px] text-[#f6f6f6]">${x.text}</span>
              </div>
                `
            }else{
               return `
               
               <div class="swiper-slide flex flex-col gap-y-[2px] items-end bg-transparent">
               <img src=${x.image} alt="">
               <div class="absolute bottom-[40px] right-[5px] flex flex-row items-center  bg-green-950 rounded-[12px]" >
                 <span class="text-[#4dab56] text-[10px] m-[5px] ">${x.text2}</span><img class="m-[5px]" src=${x.image2} alt=""></div>
               <span class="font-[700] font-['iransans'] text-[11px] text-[#f6f6f6]">${x.text}</span>
             </div>
               
               ` 
            }
          })}
       
         
        
         

        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>

    







        
        `
      })
    }
    document.querySelector(".fav").insertAdjacentHTML("afterbegin",rem.join(""))
 } catch (error) {
    console.log(error.message);
 }
}
export default favorite