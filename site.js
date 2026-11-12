/* ============================================================
   PENGATURAN BERSAMA ALZAZ TOUR
   Ubah di sini sekali, semua halaman ikut berubah.
   ============================================================ */
const SITE = {
  name: "Alzaz Tour & Travel",
  waNumber: "6289521758554",          // format 62..., tanpa tanda + atau 0 di depan
  waDisplay: "0895-2175-8554",
  email: "Alzaztourtravel@gmail.com",
  instagram: "alzaztour",
  address: "Isi alamat kantor di sini",
  hours: "Senin sampai Sabtu, 09.00 sampai 17.00"
};

// Ganti dengan paket asli Alzaz Tour. price: angka rupiah, atau null untuk "Hubungi kami".
// image: nama file gambar paket, misalnya "gambar/bangkok-pattaya.jpg". Kosongkan ("") untuk memakai warna dan bendera.
const PACKAGES = [
  { name:"Tour 3 Negara Asia 7D6N", dest:"Malaysia Singapore Thailand", type:"3 Negara", days:7, nights:6, flags:["my","sg","th"], color:"#064d16,#1faa2e", price:null, tag:"", image:"tour-3-negara-7d6n.jpg",
    items:["Malaysia, Singapore, Thailand (Hatyai)","Jadwal Sep 2026 sampai Mar 2027","Bisa berangkat dari kota lain"] },
  { name:"Tour 3 Negara Asia 8D7N Bangkok Pattaya", dest:"Malaysia Singapore Thailand", type:"3 Negara", days:8, nights:7, flags:["my","sg","th"], color:"#0b6b1f,#1faa2e", price:13200000, tag:"", image:"tour-3-negara-bangkok-pattaya-8d7n.jpg",
    items:["Malaysia, Singapore, Bangkok, Pattaya","Jadwal Sep 2026 sampai Mar 2027","Itinerari 8 hari lengkap"] },
  { name:"Tour 2 Negara Malaysia Singapore 4D3N", dest:"Malaysia Singapore", type:"2 Negara", days:4, nights:3, flags:["my","sg"], color:"#064d16,#0b6b1f", price:null, tag:"", image:"tour-2-negara-4d3n.jpg",
    items:["Malaysia dan Singapore","Jadwal Sep 2026 sampai Mar 2027","Cocok untuk liburan singkat"] },
  { name:"Tour 2 Negara Malaysia Singapore 5D4N", dest:"Malaysia Singapore", type:"2 Negara", days:5, nights:4, flags:["my","sg"], color:"#1faa2e,#7bd35b", price:null, tag:"", image:"tour-2-negara-5d4n.jpg",
    items:["Malaysia dan Singapore","Waktu lebih longgar di tiap kota","Jadwal Sep 2026 sampai Mar 2027"] },
  { name:"Tour Bangkok Pattaya 4D3N", dest:"Thailand", type:"Thailand", days:4, nights:3, flags:["th"], color:"#0b6b1f,#b9d900", price:4200000, tag:"", image:"",
    items:["Bangkok dan Pattaya","Keberangkatan SIC, minimal 2 orang","Periode Nov 2026 sampai Mar 2027"] },
  { name:"Bangkok Damnoen Dinner Cruise 4D3N", dest:"Thailand", type:"Thailand", days:4, nights:3, flags:["th"], color:"#064d16,#ffd500", price:null, tag:"", image:"",
    items:["Bangkok dan Damnoen Saduak","Makan malam di kapal pesiar","Itinerari 4 hari"] }
];

/* ============================================================
   Bagian di bawah ini tidak perlu diubah
   ============================================================ */
const wa = msg => `https://wa.me/${SITE.waNumber}?text=${encodeURIComponent(msg)}`;
const rupiah = n => "Rp " + n.toLocaleString("id-ID");

const NAV = [
  ["home",     "index.html",         "Beranda"],
  ["paket",    "paket.html",         "Paket Wisata"],
  ["layanan",  "layanan.html",       "Layanan"],
  ["kenapa",   "kenapa-kami.html",   "Kenapa Kami"],
  ["pesan",    "cara-pesan.html",    "Cara Pesan"],
  ["kontak",   "kontak.html",        "Kontak"]
];

