(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();let p=async()=>{try{let t="";t=(await axios.get("https://evasma.github.io/dbjson/db.json")).data.header.map(e=>e.image.length>0?`
            <button class="bg-[#1CB561] px-[10px] h-[40px] max-[820px]:w-[140px]   min-[830px]:w-[140px] ml-[20px] rounded-[8px] active:scale-[0.9] transition-all duration-300" >
            <a class="flex flex-row items-center h-[100%] justify-between" href="#" ><span class="menu">${e.name}</span>
            ${e.image.map(a=>`
                <img class="w-[20px] ml-[10px]" src=${a.link} alt=""/> </a>
                `)}
          </button>

            `:`
            <button class="bg-[#363636] h-[40px] rounded-[8px] active:scale-[0.9] transition-all duration-300">
            <a href="#"class="font-['IranSans'] px-[20px] text-[#FFFFFF] text-[12px]">${e.name}</a>
          </button>`),document.querySelector(".test").insertAdjacentHTML("afterbegin",t.join(""))}catch(t){console.log(t.message)}try{let t="",s=await axios.get(" http://localhost:3000/logo");s.status===200&&s.request.readyState===4&&(t=s.data.map(e=>` <div class="h-[50px] menu_div px-[10px]">
        <a href="#"><img class="w-[90px]" src=${e.link} alt=""></a>
      </div>`)),document.querySelector(".logo").insertAdjacentHTML("afterbegin",t.join(""))}catch(t){console.log(t.message)}try{let t="",s=await axios.get("http://localhost:3000/menu");s.status===200&&s.request.readyState===4&&(t=s.data.map(e=>e.image.length>0?`  
             <div class="h-[50px] menu_div ">
            <a href="#" class="menu_div ml-0">
            <span class="menu  ">${e.name}</span>
            ${e.image.map(a=>` 
                
            <img class="w-[30px] " src=${a.link} alt="" /></a>
                `)}
          </div>`:`
            <div class="menu_div group"><a class="menu group-hover:text-orange-400 hover:cursor-pointer transition-all duration-300" href="#">${e.name}</a></div>
            `)),document.querySelector(".menuitem").insertAdjacentHTML("afterbegin",t.join(""))}catch(t){console.log(t.message)}},o=async()=>{try{let t="",s=await axios.get("https://evasma.github.io/dbjson/db.json");s.status===200&&s.request.readyState===4&&(t=s.headerxs.data.map(e=>`
        <button class="bg-[#363636] h-[40px] rounded-[8px] active:scale-[0.9] transition-all duration-300">
        <a
          href="#"
          class="font-['IranSans'] px-[20px] text-[#FFFFFF] text-[12px]"
          >${e.name1}</a
        >
      </button>
      <button class="bg-[#1CB561] h-[40px] px-[20px] ml-[20px] rounded-[8px] active:scale-[0.9] transition-all duration-300" >
        <a class="flex flex-row items-center h-[100%] justify-between" href="#" ><span class="menu"> ${e.name2}</span>
          <img class="w-[20px] ml-[10px]" src=${e.image1} alt=""/> </a>
      </button>
      <div class="h-[50px] flex items-center ml-[10px]"><a href=""><img src=${e.image2} alt=""></a></div>
         
        `)),document.querySelector(".btnxs").insertAdjacentHTML("afterbegin",t.join(""))}catch(t){console.log(t.message)}try{let t="",s=await axios.get(" http://localhost:3000/logoxs");s.status===200&&s.request.readyState===4&&(t=s.data.map(e=>` 
      <a href="#"><img class="w-[90px]" src=${e.link} alt=""></a>
      `)),document.querySelector(".logoxs").insertAdjacentHTML("afterbegin",t.join(""))}catch(t){console.log(t.message)}},x=async()=>{try{let t="",s=await axios.get("https://evasma.github.io/dbjson/db.json");s.status===200&&s.request.readyState===4&&(t=s.data.slider.map(e=>`
            
            <div class="swiper-slide h-[100%] shadow">
            <img class="slide_img " src=${e.image} />
          </div>
          
            `)),document.querySelector(".slider1").insertAdjacentHTML("afterbegin",t.join(""))}catch(t){console.log(t.message)}try{let t="",s=await axios.get("http://localhost:3000/slidertext");s.status===200&&s.request.readyState===4&&(t=s.data.map(e=>`
         <div class="flex flex-col items-center justify-start">
         <span class="max-[940px]:text-[14px] min-[940px]:text-[18px] font-['IranSans'] text-[#F9A63D] font-[700]"> ${e.text1} </span>
         <span class="font-[iransans] max-[940px]:text-[30px] min-[940px]:text-[45px] text-[#ffffff] font-[700]">${e.text1}</span>
       </div>
       <div class="flex max-[940px]:flex-col max-[940px]:gap-y-[15px] min-[940px]:flex-row-reverse min-[940px]:gap-x-[40px] items-center">
         
       ${e.tick.map(a=>`
        <div class="slide_div"><img class="slide_tik" src=${a.image}  alt=""><span class="slide_span">  ${a.text}</span></div>
       
        `).join("")}
       </div>
       <div class="flex flex-col gap-y-[15px] items-center justify-center">
         <button class="w-fit px-[60px] py-[15px] md:px-[40px] md:py-[20px] bg-[#1cb561] flex flex-row-reverse gap-x-[10px] rounded-[8px] items-center justify-center active:scale-[0.9] transition-all duration-300"><img class="h-[24px] w-[24px]" src=${e.image3} alt="">
           <span class="font-[iransans] text-[15px] text-[#fff] ">${e.text3} </span></button>
         <div class="flex flex-row-reverse items-center justify-center gap-x-[5px]">
           <img src=${e.image4} alt=""><span class="text-[#959ba2] "> ${e.text4} </span></div>
       </div>
         `)),document.querySelector(".textslider").insertAdjacentHTML("afterbegin",t.join(""))}catch(t){console.log(t.message)}},l=async()=>{try{let t="",s=await axios.get("https://evasma.github.io/dbjson/db.json");s.status===200&&s.request.readyState===4&&(t=s.data.favorite.map(e=>`
       
        <div class="flex flex-row-reverse gap-x-[10px] items-center mr-[80px]   ">
          <span class="font-[iransans] text-[17px] text-[#fff] font-[700]">${e.text1}</span>
          <div class="flex flex-row w-fit  py-[5px]  border-[1px] border-white border-solid rounded-[35px] bg-[#151515] gap-x-[30px] items-center">
            <span class="text-[12px] font-[iransans] font-[700] text-[#fff] ml-[15px]" >${e.text2}</span><span class="text-[12px] font-[iransans]      font-[700] text-[#fff] mr-[5px] px-[20px] py-[5px] bg-[#2b2b2b] rounded-[35px] border-[1px] border-white border-solid">${e.text3}</span></div>
        </div>
        <div class="pl-[30px] w-[100%] mx-0 grid grid-cols-2  gap-[20px]  sm:flex sm:flex-row-reverse sm:items-center  sm:justify-around sm:mx-[30px] sm:pl-0">
          ${e.pictures.map(a=>`
            <img class="fav_img hover:fav_hover active:fav_active transition-all duration-300" src=${a.image} alt="">
            `).join("")} 
        </div>
        <div class="flex flex-col gap-y-[20px] items-end mr-[10px]  sm:mr-[80px]">
          <span class="text-[16px] font-[700] font-[iransans] text-white">${e.text4}</span>
          <span class="text-[10px] font-[100] font-[iransans] text-[#fff]"> ${e.text5}</span>
           <div class="flex flex-row gap-x-[10px]">
            <span class="font-[iransans] text-[10px] bg-[#282828] px-[15px] py-[3px] text-[#fff] rounded-[24px]">${e.text6} </span>
            <span class="font-[iransans] text-[10px] bg-[#282828] px-[15px] py-[3px] text-[#fff] rounded-[24px]"> ${e.text7} </span>
           </div>
           <span class="font-[iransans] font-[100] text-[12px] text-[#fff] overflow-hidden text-ellipsis line-clamp-1 ">${e.text8}</span>
        </div>
      


        <div class="swiper mySwiper3 mx-0 sm:mx-[30px] ">
        <div class="swiper-wrapper">
          ${e.favslide.map(a=>a.lock.length>0?`
                <div class="swiper-slide flex flex-col gap-y-[5px] bg-transparent items-end">
                <img class="blur-[4px]" src=${a.image} alt="">
                <div class="absolute top-0 left-0 w-[100%] h-[90%] "><span class=" absolute w-[48px]  h-[48px] rounded-[50%] bg-black top-[calc(50%-(48px/2))]  left-[calc(50%-(48px/2))] flex items-center justify-center">
                ${a.lock.map(n=>`
                    <img class="lock" src=${n.image} alt="">
                    `)}
                  </span></div>
                <span class="font-[700] font-['iransans'] text-[11px] text-[#f6f6f6]">${a.text}</span>
              </div>
                `:`
               
               <div class="swiper-slide flex flex-col gap-y-[2px] items-end bg-transparent">
               <img src=${a.image} alt="">
               <div class="absolute bottom-[40px] right-[5px] flex flex-row items-center  bg-green-950 rounded-[12px]" >
                 <span class="text-[#4dab56] text-[10px] m-[5px] ">${a.text2}</span><img class="m-[5px]" src=${a.image2} alt=""></div>
               <span class="font-[700] font-['iransans'] text-[11px] text-[#f6f6f6]">${a.text}</span>
             </div>
               
               `)}
       
         
        
         

        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>

    







        
        `)),document.querySelector(".fav").insertAdjacentHTML("afterbegin",t.join(""))}catch(t){console.log(t.message)}},c=async()=>{try{let t="",s=await axios.get("https://evasma.github.io/dbjson/db.json");s.status===200&&s.request.readyState===4&&(t=s.data.look.map(e=>`
      <div><img src=${e.image1} alt=""></div>
        <div class="flex flex-col items-end gap-y-[30px]">
          <span class="font-[iransans] text-[16px] font-[700] text-[#fff]">${e.text1}</span>
          <span class="font-[100] text-[13px] text-[#d8d8d8] font-['iransans'] text-right leading-[25px]"> ${e.text2}</span>
          <div class="flex flex-col gap-y-[30px] items-end"> 
           ${e.game.map(a=>`
            <div class="flex flex-col gap-y-[10px]">
              <div class="flex flex-row-reverse gap-x-[5px] items-center">
                <img src=${a.image} alt="">
                <span class="look_span"> ${a.text} </span>
              </div>
              <span class="look_span2"> ${a.span}</span>
            </div>
            
            `).join("")}
            <button class="flex flex-row-reverse items-center bg-[#1cb561] px-[16px] py-[10px] rounded-[8px] gap-x-[5px] active:scale-[0.9] transition-all duration-300 cursor-pointer">
              <img src=${e.image2} alt="">
               <span class="font-['iransans'] text-[12px] font-[500] text-[#fff] ">${e.text3}</span></button>
          </div>
        </div>
      
      
      
      `)),document.querySelector(".look").insertAdjacentHTML("afterbegin",t.join(""))}catch(t){console.log(t.message)}},d=async()=>{try{let t="",s=await axios.get("https://evasma.github.io/dbjson/db.json");s.status===200&&s.request.readyState===4&&(t=s.data.look2.map(e=>`
           <div><img  src=${e.image1} alt=""></div>
          <div class="flex flex-col items-end gap-y-[50px]">
            <span class="font-[iransans] text-[16px] font-[700] text-[#fff]">  ${e.text1} </span>
            <span class="font-[100] text-[11px] ml-0 text-[#d8d8d8] font-['iransans'] text-right leading-[25px] sm:ml-[100px]">  
              ${e.text2}</span>
            <div class="flex flex-col gap-y-[40px] items-end"> 
               ${e.game.map(a=>`
                
                  <div class="flex flex-col gap-y-[20px]">
                <div class="flex flex-row-reverse gap-x-[5px] items-center">
                  <img class="w-[30px]" src=${a.image} alt="">
                  <span class="look_span"> ${a.text} </span>
                </div>
                <span class="look_span2">${a.span}</span>
              </div>
                `).join("")}
            
              
              <button class="flex flex-row items-center bg-[#737373] px-[16px] py-[10px] rounded-[8px] gap-x-[5px] active:scale-[0.9] transition-all duration-300 cursor-pointer">
                <img src=${e.image2} alt="">
                 <span class="font-['iransans'] text-[12px] font-[500] text-[#fff] ">  ${e.text3} </span></button>
            </div>
          </div>

         
         
         `)),document.querySelector(".look2").insertAdjacentHTML("afterbegin",t.join(""))}catch(t){console.log(t.message)}},f=async()=>{try{let t="",s=await axios.get("https://evasma.github.io/dbjson/db.json");s.status===200&&s.request.readyState===4&&(t=s.data.free.map(e=>`
         
          <span class="font-['iransans'] font-[700] text-[17px] text-[#fff] "> ${e.text}</span>
        <div class="swiper mySwiper1 hidden sm:flex bg-[#151515]">
          <div class="swiper-wrapper bg-[#151515]  ">

           ${e.slider.map(a=>`
            <div class="swiper-slide h-[300px] flex flex-col gap-y-[2px] items-end bg-[#151515] relative">
              <img class="w-[100%] rounded-[8px]"  src=${a.image1} alt="">
              <span class="font-[700] text-[13px] font-['iransans'] text-[#fff] ">${a.text1} </span>
              <div class="absolute top-[5px] right-[5px] flex flex-row items-center  bg-green-950 rounded-[12px]" >
                <span class="text-[#4dab56] text-[10px] m-[5px] ">${a.text2}</span><img class="m-[5px]" src=${a.image2} alt=""></div>
            </div>
           `).join("")}

          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
     
         `)),document.querySelector(".free").insertAdjacentHTML("afterbegin",t.join(""))}catch(t){console.log(t.message)}},g=async()=>{try{let t="",s=await axios.get("https://evasma.github.io/dbjson/db.json");s.status===200&&s.request.readyState===4&&(t=s.data.freexs.map(e=>`
    
            <div class="swiper-slide h-[300px] flex flex-col gap-y-[2px] items-end bg-[#151515] relative">
              <img class="w-[100%] rounded-[8px]"  src=${e.image1} alt="">
              <span class="font-[700] text-[13px] font-['iransans'] text-[#fff] ">${e.text1}</span>
              <div class="absolute top-[5px] right-[5px] flex flex-row items-center  bg-green-950 rounded-[12px]" >
                <span class="text-[#4dab56] text-[10px] m-[5px] ">${e.text2}</span><img class="m-[5px]" src=${e.image2} alt=""></div>
            </div>

            `)),document.querySelector(".freexs").insertAdjacentHTML("afterbegin",t.join(""))}catch(t){console.log(t.message)}},u=async()=>{try{let t="",s=await axios.get("https://evasma.github.io/dbjson/db.json");s.status===200&&s.request.readyState===4&&(t=s.data.various.map(e=>`
             <img src=${e.image} alt="">
        <div class="flex flex-col items-end gap-y-[20px] w-fit "> 
          <span class="font-['iransans'] text-[#fff] font-[400] text-[20px] text-right">${e.text1}</span>
          <span class="font-[100] text-[13px] text-[#fff] font-['iransans']  text-right leading-[28px] opacity-[0.5]">
          ${e.text2}  </span>
          <div class="flex flex-row items-center gap-x-[10px]">
            <button class="bg-[#D6D6D6] rounded-[8px] active:scale-[0.9] cursor-pointer px-[10px] py-[10px] text-[12px]  text-gray-800 font-['iransans'] font-[700]">  ${e.text3} </button>
            <button class="bg-[#D6D6D6] rounded-[8px] active:scale-[0.9] cursor-pointer px-[10px] py-[10px] text-[12px] text-gray-800 font-['iransans'] font-[700]"> ${e.text4}  </button>
          </div>
        </div>
            `)),document.querySelector(".various").insertAdjacentHTML("afterbegin",t.join(""))}catch(t){console.log(t.message)}},m=async()=>{try{let t="",s=await axios.get("https://evasma.github.io/dbjson/db.json");s.status===200&&s.request.readyState===4&&(t=s.data.footer.map(e=>`
            <img src=${e.image1} alt="">

          <div class="max-[950px]:flex max-[950px]:flex-col max-[950px]:items-center max-[950px]:gap-y-[20px] max-[950px]:pr-[10px]             min-[950px]:flex   min-[950px]:flex-row-reverse min-[950px]:justify-around min-[950px]:gap-x-[15px] min-[950px]:pr-0 w-[100%]">
          ${e.tik.map(a=>`
            
                     <div class=" flex flex-row-reverse    md:gap-x-[5px] items-center"><img class="bg-green-950 p-[5px] rounded-[50%] w-[25px]" src=${a.image} alt=""><span class="font-['iransans']  text-[16px] text-[#8d8d8d] font-[700] text-right"> ${a.text}  </span></div>
            `).join("")}

          </div>
          <button class="flex flex-row-reverse items-center bg-[#1cb561] px-[25px] py-[15px] rounded-[8px] gap-x-[5px] active:scale-[0.9] transition-all duration-300 cursor-pointer">
            <img src=${e.image2} alt="">
             <span class="font-['iransans'] text-[16px] font-[500] text-[#fff] "> ${e.text1}  </span></button>
            
            `)),document.querySelector(".end").insertAdjacentHTML("afterbegin",t.join(""))}catch(t){console.log(t.message)}},v=async()=>{try{let t="",s=await axios.get("https://evasma.github.io/dbjson/db.json");s.status===200&&s.request.readyState===4&&(t=s.data.online.map(e=>`

          <span class="font-['iransans'] font-[700] text-[#fff] text-[17px] "> ${e.text} </span>
      
          <div class="flex max-[880px]:flex-col max-[880px]:items-center  max-[880px]:pr-[10px] max-[880px]:gap-y-[10px] min-[880px]:flex-row-reverse min-[880px]:justify-around min-[880px]:pr-0 w-[100%]">

          ${e.tik.map(a=>`
            <div class="flex flex-row-reverse justify-end gap-x-[5px] items-center"><img class="bg-green-950 p-[5px] rounded-[50%] w-[25px]"   src=${a.image} alt="">
              <span class="font-['iransans'] text-[13px] text-[#8d8d8d] font-[100]">  ${a.text}</span></div>
            
            `).join("")}

          </div>
        
     
        <div class="max-[880px]:flex max-[880px]:flex-col min-[880px]:grid min-[880px]:grid-cols-2 min-[880px]:grid-rows-[repeat(3,300px)]         h-[600px] overflow-y-scroll    min-[880px]:justify-between w-[100%] gap-3">

        ${e.table.map(a=>`
             <div class="flex flex-row-reverse  gap-x-[10px] p-[30px] border-[1px] border-solid border-[#fff] rounded-[8px]  bg-transparent">
            <img class="rounded-[8px]" src=${a.image1} alt="">
          
            <div class="flex flex-col items-end gap-y-[40px] w-[100%] bg-transparent">
              
            <div class="flex flex-row-reverse w-[100%] justify-between items-center ">
                <span class="font-[700] font-['iransans'] text-[#fff] text-[13px]">${a.text1}</span>
                <div class="flex flex-row-reverse items-center p-[10px] bg-[#151515] rounded-[15px]"><img class="w-[15px] h-[15px]"           src=${a.image2} alt=""> <span class="font-[100] font-['iransans'] text-[#fff] text-[10px]"> ${a.text2}</span></div>
                
              </div>

              <span class="font-[100] font-['iransans'] text-[12px] text-[#8d8d8d]">${a.text3}</span>
             
              <div class="flex flex-row-reverse gap-x-[15px] items-center">
                <span class="font-[iransans] text-[#fff] text-[11px] bg-[#2b2b2b] rounded-[8px] py-[3px] px-[8px]" >${a.text4} </span>
                <span class="font-[100] font-['iransans'] text-[11px] text-[#fff] bg-[#2b2b2b] rounded-[8px] py-[3px] px-[8px]"> ${a.text5}</span>
               </div>

               <button class="font-[400] font-['iransans'] text-[11px] text-[#fff] bg-transparent rounded-[8px] p-[10px] border-[1px] border-solid border-[#fff] ">${a.text6} </button>
            </div>
            </div>
            
            `).join("")}
           
          

        </div>
    
    `)),document.querySelector(".online").insertAdjacentHTML("afterbegin",t.join(""))}catch(t){console.log(t.message)}},b=async()=>{try{let t="",s=await axios.get("https://evasma.github.io/dbjson/db.json");s.status===200&&s.request.readyState===4&&(t=s.data.daisy.map(e=>`
        
          <h2 class="text-[#fff] font-['iransans'] font-[700]">${e.text1} </h2>
        <span class="text-[12px] text-gray-400 font-['iransans'] font-[100]" >${e.text2}</span>

      <div class=" w-[100%] ">
      ${e.table.map(a=>`
      <div class="collapse collapse-plus bg-base-200 text-right border-[1px] border-solid border-white w-[80%] mx-auto mb-[10px]">
          <input type="radio" name="my-accordion-3" checked="checked" /> 
          <div class="collapse-title text-xl font-medium   ">
            <span class="font-[500] font-['iransans'] text-[#f4843f] text-[13px]">${a.title} </span>
          </div>
          <div class="collapse-content"> 
            <p class="font-[400] font-['iransans'] text-[#b6b6b6] text-[11px] leading-[28px]">${a.span}</p>
          </div>
        </div>
     
     `).join("")}

      </div>
        
        `)),document.querySelector(".daisy").insertAdjacentHTML("afterbegin",t.join(""))}catch(t){console.log(t.message)}};function w(){new Swiper(".mySwiper",{loop:!0,spaceBetween:30,centeredSlides:!0,effect:"fade",speed:2500,autoplay:{delay:3e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}})}function y(){new Swiper(".mySwiper3",{slidesPerView:4,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}function h(){new Swiper(".mySwiper1",{slidesPerView:6,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}function $(){new Swiper(".mySwiper2",{slidesPerView:3,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}async function j(){p(),o(),await x(),w(),await l(),y(),c(),d(),await f(),h(),await g(),$(),u(),v(),b(),m()}j();
