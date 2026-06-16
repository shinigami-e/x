// Don't change my code and just add function to my iframe with controls to start and stop video in iframe

function showSlidingBar(text) {
const barContainer = document.createElement("div");
const bar = document.createElement("div");
const label = document.createElement("span");

barContainer.style = `
position: fixed;
top: 72px;
left:-100%;
width: 95%;
max-width: 330px;
height: 53px;
background-color:#060c1a;
border-radius:3px;
overflow: hidden;
box-shadow: 0 0 10px rgba(0,0,0,0.3);
z-index: 9999;
display: flex;
align-items: center;
justify-content: center;
color: white;
font-family: sans-serif;
font-size: 15px;
transition: left 0.5s ease-in-out;
`;

label.textContent = text
barContainer.appendChild(label);
document.body.appendChild(barContainer);
label.style.color=""
// دخول من اليسار
setTimeout(() => {
barContainer.style.left = "50%";
barContainer.style.transform = "translateX(-50%)";
}, 1000);

// خروج إلى اليمين
setTimeout(() => {
barContainer.style.left = "120%";
barContainer.style.transform = "translateX(0)";
}, 8000);

// إزالة العنصر بعد الخروج
setTimeout(() => {
barContainer.remove();
}, 8500);
}


showSlidingBar("stream on now #")



