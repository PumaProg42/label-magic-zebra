import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Printer, FileText, Shield, CreditCard, UserX, Scale, AlertTriangle, Mail, History } from "lucide-react";
import { Button } from "@/components/ui/button";

const PogojiUporabe = () => {
  const tocItems = [
    { id: "uvod", label: "1. Uvod in sprejetje pogojev" },
    { id: "opis", label: "2. Opis storitve" },
    { id: "registracija", label: "3. Registracija in račun" },
    { id: "preizkus", label: "4. Brezplačno preizkusno obdobje" },
    { id: "narocnina", label: "5. Naročnina in plačila" },
    { id: "preklic", label: "6. Preklic naročnine" },
    { id: "intelektualna", label: "7. Pravice intelektualne lastnine" },
    { id: "omejitve", label: "8. Omejitve uporabe" },
    { id: "zasebnost", label: "9. Zasebnost in varstvo podatkov" },
    { id: "odgovornost", label: "10. Omejitev odgovornosti" },
    { id: "odskodnina", label: "11. Odškodnina" },
    { id: "prekinitev", label: "12. Prekinitev" },
    { id: "spremembe", label: "13. Spremembe pogojev" },
    { id: "pravo", label: "14. Veljavno pravo" },
    { id: "splosne", label: "15. Splošne določbe" },
    { id: "kontakt", label: "16. Kontakt" },
  ];

  return (
    <>
      <Helmet>
        <title>Pogoji uporabe - Label Designer PTI</title>
        <meta name="description" content="Pogoji uporabe za Label Designer PTI - spletno aplikacijo za oblikovanje termičnih etiket." />
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
            <span className="text-sm text-muted-foreground hidden sm:block">Pogoji uporabe</span>
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
                <h1 className="text-4xl font-bold mb-4">Pogoji uporabe</h1>
                <p className="text-xl text-muted-foreground">Label Designer PTI</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Datum zadnje posodobitve: December 2024
                </p>
              </div>

              {/* 1. UVOD */}
              <section id="uvod" className="scroll-mt-24">
                <h2>1. Uvod in sprejetje pogojev</h2>
                
                <h3>1.1 O tem dokumentu</h3>
                <p>
                  Ti Pogoji uporabe (v nadaljevanju: "Pogoji") urejajo vašo uporabo spletne aplikacije Label Designer PTI (v nadaljevanju: "Storitev", "Aplikacija" ali "Platforma"), ki jo zagotavlja Ponudnik.
                </p>

                <h3>1.2 Sprejetje pogojev</h3>
                <p>
                  Z dostopom do Storitve ali njeno uporabo potrjujete, da ste prebrali, razumeli in se strinjate s temi Pogoji. Če se s Pogoji ne strinjate, Storitve ne smete uporabljati.
                </p>

                <h3>1.3 Pravna sposobnost</h3>
                <p>S sprejetjem teh Pogojev potrjujete, da:</p>
                <ul>
                  <li>Ste stari najmanj 18 let ali imate soglasje zakonitega zastopnika</li>
                  <li>Imate pravno sposobnost sklepanja zavezujočih pogodb</li>
                  <li>Niste oseba, ki ji je prepovedana uporaba Storitve po veljavni zakonodaji</li>
                </ul>

                <h3>1.4 Uporaba v imenu organizacije</h3>
                <p>
                  Če Storitev uporabljate v imenu podjetja, organizacije ali druge pravne osebe, potrjujete, da imate pooblastilo za zavezovanje te entitete k tem Pogojem. V tem primeru se izrazi "vi" ali "uporabnik" nanašajo na to entiteto.
                </p>
              </section>

              {/* 2. OPIS STORITVE */}
              <section id="opis" className="scroll-mt-24">
                <h2>2. Opis storitve</h2>

                <h3>2.1 Namen storitve</h3>
                <p>Label Designer PTI je spletna aplikacija (SaaS - Software as a Service), ki omogoča:</p>
                <ul>
                  <li>Vizualno oblikovanje termičnih etiket</li>
                  <li>Generiranje črtnih kod (EAN-8, EAN-13, Code 128) in QR kod</li>
                  <li>Izvoz etiket v ZPL (Zebra Programming Language) formatu</li>
                  <li>Tiskanje etiket na Zebra termične tiskalnike</li>
                  <li>Shranjevanje in upravljanje etiket v oblaku</li>
                </ul>

                <h3>2.2 Razpoložljivost</h3>
                <p>
                  Storitev je dostopna preko spletnega brskalnika na naslovu, ki ga določi Ponudnik. Ponudnik si prizadeva za neprekinjeno delovanje Storitve, vendar ne jamči 100-odstotne razpoložljivosti.
                </p>

                <h3>2.3 Spremembe storitve</h3>
                <p>Ponudnik si pridržuje pravico, da kadarkoli:</p>
                <ul>
                  <li>Posodobi, spremeni ali izboljša funkcionalnosti Storitve</li>
                  <li>Začasno prekine delovanje Storitve zaradi vzdrževanja</li>
                  <li>Ukine določene funkcionalnosti ob predhodnem obvestilu uporabnikov</li>
                </ul>
              </section>

              {/* 3. REGISTRACIJA */}
              <section id="registracija" className="scroll-mt-24">
                <h2>3. Registracija in uporabniški račun</h2>

                <h3>3.1 Ustvarjanje računa</h3>
                <p>
                  Za uporabo Storitve morate ustvariti uporabniški račun z veljavnim elektronskim naslovom in geslom. Ob registraciji se zavezujete, da boste navedli točne, popolne in aktualne podatke.
                </p>

                <h3>3.2 Varnost računa</h3>
                <p>Odgovorni ste za:</p>
                <ul>
                  <li>Zaupnost vašega gesla in podatkov za prijavo</li>
                  <li>Vse aktivnosti, ki se izvajajo preko vašega računa</li>
                  <li>Takojšnje obvestilo Ponudniku o kakršnikoli nepooblaščeni uporabi vašega računa</li>
                </ul>

                <h3>3.3 En račun na uporabnika</h3>
                <p>
                  Vsak uporabnik sme imeti le en aktiven uporabniški račun. Ustvarjanje več računov z namenom zlorabe brezplačnega preizkusnega obdobja ali drugih ugodnosti je prepovedano in lahko povzroči takojšnjo ukinitev vseh povezanih računov.
                </p>

                <h3>3.4 Preverjanje identitete</h3>
                <p>
                  Ponudnik lahko za namen preprečevanja zlorab uporablja tehnologije za identifikacijo naprav (device fingerprinting). S sprejetjem teh Pogojev soglašate s takšnim preverjanjem.
                </p>
              </section>

              {/* 4. BREZPLAČNI PREIZKUS */}
              <section id="preizkus" className="scroll-mt-24">
                <h2>4. Brezplačno preizkusno obdobje</h2>

                <h3>4.1 Trajanje preizkusa</h3>
                <p>
                  Novi uporabniki so upravičeni do brezplačnega preizkusnega obdobja v trajanju štirinajst (14) dni od datuma registracije.
                </p>

                <h3>4.2 Obseg preizkusa</h3>
                <p>Med preizkusnim obdobjem imate dostop do vseh funkcionalnosti Storitve brez omejitev.</p>

                <h3>4.3 Omejitve</h3>
                <p>Brezplačni preizkus je na voljo:</p>
                <ul>
                  <li>Enkrat na uporabnika</li>
                  <li>Enkrat na napravo/brskalnik</li>
                  <li>Enkrat na organizacijo</li>
                </ul>
                <p>
                  Poskusi izogibanja tem omejitvam (npr. z ustvarjanjem več računov, uporabo več naprav ali anonimizacijskih orodij) predstavljajo kršitev teh Pogojev.
                </p>

                <h3>4.4 Po poteku preizkusa</h3>
                <p>
                  Po poteku preizkusnega obdobja se dostop do Storitve omeji, dokler ne aktivirate plačljive naročnine. Vaše shranjene etikete ostanejo ohranjene še 30 dni po poteku preizkusa.
                </p>
              </section>

              {/* 5. NAROČNINA IN PLAČILA */}
              <section id="narocnina" className="scroll-mt-24">
                <h2>5. Naročnina in plačila</h2>

                <h3>5.1 Naročniški načrt</h3>
                <p>
                  Storitev je na voljo v okviru mesečne naročnine. Trenutna cena naročnine je objavljena na spletni strani Storitve in v aplikaciji.
                </p>

                <h3>5.2 Plačilni pogoji</h3>
                <ul>
                  <li>Naročnina se zaračunava mesečno vnaprej</li>
                  <li>Plačilo se izvede ob aktivaciji naročnine in nato vsak mesec na isti dan</li>
                  <li>Sprejemamo plačila s kreditnimi/debetnimi karticami preko varnega plačilnega sistema Stripe</li>
                </ul>

                <h3>5.3 Davki</h3>
                <p>
                  Vse cene so navedene brez DDV, razen če je izrecno navedeno drugače. Uporabnik je odgovoren za plačilo vseh veljavnih davkov v skladu z zakonodajo svoje države.
                </p>

                <h3>5.4 Spremembe cen</h3>
                <p>
                  Ponudnik si pridržuje pravico do spremembe cen naročnine. O spremembi cene boste obveščeni najmanj 30 dni vnaprej. Nova cena začne veljati z naslednjim obračunskim obdobjem po obvestilu.
                </p>

                <h3>5.5 Neuspela plačila</h3>
                <p>V primeru neuspelega plačila:</p>
                <ul>
                  <li>Poskusili bomo plačilo ponoviti v naslednjih 7 dneh</li>
                  <li>Če plačilo ni uspešno, lahko omejimo dostop do Storitve</li>
                  <li>Po 14 dneh neuspelih plačil se naročnina samodejno prekine</li>
                </ul>

                <h3>5.6 Vračila</h3>
                <p>
                  Plačila za že začeta obračunska obdobja se ne vračajo, razen v primerih, ki jih zahteva veljavna zakonodaja o varstvu potrošnikov.
                </p>
              </section>

              {/* 6. PREKLIC NAROČNINE */}
              <section id="preklic" className="scroll-mt-24">
                <h2>6. Preklic naročnine</h2>

                <h3>6.1 Pravica do preklica</h3>
                <p>
                  Naročnino lahko kadarkoli prekličete preko uporabniškega portala v aplikaciji ali s pisnim obvestilom na naš elektronski naslov.
                </p>

                <h3>6.2 Učinek preklica</h3>
                <ul>
                  <li>Preklic začne veljati ob koncu tekočega obračunskega obdobja</li>
                  <li>Do tega datuma ohranite polni dostop do Storitve</li>
                  <li>Po preklicu se naročnina ne podaljša samodejno</li>
                </ul>

                <h3>6.3 Hramba podatkov po preklicu</h3>
                <p>Po preklicu naročnine:</p>
                <ul>
                  <li>Vaše etikete ostanejo shranjene še 30 dni</li>
                  <li>V tem obdobju lahko ponovno aktivirate naročnino in dostopate do podatkov</li>
                  <li>Po 30 dneh si pridržujemo pravico do trajnega izbrisa vaših podatkov</li>
                </ul>

                <h3>6.4 Odstop od pogodbe (potrošniki)</h3>
                <p>
                  Potrošniki imajo v skladu z Zakonom o varstvu potrošnikov pravico do odstopa od pogodbe v 14 dneh od sklenitve, brez navedbe razloga. Ta pravica ne velja, če ste Storitev že začeli uporabljati in s tem izrecno soglašali z začetkom izvajanja storitve pred potekom odstopnega roka.
                </p>
              </section>

              {/* 7. PRAVICE INTELEKTUALNE LASTNINE */}
              <section id="intelektualna" className="scroll-mt-24">
                <h2>7. Pravice intelektualne lastnine</h2>

                <h3>7.1 Lastništvo Storitve</h3>
                <p>
                  Storitev, vključno z vso programsko opremo, dizajnom, besedili, grafikami, logotipi in drugimi materiali, je last Ponudnika ali njegovih licencodajalcev in je zaščitena z avtorskimi pravicami, blagovnimi znamkami in drugimi pravicami intelektualne lastnine.
                </p>

                <h3>7.2 Licenca za uporabo</h3>
                <p>
                  S plačilom naročnine pridobite omejeno, neizključno, neprenosljivo licenco za uporabo Storitve v skladu s temi Pogoji. Ta licenca ne vključuje pravice do:
                </p>
                <ul>
                  <li>Kopiranja, spreminjanja ali distribuiranja Storitve</li>
                  <li>Obratnega inženiringa, dekompiliranja ali razstavljanja programske opreme</li>
                  <li>Odstranjevanja oznak o avtorskih pravicah ali drugih lastniških oznak</li>
                  <li>Uporabe Storitve za ustvarjanje konkurenčnega produkta</li>
                </ul>

                <h3>7.3 Vaša vsebina</h3>
                <p>
                  Obdržite vse pravice intelektualne lastnine nad vsebino, ki jo ustvarite s Storitvijo (oblikovane etikete, naložene slike, itd.). S shranjevanjem vsebine v Storitev nam podeljujete omejeno licenco za shranjevanje, prikazovanje in obdelavo te vsebine izključno za namen zagotavljanja Storitve.
                </p>

                <h3>7.4 Povratne informacije</h3>
                <p>
                  Če nam posredujete predloge, ideje ali povratne informacije o Storitvi, nam s tem podeljujete neomejeno pravico do uporabe teh informacij brez obveznosti do vas.
                </p>
              </section>

              {/* 8. OMEJITVE UPORABE */}
              <section id="omejitve" className="scroll-mt-24">
                <h2>8. Omejitve uporabe</h2>

                <h3>8.1 Prepovedane dejavnosti</h3>
                <p>Pri uporabi Storitve je prepovedano:</p>

                <p><strong>a) Nezakonita uporaba</strong></p>
                <ul>
                  <li>Uporaba Storitve za katero koli nezakonito dejavnost</li>
                  <li>Kršenje pravic intelektualne lastnine tretjih oseb</li>
                  <li>Ustvarjanje etiket za ponarejene ali nezakonite izdelke</li>
                </ul>

                <p><strong>b) Zloraba sistema</strong></p>
                <ul>
                  <li>Poskusi nepooblaščenega dostopa do Storitve ali njenih sistemov</li>
                  <li>Uporaba avtomatiziranih skript, botov ali podobnih orodij brez dovoljenja</li>
                  <li>Namerno preobremenjevanje strežnikov ali omrežne infrastrukture</li>
                  <li>Obhajanje varnostnih ukrepov ali omejitev dostopa</li>
                </ul>

                <p><strong>c) Škodljiva vsebina</strong></p>
                <ul>
                  <li>Nalaganje virusov, zlonamerne programske opreme ali škodljive kode</li>
                  <li>Ustvarjanje ali distribucija vsebine, ki je žaljiva, diskriminatorna ali nezakonita</li>
                </ul>

                <p><strong>d) Zloraba preizkusnega obdobja</strong></p>
                <ul>
                  <li>Ustvarjanje več računov za podaljšanje brezplačnega preizkusa</li>
                  <li>Uporaba anonimizacijskih orodij za prikrivanje identitete naprave</li>
                  <li>Deljenje računov med več uporabniki ali organizacijami</li>
                </ul>

                <h3>8.2 Posledice kršitev</h3>
                <p>Kršitev teh omejitev lahko povzroči:</p>
                <ul>
                  <li>Takojšnjo začasno ali trajno ukinitev vašega računa</li>
                  <li>Izgubo dostopa do shranjenih podatkov</li>
                  <li>Pravne ukrepe v primeru povzročene škode</li>
                </ul>
              </section>

              {/* 9. ZASEBNOST IN VARSTVO PODATKOV */}
              <section id="zasebnost" className="scroll-mt-24">
                <h2>9. Zasebnost in varstvo podatkov</h2>

                <h3>9.1 Politika zasebnosti</h3>
                <p>
                  Zbiranje, obdelava in hramba vaših osebnih podatkov je urejena v naši <Link to="/zasebnost" className="text-primary hover:underline">Politiki zasebnosti</Link>, ki je sestavni del teh Pogojev. S sprejetjem teh Pogojev potrjujete, da ste seznanjeni s Politiko zasebnosti.
                </p>

                <h3>9.2 Vaši podatki</h3>
                <p>Vaše etikete in z njimi povezani podatki so shranjeni na varnih strežnikih. Zavezujemo se, da:</p>
                <ul>
                  <li>Ne bomo dostopali do vaših vsebin, razen če je to nujno za zagotavljanje Storitve ali če to zahteva zakon</li>
                  <li>Ne bomo prodajali ali delili vaših podatkov s tretjimi osebami za tržne namene</li>
                  <li>Bomo uporabili ustrezne varnostne ukrepe za zaščito vaših podatkov</li>
                </ul>

                <h3>9.3 Lokacija podatkov</h3>
                <p>
                  Podatki so shranjeni na strežnikih v Evropski uniji v skladu z Uredbo (EU) 2016/679 (GDPR).
                </p>
              </section>

              {/* 10. OMEJITEV ODGOVORNOSTI */}
              <section id="odgovornost" className="scroll-mt-24">
                <h2>10. Omejitev odgovornosti</h2>

                <h3>10.1 Zagotavljanje storitve "kot je"</h3>
                <p>
                  Storitev je zagotovljena "kot je" (as is) in "kot je na voljo" (as available), brez kakršnih koli izrecnih ali implicitnih jamstev, vključno z, vendar ne omejeno na, implicitna jamstva primernosti za prodajo, primernosti za določen namen in nekršitve pravic.
                </p>

                <h3>10.2 Omejitev jamstev</h3>
                <p>Ponudnik ne jamči, da:</p>
                <ul>
                  <li>Bo Storitev delovala neprekinjeno, varno ali brez napak</li>
                  <li>Bodo rezultati, pridobljeni z uporabo Storitve, točni ali zanesljivi</li>
                  <li>Bo Storitev izpolnjevala vaše specifične zahteve</li>
                  <li>Bodo etikete pravilno natisnjene na vseh tiskalnikih in v vseh okoliščinah</li>
                </ul>

                <h3>10.3 Omejitev odgovornosti</h3>
                <p>V največjem obsegu, ki ga dovoljuje veljavna zakonodaja:</p>
                <ul>
                  <li>Ponudnik ne odgovarja za posredno, naključno, posebno, posledično ali kazensko škodo, vključno z izgubo dobička, podatkov, ugleda ali drugih nematerialnih izgub.</li>
                  <li>Skupna odgovornost Ponudnika v katerem koli 12-mesečnem obdobju ne presega zneska, ki ste ga plačali za Storitev v tem obdobju.</li>
                  <li>Te omejitve veljajo ne glede na pravno podlago zahtevka (pogodba, odškodninska odgovornost, malomarnost ali druga).</li>
                </ul>

                <h3>10.4 Odgovornost uporabnika</h3>
                <p>Sami ste odgovorni za:</p>
                <ul>
                  <li>Pravilno konfiguracijo vašega tiskalnika in omrežja</li>
                  <li>Preverjanje pravilnosti etiket pred množičnim tiskanjem</li>
                  <li>Skladnost etiket z veljavnimi predpisi in standardi (npr. GS1 za črtne kode)</li>
                  <li>Varnostno kopiranje pomembnih podatkov</li>
                </ul>
              </section>

              {/* 11. ODŠKODNINA */}
              <section id="odskodnina" className="scroll-mt-24">
                <h2>11. Odškodnina</h2>
                <p>
                  Soglašate, da boste Ponudnika, njegove zaposlene, direktorje, zastopnike in partnerje branili, odškodovali in odvezali odgovornosti v zvezi z vsemi zahtevki, škodo, obveznostmi, stroški in izdatki (vključno z razumnimi odvetniškimi stroški), ki izhajajo iz:
                </p>
                <ul>
                  <li>Vaše uporabe Storitve</li>
                  <li>Vaše kršitve teh Pogojev</li>
                  <li>Vaše kršitve pravic tretjih oseb</li>
                  <li>Vsebine, ki jo ustvarite ali naložite v Storitev</li>
                </ul>
              </section>

              {/* 12. PREKINITEV */}
              <section id="prekinitev" className="scroll-mt-24">
                <h2>12. Prekinitev</h2>

                <h3>12.1 Prekinitev s strani uporabnika</h3>
                <p>
                  Svoj račun lahko kadarkoli zaprete preko nastavitev v aplikaciji ali s pisnim obvestilom. Po zaprtju računa izgubite dostop do Storitve in shranjenih podatkov.
                </p>

                <h3>12.2 Prekinitev s strani Ponudnika</h3>
                <p>Ponudnik lahko vaš račun začasno ali trajno ukine, če:</p>
                <ul>
                  <li>Kršite te Pogoje</li>
                  <li>Ne plačate naročnine v dogovorjenem roku</li>
                  <li>Vaša uporaba povzroča škodo Storitvi ali drugim uporabnikom</li>
                  <li>To zahteva zakonodaja ali sodni nalog</li>
                </ul>

                <h3>12.3 Učinek prekinitve</h3>
                <p>Ob prekinitvi:</p>
                <ul>
                  <li>Takoj izgubite dostop do Storitve</li>
                  <li>Licence, podeljene po teh Pogojih, prenehajo veljati</li>
                  <li>Določbe, ki po svoji naravi preživijo prekinitev (zlasti o odgovornosti, odškodnini in veljavnem pravu), ostanejo v veljavi</li>
                </ul>
              </section>

              {/* 13. SPREMEMBE POGOJEV */}
              <section id="spremembe" className="scroll-mt-24">
                <h2>13. Spremembe pogojev</h2>

                <h3>13.1 Pravica do sprememb</h3>
                <p>Ponudnik si pridržuje pravico do spremembe teh Pogojev kadarkoli. O bistvenih spremembah vas bomo obvestili:</p>
                <ul>
                  <li>Po elektronski pošti na naslov, povezan z vašim računom</li>
                  <li>Z obvestilom v aplikaciji</li>
                </ul>

                <h3>13.2 Veljavnost sprememb</h3>
                <p>Spremembe začnejo veljati 30 dni po obvestilu, razen če sprememba:</p>
                <ul>
                  <li>Je potrebna zaradi zakonskih zahtev (takojšnja veljavnost)</li>
                  <li>Je v vašo korist (takojšnja veljavnost)</li>
                  <li>Se nanaša na novo funkcionalnost (veljavnost ob uvedbi)</li>
                </ul>

                <h3>13.3 Sprejetje sprememb</h3>
                <p>
                  Nadaljnja uporaba Storitve po začetku veljavnosti spremenjenih Pogojev pomeni vaše sprejetje teh sprememb. Če se s spremembami ne strinjate, morate prenehati uporabljati Storitev in zapreti svoj račun.
                </p>
              </section>

              {/* 14. VELJAVNO PRAVO */}
              <section id="pravo" className="scroll-mt-24">
                <h2>14. Veljavno pravo in reševanje sporov</h2>

                <h3>14.1 Veljavno pravo</h3>
                <p>
                  Za te Pogoje in vse spore, ki izhajajo iz njih ali so z njimi povezani, se uporablja pravo Republike Slovenije, brez upoštevanja kolizijskih pravil.
                </p>

                <h3>14.2 Pristojnost</h3>
                <p>
                  Za reševanje vseh sporov, ki izhajajo iz teh Pogojev ali uporabe Storitve, je pristojno sodišče v Republiki Sloveniji.
                </p>

                <h3>14.3 Izvensodno reševanje sporov</h3>
                <p>
                  Pred sprožitvijo sodnega postopka si bomo prizadevali spor rešiti sporazumno. Potrošniki lahko spor prijavijo tudi na platformo za spletno reševanje potrošniških sporov (ODR): <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr/</a>
                </p>

                <h3>14.4 Omejitev zahtevkov</h3>
                <p>
                  Vsi zahtevki, ki izhajajo iz uporabe Storitve, morajo biti vloženi v enem (1) letu od nastanka dogodka, ki je podlaga za zahtevek, sicer so zastarani.
                </p>
              </section>

              {/* 15. SPLOŠNE DOLOČBE */}
              <section id="splosne" className="scroll-mt-24">
                <h2>15. Splošne določbe</h2>

                <h3>15.1 Celotni dogovor</h3>
                <p>
                  Ti Pogoji, skupaj s Politiko zasebnosti in morebitnimi dodatnimi pogoji za posamezne funkcionalnosti, predstavljajo celotni dogovor med vami in Ponudnikom glede uporabe Storitve.
                </p>

                <h3>15.2 Ločljivost</h3>
                <p>
                  Če se katera koli določba teh Pogojev izkaže za neveljavno ali neizvršljivo, to ne vpliva na veljavnost preostalih določb, ki ostanejo v polni veljavi.
                </p>

                <h3>15.3 Odpoved pravicam</h3>
                <p>
                  Če Ponudnik ne uveljavlja katere koli pravice ali določbe teh Pogojev, to ne pomeni odpovedi tej pravici ali določbi.
                </p>

                <h3>15.4 Prenos</h3>
                <p>
                  Svojih pravic in obveznosti po teh Pogojih ne smete prenesti na tretjo osebo brez predhodnega pisnega soglasja Ponudnika. Ponudnik lahko prenese svoje pravice in obveznosti na povezano družbo ali v primeru združitve, prevzema ali prodaje sredstev.
                </p>

                <h3>15.5 Višja sila</h3>
                <p>
                  Ponudnik ne odgovarja za zamude ali neizpolnitev obveznosti zaradi okoliščin, na katere nima vpliva (višja sila), vključno z naravnimi nesrečami, vojnami, terorističnimi dejanji, epidemijami, izpadi električne energije ali interneta, dejanji vladnih organov ipd.
                </p>

                <h3>15.6 Jezik</h3>
                <p>
                  Ti Pogoji so sestavljeni v slovenskem jeziku. V primeru prevoda ima slovenska različica prednost.
                </p>
              </section>

              {/* 16. KONTAKT */}
              <section id="kontakt" className="scroll-mt-24">
                <h2>16. Kontakt</h2>
                <p>Za vprašanja o teh Pogojih ali Storitvi nas lahko kontaktirate:</p>
                <div className="not-prose bg-muted/50 rounded-xl p-6 mt-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:podpora@labeldesigner.si" className="text-primary hover:underline">
                      podpora@labeldesigner.si
                    </a>
                  </div>
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
                        <td className="px-4 py-3">Začetna različica Pogojev uporabe</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Footer */}
              <footer className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                <p className="italic mb-4">
                  S klikom na "Strinjam se" ali z uporabo Storitve potrjujete, da ste te Pogoje prebrali, razumeli in se z njimi strinjate.
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

export default PogojiUporabe;
