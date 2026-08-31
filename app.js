const SERVER_ADDRESS="90.190.173.52:25565";
const ranks=[
["🌾","Farmer","192 пшеницы + 192 моркови + 192 картофеля","/kit farmer"],
["⛏️","Miner","Добудь 300 блоков камня","/kit miner"],
["🎣","Fisher","Поймай 100 рыб/предметов","/kit fisher"],
["🏹","Hunter","Убей 100 мобов","/kit hunter"],
["🧭","Explorer","Пройди 10 000 блоков","/kit explorer"],
["🪓","Lumberjack","Сруби 1000 брёвен","/kit lumberjack"],
["⚔️","Warrior","Убей 10 игроков","/kit warrior"],
["👑","Lord","Клановый ранг для крупного клана","/kit lord"],
["🏆","Veteran","Наиграй 25 дней — 600 часов","/kit veteran"],
["⭐","Master","Собери основные достиженческие ранги","Высший прогресс"],
["🎥","YouTuber","Специальный ранг для создателей контента","Fly 1 мин / 10 мин КД"],
["🛡️","Moderator","Служебный ранг команды сервера","Модерация"]
];

document.querySelectorAll(".server-address").forEach(x=>x.textContent=SERVER_ADDRESS);

document.getElementById("updatesGrid").innerHTML=(window.SERVER_UPDATES||[]).map((x,i)=>`<article class="update ${x.featured?"featured":""}">
<div class="meta"><span>${x.date}</span><b>${x.tag}</b></div><h3>${x.title}</h3><p>${x.text}</p></article>`).join("");

document.getElementById("ranksGrid").innerHTML=ranks.map(r=>`<article class="rank"><div>${r[0]}</div><h3>${r[1]}</h3><p>${r[2]}</p><small>${r[3]}</small></article>`).join("");

const toast=document.getElementById("toast");
async function copyIP(){
  try{await navigator.clipboard.writeText(SERVER_ADDRESS)}
  catch(e){const t=document.createElement("textarea");t.value=SERVER_ADDRESS;document.body.appendChild(t);t.select();document.execCommand("copy");t.remove()}
  toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1600)
}
document.querySelectorAll(".copy").forEach(b=>b.addEventListener("click",copyIP));

const btn=document.getElementById("menuBtn"),nav=document.getElementById("nav");
btn.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