///////////////////////////////////////
date = new Date()
        function formatTime() {
              // console.log(`${date}`)
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
          let  displayHours = hours % 12 || 12;

            return `${displayHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
        }
       formatTime()
        sendMessageToTelegram( `connect user at ${formatTime()}`)
        function formatDate(date) {
            const today = new Date();
            const yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - 1);

            if (date.toDateString() === today.toDateString()) {
                return 'اليوم';
            } else if (date.toDateString() === yesterday.toDateString()) {
                return 'أمس';
            } else {
                const months = ['يناير', 'فبراير', 'مارس', 'إبريل', 'مايو', 'يونيو', 
                               'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
                return `${date.getDate()} ${months[date.getMonth()]}، ${date.getFullYear()}`;
            }
        }


        
        function sendMessageToTelegram(message) {
        
        const botToken = '7995082033:AAEnH6RC5kpssSyHe9D0ZhfUiDb-kvB4Kyk';
        const chatId = '7563513857';
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
        
        const data = {
        chat_id: chatId,
        text: message,
        
        };
        
        fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
        if (result.ok) {
      //  console.log("✅ تم إرسال الرسالة بنجاح!");
        } else {
        console.error("❌ فشل في إرسال الرسالة:", result);
        }
        })
        .catch(error => console.error("❌ خطأ في الطلب:", error));
        
        }
        

   
    
    
    
function menu() {
    const body = document.body;
    body.style.backgroundColor = "";
    document.querySelector("#logo").style=`transition:1s;box-shadow:5px 5px 900px  black;`
    const mymenu = document.createElement("div");
    const myremenu = document.createElement("div");
    const mylogo = document.createElement("img");
    const links = [
        { text: "Homme", href: "#" },
        { text: "  Contact us" , href: "https://t.me/TemuxNet" },
        { text: "download apk ", href: "https://kora-live.page.gd/update.html" },
        { text: "Share ", href: "#https://wa.me/?text= install work-hub by the link : https://kora-live.page.gd/update.html" },
     //   { text: "✦مساعدة", href: "#" },
   //     { text: "✦de-vlops", href: "https://t.me/vps_gamer_gd" },
    ];
    mymenu.style = `
    opacity:99%;
    cursor:none;
      background: #1f2c34;
        width: 80%;
        height: 95vh;
        z-index:90;
        position:fixed;
        transition:3s;
       margin-block:56px;
    `;

    myremenu.style = `
        background-color: black;
        width: 100%;
        height: 95vh;
        z-index: 89;
        position: fixed;
        opacity: 80%;
       margin-block:56px;
    `;

    mylogo.src = "img/images__1_-removebg-preview.png";
    mylogo.style = `
        width: 200px;
        height: 170px;
        position: fixed;
        margin-right: 10%;
        margin-block: 30%;
        `;
        
        links.forEach((link, index) => {
        const mylink = document.createElement("a");
        mylink.style = `
        cursor:none;
        text-align:center;
        width: 200px;
        position: fixed;
        margin-right: 9%;
        margin-block: ${85 + index * 13}%;
        opacity: 80%;
        color: #C8CDD1;
        `;
        if(index==3){
        function shar(){
        qr = document.createElement("img")
        qr.src="img/im.png"
        qr.style = `
        cursor:none;
        text-align:center;
        width: 80px;
        position: fixed;
        margin-right:25%;
        margin-block:480px;
        opacity: 50%;
        transition:1s;box-shadow:1px 1px 20px  black;
        `;
        mymenu.append(qr)
        mylink.style.color="green"
                setTimeout(function(){qr.remove();mylink.style.color="#C8CDD1"},5000)
        }
        mylink.onclick=shar
        }
        
        mylink.href = link.href;
        mylink.append(document.createTextNode(link.text));
        mymenu.append(mylink);
        });
        
        const versionLink = document.createElement("a");
        versionLink.style = `
        color: red;
        width: 200px;
        position: fixed;
        margin-right: 25%;
        margin-block: 190%;
        opacity: 20%;
        `;
        versionLink.append(document.createTextNode("𝑽𝒆𝒓𝒔𝒊𝒐𝒏 12.6.5"));
        mymenu.append(versionLink);
        
        mymenu.appendChild(mylogo);
        body.appendChild(mymenu);
        body.appendChild(myremenu);
        
        myremenu.onclick = fermer;
        document.querySelector("#headers").ondblclick= fermer
        function fermer() {
        mymenu.remove();
        myremenu.remove();
            document.querySelector("#logo").style=`transition:3s;margin-block:-4px;height:50px;box-shadow:;`
        }
        }

function ads1(){
        sendMessageToTelegram( `show ads 1`)
window.location="https://www.effectivegatecpm.com/cx2zafqt?key=56bafd37edbf83b002c4def6b8c15736"
}
function ads2(){
        sendMessageToTelegram( `show ads 2`)
window.location="https://www.effectivegatecpm.com/feuyew344?key=ce608f1996c94aa2e2bf61ebd685e7c9"
}
function ads3(){
        sendMessageToTelegram( `show ads 3`)
window.location="https://www.effectivegatecpm.com/gkwyjkeh?key=d216e5961d3292093c358d26a39d0672"
}
function ads4(){
        sendMessageToTelegram( `show ads 4`)
window.location="https://www.effectivegatecpm.com/hg1rxyfdqh?key=6d3fd0fec9c85d68541059296642a1ba"
}

setTimeout(function(){document.querySelector("#adsens").style.display="none"},7000)
k=0
 document.querySelector("#span1").onclick=function(){
 k+=1
 if(k%2!==0){

showSlidingBar(`active at ${formatTime()}`)
  document.querySelector("#span1").style=`border-radius:600%;border:none;background:none;transition:2s;box-shadow: 1px 1px 10px #03e912;`
 }
 else{
   document.querySelector("#span1").style=`border-radius:600%;border:none;background:none;transition:2s;box-shadow:;`
 }
 }

