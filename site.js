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

/* ============================================================
   BAHAN ITINERARY (dipakai ulang antar paket)
   Format hari: [judul, isi, makan, hotel]
   ============================================================ */
const M_NONE = "Tidak ada (makan siang dan malam mandiri di sekitar hotel)";
const M_BLD = "Makan pagi, siang, dan malam";
const M_BL = "Makan pagi dan siang";
const M_B = "Makan pagi";

const dKL = hotel => ["Kuala Lumpur",
  "Meeting point Bandara KLIA. Peserta berangkat dari kota masing-masing sesuai jadwal penerbangan. Tiba di Kuala Lumpur, dijemput local guide dan diantar ke hotel untuk beristirahat. Acara bebas.", M_NONE, hotel];
const dGenting = hotel => ["Kuala Lumpur - Genting Highland - Putrajaya - Johor Bahru",
  "Menuju Genting Highland dengan cable car (gratis), lalu makan siang di restoran lokal. Dilanjutkan ke Batu Caves Temple, belanja makanan lokal Malaysia, Istana Negara, KLCC Petronas Twin Tower, Chocolate Factory, dan Putrajaya (photo stop). Makan malam di restoran lokal, lalu menuju Johor Bahru.", M_BLD, hotel];
const dSG = (hotel) => ["Johor Bahru - Singapore City Tour - Melaka",
  "Menyeberang ke Singapore: Jewel Changi Airport, Merlion Park, Sentosa Island (Universal Studio, photo stop), Singapore souvenir center, Gardens by the Bay, dan Orchard Road. Keluar imigrasi Singapore menuju Melaka, makan malam di restoran lokal.", M_BLD, hotel];
const dMelakaKL = hotel => ["Melaka - Kuala Lumpur",
  "Tour Melaka (photo stop): Gedung Merah, Benteng Portugis, Jonker Street, dan lainnya. Lanjut ke Kuala Lumpur, makan siang di restoran lokal, check in hotel, acara bebas.", M_BL, hotel];
const dPattaya = hotel => ["Bangkok - Pattaya",
  "Honey Bee Farm, Great and Grand Sweet Destination, Valley of Dinosaurs (Dinosaurs Park) dengan bus tour, Nongnooch Village (termasuk Thai Culture dan Elephant Show) dengan makan siang prasmanan, Laser Buddha Hill, Erawadee Herb Shop, dan Pattaya Beach di Hard Rock Cafe. Optional cabaret show. Makan malam di restoran lokal, check in hotel di Pattaya.", M_BLD, hotel];
const dBkkBack = hotel => ["Pattaya - Bangkok",
  "Kembali ke Bangkok: Gems Gallery Museum of The Stone dengan train ride, Dried Food Local Product Center, Platinum Fashion Mall (makan siang dengan kupon THB 150/orang), Wat Arun, lalu wisata Sungai Chao Phraya dengan perahu ke Icon Siam Mall dan Sook Siam Floating Market. Makan malam mandiri di Asiatique the Riverfront Night Market.", "Makan pagi dan makan siang (kupon)", hotel];

/* ============================================================
   FASILITAS, BIAYA, DAN SYARAT
   Sumber: brosur itinerary dan dokumen Syarat dan Ketentuan
   Konsorsium Nasional (update 2 dan 5 November 2026).
   ============================================================ */
const INC_MY = n => ["Tiket pesawat pulang pergi", "Bus pariwisata AC", n + " hotel bintang 3 setaraf, sekamar berdua/bertiga (twin/triple)", "Makan pagi, siang, dan malam sesuai jadwal", "Tiket masuk wisata yang tercantum", "Pemandu wisata yang ramah dan berpengalaman"];
const EXC_MY = (tip, ins) => ["Bagasi pesawat pulang pergi", "Optional tour", "Single supplement (jika ingin 1 kamar sendiri)", "Tipping pemandu wisata dan driver Rp " + tip + "/orang", ins, "Makan dan minum di luar program", "Biaya pengeluaran pribadi selama tour"];
const INS_COVID = "Asuransi perjalanan cover Covid-19 Rp 170.000/orang (opsional)";

