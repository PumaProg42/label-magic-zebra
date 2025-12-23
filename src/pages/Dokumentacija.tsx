import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Printer, BookOpen, Monitor, Tag, Type, Barcode, QrCode, Image, Square, Save, Printer as PrinterIcon, FileCode, CreditCard, Keyboard, AlertCircle, HelpCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Dokumentacija = () => {
  const tocItems = [
    { id: "uvod", label: "1. Uvod", icon: BookOpen },
    { id: "zacetek", label: "2. Začetek uporabe", icon: Monitor },
    { id: "vmesnik", label: "3. Pregled vmesnika", icon: Monitor },
    { id: "nastavitve", label: "4. Nastavitve etikete", icon: Tag },
    { id: "elementi", label: "5. Delo z elementi", icon: Square },
    { id: "besedilo", label: "6. Besedilo", icon: Type },
    { id: "crtne-kode", label: "7. Črtne kode", icon: Barcode },
    { id: "qr-kode", label: "8. QR kode", icon: QrCode },
    { id: "slike", label: "9. Slike in logotipi", icon: Image },
    { id: "oblike", label: "10. Oblike in črte", icon: Square },
    { id: "shranjevanje", label: "11. Shranjevanje", icon: Save },
    { id: "tiskanje", label: "12. Tiskanje", icon: PrinterIcon },
    { id: "izvoz-zpl", label: "13. Izvoz ZPL", icon: FileCode },
    { id: "narocnina", label: "14. Naročnina", icon: CreditCard },
    { id: "bliznjice", label: "15. Bližnjice", icon: Keyboard },
    { id: "tezave", label: "16. Odpravljanje težav", icon: AlertCircle },
    { id: "faq", label: "17. FAQ", icon: HelpCircle },
  ];

  return (
    <>
      <Helmet>
        <title>Dokumentacija - Label Designer PTI</title>
        <meta name="description" content="Uporabniški priročnik za Label Designer PTI. Naučite se oblikovati etikete za Zebra tiskalnike." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container-wide py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Nazaj
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                  <Printer className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-bold">Label Designer PTI</span>
              </div>
            </div>
            <span className="text-sm text-muted-foreground hidden sm:block">Dokumentacija v1.0</span>
          </div>
        </header>

        <div className="container-wide py-12">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12">
            {/* Sidebar TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <h3 className="font-semibold mb-4 text-lg">Kazalo</h3>
                <nav className="space-y-1">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main className="prose prose-lg max-w-none dark:prose-invert">
              {/* Title */}
              <div className="not-prose mb-12">
                <h1 className="text-4xl font-bold mb-4">Dokumentacija</h1>
                <p className="text-xl text-muted-foreground">
                  Uporabniški priročnik za Label Designer PTI
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Različica: 1.0 • Zadnja posodobitev: December 2024
                </p>
              </div>

              {/* 1. UVOD */}
              <section id="uvod" className="scroll-mt-24">
                <h2>1. Uvod</h2>
                
                <h3>1.1 Kaj je Label Designer PTI?</h3>
                <p>
                  Label Designer PTI je spletna aplikacija za vizualno oblikovanje termičnih etiket za Zebra tiskalnike. Omogoča vam:
                </p>
                <ul>
                  <li>Ustvarjanje etiket s preprostim vlečenjem elementov (drag-and-drop)</li>
                  <li>Dodajanje besedila, črtnih kod, QR kod in slik</li>
                  <li>Natančno pozicioniranje z ravnili v milimetrih</li>
                  <li>Neposredno tiskanje na Zebra tiskalnike preko omrežja</li>
                  <li>Izvoz v ZPL format za integracijo z vašim ERP/WMS sistemom</li>
                  <li>Shranjevanje etiket v oblaku</li>
                </ul>

                <h3>1.2 Sistemske zahteve</h3>
                <p><strong>Brskalnik (eden izmed):</strong></p>
                <ul>
                  <li>Google Chrome 90+ (priporočeno)</li>
                  <li>Microsoft Edge 90+</li>
                  <li>Mozilla Firefox 90+</li>
                  <li>Safari 14+</li>
                </ul>

                <p><strong>Internetna povezava:</strong></p>
                <ul>
                  <li>Stabilna povezava za delo z aplikacijo</li>
                  <li>Za tiskanje: tiskalnik mora biti v istem omrežju</li>
                </ul>

                <p><strong>Zebra tiskalnik (za tiskanje):</strong></p>
                <ul>
                  <li>Katerikoli Zebra termični tiskalnik z ZPL podporo</li>
                  <li>Povezan v omrežje (ethernet ali WiFi)</li>
                  <li>Znan IP naslov tiskalnika</li>
                </ul>

                <h3>1.3 Podprti tiskalniki</h3>
                <p>Label Designer PTI deluje z vsemi Zebra tiskalniki, ki podpirajo ZPL jezik:</p>
                
                <div className="not-prose overflow-x-auto">
                  <table className="w-full text-sm border border-border rounded-lg">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium">Serija</th>
                        <th className="px-4 py-3 text-left font-medium">Modeli</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr><td className="px-4 py-3">ZD serija</td><td className="px-4 py-3">ZD420, ZD620, ZD421, ZD621</td></tr>
                      <tr><td className="px-4 py-3">ZT serija</td><td className="px-4 py-3">ZT410, ZT420, ZT610, ZT620, ZT230, ZT231</td></tr>
                      <tr><td className="px-4 py-3">GK/GX serija</td><td className="px-4 py-3">GK420d, GK420t, GX420d, GX420t, GX430t</td></tr>
                      <tr><td className="px-4 py-3">ZQ serija</td><td className="px-4 py-3">ZQ510, ZQ520, ZQ610, ZQ620 (mobilni)</td></tr>
                      <tr><td className="px-4 py-3">Druge</td><td className="px-4 py-3">Vsi tiskalniki z ZPL podporo</td></tr>
                    </tbody>
                  </table>
                </div>
                <p><strong>Podprte resolucije:</strong> 203 DPI, 300 DPI, 600 DPI</p>
              </section>

              {/* 2. ZAČETEK UPORABE */}
              <section id="zacetek" className="scroll-mt-24">
                <h2>2. Začetek uporabe</h2>

                <h3>2.1 Registracija</h3>
                <ol>
                  <li>Obiščite spletno stran Label Designer PTI</li>
                  <li>Kliknite <strong>"Registracija"</strong> ali <strong>"Preizkusite brezplačno"</strong></li>
                  <li>Vnesite vaš e-poštni naslov</li>
                  <li>Ustvarite geslo (najmanj 6 znakov)</li>
                  <li>Kliknite <strong>"Registracija"</strong></li>
                  <li>Preverite e-pošto in kliknite potrditveno povezavo</li>
                  <li>Prijavite se z vašimi podatki</li>
                </ol>
                <p><strong>Brezplačni preizkus:</strong> Ob registraciji prejmete 14-dnevni brezplačni preizkus z vsemi funkcionalnostmi.</p>

                <h3>2.2 Prijava</h3>
                <ol>
                  <li>Obiščite spletno stran Label Designer PTI</li>
                  <li>Vnesite vaš e-poštni naslov in geslo</li>
                  <li>Kliknite <strong>"Prijava"</strong></li>
                </ol>

                <h3>2.3 Pozabljeno geslo</h3>
                <ol>
                  <li>Na prijavni strani kliknite <strong>"Pozabljeno geslo?"</strong></li>
                  <li>Vnesite vaš e-poštni naslov</li>
                  <li>Kliknite <strong>"Pošlji email"</strong></li>
                  <li>Preverite e-pošto in kliknite povezavo za ponastavitev</li>
                  <li>Vnesite novo geslo</li>
                </ol>
              </section>

              {/* 3. PREGLED VMESNIKA */}
              <section id="vmesnik" className="scroll-mt-24">
                <h2>3. Pregled vmesnika</h2>

                <h3>3.1 Struktura zaslona</h3>
                <div className="not-prose bg-muted/50 rounded-xl p-6 font-mono text-xs overflow-x-auto">
                  <pre>{`┌─────────────────────────────────────────────────────────────────┐
│                     NASLOVNA VRSTICA                            │
│  [Ime etikete] [Širina] [Višina] [DPI] [Rotacija] [Shrani] [Print]
├────────────┬────────────────────────────────────┬───────────────┤
│            │                                    │               │
│   ORODNA   │                                    │   LASTNOSTI   │
│   VRSTICA  │         DELOVNA POVRŠINA           │     PANEL     │
│            │                                    │               │
│  • Text    │    ┌────────────────────┐          │  Pozicija     │
│  • Image   │    │                    │          │  Velikost     │
│  • Barcode │    │      ETIKETA       │          │  Rotacija     │
│  • Rect    │    │                    │          │  Pisava       │
│  • Ellipse │    │                    │          │  Poravnava    │
│  • Line    │    └────────────────────┘          │               │
│            │         ↑                          │               │
│  • Clear   │      Ravnila (mm)                  │               │
│  • Zoom    │                                    │               │
│            │                                    │               │
└────────────┴────────────────────────────────────┴───────────────┘`}</pre>
                </div>

                <h3>3.2 Naslovna vrstica</h3>
                <div className="not-prose overflow-x-auto">
                  <table className="w-full text-sm border border-border rounded-lg">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium">Element</th>
                        <th className="px-4 py-3 text-left font-medium">Opis</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr><td className="px-4 py-3 font-medium">Ime etikete</td><td className="px-4 py-3">Vnesite ime za shranjevanje etikete</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Širina (mm)</td><td className="px-4 py-3">Širina etikete v milimetrih</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Višina (mm)</td><td className="px-4 py-3">Višina etikete v milimetrih</td></tr>
                      <tr><td className="px-4 py-3 font-medium">DPI</td><td className="px-4 py-3">Resolucija tiskalnika (203, 300, 600)</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Rotacija 180°</td><td className="px-4 py-3">Obrne etiketo za tiskanje</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Shrani</td><td className="px-4 py-3">Shrani etiketo v oblak</td></tr>
                      <tr><td className="px-4 py-3 font-medium">PRINT</td><td className="px-4 py-3">Odpre možnosti tiskanja</td></tr>
                    </tbody>
                  </table>
                </div>

                <h3>3.3 Orodna vrstica (levo)</h3>
                <div className="not-prose overflow-x-auto">
                  <table className="w-full text-sm border border-border rounded-lg">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium">Orodje</th>
                        <th className="px-4 py-3 text-left font-medium">Opis</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr><td className="px-4 py-3 font-medium">Text</td><td className="px-4 py-3">Dodaj besedilo (fiksno, placeholder, večvrstično)</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Image</td><td className="px-4 py-3">Naloži sliko ali logotip</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Barcode</td><td className="px-4 py-3">Dodaj črtno kodo ali QR kodo</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Rectangle</td><td className="px-4 py-3">Dodaj pravokotnik</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Ellipse</td><td className="px-4 py-3">Dodaj elipso/krog</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Line</td><td className="px-4 py-3">Dodaj vodoravno ali navpično črto</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Export ZPL</td><td className="px-4 py-3">Izvozi ZPL kodo</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Clear Label</td><td className="px-4 py-3">Pobriši vse elemente</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Zoom</td><td className="px-4 py-3">Povečava/pomanjšava (10% - 300%)</td></tr>
                    </tbody>
                  </table>
                </div>

                <h3>3.4 Delovna površina (sredina)</h3>
                <ul>
                  <li><strong>Belo območje</strong> = vaša etiketa</li>
                  <li><strong>Sivo območje</strong> = prostor izven etikete</li>
                  <li><strong>Ravnila</strong> = milimetrska skala na vrhu in levi strani</li>
                  <li><strong>Modre vodilne črte</strong> = pomagajo pri poravnavi elementov</li>
                </ul>

                <h3>3.5 Panel lastnosti (desno)</h3>
                <p>Ko izberete element, se prikažejo njegove lastnosti:</p>
                <ul>
                  <li><strong>X, Y</strong> - Pozicija elementa v pikslih</li>
                  <li><strong>Širina, Višina</strong> - Dimenzije elementa</li>
                  <li><strong>Rotacija</strong> - Kot zasuka (0°, 90°, 180°, 270°)</li>
                  <li><strong>Pisava</strong> - Velikost, širina, višina znakov</li>
                  <li><strong>Poravnava</strong> - Levo, sredina, desno</li>
                  <li><strong>Debelina črte</strong> - Za oblike in črte</li>
                </ul>
              </section>

              {/* 4. NASTAVITVE ETIKETE */}
              <section id="nastavitve" className="scroll-mt-24">
                <h2>4. Nastavitve etikete</h2>

                <h3>4.1 Dimenzije etikete</h3>
                <p><strong>Širina in višina</strong> sta podani v milimetrih (mm).</p>
                <ol>
                  <li>V naslovni vrstici vnesite želeno širino v polje <strong>"Width (mm)"</strong></li>
                  <li>Vnesite želeno višino v polje <strong>"Height (mm)"</strong></li>
                  <li>Delovna površina se samodejno prilagodi</li>
                </ol>

                <p><strong>Primeri pogostih velikosti:</strong></p>
                <div className="not-prose overflow-x-auto">
                  <table className="w-full text-sm border border-border rounded-lg">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium">Uporaba</th>
                        <th className="px-4 py-3 text-left font-medium">Širina</th>
                        <th className="px-4 py-3 text-left font-medium">Višina</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr><td className="px-4 py-3">Majhna cenovna etiketa</td><td className="px-4 py-3">40 mm</td><td className="px-4 py-3">20 mm</td></tr>
                      <tr><td className="px-4 py-3">Standardna etiketa</td><td className="px-4 py-3">100 mm</td><td className="px-4 py-3">50 mm</td></tr>
                      <tr><td className="px-4 py-3">Transportna etiketa</td><td className="px-4 py-3">100 mm</td><td className="px-4 py-3">150 mm</td></tr>
                      <tr><td className="px-4 py-3">Polična etiketa</td><td className="px-4 py-3">70 mm</td><td className="px-4 py-3">40 mm</td></tr>
                    </tbody>
                  </table>
                </div>

                <h3>4.2 DPI (Dots Per Inch)</h3>
                <p>DPI določa resolucijo vašega tiskalnika. <strong>Nastavitev mora ustrezati vašemu tiskalniku!</strong></p>
                <div className="not-prose overflow-x-auto">
                  <table className="w-full text-sm border border-border rounded-lg">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium">DPI</th>
                        <th className="px-4 py-3 text-left font-medium">Opis</th>
                        <th className="px-4 py-3 text-left font-medium">Uporaba</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr><td className="px-4 py-3 font-medium">203 DPI</td><td className="px-4 py-3">Standardna resolucija</td><td className="px-4 py-3">Večina namiznih tiskalnikov</td></tr>
                      <tr><td className="px-4 py-3 font-medium">300 DPI</td><td className="px-4 py-3">Visoka resolucija</td><td className="px-4 py-3">Podrobnejše etikete, manjše črtne kode</td></tr>
                      <tr><td className="px-4 py-3 font-medium">600 DPI</td><td className="px-4 py-3">Ultra visoka resolucija</td><td className="px-4 py-3">Zelo majhne etikete, precizni tisk</td></tr>
                    </tbody>
                  </table>
                </div>

                <h3>4.3 Rotacija 180°</h3>
                <p>Označite <strong>"Rotate 180°"</strong> če:</p>
                <ul>
                  <li>Etikete izstopajo v napačni smeri</li>
                  <li>Želite obrnjen tisk</li>
                  <li>Tiskalnik montiran "na glavo"</li>
                </ul>
              </section>

              {/* 5. DELO Z ELEMENTI */}
              <section id="elementi" className="scroll-mt-24">
                <h2>5. Delo z elementi</h2>

                <h3>5.1 Dodajanje elementov</h3>
                <p><strong>Možnost 1: Klik na orodje</strong></p>
                <ol>
                  <li>Kliknite orodje v orodni vrstici (npr. Text)</li>
                  <li>Element se doda na sredino etikete</li>
                  <li>Povlecite element na želeno pozicijo</li>
                </ol>

                <h3>5.2 Izbira elementa</h3>
                <ul>
                  <li><strong>En klik</strong> na element ga izbere</li>
                  <li>Izbran element ima <strong>modre kontrolne točke</strong></li>
                  <li>V panelu desno se prikažejo lastnosti</li>
                </ul>

                <h3>5.3 Premikanje elementov</h3>
                <p><strong>Z miško:</strong> Kliknite in povlecite element na novo pozicijo</p>
                <p><strong>Z tipkovnico:</strong></p>
                <ul>
                  <li>Puščice premikajo izbrani element za 1 piksel</li>
                  <li>Shift + puščice premikajo za 10 pikslov</li>
                </ul>
                <p><strong>Natančno pozicioniranje:</strong> V panelu lastnosti vnesite točne X in Y koordinate</p>

                <h3>5.4 Spreminjanje velikosti</h3>
                <ol>
                  <li>Izberite element</li>
                  <li>Povlecite <strong>modro kontrolno točko</strong> na robu ali vogalu</li>
                  <li>Vogalne točke ohranjajo razmerje (pri nekaterih elementih)</li>
                  <li>Robne točke spreminjajo samo eno dimenzijo</li>
                </ol>

                <h3>5.5 Rotacija elementov</h3>
                <ol>
                  <li>Izberite element</li>
                  <li>V panelu lastnosti izberite <strong>Rotacija</strong>: 0°, 90°, 180° ali 270°</li>
                </ol>
                <p><strong>Opomba:</strong> Rotacija je omejena na te štiri kote zaradi omejitev ZPL jezika.</p>

                <h3>5.6 Kopiranje in lepljenje</h3>
                <p><strong>Kopiranje:</strong> Izberite element → Ctrl+C (Windows) / Cmd+C (Mac)</p>
                <p><strong>Lepljenje:</strong> Ctrl+V (Windows) / Cmd+V (Mac)</p>

                <h3>5.7 Brisanje elementa</h3>
                <p>Izberite element → pritisnite <strong>Delete</strong> ali <strong>Backspace</strong></p>
              </section>

              {/* 6. BESEDILO */}
              <section id="besedilo" className="scroll-mt-24">
                <h2>6. Besedilo</h2>

                <h3>6.1 Vrste besedila</h3>
                <div className="not-prose overflow-x-auto">
                  <table className="w-full text-sm border border-border rounded-lg">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium">Vrsta</th>
                        <th className="px-4 py-3 text-left font-medium">Uporaba</th>
                        <th className="px-4 py-3 text-left font-medium">Primer</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr><td className="px-4 py-3 font-medium">Fiksno besedilo</td><td className="px-4 py-3">Statično besedilo, enako na vseh etiketah</td><td className="px-4 py-3">"MADE IN EU", "LOT:"</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Placeholder</td><td className="px-4 py-3">Dinamično polje, ki ga zamenja ERP sistem</td><td className="px-4 py-3">{`{{NAZIV}}, {{CENA}}`}</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Večvrstično</td><td className="px-4 py-3">Daljše besedilo z avtomatičnim prelamljanjem</td><td className="px-4 py-3">Opisi, naslovi</td></tr>
                    </tbody>
                  </table>
                </div>

                <h3>6.2 Dodajanje besedila</h3>
                <ol>
                  <li>Kliknite <strong>"Text"</strong> v orodni vrstici</li>
                  <li>Izberite kategorijo: Fixed Text, Text Field (Placeholder), ali Multiline Text</li>
                  <li>Za placeholder izberite ime polja (npr. "NAZIV_IZDELKA")</li>
                  <li>Besedilo se doda na etiketo</li>
                </ol>

                <h3>6.3 Nastavitve pisave</h3>
                <ul>
                  <li><strong>Font Size</strong> - Velikost pisave v pikslih</li>
                  <li><strong>Font Width</strong> - Širina znakov (neodvisno od višine)</li>
                  <li><strong>Font Height</strong> - Višina znakov (neodvisno od širine)</li>
                </ul>

                <h3>6.4 Placeholderji za ERP integracijo</h3>
                <p>Placeholderji omogočajo dinamično zamenjavo podatkov. Vaš ERP/WMS sistem nato zamenja {`{{...}}`} z dejanskimi vrednostmi.</p>
                <div className="not-prose bg-muted rounded-lg p-4 font-mono text-sm">
                  <pre>{`{{NAZIV_IZDELKA}}
SKU: {{SKU}}
Cena: {{CENA}} €`}</pre>
                </div>
              </section>

              {/* 7. ČRTNE KODE */}
              <section id="crtne-kode" className="scroll-mt-24">
                <h2>7. Črtne kode</h2>

                <h3>7.1 Podprte vrste črtnih kod</h3>
                <div className="not-prose overflow-x-auto">
                  <table className="w-full text-sm border border-border rounded-lg">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium">Vrsta</th>
                        <th className="px-4 py-3 text-left font-medium">Dolžina podatkov</th>
                        <th className="px-4 py-3 text-left font-medium">Uporaba</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr><td className="px-4 py-3 font-medium">EAN-8</td><td className="px-4 py-3">7-8 številk</td><td className="px-4 py-3">Majhni izdelki, interna uporaba</td></tr>
                      <tr><td className="px-4 py-3 font-medium">EAN-13</td><td className="px-4 py-3">12-13 številk</td><td className="px-4 py-3">Maloprodajni izdelki, standard</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Code 128</td><td className="px-4 py-3">Poljubna (alfanumerično)</td><td className="px-4 py-3">Logistika, interna uporaba</td></tr>
                    </tbody>
                  </table>
                </div>

                <h3>7.2 Dodajanje črtne kode</h3>
                <ol>
                  <li>Kliknite <strong>"Barcode"</strong> v orodni vrstici</li>
                  <li>Izberite vrsto: EAN-8, EAN-13 ali Code 128</li>
                  <li>Vnesite podatke</li>
                  <li>Nastavite velikost (Size) in višino (Height)</li>
                  <li>Kliknite <strong>"Dodaj"</strong></li>
                </ol>

                <h3>7.3 Nastavitve črtne kode</h3>
                <ul>
                  <li><strong>Size</strong> - Širina modula (črte): 1-10</li>
                  <li><strong>Height</strong> - Višina črt v pikslih: 10-500</li>
                  <li><strong>Human Readable</strong> - Prikaži številke pod kodo: Da/Ne</li>
                </ul>
              </section>

              {/* 8. QR KODE */}
              <section id="qr-kode" className="scroll-mt-24">
                <h2>8. QR kode</h2>

                <h3>8.1 O QR kodah</h3>
                <p>QR (Quick Response) kode lahko shranijo:</p>
                <ul>
                  <li>Spletne naslove (URL)</li>
                  <li>Besedilo</li>
                  <li>Kontaktne podatke</li>
                  <li>Lokacije</li>
                  <li>Poljubne podatke</li>
                </ul>

                <h3>8.2 Dodajanje QR kode</h3>
                <ol>
                  <li>Kliknite <strong>"Barcode"</strong> v orodni vrstici</li>
                  <li>Izberite <strong>"QR Code"</strong></li>
                  <li>Vnesite podatke (npr. URL ali besedilo)</li>
                  <li>Nastavite Magnification (Size): 1-10</li>
                  <li>Nastavite Error Correction: L, M, Q, H</li>
                  <li>Kliknite <strong>"Dodaj"</strong></li>
                </ol>

                <h3>8.3 Error Correction (popravek napak)</h3>
                <div className="not-prose overflow-x-auto">
                  <table className="w-full text-sm border border-border rounded-lg">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium">Stopnja</th>
                        <th className="px-4 py-3 text-left font-medium">Popravek</th>
                        <th className="px-4 py-3 text-left font-medium">Uporaba</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr><td className="px-4 py-3 font-medium">L (Low)</td><td className="px-4 py-3">~7%</td><td className="px-4 py-3">Čista okolja, majhne kode</td></tr>
                      <tr><td className="px-4 py-3 font-medium">M (Medium)</td><td className="px-4 py-3">~15%</td><td className="px-4 py-3">Standardna uporaba</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Q (Quartile)</td><td className="px-4 py-3">~25%</td><td className="px-4 py-3">Industrijsko okolje</td></tr>
                      <tr><td className="px-4 py-3 font-medium">H (High)</td><td className="px-4 py-3">~30%</td><td className="px-4 py-3">Poškodovane/umazane etikete</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>Višja stopnja = večja QR koda, a bolj odporna na poškodbe.</p>
              </section>

              {/* 9. SLIKE */}
              <section id="slike" className="scroll-mt-24">
                <h2>9. Slike in logotipi</h2>

                <h3>9.1 Podprte oblike datotek</h3>
                <ul>
                  <li><strong>PNG</strong> - Priporočeno, podpira prosojnost</li>
                  <li><strong>JPG/JPEG</strong> - Dobra kompresija</li>
                  <li><strong>GIF</strong> - Brez animacije</li>
                  <li><strong>BMP</strong> - Velike datoteke</li>
                  <li><strong>SVG</strong> - Ni podprt, pretvorite v PNG</li>
                </ul>

                <h3>9.2 Dodajanje slike</h3>
                <ol>
                  <li>Kliknite <strong>"Image"</strong> v orodni vrstici</li>
                  <li>Kliknite <strong>"Izberi datoteko"</strong> ali povlecite sliko</li>
                  <li>Slika se doda na etiketo</li>
                  <li>Prilagodite velikost in pozicijo</li>
                </ol>

                <h3>9.3 Nasveti za slike</h3>
                <p><strong>Za najboljše rezultate:</strong></p>
                <ul>
                  <li>Uporabite slike z visoko kontrastnostjo</li>
                  <li>Izogibajte se sivinam in gradientom</li>
                  <li>Logotipi naj bodo v črno-beli že v izvirniku</li>
                  <li>Večja resolucija slike = boljša kakovost tiska</li>
                </ul>
              </section>

              {/* 10. OBLIKE */}
              <section id="oblike" className="scroll-mt-24">
                <h2>10. Oblike in črte</h2>

                <h3>10.1 Pravokotnik</h3>
                <ol>
                  <li>Kliknite <strong>"Rectangle"</strong> v orodni vrstici</li>
                  <li>Pravokotnik se doda na etiketo</li>
                  <li>Prilagodite velikost, pozicijo in debelino črte</li>
                </ol>
                <p><strong>Uporaba:</strong> Okvirji, poudarjanje področij, tabele</p>

                <h3>10.2 Elipsa / Krog</h3>
                <ol>
                  <li>Kliknite <strong>"Ellipse"</strong> v orodni vrstici</li>
                  <li>Za krog nastavite enako širino in višino</li>
                </ol>

                <h3>10.3 Črte</h3>
                <ol>
                  <li>Kliknite <strong>"Line"</strong> v orodni vrstici</li>
                  <li>Izberite smer: Horizontal ali Vertical</li>
                  <li>Prilagodite dolžino in debelino</li>
                </ol>
              </section>

              {/* 11. SHRANJEVANJE */}
              <section id="shranjevanje" className="scroll-mt-24">
                <h2>11. Shranjevanje in nalaganje</h2>

                <h3>11.1 Shranjevanje etikete</h3>
                <ol>
                  <li>Vnesite ime etikete v polje <strong>"Label Name"</strong> (obvezno)</li>
                  <li>Kliknite gumb <strong>"Save"</strong></li>
                  <li>Etiketa se shrani v oblak</li>
                </ol>
                <p><strong>Opomba:</strong> Če etiketa z istim imenom že obstaja, se posodobi.</p>

                <h3>11.2 Nalaganje etikete</h3>
                <ol>
                  <li>Kliknite gumb <strong>"Load"</strong></li>
                  <li>Prikaže se seznam vaših shranjenih etiket</li>
                  <li>Kliknite na želeno etiketo</li>
                  <li>Etiketa se naloži v urejevalnik</li>
                </ol>

                <h3>11.3 Brisanje shranjene etikete</h3>
                <ol>
                  <li>Kliknite <strong>"Load"</strong></li>
                  <li>Pri želeni etiketi kliknite ikono koša</li>
                  <li>Potrdite brisanje</li>
                </ol>
                <p><strong>Opozorilo:</strong> Brisanje je trajno in ga ni mogoče razveljaviti.</p>
              </section>

              {/* 12. TISKANJE */}
              <section id="tiskanje" className="scroll-mt-24">
                <h2>12. Tiskanje</h2>

                <h3>12.1 Načini tiskanja</h3>
                <div className="not-prose overflow-x-auto">
                  <table className="w-full text-sm border border-border rounded-lg">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium">Način</th>
                        <th className="px-4 py-3 text-left font-medium">Opis</th>
                        <th className="px-4 py-3 text-left font-medium">Zahteve</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr><td className="px-4 py-3 font-medium">Omrežno (TCP/9100)</td><td className="px-4 py-3">Direkten tisk preko IP</td><td className="px-4 py-3">Tiskalnik v omrežju, Print Relay</td></tr>
                      <tr><td className="px-4 py-3 font-medium">PDF</td><td className="px-4 py-3">Tisk preko sistemskega gonilnika</td><td className="px-4 py-3">Nameščen gonilnik tiskalnika</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Prenos ZPL</td><td className="px-4 py-3">Ročni prenos datoteke</td><td className="px-4 py-3">Orodje za pošiljanje ZPL</td></tr>
                    </tbody>
                  </table>
                </div>

                <h3>12.2 Tiskanje preko omrežja</h3>
                <p><strong>Predpogoji:</strong></p>
                <ul>
                  <li>Zebra tiskalnik povezan v omrežje (ethernet/WiFi)</li>
                  <li>Znan IP naslov tiskalnika</li>
                  <li>Print Relay Service nameščen in zagnan</li>
                </ul>
                <p><strong>Koraki:</strong></p>
                <ol>
                  <li>Kliknite <strong>"PRINT"</strong> v naslovni vrstici</li>
                  <li>Izberite <strong>"Print on Port (Network)"</strong></li>
                  <li>Vnesite IP naslov tiskalnika (npr. 192.168.1.100)</li>
                  <li>Kliknite <strong>"Print"</strong></li>
                </ol>

                <h3>12.3 Kako najti IP naslov tiskalnika</h3>
                <p><strong>Možnost 1: Natisnite konfiguracijo</strong></p>
                <ol>
                  <li>Izklopite tiskalnik</li>
                  <li>Držite gumb FEED/PAUSE</li>
                  <li>Vklopite tiskalnik</li>
                  <li>Spustite gumb, ko začne utripati</li>
                  <li>Natisne se konfiguracija z IP naslovom</li>
                </ol>
              </section>

              {/* 13. IZVOZ ZPL */}
              <section id="izvoz-zpl" className="scroll-mt-24">
                <h2>13. Izvoz ZPL</h2>

                <h3>13.1 Kaj je ZPL?</h3>
                <p>ZPL (Zebra Programming Language) je jezik za programiranje Zebra tiskalnikov. Vsaka etiketa je opisana z ZPL ukazi.</p>
                <div className="not-prose bg-muted rounded-lg p-4 font-mono text-sm">
                  <pre>{`^XA
^PW800
^LL400
^FO50,50^A0N,30,30^FDHello World^FS
^FO50,100^BEN,50,Y,N^FD5901234567890^FS
^XZ`}</pre>
                </div>

                <h3>13.2 Izvoz ZPL</h3>
                <ol>
                  <li>Kliknite <strong>"Export ZPL"</strong> v orodni vrstici</li>
                  <li>Izberite način izvoza:
                    <ul>
                      <li><strong>Placeholders</strong> = ohrani {`{{polja}}`} za ERP</li>
                      <li><strong>Fixed Values</strong> = vstavi dejanske vrednosti</li>
                    </ul>
                  </li>
                  <li>Datoteka .zpl se prenese</li>
                </ol>
              </section>

              {/* 14. NAROČNINA */}
              <section id="narocnina" className="scroll-mt-24">
                <h2>14. Naročnina in račun</h2>

                <h3>14.1 Brezplačni preizkus</h3>
                <ul>
                  <li><strong>Trajanje:</strong> 14 dni od registracije</li>
                  <li><strong>Funkcionalnosti:</strong> Vse funkcionalnosti brez omejitev</li>
                  <li><strong>Kreditna kartica:</strong> Ni potrebna</li>
                </ul>

                <h3>14.2 Pro naročnina</h3>
                <div className="not-prose bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-border">
                  <p className="text-2xl font-bold mb-2">9,99 € <span className="text-base font-normal text-muted-foreground">/ mesec</span></p>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Neomejeno ustvarjanje etiket</li>
                    <li>✓ Shranjevanje v oblaku</li>
                    <li>✓ Izvoz v ZPL format</li>
                    <li>✓ Tiskanje na Zebra tiskalnike</li>
                    <li>✓ Vsi tipi črtnih kod in QR kod</li>
                    <li>✓ Slike in logotipi</li>
                    <li>✓ Podpora za vse DPI</li>
                    <li>✓ Prednostna podpora</li>
                  </ul>
                </div>

                <h3>14.3 Upravljanje naročnine</h3>
                <ol>
                  <li>Pojdite na stran <strong>Naročnina</strong></li>
                  <li>Kliknite <strong>"Upravljaj naročnino"</strong></li>
                  <li>Odpre se Stripe portal, kjer lahko spremenite plačilno metodo, pregledate zgodovino plačil ali prekličete naročnino</li>
                </ol>
              </section>

              {/* 15. BLIŽNJICE */}
              <section id="bliznjice" className="scroll-mt-24">
                <h2>15. Bližnjice na tipkovnici</h2>

                <h3>15.1 Splošne bližnjice</h3>
                <div className="not-prose overflow-x-auto">
                  <table className="w-full text-sm border border-border rounded-lg">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium">Bližnjica</th>
                        <th className="px-4 py-3 text-left font-medium">Dejanje</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr><td className="px-4 py-3 font-mono">Ctrl/Cmd + C</td><td className="px-4 py-3">Kopiraj izbrani element</td></tr>
                      <tr><td className="px-4 py-3 font-mono">Ctrl/Cmd + V</td><td className="px-4 py-3">Prilepi element</td></tr>
                      <tr><td className="px-4 py-3 font-mono">Delete / Backspace</td><td className="px-4 py-3">Izbriši izbrani element</td></tr>
                      <tr><td className="px-4 py-3 font-mono">Escape</td><td className="px-4 py-3">Prekliči izbiro</td></tr>
                      <tr><td className="px-4 py-3 font-mono">↑ ↓ ← →</td><td className="px-4 py-3">Premakni za 1 piksel</td></tr>
                      <tr><td className="px-4 py-3 font-mono">Shift + ↑↓←→</td><td className="px-4 py-3">Premakni za 10 pikslov</td></tr>
                      <tr><td className="px-4 py-3 font-mono">Ctrl/Cmd + A</td><td className="px-4 py-3">Izberi vse elemente</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 16. ODPRAVLJANJE TEŽAV */}
              <section id="tezave" className="scroll-mt-24">
                <h2>16. Odpravljanje težav</h2>

                <div className="not-prose">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="print">
                      <AccordionTrigger className="text-left">Tiskanje ne deluje</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-2">
                        <p><strong>Rešitve:</strong></p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Preverite IP naslov - pingajte tiskalnik: ping 192.168.1.100</li>
                          <li>Preverite port 9100 - tiskalnik mora imeti odprt port</li>
                          <li>Preverite Print Relay Service - obiščite http://localhost:8080/health</li>
                          <li>Preverite tiskalnik - ali je prižgan, ima papir/trak, sveti napaka?</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="barcode">
                      <AccordionTrigger className="text-left">Črtna koda se ne skenira</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-2">
                        <p><strong>Rešitve:</strong></p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Preverite podatke - EAN-13 mora imeti 12-13 številk</li>
                          <li>Povečajte velikost - nastavite večji Size</li>
                          <li>Preverite kontrast - uporabite črn tisk na belem</li>
                          <li>Preverite DPI - DPI v aplikaciji mora ustrezati tiskalniku</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="size">
                      <AccordionTrigger className="text-left">Etiketa je premajhna/prevelika</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-2">
                        <p><strong>Rešitve:</strong></p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Preverite DPI - nastavitev mora ustrezati tiskalniku</li>
                          <li>Preverite dimenzije - širina in višina morata ustrezati dejanski etiketi</li>
                          <li>Preverite nastavitve tiskalnika - Print Width in Label Length</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="image">
                      <AccordionTrigger className="text-left">Slika je slabe kakovosti</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-2">
                        <p><strong>Rešitve:</strong></p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Uporabite večjo izvorno sliko - večja resolucija = boljša kakovost</li>
                          <li>Uporabite črno-belo sliko - termični tisk je 1-bitni</li>
                          <li>Povečajte kontrast - sivine se slabo natisnejo</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="slow">
                      <AccordionTrigger className="text-left">Aplikacija je počasna</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-2">
                        <p><strong>Rešitve:</strong></p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Osvežite stran - F5 ali Ctrl+R</li>
                          <li>Počistite predpomnilnik - Ctrl+Shift+Delete → Počisti</li>
                          <li>Zmanjšajte zoom - visok zoom upočasni prikaz</li>
                          <li>Uporabite Chrome - najboljša podpora</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </section>

              {/* 17. FAQ */}
              <section id="faq" className="scroll-mt-24">
                <h2>17. Pogosta vprašanja (FAQ)</h2>

                <div className="not-prose">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="install">
                      <AccordionTrigger className="text-left">Ali potrebujem kaj namestiti?</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Ne, aplikacija deluje v brskalniku. Za tiskanje preko omrežja potrebujete Print Relay Service.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="browsers">
                      <AccordionTrigger className="text-left">Kateri brskalniki so podprti?</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Chrome (priporočeno), Edge, Firefox, Safari. Najnovejše različice.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="printers">
                      <AccordionTrigger className="text-left">Kateri tiskalniki so podprti?</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Vsi Zebra termični tiskalniki z ZPL podporo - praktično vsi modeli.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="other-printers">
                      <AccordionTrigger className="text-left">Ali deluje z drugimi tiskalniki (TSC, Honeywell)?</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        ZPL kodo lahko izvozite in jo uporabite, če tiskalnik podpira ZPL. Nekateri ne-Zebra tiskalniki imajo ZPL emulacijo.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="checksum">
                      <AccordionTrigger className="text-left">Zakaj se kontrolna številka samodejno spremeni?</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Kontrolna številka se izračuna po standardu GS1. Če vnesete napačno, jo aplikacija popravi.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="storage">
                      <AccordionTrigger className="text-left">Kje so shranjene moje etikete?</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        V varnem oblaku. Dostopne so samo vam.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="cancel">
                      <AccordionTrigger className="text-left">Kaj se zgodi z etiketami po preklicu?</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Ostanejo shranjene 30 dni. V tem času lahko ponovno aktivirate naročnino.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="cards">
                      <AccordionTrigger className="text-left">Katere kartice sprejemate?</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Vse večje kartice: Visa, Mastercard, American Express, itd. Plačila obdeluje Stripe.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </section>

              {/* PODPORA */}
              <section className="scroll-mt-24 mt-16">
                <div className="not-prose bg-muted/50 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-4">Potrebujete pomoč?</h2>
                  <p className="text-muted-foreground mb-6">
                    Za vsa vprašanja in podporo nas kontaktirajte.
                  </p>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:podpora@labeldesigner.si" className="text-primary hover:underline">
                      podpora@labeldesigner.si
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    <strong>Odzivni čas:</strong> Naročniki do 24 ur • Preizkusni uporabniki do 48 ur
                  </p>
                </div>
              </section>

              {/* Footer */}
              <footer className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                <p>© 2024 Label Designer PTI. Vse pravice pridržane.</p>
                <p className="mt-1">Različica dokumentacije: 1.0 • Zadnja posodobitev: December 2024</p>
              </footer>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dokumentacija;
