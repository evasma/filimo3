

let headerxs=async()=>{
  try {
    let rem=""
    let res=await axios.get("https://evasma.github.io/dbjson/db.json")
    if(res.status===200 && res.request.readyState===4){
      rem=res.data.menuxs.map((elem)=>{
        return`
        <button class="bg-[#363636] h-[40px] rounded-[8px] active:scale-[0.9] transition-all duration-300">
        <a
          href="#"
          class="font-['IranSans'] px-[20px] text-[#FFFFFF] text-[12px]"
          >${elem.name1}</a
        >
      </button>
      <button class="bg-[#1CB561] h-[40px] px-[20px] ml-[20px] rounded-[8px] active:scale-[0.9] transition-all duration-300" >
        <a class="flex flex-row items-center h-[100%] justify-between" href="#" ><span class="menu"> ${elem.name2}</span>
          <img class="w-[20px] ml-[10px]" src=${elem.image1} alt=""/> </a>
      </button>
      <div class="h-[50px] flex items-center ml-[10px]"><a href=""><img src=${elem.image2} alt=""></a></div>
         
        `
      })
    
    }
    document.querySelector(".btnxs").insertAdjacentHTML("afterbegin",rem.join(""))
  } catch (error) {
    console.log(error.message);
  }
//***logoxs***/
try {
  let rem=""
  let res=await axios.get("https://evasma.github.io/dbjson/db.json")
  if(res.status===200 && res.request.readyState===4){
    rem=res.data.logoxs.map((elem)=>{
      return` 
      <a href="#"><img class="w-[90px]" src=${elem.link} alt=""></a>
      `
    })
  }
  document.querySelector(".logoxs").insertAdjacentHTML("afterbegin",rem.join(""))
} catch (error) {
  console.log(error.message);
}

}
export default headerxs