function packageCard(p){
  const msg = `Halo Alzaz Tour, saya tertarik paket ${p.name} (${p.days} hari ${p.nights} malam). Boleh minta jadwal dan harga terbaru?`;
  const price = p.price
    ? `<small>Mulai dari</small><strong>${rupiah(p.price)}</strong>/orang`
    : `<small>Harga</small><strong>Hubungi kami</strong>`;
  return `
    <article class="card">
      <div class="card-top${p.image ? " has-img" : ""}" style="background:${p.image ? `linear-gradient(180deg,rgba(0,0,0,0) 45%,rgba(0,0,0,.45)),url('${p.image}') center/cover no-repeat` : `linear-gradient(135deg,${p.color})`}">
        <span class="flag" aria-hidden="true">${p.flags.map(c => `<img src="https://flagcdn.com/w80/${c}.png" alt="" width="44" height="30" loading="lazy">`).join("")}</span>
        ${p.tag ? `<span class="tag">${p.tag}</span>` : ""}
      </div>
      <div class="card-body">
        <h3>${p.name}</h3>
        <div class="meta"><span>${p.days} hari ${p.nights} malam</span><span>${p.type === "Thailand" ? "1 Negara" : p.type}</span></div>
        <ul>${p.items.map(i => `<li>${i}</li>`).join("")}</ul>
        <div class="price">${price}</div>
        <a class="btn btn-wa" href="${wa(msg)}" target="_blank" rel="noopener">Pesan lewat WhatsApp</a>
      </div>
    </article>`;
}

function renderHeader(active){
  const links = NAV.map(([k,href,label]) =>
    `<li><a href="${href}"${k===active ? ' class="active" aria-current="page"' : ""}>${label}</a></li>`).join("");
  return `
  <header>
    <div class="wrap nav">
      <a href="index.html" class="brand" aria-label="${SITE.name}">
        <img src="logo.png" alt="Logo Alzaz Tour" width="46" height="46">
        <div>Alzaz Tour<small>&amp; TRAVEL</small></div>
      </a>
      <nav id="menu" aria-label="Menu utama"><ul>${links}</ul></nav>
      <a class="btn btn-wa nav-cta" data-wa="Halo Alzaz Tour, saya ingin konsultasi paket wisata." href="#">Chat WhatsApp</a>
      <button class="menu-toggle" id="menuToggle" aria-label="Buka menu" aria-expanded="false" aria-controls="menu">☰</button>
    </div>
  </header>`;
}

function renderFooter(){
  return `
  <footer>
    <div class="wrap">
      <div class="foot-grid">
        <div>
          <div class="foot-brand"><img src="logo.png" alt="" width="52" height="52">${SITE.name}</div>
          <p>Paket wisata, tiket pesawat, dan sewa bus untuk perjalanan yang nyaman.</p>
        </div>
        <div>
          <h3>Menu</h3>
          <ul>${NAV.slice(1).map(([k,href,label]) => `<li><a href="${href}">${label}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h3>Kontak</h3>
          <ul>
            <li>WhatsApp: <a data-wa="Halo Alzaz Tour" href="#">${SITE.waDisplay}</a></li>
            <li>Email: <a href="mailto:${SITE.email}">${SITE.email}</a></li>
            <li>Instagram: <a href="https://instagram.com/${SITE.instagram}" target="_blank" rel="noopener">@${SITE.instagram}</a></li>
            <li>Alamat: ${SITE.address}</li>
            <li>Jam layanan: ${SITE.hours}</li>
          </ul>
        </div>
      </div>
      <p class="copy">© ${new Date().getFullYear()} ${SITE.name}. Semua hak dilindungi.</p>
    </div>
  </footer>
  <a class="wa-float" data-wa="Halo Alzaz Tour, saya ingin bertanya tentang paket wisata." href="#" aria-label="Chat WhatsApp">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6A12 12 0 0 0 12 24c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.5zM12 21.9c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.700 1 1-3.600-.2-.4A9.900 9.900 0 0 1 2.100 12C2.100 6.500 6.500 2.100 12 2.100S21.900 6.500 21.900 12 17.500 21.900 12 21.900zm5.400-7.400c-.3-.1-1.800-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.200-.2.200-.3.200-.6.100-.3-.1-1.200-.4-2.300-1.400-.8-.8-1.400-1.700-1.600-2-.2-.3 0-.5.100-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.200c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.500s1.100 2.900 1.200 3.100c.1.200 2.100 3.300 5.200 4.600.7.300 1.300.5 1.700.6.700.2 1.400.2 1.900.1.600-.1 1.800-.7 2-1.400.3-.7.3-1.300.2-1.400-.1-.1-.3-.2-.6-.3z"/></svg>
    <span>Chat WhatsApp</span>
  </a>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const active = document.body.dataset.page;
  const h = document.getElementById("site-header");
  const f = document.getElementById("site-footer");
  if (h) h.outerHTML = renderHeader(active);
  if (f) f.outerHTML = renderFooter();

  document.querySelectorAll("[data-wa]").forEach(a => {
    a.href = wa(a.dataset.wa); a.target = "_blank"; a.rel = "noopener";
  });

  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
  }
});
