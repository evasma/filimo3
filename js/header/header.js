
let header=async()=>{
  try {
    let rem = ""
    let res=await axios.get("https://evasma.github.io/dbjson/db.json")  
    rem = res.data.btn.map((elem)=>{
        if(elem.image.length>0){
            return `
            <button class="bg-[#1CB561] px-[10px] h-[40px] max-[820px]:w-[140px]   min-[830px]:w-[140px] ml-[20px] rounded-[8px] active:scale-[0.9] transition-all duration-300" >
            <a class="flex flex-row items-center h-[100%] justify-between" href="#" ><span class="menu">${elem.name}</span>
            ${elem.image.map((item)=>{
                return `
                <img class="w-[20px] ml-[10px]" src=${item.link} alt=""/> </a>
                `
            })}
          </button>

            `
        }else{
            return `
            <button class="bg-[#363636] h-[40px] rounded-[8px] active:scale-[0.9] transition-all duration-300">
            <a href="#"class="font-['IranSans'] px-[20px] text-[#FFFFFF] text-[12px]">${elem.name}</a>
          </button>`
        }
      
    })
    
   document.querySelector(".test").insertAdjacentHTML("afterbegin",rem.join(""))
  } catch (error) {
    console.log(error.message);
  }
  //****logo****
try {
    let logo=""
    let data=await axios.get("https://evasma.github.io/dbjson/db.json")
    if(data.status===200 && data.request.readyState===4){
      logo=data.data.logo.map((elem)=>{
        return` <div class="h-[50px] menu_div px-[10px]">
        <a href="#"><img class="w-[90px]" src=${elem.link} alt=""></a>
      </div>`
      })
    }
    document.querySelector(".logo").insertAdjacentHTML("afterbegin",logo.join(""))   
} catch (error) {
    console.log(error.message);
}
//****menu***** 
try {
    let menu=""
    let data=await axios.get("https://evasma.github.io/dbjson/db.json")
    if(data.status===200 && data.request.readyState===4){
    menu=data.data.menu.map((elem)=>{
        if(elem.image.length>0){
            return`  
             <div class="h-[50px] menu_div ">
            <a href="#" class="menu_div ml-0">
            <span class="menu  ">${elem.name}</span>
            ${elem.image.map((item)=>{
                return` 
                
            <img class="w-[30px] " src=${item.link} alt="" /></a>
                `
            })}
          </div>`
        }
        else{
            return`
            <div class="menu_div group"><a class="menu group-hover:text-orange-400 hover:cursor-pointer transition-all duration-300" href="#">${elem.name}</a></div>
            `
        }
    })
    }
    document.querySelector(".menuitem").insertAdjacentHTML("afterbegin",menu.join(""))   
} catch (error) {
    console.log(error.message);
}

}

export default header;
