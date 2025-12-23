import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Printer, Shield, Database, Cookie, Share2, Globe, UserCheck, Clock, Lock, Baby, Link as LinkIcon, Bot, Megaphone, FileEdit, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const PolitikaZasebnosti = () => {
  const tocItems = [
    { id: "uvod", label: "1. Uvod" },
    { id: "upravljavec", label: "2. Upravljavec podatkov" },
    { id: "podatki", label: "3. Katere podatke zbiramo" },
    { id: "nameni", label: "4. Nameni in pravne podlage" },
    { id: "piskotki", label: "5. Piškotki" },
    { id: "deljenje", label: "6. Deljenje podatkov" },
    { id: "prenosi", label: "7. Mednarodni prenosi" },
    { id: "pravice", label: "8. Vaše pravice" },
    { id: "hramba", label: "9. Hramba podatkov" },
    { id: "varnost", label: "10. Varnost podatkov" },
    { id: "otroci", label: "11. Otroci" },
    { id: "povezave", label: "12. Povezave do tretjih strani" },
    { id: "profiliranje", label: "13. Samodejno odločanje" },
    { id: "trzenje", label: "14. Neposredno trženje" },
    { id: "spremembe", label: "15. Spremembe politike" },
    { id: "kontakt", label: "16. Kontakt" },
  ];

  return (
    <>
      <Helmet>
        <title>Politika zasebnosti - Label Designer PTI</title>
        <meta name="description" content="Politika zasebnosti za Label Designer PTI. Preberite, kako zbiramo, uporabljamo in varujemo vaše osebne podatke." />
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
            <span className="text-sm text-muted-foreground hidden sm:block">Politika zasebnosti</span>
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
                      className="block py-2 px-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
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
                <h1 className="text-4xl font-bold mb-4">Politika zasebnosti</h1>
                <p className="text-xl text-muted-foreground">Label Designer PTI</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Datum zadnje posodobitve: December 2024
                </p>
              </div>

              {/* 1. UVOD */}
              <section id="uvod" className="scroll-mt-24">
                <h2>1. Uvod</h2>
                
                <h3>1.1 O tej politiki</h3>
                <p>
                  Ta Politika zasebnosti (v nadaljevanju: "Politika") pojasnjuje, kako zbiramo, uporabljamo, shranjujemo, delimo in varujemo vaše osebne podatke v povezavi z uporabo spletne aplikacije Label Designer PTI (v nadaljevanju: "Storitev").
                </p>

                <h3>1.2 Naša zaveza</h3>
                <p>Zavezani smo k varovanju vaše zasebnosti in obdelavi vaših osebnih podatkov v skladu z:</p>
                <ul>
                  <li>Uredbo (EU) 2016/679 Evropskega parlamenta in Sveta (Splošna uredba o varstvu podatkov - GDPR)</li>
                  <li>Zakonom o varstvu osebnih podatkov (ZVOP-2)</li>
                  <li>Drugimi veljavnimi predpisi s področja varstva osebnih podatkov</li>
                </ul>

                <h3>1.3 Sprejetje politike</h3>
                <p>
                  Z uporabo naše Storitve potrjujete, da ste to Politiko prebrali in razumeli. Ta Politika je sestavni del <Link to="/pogoji-uporabe" className="text-primary hover:underline">Pogojev uporabe</Link> Storitve.
                </p>

                <h3>1.4 Obseg veljavnosti</h3>
                <p>Ta Politika velja za:</p>
                <ul>
                  <li>Obiskovalce naše spletne strani</li>
                  <li>Registrirane uporabnike Storitve</li>
                  <li>Uporabnike brezplačnega preizkusnega obdobja</li>
                  <li>Naročnike plačljivih storitev</li>
                </ul>
              </section>

              {/* 2. UPRAVLJAVEC */}
              <section id="upravljavec" className="scroll-mt-24">
                <h2>2. Upravljavec osebnih podatkov</h2>

                <h3>2.1 Identifikacija upravljavca</h3>
                <p>Upravljavec vaših osebnih podatkov je ponudnik storitve Label Designer PTI s sedežem v Sloveniji.</p>

                <h3>2.2 Kontakt za vprašanja o zasebnosti</h3>
                <p>Za vsa vprašanja v zvezi z obdelavo vaših osebnih podatkov nas lahko kontaktirate:</p>
                <div className="not-prose bg-muted/50 rounded-xl p-6 mt-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:zasebnost@labeldesigner.si" className="text-primary hover:underline">
                      zasebnost@labeldesigner.si
                    </a>
                  </div>
                </div>
              </section>

              {/* 3. KATERE PODATKE ZBIRAMO */}
              <section id="podatki" className="scroll-mt-24">
                <h2>3. Katere osebne podatke zbiramo</h2>

                <h3>3.1 Podatki, ki nam jih posredujete neposredno</h3>

                <p><strong>a) Registracijski podatki</strong></p>
                <p>Pri ustvarjanju uporabniškega računa zbiramo:</p>
                <ul>
                  <li><strong>E-poštni naslov</strong> - za identifikacijo računa, komunikacijo in avtentikacijo</li>
                  <li><strong>Geslo (šifrirano)</strong> - za varnost dostopa do računa</li>
                </ul>

                <p><strong>b) Podatki o naročnini</strong></p>
                <p>Pri aktivaciji plačljive naročnine zbiramo:</p>
                <ul>
                  <li>Ime in priimek - za identifikacijo stranke in izdajanje računov</li>
                  <li>Naslov za izstavitev računa</li>
                  <li>Država - za določitev davčne stopnje</li>
                  <li>Davčna številka (za pravne osebe)</li>
                </ul>
                <p>
                  <strong>Opomba:</strong> Podatkov o plačilnih karticah ne shranjujemo. Te podatke obdeluje izključno naš plačilni ponudnik Stripe v skladu s standardom PCI DSS.
                </p>

                <p><strong>c) Vsebina, ki jo ustvarite</strong></p>
                <ul>
                  <li>Oblikovane etikete</li>
                  <li>Naložene slike in logotipi</li>
                  <li>Imena etiket</li>
                </ul>

                <h3>3.2 Podatki, ki jih zbiramo samodejno</h3>

                <p><strong>a) Tehnični podatki</strong></p>
                <p>Pri uporabi Storitve samodejno zbiramo:</p>
                <ul>
                  <li>IP naslov - za varnost in preprečevanje zlorab</li>
                  <li>Vrsta in različica brskalnika</li>
                  <li>Operacijski sistem</li>
                  <li>Ločljivost zaslona</li>
                  <li>Časovni pas</li>
                </ul>

                <p><strong>b) Podatki o uporabi</strong></p>
                <ul>
                  <li>Datum in čas prijave</li>
                  <li>Funkcionalnosti, ki jih uporabljate</li>
                  <li>Število ustvarjenih etiket</li>
                  <li>Napake in sesutja aplikacije</li>
                </ul>

                <h3>3.3 Podatki, ki jih NE zbiramo</h3>
                <p>Izrecno ne zbiramo:</p>
                <ul>
                  <li>Posebnih kategorij osebnih podatkov (zdravstveni podatki, verska prepričanja, itd.)</li>
                  <li>Podatkov o kaznivih dejanjih</li>
                  <li>Biometričnih podatkov</li>
                  <li>Podatkov o lokaciji v realnem času</li>
                  <li>Vsebine vaših elektronskih sporočil</li>
                </ul>
              </section>

              {/* 4. NAMENI IN PRAVNE PODLAGE */}
              <section id="nameni" className="scroll-mt-24">
                <h2>4. Nameni in pravne podlage obdelave</h2>

                <h3>4.1 Pregled namenov obdelave</h3>
                <div className="not-prose overflow-x-auto">
                  <table className="w-full text-sm border border-border rounded-lg">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium">Namen obdelave</th>
                        <th className="px-4 py-3 text-left font-medium">Pravna podlaga (GDPR)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr><td className="px-4 py-3">Zagotavljanje Storitve</td><td className="px-4 py-3">Člen 6(1)(b) - Izvajanje pogodbe</td></tr>
                      <tr><td className="px-4 py-3">Upravljanje naročnine in plačil</td><td className="px-4 py-3">Člen 6(1)(b) - Izvajanje pogodbe</td></tr>
                      <tr><td className="px-4 py-3">Izpolnjevanje zakonskih obveznosti</td><td className="px-4 py-3">Člen 6(1)(c) - Pravna obveznost</td></tr>
                      <tr><td className="px-4 py-3">Izboljšanje Storitve</td><td className="px-4 py-3">Člen 6(1)(f) - Zakoniti interes</td></tr>
                      <tr><td className="px-4 py-3">Varnost in preprečevanje zlorab</td><td className="px-4 py-3">Člen 6(1)(f) - Zakoniti interes</td></tr>
                      <tr><td className="px-4 py-3">Komunikacija z uporabniki</td><td className="px-4 py-3">Člen 6(1)(b) - Izvajanje pogodbe</td></tr>
                      <tr><td className="px-4 py-3">Neposredno trženje (z soglasjem)</td><td className="px-4 py-3">Člen 6(1)(a) - Privolitev</td></tr>
                    </tbody>
                  </table>
                </div>

                <h3>4.2 Podrobnejša obrazložitev pravnih podlag</h3>
                
                <p><strong>a) Izvajanje pogodbe (člen 6(1)(b) GDPR)</strong></p>
                <p>Obdelava je nujna za:</p>
                <ul>
                  <li>Ustvarjanje in upravljanje vašega uporabniškega računa</li>
                  <li>Zagotavljanje dostopa do funkcionalnosti Storitve</li>
                  <li>Shranjevanje vaših etiket v oblaku</li>
                  <li>Obračunavanje in upravljanje naročnine</li>
                  <li>Zagotavljanje tehnične podpore</li>
                </ul>

                <p><strong>b) Pravna obveznost (člen 6(1)(c) GDPR)</strong></p>
                <p>Obdelava je nujna za:</p>
                <ul>
                  <li>Izdajanje in hramba računov (davčna zakonodaja)</li>
                  <li>Odgovarjanje na zahteve državnih organov</li>
                  <li>Izpolnjevanje obveznosti po GDPR (pravice posameznikov)</li>
                </ul>

                <p><strong>c) Zakoniti interesi (člen 6(1)(f) GDPR)</strong></p>
                <p>Obdelujemo podatke na podlagi naših zakonitih interesov, kadar ti prevladajo nad vašimi interesi:</p>
                <ul>
                  <li><strong>Varnost Storitve:</strong> Preprečevanje nepooblaščenega dostopa, napadov in zlorab</li>
                  <li><strong>Preprečevanje goljufij:</strong> Odkrivanje in preprečevanje zlorab preizkusnega obdobja</li>
                  <li><strong>Izboljšanje Storitve:</strong> Analiziranje uporabe za razvoj novih funkcionalnosti</li>
                </ul>

                <p><strong>d) Privolitev (člen 6(1)(a) GDPR)</strong></p>
                <p>Za določene obdelave potrebujemo vašo izrecno privolitev:</p>
                <ul>
                  <li>Prejemanje promocijskih sporočil in novic</li>
                  <li>Uporaba nebistvenih piškotkov</li>
                </ul>
                <p>Privolitev lahko kadarkoli prekličete.</p>
              </section>

              {/* 5. PIŠKOTKI */}
              <section id="piskotki" className="scroll-mt-24">
                <h2>5. Piškotki in podobne tehnologije</h2>

                <h3>5.1 Kaj so piškotki</h3>
                <p>
                  Piškotki so majhne besedilne datoteke, ki se shranijo na vašo napravo ob obisku spletne strani. Omogočajo, da si stran "zapomni" vaše nastavitve in preference.
                </p>

                <h3>5.2 Vrste piškotkov, ki jih uporabljamo</h3>

                <p><strong>a) Nujni piškotki</strong></p>
                <ul>
                  <li><strong>session_token</strong> - Avtentikacija uporabnika (seja)</li>
                  <li><strong>csrf_token</strong> - Varnost pred CSRF napadi (seja)</li>
                  <li><strong>cookie_consent</strong> - Shranjevanje izbire piškotkov (1 leto)</li>
                </ul>
                <p>Pravna podlaga: Člen 6(1)(f) GDPR - zakoniti interes (nujni za delovanje). Privolitev ni potrebna.</p>

                <p><strong>b) Funkcionalni piškotki</strong></p>
                <ul>
                  <li><strong>user_preferences</strong> - Uporabniške nastavitve (tema, jezik)</li>
                  <li><strong>last_label_settings</strong> - Zadnje uporabljene nastavitve etikete</li>
                </ul>
                <p>Pravna podlaga: Člen 6(1)(a) GDPR - privolitev. Privolitev je potrebna.</p>

                <p><strong>c) Analitični piškotki</strong></p>
                <ul>
                  <li><strong>_ga</strong> - Google Analytics - razlikovanje uporabnikov (2 leti)</li>
                  <li><strong>_gid</strong> - Google Analytics - razlikovanje uporabnikov (24 ur)</li>
                </ul>
                <p>Pravna podlaga: Člen 6(1)(a) GDPR - privolitev. Privolitev je potrebna.</p>

                <h3>5.3 Upravljanje piškotkov</h3>
                <p>Piškotke lahko upravljate:</p>
                <ul>
                  <li><strong>Preko naše strani:</strong> Ob prvem obisku se prikaže obvestilo o piškotkih, kjer lahko izberete, katere kategorije dovolite.</li>
                  <li><strong>Preko nastavitev brskalnika:</strong> Večina brskalnikov omogoča blokiranje vseh piškotkov, brisanje obstoječih piškotkov in opozarjanje pred nastavitvijo piškotka.</li>
                </ul>
                <p><strong>Opozorilo:</strong> Blokiranje nujnih piškotkov lahko onemogoči delovanje Storitve.</p>
              </section>

              {/* 6. DELJENJE PODATKOV */}
              <section id="deljenje" className="scroll-mt-24">
                <h2>6. Deljenje podatkov s tretjimi osebami</h2>

                <h3>6.1 Kategorije prejemnikov</h3>
                <p>Vaše osebne podatke lahko delimo z naslednjimi kategorijami prejemnikov:</p>

                <p><strong>a) Ponudniki storitev (obdelovalci)</strong></p>
                <div className="not-prose overflow-x-auto">
                  <table className="w-full text-sm border border-border rounded-lg">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium">Ponudnik</th>
                        <th className="px-4 py-3 text-left font-medium">Namen</th>
                        <th className="px-4 py-3 text-left font-medium">Lokacija</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr><td className="px-4 py-3">Supabase Inc.</td><td className="px-4 py-3">Gostovanje, baza podatkov, avtentikacija</td><td className="px-4 py-3">EU (Frankfurt)</td></tr>
                      <tr><td className="px-4 py-3">Stripe Inc.</td><td className="px-4 py-3">Obdelava plačil</td><td className="px-4 py-3">EU/ZDA</td></tr>
                      <tr><td className="px-4 py-3">Google LLC</td><td className="px-4 py-3">Analitika (Google Analytics)</td><td className="px-4 py-3">ZDA</td></tr>
                    </tbody>
                  </table>
                </div>

                <p><strong>b) Pogodbeni partnerji</strong></p>
                <p>Lahko delimo podatke s:</p>
                <ul>
                  <li>Računovodskimi servisi (za izdajo računov)</li>
                  <li>Pravnimi svetovalci (v primeru sporov)</li>
                  <li>Revizorji (za zakonsko predpisane revizije)</li>
                </ul>

                <p><strong>c) Državni organi</strong></p>
                <p>Podatke lahko razkrijemo, če to zahteva sodna odredba ali nalog, zakonska obveznost, ali zaščita naših pravic, lastnine ali varnosti.</p>

                <h3>6.2 Podatki, ki jih NE delimo</h3>
                <p>
                  <strong>Nikoli ne prodajamo vaših osebnih podatkov tretjim osebam za tržne ali druge namene.</strong>
                </p>
              </section>

              {/* 7. MEDNARODNI PRENOSI */}
              <section id="prenosi" className="scroll-mt-24">
                <h2>7. Mednarodni prenosi podatkov</h2>

                <h3>7.1 Lokacija podatkov</h3>
                <p>
                  Vaši podatki so primarno shranjeni na strežnikih v Evropski uniji (Frankfurt, Nemčija).
                </p>

                <h3>7.2 Prenosi v tretje države</h3>
                <p>
                  Nekateri naši ponudniki storitev imajo sedež v ZDA ali drugih tretjih državah. Za te prenose uporabljamo naslednje varovalke:
                </p>
                <ul>
                  <li><strong>Standardne pogodbene klavzule (SCCs)</strong> - Pogodbe, odobrene s strani Evropske komisije</li>
                  <li><strong>Dodatni ukrepi</strong> - Šifriranje, psevdonimizacija</li>
                </ul>
              </section>

              {/* 8. VAŠE PRAVICE */}
              <section id="pravice" className="scroll-mt-24">
                <h2>8. Vaše pravice</h2>

                <h3>8.1 Pregled pravic po GDPR</h3>
                <p>Kot posameznik, na katerega se nanašajo osebni podatki, imate naslednje pravice:</p>
                <div className="not-prose overflow-x-auto">
                  <table className="w-full text-sm border border-border rounded-lg">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium">Pravica</th>
                        <th className="px-4 py-3 text-left font-medium">Opis</th>
                        <th className="px-4 py-3 text-left font-medium">Člen GDPR</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr><td className="px-4 py-3 font-medium">Dostop</td><td className="px-4 py-3">Pravica pridobiti potrditev, ali obdelujemo vaše podatke, in dostop do teh podatkov</td><td className="px-4 py-3">15</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Popravek</td><td className="px-4 py-3">Pravica zahtevati popravek netočnih podatkov</td><td className="px-4 py-3">16</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Izbris ("pozaba")</td><td className="px-4 py-3">Pravica zahtevati izbris vaših podatkov</td><td className="px-4 py-3">17</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Omejitev obdelave</td><td className="px-4 py-3">Pravica zahtevati omejitev obdelave</td><td className="px-4 py-3">18</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Prenosljivost</td><td className="px-4 py-3">Pravica prejeti svoje podatke v strukturirani obliki</td><td className="px-4 py-3">20</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Ugovor</td><td className="px-4 py-3">Pravica ugovarjati obdelavi na podlagi zakonitih interesov</td><td className="px-4 py-3">21</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Preklic privolitve</td><td className="px-4 py-3">Pravica kadarkoli preklicati privolitev</td><td className="px-4 py-3">7(3)</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Pritožba</td><td className="px-4 py-3">Pravica vložiti pritožbo pri nadzornem organu</td><td className="px-4 py-3">77</td></tr>
                    </tbody>
                  </table>
                </div>

                <h3>8.2 Kako uveljavljate pravice</h3>
                <p><strong>a) Samostojno preko aplikacije</strong></p>
                <p>V nastavitvah računa lahko:</p>
                <ul>
                  <li>Pregledate in popravite svoje podatke</li>
                  <li>Prenesete svoje etikete</li>
                  <li>Izbrišete svoj račun</li>
                </ul>

                <p><strong>b) Z zahtevo na naš e-naslov</strong></p>
                <p>Za uveljavljanje pravic nam pišite na: <a href="mailto:zasebnost@labeldesigner.si" className="text-primary hover:underline">zasebnost@labeldesigner.si</a></p>

                <p><strong>c) Rok za odgovor</strong></p>
                <p>Na vašo zahtevo bomo odgovorili v <strong>enem (1) mesecu</strong>. V kompleksnih primerih lahko ta rok podaljšamo za dodatna dva meseca.</p>

                <h3>8.3 Pravica do pritožbe</h3>
                <p>Če menite, da obdelava vaših osebnih podatkov krši GDPR, imate pravico vložiti pritožbo pri nadzornem organu:</p>
                <div className="not-prose bg-muted/50 rounded-xl p-6 mt-4">
                  <p className="font-semibold mb-2">Informacijski pooblaščenec Republike Slovenije</p>
                  <p className="text-sm text-muted-foreground">Dunajska cesta 22, 1000 Ljubljana, Slovenija</p>
                  <p className="text-sm text-muted-foreground">E-pošta: gp.ip@ip-rs.si</p>
                  <p className="text-sm text-muted-foreground">Telefon: +386 1 230 97 30</p>
                  <p className="text-sm text-muted-foreground">Spletna stran: www.ip-rs.si</p>
                </div>
              </section>

              {/* 9. HRAMBA PODATKOV */}
              <section id="hramba" className="scroll-mt-24">
                <h2>9. Hramba podatkov</h2>

                <h3>9.1 Načelo minimizacije hrambe</h3>
                <p>
                  Vaše osebne podatke hranimo le toliko časa, kolikor je potrebno za namene, za katere so bili zbrani.
                </p>

                <h3>9.2 Roki hrambe</h3>
                <div className="not-prose overflow-x-auto">
                  <table className="w-full text-sm border border-border rounded-lg">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium">Kategorija podatkov</th>
                        <th className="px-4 py-3 text-left font-medium">Rok hrambe</th>
                        <th className="px-4 py-3 text-left font-medium">Obrazložitev</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr><td className="px-4 py-3">Registracijski podatki</td><td className="px-4 py-3">Do izbrisa računa + 30 dni</td><td className="px-4 py-3">Možnost obnovitve računa</td></tr>
                      <tr><td className="px-4 py-3">Etikete in vsebina</td><td className="px-4 py-3">Do izbrisa računa + 30 dni</td><td className="px-4 py-3">Možnost obnovitve</td></tr>
                      <tr><td className="px-4 py-3">Plačilni podatki in računi</td><td className="px-4 py-3">10 let po izdaji</td><td className="px-4 py-3">Davčna zakonodaja</td></tr>
                      <tr><td className="px-4 py-3">Dnevniški zapisi (logi)</td><td className="px-4 py-3">90 dni</td><td className="px-4 py-3">Varnost, odpravljanje napak</td></tr>
                      <tr><td className="px-4 py-3">Analitični podatki</td><td className="px-4 py-3">26 mesecev</td><td className="px-4 py-3">Anonimizirana analitika</td></tr>
                    </tbody>
                  </table>
                </div>

                <h3>9.3 Po poteku roka</h3>
                <p>Po poteku roka hrambe podatke:</p>
                <ul>
                  <li>Trajno izbrišemo, ali</li>
                  <li>Anonimiziramo tako, da vas ni več mogoče identificirati</li>
                </ul>
              </section>

              {/* 10. VARNOST PODATKOV */}
              <section id="varnost" className="scroll-mt-24">
                <h2>10. Varnost podatkov</h2>

                <h3>10.1 Tehnični ukrepi</h3>
                <p>Za zaščito vaših podatkov uporabljamo:</p>
                <ul>
                  <li><strong>Šifriranje pri prenosu</strong> - TLS 1.3 za vse povezave (HTTPS)</li>
                  <li><strong>Šifriranje v mirovanju</strong> - AES-256 za shranjevanje podatkov</li>
                  <li><strong>Šifriranje gesel</strong> - Bcrypt z ustreznim faktorjem</li>
                  <li><strong>Požarni zid</strong> - Filtriranje omrežnega prometa</li>
                  <li><strong>Redne varnostne kopije</strong> - Dnevno varnostno kopiranje</li>
                  <li><strong>Izolacija podatkov</strong> - Ločevanje podatkov med uporabniki (RLS)</li>
                </ul>

                <h3>10.2 Organizacijski ukrepi</h3>
                <p>Poleg tehničnih ukrepov izvajamo:</p>
                <ul>
                  <li><strong>Načelo najmanjših pravic</strong> - Dostop do podatkov le za potrebne osebe</li>
                  <li><strong>Izobraževanje zaposlenih</strong> - Usposabljanje o varnosti in zasebnosti</li>
                  <li><strong>Politike in postopki</strong> - Dokumentirani postopki za obdelavo podatkov</li>
                  <li><strong>Upravljanje incidentov</strong> - Postopki za odziv na varnostne incidente</li>
                </ul>

                <h3>10.3 Omejitev odgovornosti</h3>
                <p>
                  Kljub našim prizadevanjem nobena metoda prenosa ali shranjevanja ni 100-odstotno varna. Ne moremo jamčiti absolutne varnosti vaših podatkov.
                </p>
              </section>

              {/* 11. OTROCI */}
              <section id="otroci" className="scroll-mt-24">
                <h2>11. Otroci</h2>

                <h3>11.1 Starostna omejitev</h3>
                <p>
                  Storitev ni namenjena osebam, mlajšim od 18 let. Zavestno ne zbiramo osebnih podatkov otrok.
                </p>

                <h3>11.2 Ravnanje ob odkritju</h3>
                <p>
                  Če ugotovimo, da smo zbrali osebne podatke otroka brez ustreznega soglasja staršev, bomo te podatke nemudoma izbrisali.
                </p>

                <h3>11.3 Prijava</h3>
                <p>
                  Če menite, da smo zbrali podatke otroka, nas prosimo nemudoma obvestite na <a href="mailto:zasebnost@labeldesigner.si" className="text-primary hover:underline">zasebnost@labeldesigner.si</a>.
                </p>
              </section>

              {/* 12. POVEZAVE DO TRETJIH STRANI */}
              <section id="povezave" className="scroll-mt-24">
                <h2>12. Povezave do tretjih strani</h2>

                <h3>12.1 Zunanje povezave</h3>
                <p>
                  Naša Storitev lahko vsebuje povezave do spletnih strani tretjih oseb, ki niso pod našim nadzorom. Ta Politika zasebnosti ne velja za te strani.
                </p>

                <h3>12.2 Priporočilo</h3>
                <p>
                  Priporočamo, da preberete politiko zasebnosti vsake strani, ki jo obiščete. Ne odgovarjamo za vsebino, politike zasebnosti ali prakse spletnih strani tretjih oseb.
                </p>
              </section>

              {/* 13. SAMODEJNO ODLOČANJE */}
              <section id="profiliranje" className="scroll-mt-24">
                <h2>13. Samodejno odločanje in profiliranje</h2>

                <h3>13.1 Samodejno odločanje</h3>
                <p>
                  Ne izvajamo samodejnega odločanja v smislu člena 22 GDPR, ki bi imelo pravne ali podobno pomembne učinke na vas.
                </p>

                <h3>13.2 Profiliranje</h3>
                <p>Izvajamo omejeno profiliranje za naslednje namene:</p>
                <ul>
                  <li><strong>Preprečevanje zlorab:</strong> Analiza vzorcev uporabe za odkrivanje zlorab preizkusnega obdobja</li>
                  <li><strong>Prilagajanje Storitve:</strong> Prilagajanje uporabniške izkušnje glede na vašo uporabo</li>
                </ul>
                <p>To profiliranje ne vodi do samodejnega odločanja z bistvenimi učinki na vas.</p>
              </section>

              {/* 14. NEPOSREDNO TRŽENJE */}
              <section id="trzenje" className="scroll-mt-24">
                <h2>14. Neposredno trženje</h2>

                <h3>14.1 Vrste komunikacije</h3>
                <div className="not-prose overflow-x-auto">
                  <table className="w-full text-sm border border-border rounded-lg">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium">Vrsta</th>
                        <th className="px-4 py-3 text-left font-medium">Opis</th>
                        <th className="px-4 py-3 text-left font-medium">Privolitev</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr><td className="px-4 py-3">Transakcijska sporočila</td><td className="px-4 py-3">Potrditve, računi, spremembe storitve</td><td className="px-4 py-3">Ni potrebna</td></tr>
                      <tr><td className="px-4 py-3">Sporočila o storitvi</td><td className="px-4 py-3">Pomembne posodobitve, varnostna obvestila</td><td className="px-4 py-3">Ni potrebna</td></tr>
                      <tr><td className="px-4 py-3">Promocijska sporočila</td><td className="px-4 py-3">Novice, ponudbe, nove funkcionalnosti</td><td className="px-4 py-3">Potrebna</td></tr>
                    </tbody>
                  </table>
                </div>

                <h3>14.2 Preklic privolitve</h3>
                <p>Od promocijskih sporočil se lahko kadarkoli odjavite:</p>
                <ul>
                  <li>S klikom na povezavo "Odjava" v vsakem e-sporočilu</li>
                  <li>V nastavitvah računa v aplikaciji</li>
                  <li>S sporočilom na <a href="mailto:zasebnost@labeldesigner.si" className="text-primary hover:underline">zasebnost@labeldesigner.si</a></li>
                </ul>
                <p>Odjava ne vpliva na prejemanje transakcijskih in storitvenih sporočil.</p>
              </section>

              {/* 15. SPREMEMBE POLITIKE */}
              <section id="spremembe" className="scroll-mt-24">
                <h2>15. Spremembe politike zasebnosti</h2>

                <h3>15.1 Pravica do sprememb</h3>
                <p>
                  To Politiko lahko občasno posodobimo. Vse spremembe bodo objavljene na tej strani z navedbo datuma zadnje posodobitve.
                </p>

                <h3>15.2 Obveščanje o spremembah</h3>
                <p>O bistvenih spremembah vas bomo obvestili:</p>
                <ul>
                  <li>Po e-pošti na naslov, povezan z vašim računom</li>
                  <li>Z obvestilom v aplikaciji ob prijavi</li>
                  <li>Najmanj 30 dni pred začetkom veljavnosti</li>
                </ul>

                <h3>15.3 Nadaljnja uporaba</h3>
                <p>
                  Nadaljnja uporaba Storitve po začetku veljavnosti spremenjene Politike pomeni vaše sprejetje teh sprememb.
                </p>
              </section>

              {/* 16. KONTAKT */}
              <section id="kontakt" className="scroll-mt-24">
                <h2>16. Kontakt</h2>

                <h3>16.1 Vprašanja in zahteve</h3>
                <p>Za vsa vprašanja o tej Politiki ali obdelavi vaših osebnih podatkov nas kontaktirajte:</p>
                <div className="not-prose bg-muted/50 rounded-xl p-6 mt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:zasebnost@labeldesigner.si" className="text-primary hover:underline">
                      zasebnost@labeldesigner.si
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    <strong>Odzivni čas:</strong> Na vaše poizvedbe se bomo potrudili odgovoriti v najkrajšem možnem času, najkasneje pa v 30 dneh.
                  </p>
                </div>
              </section>

              {/* ZGODOVINA SPREMEMB */}
              <section className="scroll-mt-24 mt-12">
                <h2>17. Zgodovina sprememb</h2>
                <div className="not-prose overflow-x-auto">
                  <table className="w-full text-sm border border-border rounded-lg">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium">Različica</th>
                        <th className="px-4 py-3 text-left font-medium">Datum</th>
                        <th className="px-4 py-3 text-left font-medium">Opis spremembe</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3">1.0</td>
                        <td className="px-4 py-3">December 2024</td>
                        <td className="px-4 py-3">Začetna različica Politike zasebnosti</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* PRAVNI OKVIR */}
              <section className="scroll-mt-24 mt-12">
                <h2>18. Dodatne informacije</h2>

                <h3>18.1 Pravni okvir</h3>
                <p>Ta Politika je skladna z:</p>
                <ul>
                  <li>Uredbo (EU) 2016/679 (GDPR)</li>
                  <li>Zakonom o varstvu osebnih podatkov (ZVOP-2)</li>
                  <li>Zakonom o elektronskih komunikacijah (ZEKom-2) - za piškotke</li>
                  <li>Zakonom o elektronskem poslovanju na trgu (ZEPT)</li>
                </ul>

                <h3>18.2 Veljavno pravo</h3>
                <p>Za razlago te Politike in reševanje sporov se uporablja pravo Republike Slovenije.</p>

                <h3>18.3 Jezik</h3>
                <p>Ta Politika je sestavljena v slovenskem jeziku. V primeru prevoda ima slovenska različica prednost.</p>
              </section>

              {/* Footer */}
              <footer className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                <p className="italic mb-4">
                  Z uporabo storitve Label Designer PTI potrjujete, da ste to Politiko zasebnosti prebrali in razumeli.
                </p>
                <p>© 2024 Label Designer PTI. Vse pravice pridržane.</p>
              </footer>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default PolitikaZasebnosti;
