let footer=async()=>{
  try {
    let rem=""
    let res=await axios.get("https://evasma.github.io/dbjson/db.json")
    if(res.status===200 && res.request.readyState===4){
        rem=res.data.footer.map((elem)=>{
            return`
            <img src=${elem.image1} alt="">

          <div class="max-[950px]:flex max-[950px]:flex-col max-[950px]:items-center max-[950px]:gap-y-[20px] max-[950px]:pr-[10px]             min-[950px]:flex   min-[950px]:flex-row-reverse min-[950px]:justify-around min-[950px]:gap-x-[15px] min-[950px]:pr-0 w-[100%]">
          ${elem.tik.map((item)=>{
            return`
            
                     <div class=" flex flex-row-reverse    md:gap-x-[5px] items-center"><img class="bg-green-950 p-[5px] rounded-[50%] w-[25px]" src=${item.image} alt=""><span class="font-['iransans']  text-[16px] text-[#8d8d8d] font-[700] text-right"> ${item.text}  </span></div>
            `
          }).join("")}

          </div>
          <button class="flex flex-row-reverse items-center bg-[#1cb561] px-[25px] py-[15px] rounded-[8px] gap-x-[5px] active:scale-[0.9] transition-all duration-300 cursor-pointer">
            <img src=${elem.image2} alt="">
             <span class="font-['iransans'] text-[16px] font-[500] text-[#fff] "> ${elem.text1}  </span></button>
            
            `
        })
    }
    document.querySelector(".end").insertAdjacentHTML("afterbegin",rem.join(""))
  } catch (error) {
    console.log(error.message);
  }
}
export default footer