const DP_MY = [
  "DP per orang (low season / peak season), berangkat dari JKT, MES, PDG, BTJ (Jakarta, Medan, Padang, Banda Aceh): Rp 3.500.000 / Rp 5.500.000",
  "DP berangkat dari SUB, JOG (Surabaya, Yogyakarta): Rp 4.500.000 / Rp 6.500.000",
  "DP berangkat dari kota lainnya: Rp 5.500.000 / Rp 7.500.000",
  "DP Land Tour Only: Rp 2.500.000 / Rp 3.500.000",
  "Pelunasan 20 hari (low season) atau 25 hari (peak season) sebelum tanggal keberangkatan"
];

const TERMS_BASE = [
  "Nama yang didaftarkan harus sesuai paspor. Paspor wajib berlaku minimal 7 bulan saat berangkat, dan salinan paspor dikirim saat pendaftaran.",
  "Wajib vaksin booster.",
  "Pesawat AirAsia atau setaraf. Bagasi kabin 7 kg, koper maksimal ukuran 20 inci.",
  "Jadwal keberangkatan ditentukan oleh Konsorsium Nasional. Grup WhatsApp keberangkatan dibuat H-4, dan tersedia tim handling khusus untuk keberangkatan dari Jakarta.",
  "Wajib mengunjungi dan masuk toko program pemerintah.",
  "Peserta harus sehat jasmani dan rohani. Peserta yang sedang hamil wajib membawa surat keterangan dokter.",
  "Petugas imigrasi berhak menolak atau tidak mengizinkan peserta melakukan perjalanan. Seluruh biaya akibat penolakan menjadi tanggung jawab peserta. Jika visa ditolak, tidak ada pengembalian biaya visa, asuransi, DP, dan biaya lain yang sudah dibayarkan ke maskapai, hotel, dan mitra.",
  "Keterlambatan, perubahan jadwal, dan pembatalan oleh maskapai mengikuti kebijakan maskapai. Biaya reschedule akibat force majeure, bandara tutup, atau penyakit menjadi tanggungan peserta.",
  "Konsorsium Nasional tidak bertanggung jawab atas transportasi penghubung dari dan ke bandara. Untuk transportasi penghubung dari atau ke Jakarta, disarankan membeli tiket yang bisa refund penuh atau dipindah tanggal.",
  "Jika peserta batal sebelum 30 hari keberangkatan, DP hangus. Jika sudah masuk 30 hari sebelum keberangkatan, wajib pelunasan.",
  "Seluruh pembayaran, baik DP maupun pelunasan, tidak dapat dikembalikan dengan alasan apa pun, termasuk meninggal dunia dan kecelakaan medis. Pembayaran tidak dapat dipindahtangankan atau dipindah jadwal. Paket harga promo tidak bisa cancel maupun refund.",
  "Pengaturan kamar mempertimbangkan jenis kelamin dan hubungan keluarga. Jika jumlah akhir ganjil, peserta sekamar bertiga (triple room).",
  "Itinerary dapat berubah tanpa pemberitahuan terlebih dahulu mengikuti kondisi lapangan, cuaca, atau force majeure demi keamanan rombongan. Harga dapat berubah sebelum ada transaksi.",
  "Tour leader berhak meminta peserta keluar dari rombongan jika membuat kerusuhan atau dianggap merugikan negara yang dikunjungi, tanpa pengembalian biaya.",
  "Alur pendaftaran: pilih periode keberangkatan, pilih kota berangkat, kirim paspor, terima invoice dari Konsorsium, bayar DP atau pelunasan, terima tiket pesawat, masuk grup WhatsApp H-4, lalu terima itinerary final.",
  "Dengan membayar DP atau pelunasan, peserta dianggap sudah membaca dan menyetujui seluruh syarat dan ketentuan."
];
const TERMS_MY = [
  "Tour gabungan dengan peserta lain dalam satu kendaraan. Peserta berangkat dan check in mandiri, lalu bertemu tim Konsorsium di Bandara KLIA, Kuala Lumpur.",
  "Pendaftar 1 orang bersedia digabung dengan tamu lain berjenis kelamin sama, sekamar maksimal 3 orang."
].concat(TERMS_BASE);
const TERMS_8D = [
  "Tour gabungan dengan peserta lain dalam satu kendaraan. Peserta berangkat dan check in mandiri, lalu bertemu tim Konsorsium di Bandara KLIA (Kuala Lumpur) dan Bandara BKK (Bangkok).",
  "Makanan sesuai itinerary (tanpa babi dan lard)."
].concat(TERMS_BASE);
const TERMS_TH = [
  "Tour SIC (Seat in Coach), yaitu tour gabungan, minimal 2 orang. Peserta berangkat dan check in mandiri, lalu bertemu tim Konsorsium atau local guide di Bandara Don Mueang atau Suvarnabhumi, Bangkok.",
  "Nama yang didaftarkan harus sesuai paspor. Paspor wajib berlaku minimal 8 bulan saat berangkat, dan peserta wajib mengirim paspor serta sertifikat vaksin booster.",
  "Makanan sesuai program (tanpa babi dan lard). Wajib mengunjungi dan masuk toko program pemerintah.",
  "Tiket pesawat pulang pergi dikirim 20 hari sebelum keberangkatan. Kontak local guide melalui WhatsApp H-2, dan itinerary final dikirim 2 hari sebelum keberangkatan.",
  "Peserta harus sehat jasmani dan rohani.",
  "Petugas imigrasi berhak menolak atau tidak mengizinkan peserta melakukan perjalanan. Seluruh biaya akibat penolakan menjadi tanggung jawab peserta.",
  "Konsorsium tidak bertanggung jawab atas transportasi penghubung dari dan ke bandara. Untuk transportasi dari atau ke Jakarta, disarankan membeli tiket yang bisa refund penuh atau dipindah tanggal.",
  "Pembatalan atau pergantian peserta tidak diperkenankan. Jika peserta batal sebelum 30 hari keberangkatan, DP hangus. Jika sudah masuk 30 hari sebelum keberangkatan, wajib pelunasan.",
  "Seluruh pembayaran, baik DP maupun pelunasan, tidak dapat dikembalikan dengan alasan apa pun, termasuk meninggal dunia dan kecelakaan medis.",
  "Dalam keadaan force majeure (cuaca, bencana alam, kerusuhan, keterlambatan atau pembatalan maskapai, kehilangan koper, dan lainnya), susunan dan jadwal perjalanan dapat berubah tanpa pemberitahuan. Biaya layanan yang tidak terpakai tidak dikembalikan.",
  "Harga tidak berlaku untuk periode high season. Itinerary dapat berubah tanpa pemberitahuan terlebih dahulu.",
  "Alur pendaftaran: pilih periode keberangkatan, pilih bandara kedatangan di Bangkok, kirim paspor dan sertifikat vaksin booster, terima invoice, bayar DP atau pelunasan, terima tiket pesawat, hubungi local guide, lalu terima itinerary final.",
  "Dengan membayar DP atau pelunasan, peserta dianggap sudah membaca dan menyetujui seluruh syarat dan ketentuan."
];
const EXC_TH = ["Bagasi pesawat pulang pergi", "Tips driver dan guide Rp 380.000/orang (dibayar saat pelunasan)", "Asuransi perjalanan", "Biaya pribadi (obat-obatan, laundry, minibar, telepon, layanan kamar, dan lainnya)", "Optional tour"];
const COSTS_TH = ["DP paket tour (Land Tour + tiket pesawat): Rp 3.000.000 per orang. Pelunasan 20 hari sebelum tanggal keberangkatan.", "Pembelian Land Tour Only langsung pelunasan.", "Tips driver dan guide Rp 380.000/orang dibayarkan saat pelunasan."];