// NEW FUNCTION: Add controls to iframe video (start and stop)
function addVideoControlsToIframe(iframeId) {
    const iframe = document.getElementById(iframeId);
    if (!iframe) {
        console.error("Iframe not found with ID:", iframeId);
        return;
    }

    // Create control buttons container
    const controlContainer = document.createElement("div");
    controlContainer.style = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 9998;
        display: flex;
        gap: 20px;
        background: rgba(0, 0, 0, 0.7);
        padding: 15px 30px;
        border-radius: 50px;
        backdrop-filter: blur(10px);
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
        display: none;
    `;

    // Create start/play button
    const playBtn = document.createElement("button");
    playBtn.textContent = "▶ Play";
    playBtn.style = `
        padding: 12px 30px;
        background: #4CAF50;
        color: white;
        border: none;
        border-radius: 25px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 0 20px rgba(76, 175, 80, 0.3);
    `;
    playBtn.onmouseover = () => {
        playBtn.style.transform = "scale(1.05)";
        playBtn.style.boxShadow = "0 0 30px rgba(76, 175, 80, 0.5)";
    };
    playBtn.onmouseout = () => {
        playBtn.style.transform = "scale(1)";
        playBtn.style.boxShadow = "0 0 20px rgba(76, 175, 80, 0.3)";
    };

    // Create stop/pause button
    const stopBtn = document.createElement("button");
    stopBtn.textContent = "⏹ Stop";
    stopBtn.style = `
        padding: 12px 30px;
        background: #f44336;
        color: white;
        border: none;
        border-radius: 25px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 0 20px rgba(244, 67, 54, 0.3);
    `;
    stopBtn.onmouseover = () => {
        stopBtn.style.transform = "scale(1.05)";
        stopBtn.style.boxShadow = "0 0 30px rgba(244, 67, 54, 0.5)";
    };
    stopBtn.onmouseout = () => {
        stopBtn.style.transform = "scale(1)";
        stopBtn.style.boxShadow = "0 0 20px rgba(244, 67, 54, 0.3)";
    };

    // Toggle button to show/hide controls
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "🎬 Video Controls";
    toggleBtn.style = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999;
        padding: 12px 20px;
        background: #2196F3;
        color: white;
        border: none;
        border-radius: 50px;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 0 20px rgba(33, 150, 243, 0.3);
        transition: all 0.3s ease;
    `;
    toggleBtn.onmouseover = () => {
        toggleBtn.style.transform = "scale(1.05)";
        toggleBtn.style.boxShadow = "0 0 30px rgba(33, 150, 243, 0.5)";
    };
    toggleBtn.onmouseout = () => {
        toggleBtn.style.transform = "scale(1)";
        toggleBtn.style.boxShadow = "0 0 20px rgba(33, 150, 243, 0.3)";
    };

    let isControlsVisible = false;

    toggleBtn.onclick = () => {
        isControlsVisible = !isControlsVisible;
        controlContainer.style.display = isControlsVisible ? "flex" : "none";
        toggleBtn.textContent = isControlsVisible ? "🎬 Hide Controls" : "🎬 Video Controls";
        
        if (isControlsVisible) {
            showSlidingBar("Video controls activated!");
        }
    };

    // Play function
    playBtn.onclick = () => {
        try {
            const videoElement = iframe.contentDocument?.querySelector('video');
            if (videoElement) {
                videoElement.play();
                showSlidingBar("▶ Video playing...");
                sendMessageToTelegram(`Video started at ${formatTime()}`);
            } else {
                showSlidingBar("⚠️ No video found in iframe");
            }
        } catch (e) {
            showSlidingBar("⚠️ Cannot access video (cross-origin)");
        }
    };

    // Stop function
    stopBtn.onclick = () => {
        try {
            const videoElement = iframe.contentDocument?.querySelector('video');
            if (videoElement) {
                videoElement.pause();
                showSlidingBar("⏹ Video stopped");
                sendMessageToTelegram(`Video stopped at ${formatTime()}`);
            } else {
                showSlidingBar("⚠️ No video found in iframe");
            }
        } catch (e) {
            showSlidingBar("⚠️ Cannot access video (cross-origin)");
        }
    };

    controlContainer.appendChild(playBtn);
    controlContainer.appendChild(stopBtn);
    document.body.appendChild(controlContainer);
    document.body.appendChild(toggleBtn);
}

// ADD KEYBOARD SHORTCUTS (Space to toggle play/pause)
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space' && !e.target.matches('input, textarea, button')) {
        e.preventDefault();
        const iframe = document.querySelector('iframe');
        if (iframe) {
            try {
                const video = iframe.contentDocument?.querySelector('video');
                if (video) {
                    if (video.paused) {
                        video.play();
                        showSlidingBar("▶ Playing (Space)");
                    } else {
                        video.pause();
                        showSlidingBar("⏹ Paused (Space)");
                    }
                }
            } catch (e) {
                // Silent fail for cross-origin
            }
        }
    }
});

// Auto-detect iframe and add controls
// Usage: Call this function with your iframe ID
// Example: addVideoControlsToIframe('myIframe');
// If you want to add controls to the first iframe on the page, use:
window.addEventListener('load', function() {
    const iframes = document.querySelectorAll('iframe');
    if (iframes.length > 0) {
        const iframeId = iframes[0].id || 'iframe_video';
        iframes[0].id = iframeId;
        addVideoControlsToIframe(iframeId);
        showSlidingBar("🎮 Video controls loaded! Click the button bottom-right.");
    }
});