/* ============================================================
   DATA PAKET
   price: angka rupiah tanpa titik, atau null untuk "Hubungi kami"
   slug : nama unik untuk alamat detail (huruf kecil, pakai strip)
   ============================================================ */
const PACKAGES = [
  { slug:"3-negara-7d6n", name:"Tour 3 Negara Asia 7D6N", dest:"Malaysia Singapore Thailand", type:"3 Negara", days:7, nights:6, color:"#064d16,#1faa2e", price:6990000, tag:"", image:"tour-3-negara-7d6n.png",
    items:["Malaysia, Singapore, Thailand (Hatyai)","Jadwal Sep 2026 sampai Mar 2027","Bisa berangkat dari kota lain"],
    schedule:["Berangkat setiap Rabu","Periode Sep 2026 sampai Mar 2027","Bisa berangkat dari seluruh kota/airport di Indonesia","Meeting point: Bandara KLIA, Kuala Lumpur"],
    bonus:["Free cable car Genting Highland","Bisa daftar 1 orang tanpa biaya tambahan"],
    itinerary:[
      dKL("Alamis Hotel / setaraf bintang 3, Kuala Lumpur"),
      dGenting("Millesime Hotel / setaraf bintang 3, Johor Bahru"),
      dSG("Balik Pulau Hotel / setaraf bintang 3, Melaka"),
      ["Melaka - Dannok (Thailand)", "Tour Melaka (photo stop): Gedung Merah, Benteng Portugis, Jonker Street, dan lainnya. Perjalanan menuju Dannok, Thailand, makan siang dan makan malam di restoran lokal.", M_BLD, "M Hotel / setaraf bintang 3, Dannok, Thailand"],
      ["Hatyai City Tour (Thailand)", "Erawadee Thai Herbal Shop, belanja oleh-oleh di Toko Kaos Kaysorn dan Nora Plaza (barang kulit khas Thailand), makan siang di restoran lokal, Sleeping Buddha (Wat Phranon Laem Pho), Samila Beach dan Mermaid Statue. Lanjut ke Hatyai Floating Market (buka khusus akhir pekan), makan malam masing-masing.", M_BL, "ATK Garden Hotel / setaraf bintang 3, Hatyai, Thailand"],
      ["Hatyai - Kuala Lumpur", "Perjalanan menuju Kuala Lumpur, makan siang dan makan malam di restoran lokal, check in hotel, acara bebas.", M_BLD, "Alamis Hotel / setaraf bintang 3, Kuala Lumpur"],
      ["Transfer out", "Free time sambil menunggu jadwal keberangkatan ke kota masing-masing, lalu diantar ke KLIA. Acara tour selesai.", M_B, ""]
    ],
    included: INC_MY("6 malam").map((x,i) => i===2 ? "6 malam hotel bintang 3/4 setaraf, sekamar berdua/bertiga (twin/triple)" : x),
    excluded: EXC_MY("650.000", INS_COVID),
    costs: ["Single supplement: Rp 1.950.000 (low season) / Rp 2.750.000 (peak season)"].concat(DP_MY),
    terms: TERMS_MY },

  { slug:"3-negara-bangkok-pattaya-8d7n", name:"Tour 3 Negara Asia 8D7N Bangkok Pattaya", dest:"Malaysia Singapore Thailand", type:"3 Negara", days:8, nights:7, color:"#0b6b1f,#1faa2e", price:13200000, tag:"", image:"tour-3-negara-bangkok-pattaya-8d7n.png",
    items:["Malaysia, Singapore, Bangkok, Pattaya","Jadwal Sep 2026 sampai Mar 2027","Itinerari 8 hari lengkap"],
    schedule:["Periode Sep 2026 sampai Mar 2027","Tanggal pasti: tanya admin lewat WhatsApp","Meeting point: Bandara KLIA (Kuala Lumpur) dan Bandara BKK (Bangkok)"],
    bonus:["Free cable car Genting Highland"],
    itinerary:[
      dKL("Kingston 20 Hotel / setaraf bintang 3, Kuala Lumpur"),
      dGenting("Millesime Hotel / setaraf bintang 3, Johor Bahru"),
      dSG("Kingston 17 Hotel / setaraf bintang 3, Melaka"),
      dMelakaKL("Kingston 05 Hotel / setaraf bintang 3, Kuala Lumpur"),
      ["Kuala Lumpur - Bangkok (Thailand)", "Diantar ke bandara untuk penerbangan menuju Bangkok. Tiba di Bangkok, dijemput guide, check in hotel, istirahat, acara bebas.", M_B, "Thomson Hotel / setaraf bintang 3, Bangkok"],
      dPattaya("The Season Hotel / setaraf bintang 3, Pattaya"),
      dBkkBack("Thomson Hotel / setaraf bintang 3, Bangkok"),
      ["Departure", "Setelah sarapan di hotel, menunggu penjemputan ke bandara.", M_B, ""]
    ],
    included: INC_MY("7 malam"),
    excluded: EXC_MY("700.000", "Asuransi perjalanan"),
    costs: ["Single supplement: Rp 3.000.000 (low season) / Rp 4.000.000 (peak season)", "DP per orang (low season): berangkat dari Jakarta Rp 6.500.000, dari Surabaya Rp 8.500.000, Land Tour Only Rp 3.500.000", "Pelunasan 20 hari sebelum tanggal keberangkatan"],
    terms: TERMS_8D },

  { slug:"2-negara-4d3n", name:"Tour 2 Negara Malaysia Singapore 4D3N", dest:"Malaysia Singapore", type:"2 Negara", days:4, nights:3, color:"#064d16,#0b6b1f", price:6390000, tag:"", image:"tour-2-negara-4d3n.png",
    items:["Malaysia dan Singapore","Jadwal Sep 2026 sampai Mar 2027","Cocok untuk liburan singkat"],
    schedule:["Berangkat setiap Rabu","Periode Sep 2026 sampai Mar 2027","Bisa berangkat dari seluruh kota/airport di Indonesia","Meeting point: Bandara KLIA, Kuala Lumpur"],
    bonus:["Free cable car Genting Highland","Bisa daftar 1 orang tanpa biaya tambahan"],
    itinerary:[
      dKL("Alamis Hotel / setaraf bintang 3, Kuala Lumpur"),
      dGenting("Millesime Hotel / setaraf bintang 3, Johor Bahru"),
      dSG("Balik Pulau Hotel / setaraf bintang 3, Melaka"),
      ["Melaka - Transfer out", "Tour Melaka (photo stop): Gedung Merah, Benteng Portugis, Jonker Street, dan lainnya. Lanjut ke Kuala Lumpur, makan siang di restoran lokal, lalu diantar ke KLIA. Acara tour selesai.", M_BL, ""]
    ],
    included: ["Tiket pesawat pulang pergi", "Bagasi kabin 7 kg"].concat(INC_MY("3 malam").slice(1)),
    excluded: EXC_MY("550.000", INS_COVID),
    costs: ["Single supplement: Rp 1.450.000 (low season) / Rp 2.200.000 (peak season)"].concat(DP_MY),
    terms: TERMS_MY },

  { slug:"2-negara-5d4n", name:"Tour 2 Negara Malaysia Singapore 5D4N", dest:"Malaysia Singapore", type:"2 Negara", days:5, nights:4, color:"#1faa2e,#7bd35b", price:6590000, tag:"", image:"tour-2-negara-5d4n.png",
    items:["Malaysia dan Singapore","Waktu lebih longgar di tiap kota","Jadwal Sep 2026 sampai Mar 2027"],
    schedule:["Periode Sep 2026 sampai Mar 2027","Tanggal pasti: tanya admin lewat WhatsApp","Meeting point: Bandara KLIA, Kuala Lumpur"],
    bonus:["Free cable car Genting Highland","Bisa daftar 1 orang tanpa biaya tambahan"],
    itinerary:[
      dKL("Alamis Hotel / setaraf bintang 3, Kuala Lumpur"),
      dGenting("Millesime Hotel / setaraf bintang 3, Johor Bahru"),
      dSG("Balik Pulau Hotel / setaraf bintang 3, Melaka"),
      dMelakaKL("Alamis Hotel / setaraf bintang 3, Kuala Lumpur"),
      ["Transfer out", "Free time sambil menunggu jadwal keberangkatan ke kota masing-masing. Acara tour selesai.", M_B, ""]
    ],
    included: ["Tiket pesawat pulang pergi", "Bagasi kabin 7 kg"].concat(INC_MY("4 malam").slice(1)),
    excluded: EXC_MY("550.000", INS_COVID),
    costs: ["Single supplement: Rp 1.700.000 (low season) / Rp 2.450.000 (peak season)"].concat(DP_MY),
    terms: TERMS_MY },

  { slug:"bangkok-pattaya-4d3n", name:"Tour Bangkok Pattaya 4D3N", dest:"Thailand", type:"Thailand", days:4, nights:3, color:"#0b6b1f,#b9d900", price:6450000, tag:"", image:"tour-bangkok-pattaya-4d3n.png",
    items:["Bangkok dan Pattaya","Keberangkatan SIC, minimal 2 orang","Periode Nov 2026 sampai Mar 2027"],
    schedule:["Keberangkatan SIC (tour gabungan), minimal 2 orang","Periode Nov 2026 sampai Mar 2027","Meeting point: Bandara Don Mueang atau Suvarnabhumi, Bangkok"],
    itinerary:[
      ["Tiba di Bangkok", "Penjemputan di bandara, check in hotel, bermalam di Bangkok.", "Tidak ada", ""],
      dPattaya(""),
      dBkkBack(""),
      ["Departure", "Setelah sarapan di hotel, menunggu penjemputan ke bandara.", M_B, ""]
    ],
    included: ["Tiket pesawat pulang pergi", "Akomodasi hotel sesuai pilihan", "Transportasi", "Driver/guide berbahasa Indonesia", "Makan dan tour sesuai program", "Air mineral 1 botol (600 ml) per hari", "Tiket masuk objek wisata"],
    excluded: EXC_TH,
    costs: COSTS_TH,
    terms: TERMS_TH },

  { slug:"bangkok-damnoen-dinner-cruise-4d3n", name:"Bangkok Damnoen Dinner Cruise 4D3N", dest:"Thailand", type:"Thailand", days:4, nights:3, color:"#064d16,#ffd500", price:6850000, tag:"", image:"tour-bangkok-damnoen-dinner-cruise-4d3n.png",
    items:["Bangkok dan Damnoen Saduak","Makan malam di kapal pesiar","Itinerari 4 hari"],
    schedule:["Keberangkatan SIC (tour gabungan), minimal 2 orang","Periode Nov 2026 sampai Mar 2027","Meeting point: Bandara Don Mueang atau Suvarnabhumi, Bangkok"],
    bonus:["Free Calypso Cabaret Show di Asiatique the Riverfront Night Market"],
    itinerary:[
      ["Tiba di Bangkok", "Penjemputan dari bandara, transfer check in hotel, bermalam di Bangkok.", "Tidak ada", ""],
      ["Bangkok - Damnoen", "Damnoen Saduak Floating Market (termasuk boat canal tour sekitar 45-60 menit), Meaklong Railway Market, makan siang di restoran lokal. Kembali ke Bangkok: Erawadee Herb Shop, Icon Siam dan Sook Siam Floating Market di dalam mall, lalu Chao Phraya Dinner Cruise. Kembali ke hotel.", "Makan pagi, siang, dan makan malam di cruise", ""],
      ["Bangkok City Tour", "Gems Gallery Museum, wisata Sungai Chao Phraya dengan perahu, Wat Arun, Wat Pak Nam (patung Buddha terbesar di Bangkok), Khlong Bang Luang Baan Silapin (floating market kuno), makan siang di restoran lokal, Dried Food, Honey Bee Farm, dan Platinum Fashion Mall. Makan malam di restoran lokal, Free Calypso Cabaret Show di Asiatique the Riverfront Night Market, lalu kembali ke hotel.", "Makan pagi, makan siang (kupon), dan makan malam", ""],
      ["Departure", "Setelah makan pagi di hotel, acara bebas sampai diantar ke bandara.", M_B, ""]
    ],
    included: ["Tiket pesawat pulang pergi", "Akomodasi hotel bintang 3 / setaraf", "Transportasi", "Driver/guide berbahasa Indonesia", "Makan dan tour sesuai program", "Makan malam di cruise (hari ke-2)", "Air mineral 1 botol (600 ml) per hari", "Tiket masuk objek wisata"],
    excluded: EXC_TH.concat(["Aktivitas perahu tambahan di Wat Pak Nam untuk foto dokumentasi THB 300/orang (opsional)"]),
    costs: COSTS_TH,
    terms: TERMS_TH }
];

/* ============================================================
   Bagian di bawah ini tidak perlu diubah
   ============================================================ */
const wa = msg => `https://wa.me/${SITE.waNumber}?text=${encodeURIComponent(msg)}`;
const rupiah = n => "Rp " + n.toLocaleString("id-ID");
const findPackage = slug => PACKAGES.find(p => p.slug === slug);

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
  const detail = `detail.html?p=${p.slug}`;
  const price = p.price
    ? `<small>Mulai dari</small><strong>${rupiah(p.price)}</strong>/orang`
    : `<small>Harga</small><strong>Hubungi kami</strong>`;
  const bg = p.image
    ? `linear-gradient(180deg,rgba(0,0,0,0) 45%,rgba(0,0,0,.45)),url('${p.image}') center/cover no-repeat`
    : `linear-gradient(135deg,${p.color})`;
  const flags = (p.flags || []).map(c =>
    `<img src="https://flagcdn.com/w80/${c}.png" alt="" width="44" height="30" loading="lazy">`).join("");
  return `
    <article class="card">
      <a href="${detail}" aria-label="Lihat detail ${p.name}" style="display:block;text-decoration:none">
        <div class="card-top${p.image ? " has-img" : ""}" style="background:${bg}">
          <span class="flag" aria-hidden="true">${flags}</span>
          ${p.tag ? `<span class="tag">${p.tag}</span>` : ""}
        </div>
      </a>
      <div class="card-body">
        <h3><a href="${detail}" style="color:inherit;text-decoration:none">${p.name}</a></h3>
        <div class="meta"><span>${p.days} hari ${p.nights} malam</span><span>${p.type === "Thailand" ? "1 Negara" : p.type}</span></div>
        <ul>${p.items.map(i => `<li>${i}</li>`).join("")}</ul>
        <div class="price">${price}</div>
        <a class="btn btn-outline" href="${detail}" style="margin-bottom:10px">Lihat detail paket</a>
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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6A12 12 0 0 0 12 24c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.5zM12 21.9c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.9 9.9 0 0 1 2.1 12C2.1 6.5 6.5 2.1 12 2.1S21.9 6.5 21.9 12 17.5 21.9 12 21.9zm5.4-7.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"/></svg>
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
