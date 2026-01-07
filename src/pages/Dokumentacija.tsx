import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Printer, BookOpen, Monitor, Tag, Type, Barcode, QrCode, Image, Square, Save, Printer as PrinterIcon, FileCode, CreditCard, Keyboard, AlertCircle, HelpCircle, Mail, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Dokumentacija = () => {
  const tocItems = [
    { id: "introduction", label: "1. Introduction", icon: BookOpen },
    { id: "getting-started", label: "2. Getting Started", icon: Monitor },
    { id: "interface", label: "3. Interface Overview", icon: Monitor },
    { id: "label-settings", label: "4. Label Settings", icon: Tag },
    { id: "working-with-elements", label: "5. Working with Elements", icon: Square },
    { id: "text", label: "6. Text Elements", icon: Type },
    { id: "barcodes", label: "7. Barcodes", icon: Barcode },
    { id: "qr-codes", label: "8. QR Codes", icon: QrCode },
    { id: "images", label: "9. Images & Logos", icon: Image },
    { id: "shapes", label: "10. Shapes & Lines", icon: Square },
    { id: "saving", label: "11. Saving & Loading", icon: Save },
    { id: "printing", label: "12. Printing", icon: PrinterIcon },
    { id: "zpl-export", label: "13. ZPL Export", icon: FileCode },
    { id: "subscription", label: "14. Subscription", icon: CreditCard },
    { id: "shortcuts", label: "15. Keyboard Shortcuts", icon: Keyboard },
    { id: "troubleshooting", label: "16. Troubleshooting", icon: AlertCircle },
    { id: "faq", label: "17. FAQ", icon: HelpCircle },
  ];

  return (
    <>
      <Helmet>
        <title>Documentation - Label Designer PTI</title>
        <meta name="description" content="Complete user guide for Label Designer PTI. Learn how to design thermal labels for Zebra printers with our intuitive web-based editor." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container-wide py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                  <Printer className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-bold">Label Designer PTI</span>
              </div>
            </div>
            <span className="text-sm text-muted-foreground hidden sm:block">Documentation v1.0</span>
          </div>
        </header>

        <div className="container-wide py-12">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12">
            {/* Sidebar TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <h3 className="font-semibold mb-4 text-lg">Contents</h3>
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
            <main className="max-w-none">
              {/* Title */}
              <div className="mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Documentation</h1>
                <p className="text-xl text-muted-foreground">
                  Everything you need to design and print professional thermal labels
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Version 1.0 • Last updated: January 2025
                </p>
              </div>

              {/* 1. INTRODUCTION */}
              <section id="introduction" className="scroll-mt-24 mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">1. Introduction</h2>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">What is Label Designer PTI?</h3>
                    <p className="text-muted-foreground mb-4">
                      Label Designer PTI is a web-based application for creating thermal labels for Zebra printers. 
                      No installation required — design labels directly in your browser with pixel-perfect precision.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        "Drag-and-drop label design",
                        "Text, barcodes, QR codes & images",
                        "Precise millimeter positioning",
                        "Direct network printing to Zebra printers",
                        "ZPL export for ERP/WMS integration",
                        "Cloud-based label storage"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">System Requirements</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-muted/50 rounded-xl p-5">
                        <h4 className="font-medium mb-2">Browser</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>Chrome 90+ (recommended)</li>
                          <li>Edge 90+</li>
                          <li>Firefox 90+</li>
                          <li>Safari 14+</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 rounded-xl p-5">
                        <h4 className="font-medium mb-2">Internet</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>Stable internet connection</li>
                          <li>Printer on same network for printing</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 rounded-xl p-5">
                        <h4 className="font-medium mb-2">Printer</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>Any Zebra ZPL printer</li>
                          <li>Network connected</li>
                          <li>Known IP address</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Supported Printers</h3>
                    <p className="text-muted-foreground mb-4">
                      Works with all Zebra printers supporting ZPL language:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border border-border rounded-lg">
                        <thead className="bg-muted">
                          <tr>
                            <th className="px-4 py-3 text-left font-medium">Series</th>
                            <th className="px-4 py-3 text-left font-medium">Models</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          <tr><td className="px-4 py-3 font-medium">ZD Series</td><td className="px-4 py-3 text-muted-foreground">ZD420, ZD620, ZD421, ZD621</td></tr>
                          <tr><td className="px-4 py-3 font-medium">ZT Series</td><td className="px-4 py-3 text-muted-foreground">ZT410, ZT420, ZT610, ZT620, ZT230, ZT231</td></tr>
                          <tr><td className="px-4 py-3 font-medium">GK/GX Series</td><td className="px-4 py-3 text-muted-foreground">GK420d, GK420t, GX420d, GX420t, GX430t</td></tr>
                          <tr><td className="px-4 py-3 font-medium">ZQ Series</td><td className="px-4 py-3 text-muted-foreground">ZQ510, ZQ520, ZQ610, ZQ620 (mobile)</td></tr>
                          <tr><td className="px-4 py-3 font-medium">Others</td><td className="px-4 py-3 text-muted-foreground">All printers with ZPL support</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">
                      <strong>Supported resolutions:</strong> 203 DPI, 300 DPI, 600 DPI
                    </p>
                  </div>
                </div>
              </section>

              {/* 2. GETTING STARTED */}
              <section id="getting-started" className="scroll-mt-24 mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Monitor className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">2. Getting Started</h2>
                </div>

                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-muted/30 rounded-xl p-6 border border-border">
                      <h3 className="text-lg font-semibold mb-4">Create an Account</h3>
                      <ol className="space-y-3 text-sm">
                        <li className="flex gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-medium flex-shrink-0">1</span>
                          <span>Visit Label Designer PTI website</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-medium flex-shrink-0">2</span>
                          <span>Click <strong>"Sign Up"</strong> or <strong>"Start Free Trial"</strong></span>
                        </li>
                        <li className="flex gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-medium flex-shrink-0">3</span>
                          <span>Enter your email address and create a password</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-medium flex-shrink-0">4</span>
                          <span>Check your email and click the verification link</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-medium flex-shrink-0">5</span>
                          <span>Log in with your credentials</span>
                        </li>
                      </ol>
                      <p className="text-sm text-muted-foreground mt-4 p-3 bg-primary/5 rounded-lg">
                        <strong>Free trial:</strong> 14 days with full access, no credit card required.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-muted/30 rounded-xl p-6 border border-border">
                        <h3 className="text-lg font-semibold mb-4">Sign In</h3>
                        <ol className="space-y-2 text-sm text-muted-foreground">
                          <li>1. Go to Label Designer PTI</li>
                          <li>2. Enter your email and password</li>
                          <li>3. Click <strong>"Sign In"</strong></li>
                        </ol>
                      </div>

                      <div className="bg-muted/30 rounded-xl p-6 border border-border">
                        <h3 className="text-lg font-semibold mb-4">Forgot Password?</h3>
                        <ol className="space-y-2 text-sm text-muted-foreground">
                          <li>1. Click <strong>"Forgot password?"</strong> on sign in page</li>
                          <li>2. Enter your email address</li>
                          <li>3. Check your email for reset link</li>
                          <li>4. Create a new password</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 3. INTERFACE OVERVIEW */}
              <section id="interface" className="scroll-mt-24 mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Monitor className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">3. Interface Overview</h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Screen Layout</h3>
                    <div className="bg-muted/50 rounded-xl p-6 font-mono text-xs overflow-x-auto">
                      <pre>{`┌─────────────────────────────────────────────────────────────────┐
│                        HEADER BAR                               │
│  [Label Name] [Width] [Height] [DPI] [Rotation] [Save] [Print]  │
├────────────┬────────────────────────────────────┬───────────────┤
│            │                                    │               │
│  TOOLBAR   │                                    │  PROPERTIES   │
│            │         CANVAS AREA                │    PANEL      │
│  • Text    │                                    │               │
│  • Image   │    ┌────────────────────┐          │  Position     │
│  • Barcode │    │                    │          │  Size         │
│  • Shapes  │    │      LABEL         │          │  Rotation     │
│  • Line    │    │                    │          │  Font         │
│            │    └────────────────────┘          │  Alignment    │
│  • Export  │         ↑                          │               │
│  • Clear   │      Rulers (mm)                   │               │
│  • Zoom    │                                    │               │
└────────────┴────────────────────────────────────┴───────────────┘`}</pre>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Header Bar</h3>
                      <div className="space-y-3">
                        {[
                          { name: "Label Name", desc: "Name for saving your label" },
                          { name: "Width (mm)", desc: "Label width in millimeters" },
                          { name: "Height (mm)", desc: "Label height in millimeters" },
                          { name: "DPI", desc: "Printer resolution (203, 300, 600)" },
                          { name: "Rotate 180°", desc: "Flip label for printing" },
                          { name: "Save", desc: "Save label to cloud" },
                          { name: "Print", desc: "Open print options" },
                        ].map((item, i) => (
                          <div key={i} className="flex gap-3 text-sm">
                            <span className="font-medium min-w-[100px]">{item.name}</span>
                            <span className="text-muted-foreground">{item.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Toolbar</h3>
                      <div className="space-y-3">
                        {[
                          { name: "Text", desc: "Add text (fixed, placeholder, multiline)" },
                          { name: "Image", desc: "Upload image or logo" },
                          { name: "Barcode", desc: "Add barcode or QR code" },
                          { name: "Rectangle", desc: "Add rectangle shape" },
                          { name: "Ellipse", desc: "Add ellipse or circle" },
                          { name: "Line", desc: "Add horizontal or vertical line" },
                          { name: "Export ZPL", desc: "Export ZPL code" },
                          { name: "Clear", desc: "Remove all elements" },
                          { name: "Zoom", desc: "Zoom in/out (10% - 300%)" },
                        ].map((item, i) => (
                          <div key={i} className="flex gap-3 text-sm">
                            <span className="font-medium min-w-[80px]">{item.name}</span>
                            <span className="text-muted-foreground">{item.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Canvas Area</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { color: "bg-white border", label: "White area", desc: "Your label" },
                        { color: "bg-muted", label: "Gray area", desc: "Outside label bounds" },
                        { color: "bg-primary/20", label: "Blue guides", desc: "Alignment helpers" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm">
                          <div className={`w-8 h-8 rounded ${item.color}`}></div>
                          <div>
                            <span className="font-medium">{item.label}</span>
                            <span className="text-muted-foreground"> — {item.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Properties Panel</h3>
                    <p className="text-muted-foreground mb-3">When you select an element, its properties appear:</p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                      {[
                        "X, Y — Position in pixels",
                        "Width, Height — Element dimensions",
                        "Rotation — 0°, 90°, 180°, 270°",
                        "Font size — Character size",
                        "Alignment — Left, center, right",
                        "Line weight — For shapes and lines",
                      ].map((item, i) => (
                        <div key={i} className="bg-muted/50 rounded-lg px-3 py-2">{item}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* 4. LABEL SETTINGS */}
              <section id="label-settings" className="scroll-mt-24 mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Tag className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">4. Label Settings</h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Label Dimensions</h3>
                    <p className="text-muted-foreground mb-4">
                      Set your label size in the header bar. The canvas automatically adjusts to your dimensions.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border border-border rounded-lg">
                        <thead className="bg-muted">
                          <tr>
                            <th className="px-4 py-3 text-left font-medium">Use Case</th>
                            <th className="px-4 py-3 text-left font-medium">Width</th>
                            <th className="px-4 py-3 text-left font-medium">Height</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          <tr><td className="px-4 py-3">Small price tag</td><td className="px-4 py-3 text-muted-foreground">40 mm</td><td className="px-4 py-3 text-muted-foreground">20 mm</td></tr>
                          <tr><td className="px-4 py-3">Standard label</td><td className="px-4 py-3 text-muted-foreground">100 mm</td><td className="px-4 py-3 text-muted-foreground">50 mm</td></tr>
                          <tr><td className="px-4 py-3">Shipping label</td><td className="px-4 py-3 text-muted-foreground">100 mm</td><td className="px-4 py-3 text-muted-foreground">150 mm</td></tr>
                          <tr><td className="px-4 py-3">Shelf label</td><td className="px-4 py-3 text-muted-foreground">70 mm</td><td className="px-4 py-3 text-muted-foreground">40 mm</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">DPI (Dots Per Inch)</h3>
                    <p className="text-muted-foreground mb-4">
                      DPI determines your printer's resolution. <strong>This setting must match your printer!</strong>
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { dpi: "203 DPI", desc: "Standard resolution", use: "Most desktop printers" },
                        { dpi: "300 DPI", desc: "High resolution", use: "Detailed labels, small barcodes" },
                        { dpi: "600 DPI", desc: "Ultra-high resolution", use: "Very small labels, precision printing" },
                      ].map((item, i) => (
                        <div key={i} className="bg-muted/50 rounded-xl p-5">
                          <h4 className="font-semibold mb-1">{item.dpi}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{item.desc}</p>
                          <p className="text-xs text-muted-foreground">{item.use}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">180° Rotation</h3>
                    <p className="text-muted-foreground mb-3">Enable <strong>"Rotate 180°"</strong> when:</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        Labels exit in the wrong orientation
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        You need reversed printing
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        Printer is mounted upside-down
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 5. WORKING WITH ELEMENTS */}
              <section id="working-with-elements" className="scroll-mt-24 mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Square className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">5. Working with Elements</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-muted/30 rounded-xl p-6 border border-border">
                    <h3 className="font-semibold mb-4">Adding Elements</h3>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li>1. Click a tool in the toolbar (e.g., Text)</li>
                      <li>2. Element appears at center of label</li>
                      <li>3. Drag to desired position</li>
                    </ol>
                  </div>

                  <div className="bg-muted/30 rounded-xl p-6 border border-border">
                    <h3 className="font-semibold mb-4">Selecting Elements</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Click an element to select it</li>
                      <li>• Selected elements show blue control points</li>
                      <li>• Properties panel shows element settings</li>
                    </ul>
                  </div>

                  <div className="bg-muted/30 rounded-xl p-6 border border-border">
                    <h3 className="font-semibold mb-4">Moving Elements</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><strong>Mouse:</strong> Click and drag</li>
                      <li><strong>Arrow keys:</strong> Move 1 pixel</li>
                      <li><strong>Shift + arrows:</strong> Move 10 pixels</li>
                      <li><strong>Precise:</strong> Enter X, Y in properties panel</li>
                    </ul>
                  </div>

                  <div className="bg-muted/30 rounded-xl p-6 border border-border">
                    <h3 className="font-semibold mb-4">Resizing Elements</h3>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li>1. Select the element</li>
                      <li>2. Drag a blue control point</li>
                      <li>3. Corner points maintain aspect ratio</li>
                      <li>4. Edge points resize one dimension</li>
                    </ol>
                  </div>

                  <div className="bg-muted/30 rounded-xl p-6 border border-border">
                    <h3 className="font-semibold mb-4">Rotating Elements</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Select element, then choose rotation in properties panel: 0°, 90°, 180°, or 270°.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Note: Rotation is limited to these angles due to ZPL language constraints.
                    </p>
                  </div>

                  <div className="bg-muted/30 rounded-xl p-6 border border-border">
                    <h3 className="font-semibold mb-4">Copy, Paste & Delete</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><strong>Copy:</strong> Ctrl+C (Win) / Cmd+C (Mac)</li>
                      <li><strong>Paste:</strong> Ctrl+V (Win) / Cmd+V (Mac)</li>
                      <li><strong>Delete:</strong> Delete or Backspace key</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 6. TEXT */}
              <section id="text" className="scroll-mt-24 mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Type className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">6. Text Elements</h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Text Types</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border border-border rounded-lg">
                        <thead className="bg-muted">
                          <tr>
                            <th className="px-4 py-3 text-left font-medium">Type</th>
                            <th className="px-4 py-3 text-left font-medium">Use Case</th>
                            <th className="px-4 py-3 text-left font-medium">Example</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          <tr>
                            <td className="px-4 py-3 font-medium">Fixed Text</td>
                            <td className="px-4 py-3 text-muted-foreground">Static text, same on all labels</td>
                            <td className="px-4 py-3 text-muted-foreground">"MADE IN EU", "LOT:"</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-medium">Placeholder</td>
                            <td className="px-4 py-3 text-muted-foreground">Dynamic field replaced by ERP</td>
                            <td className="px-4 py-3 font-mono text-muted-foreground">{`{{PRODUCT_NAME}}`}</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-medium">Multiline</td>
                            <td className="px-4 py-3 text-muted-foreground">Longer text with auto-wrapping</td>
                            <td className="px-4 py-3 text-muted-foreground">Descriptions, addresses</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Adding Text</h3>
                      <ol className="space-y-2 text-sm text-muted-foreground">
                        <li>1. Click <strong>"Text"</strong> in toolbar</li>
                        <li>2. Choose: Fixed, Placeholder, or Multiline</li>
                        <li>3. For placeholders, select field name</li>
                        <li>4. Position on label</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Font Settings</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><strong>Font Size</strong> — Character size in pixels</li>
                        <li><strong>Font Width</strong> — Character width (independent)</li>
                        <li><strong>Font Height</strong> — Character height (independent)</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Placeholders for ERP Integration</h3>
                    <p className="text-muted-foreground mb-3">
                      Placeholders allow dynamic data replacement. Your ERP/WMS system replaces {`{{...}}`} with actual values.
                    </p>
                    <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                      <pre>{`{{PRODUCT_NAME}}
SKU: {{SKU}}
Price: {{PRICE}} €`}</pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* 7. BARCODES */}
              <section id="barcodes" className="scroll-mt-24 mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Barcode className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">7. Barcodes</h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Supported Barcode Types</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border border-border rounded-lg">
                        <thead className="bg-muted">
                          <tr>
                            <th className="px-4 py-3 text-left font-medium">Type</th>
                            <th className="px-4 py-3 text-left font-medium">Data Length</th>
                            <th className="px-4 py-3 text-left font-medium">Use Case</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          <tr>
                            <td className="px-4 py-3 font-medium">EAN-8</td>
                            <td className="px-4 py-3 text-muted-foreground">7-8 digits</td>
                            <td className="px-4 py-3 text-muted-foreground">Small products, internal use</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-medium">EAN-13</td>
                            <td className="px-4 py-3 text-muted-foreground">12-13 digits</td>
                            <td className="px-4 py-3 text-muted-foreground">Retail products (standard)</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-medium">Code 128</td>
                            <td className="px-4 py-3 text-muted-foreground">Variable (alphanumeric)</td>
                            <td className="px-4 py-3 text-muted-foreground">Logistics, internal use</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-muted/30 rounded-xl p-6 border border-border">
                      <h3 className="font-semibold mb-4">Adding a Barcode</h3>
                      <ol className="space-y-2 text-sm text-muted-foreground">
                        <li>1. Click <strong>"Barcode"</strong> in toolbar</li>
                        <li>2. Select type: EAN-8, EAN-13, or Code 128</li>
                        <li>3. Enter data</li>
                        <li>4. Set size and height</li>
                        <li>5. Click <strong>"Add"</strong></li>
                      </ol>
                    </div>

                    <div className="bg-muted/30 rounded-xl p-6 border border-border">
                      <h3 className="font-semibold mb-4">Barcode Settings</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><strong>Size</strong> — Module width (bar width): 1-10</li>
                        <li><strong>Height</strong> — Bar height in pixels: 10-500</li>
                        <li><strong>Human Readable</strong> — Show numbers below: Yes/No</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* 8. QR CODES */}
              <section id="qr-codes" className="scroll-mt-24 mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <QrCode className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">8. QR Codes</h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">About QR Codes</h3>
                    <p className="text-muted-foreground mb-3">QR (Quick Response) codes can store:</p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {["Website URLs", "Text content", "Contact information", "Locations", "Custom data"].map((item, i) => (
                        <div key={i} className="bg-muted/50 rounded-lg px-3 py-2 text-sm">{item}</div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-muted/30 rounded-xl p-6 border border-border">
                      <h3 className="font-semibold mb-4">Adding a QR Code</h3>
                      <ol className="space-y-2 text-sm text-muted-foreground">
                        <li>1. Click <strong>"Barcode"</strong> in toolbar</li>
                        <li>2. Select <strong>"QR Code"</strong></li>
                        <li>3. Enter data (URL or text)</li>
                        <li>4. Set magnification (1-10)</li>
                        <li>5. Set error correction level</li>
                        <li>6. Click <strong>"Add"</strong></li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Error Correction Levels</h3>
                      <div className="space-y-3">
                        {[
                          { level: "L (Low)", pct: "~7%", use: "Clean environments, small codes" },
                          { level: "M (Medium)", pct: "~15%", use: "Standard use (default)" },
                          { level: "Q (Quartile)", pct: "~25%", use: "Industrial environments" },
                          { level: "H (High)", pct: "~30%", use: "Damaged or dirty labels" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-4 text-sm">
                            <span className="font-medium min-w-[90px]">{item.level}</span>
                            <span className="text-muted-foreground min-w-[50px]">{item.pct}</span>
                            <span className="text-muted-foreground">{item.use}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-4 italic">
                        Higher correction = larger QR code, but more damage resistant.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 9. IMAGES */}
              <section id="images" className="scroll-mt-24 mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Image className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">9. Images & Logos</h2>
                </div>

                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Supported Formats</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary" />
                          <span><strong>PNG</strong> — Recommended, supports transparency</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary" />
                          <span><strong>JPG/JPEG</strong> — Good compression</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary" />
                          <span><strong>GIF</strong> — Static only (no animation)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary" />
                          <span><strong>BMP</strong> — Large file sizes</span>
                        </li>
                        <li className="flex items-center gap-2 text-muted-foreground">
                          <span className="w-4 h-4 text-center">✕</span>
                          <span><strong>SVG</strong> — Not supported, convert to PNG</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-muted/30 rounded-xl p-6 border border-border">
                      <h3 className="font-semibold mb-4">Adding an Image</h3>
                      <ol className="space-y-2 text-sm text-muted-foreground">
                        <li>1. Click <strong>"Image"</strong> in toolbar</li>
                        <li>2. Click <strong>"Choose File"</strong> or drag and drop</li>
                        <li>3. Image appears on label</li>
                        <li>4. Resize and position as needed</li>
                      </ol>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                    <h3 className="font-semibold mb-4">Tips for Best Results</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5" />
                        <span>Use high-contrast images</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5" />
                        <span>Avoid grayscale and gradients (thermal printing is 1-bit)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5" />
                        <span>Use black and white logos in the source file</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5" />
                        <span>Higher resolution source = better print quality</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 10. SHAPES */}
              <section id="shapes" className="scroll-mt-24 mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Square className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">10. Shapes & Lines</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-muted/30 rounded-xl p-6 border border-border">
                    <h3 className="font-semibold mb-4">Rectangle</h3>
                    <ol className="space-y-2 text-sm text-muted-foreground mb-4">
                      <li>1. Click <strong>"Rectangle"</strong></li>
                      <li>2. Adjust size and position</li>
                      <li>3. Set line thickness</li>
                    </ol>
                    <p className="text-xs text-muted-foreground">
                      <strong>Use for:</strong> Borders, highlighting areas, tables
                    </p>
                  </div>

                  <div className="bg-muted/30 rounded-xl p-6 border border-border">
                    <h3 className="font-semibold mb-4">Ellipse / Circle</h3>
                    <ol className="space-y-2 text-sm text-muted-foreground mb-4">
                      <li>1. Click <strong>"Ellipse"</strong></li>
                      <li>2. For a circle: set equal width and height</li>
                    </ol>
                    <p className="text-xs text-muted-foreground">
                      <strong>Use for:</strong> Decorative elements, icons
                    </p>
                  </div>

                  <div className="bg-muted/30 rounded-xl p-6 border border-border">
                    <h3 className="font-semibold mb-4">Lines</h3>
                    <ol className="space-y-2 text-sm text-muted-foreground mb-4">
                      <li>1. Click <strong>"Line"</strong></li>
                      <li>2. Choose: Horizontal or Vertical</li>
                      <li>3. Adjust length and thickness</li>
                    </ol>
                    <p className="text-xs text-muted-foreground">
                      <strong>Use for:</strong> Separators, dividers
                    </p>
                  </div>
                </div>
              </section>

              {/* 11. SAVING */}
              <section id="saving" className="scroll-mt-24 mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Save className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">11. Saving & Loading</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-muted/30 rounded-xl p-6 border border-border">
                    <h3 className="font-semibold mb-4">Save a Label</h3>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li>1. Enter a name in <strong>"Label Name"</strong></li>
                      <li>2. Click <strong>"Save"</strong></li>
                      <li>3. Label is saved to cloud</li>
                    </ol>
                    <p className="text-xs text-muted-foreground mt-4 italic">
                      If a label with the same name exists, it will be updated.
                    </p>
                  </div>

                  <div className="bg-muted/30 rounded-xl p-6 border border-border">
                    <h3 className="font-semibold mb-4">Load a Label</h3>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li>1. Click <strong>"Load"</strong></li>
                      <li>2. Browse your saved labels</li>
                      <li>3. Click the label to load</li>
                    </ol>
                  </div>

                  <div className="bg-muted/30 rounded-xl p-6 border border-border">
                    <h3 className="font-semibold mb-4">Delete a Label</h3>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li>1. Click <strong>"Load"</strong></li>
                      <li>2. Click the trash icon on the label</li>
                      <li>3. Confirm deletion</li>
                    </ol>
                    <p className="text-xs text-destructive mt-4">
                      Warning: Deletion is permanent and cannot be undone.
                    </p>
                  </div>
                </div>
              </section>

              {/* 12. PRINTING */}
              <section id="printing" className="scroll-mt-24 mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <PrinterIcon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">12. Printing</h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Print Methods</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border border-border rounded-lg">
                        <thead className="bg-muted">
                          <tr>
                            <th className="px-4 py-3 text-left font-medium">Method</th>
                            <th className="px-4 py-3 text-left font-medium">Description</th>
                            <th className="px-4 py-3 text-left font-medium">Requirements</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          <tr>
                            <td className="px-4 py-3 font-medium">Network (TCP/9100)</td>
                            <td className="px-4 py-3 text-muted-foreground">Direct printing via IP</td>
                            <td className="px-4 py-3 text-muted-foreground">Network printer, Print Relay</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-medium">PDF</td>
                            <td className="px-4 py-3 text-muted-foreground">Print via system driver</td>
                            <td className="px-4 py-3 text-muted-foreground">Installed printer driver</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-medium">ZPL Download</td>
                            <td className="px-4 py-3 text-muted-foreground">Manual file transfer</td>
                            <td className="px-4 py-3 text-muted-foreground">ZPL sending tool</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-muted/30 rounded-xl p-6 border border-border">
                      <h3 className="font-semibold mb-4">Network Printing</h3>
                      <p className="text-sm text-muted-foreground mb-3"><strong>Prerequisites:</strong></p>
                      <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                        <li>• Zebra printer on network (ethernet/WiFi)</li>
                        <li>• Known printer IP address</li>
                        <li>• Print Relay Service running</li>
                      </ul>
                      <p className="text-sm text-muted-foreground mb-2"><strong>Steps:</strong></p>
                      <ol className="space-y-1 text-sm text-muted-foreground">
                        <li>1. Click <strong>"PRINT"</strong> in header</li>
                        <li>2. Select <strong>"Print on Port (Network)"</strong></li>
                        <li>3. Enter printer IP (e.g., 192.168.1.100)</li>
                        <li>4. Click <strong>"Print"</strong></li>
                      </ol>
                    </div>

                    <div className="bg-muted/30 rounded-xl p-6 border border-border">
                      <h3 className="font-semibold mb-4">Finding Printer IP Address</h3>
                      <p className="text-sm text-muted-foreground mb-3">Print a configuration page:</p>
                      <ol className="space-y-2 text-sm text-muted-foreground">
                        <li>1. Turn off the printer</li>
                        <li>2. Hold the FEED/PAUSE button</li>
                        <li>3. Turn on the printer</li>
                        <li>4. Release when light starts blinking</li>
                        <li>5. Configuration prints with IP address</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </section>

              {/* 13. ZPL EXPORT */}
              <section id="zpl-export" className="scroll-mt-24 mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FileCode className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">13. ZPL Export</h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">What is ZPL?</h3>
                    <p className="text-muted-foreground mb-4">
                      ZPL (Zebra Programming Language) is the native language for Zebra printers. Each label is described with ZPL commands.
                    </p>
                    <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <pre>{`^XA
^PW800
^LL400
^FO50,50^A0N,30,30^FDHello World^FS
^FO50,100^BEN,50,Y,N^FD5901234567890^FS
^XZ`}</pre>
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-xl p-6 border border-border max-w-xl">
                    <h3 className="font-semibold mb-4">Export ZPL</h3>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li>1. Click <strong>"Export ZPL"</strong> in toolbar</li>
                      <li>2. Choose export mode:
                        <ul className="ml-4 mt-1 space-y-1">
                          <li>• <strong>Placeholders</strong> — Keep {`{{fields}}`} for ERP</li>
                          <li>• <strong>Fixed Values</strong> — Insert actual values</li>
                        </ul>
                      </li>
                      <li>3. Download .zpl file</li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* 14. SUBSCRIPTION */}
              <section id="subscription" className="scroll-mt-24 mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">14. Subscription</h2>
                </div>

                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-muted/30 rounded-xl p-6 border border-border">
                      <h3 className="font-semibold mb-4">Free Trial</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><strong>Duration:</strong> 14 days from registration</li>
                        <li><strong>Features:</strong> Full access, no limitations</li>
                        <li><strong>Credit card:</strong> Not required</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
                      <h3 className="font-semibold mb-2">Pro Subscription</h3>
                      <p className="text-2xl font-bold mb-4">€9.99 <span className="text-base font-normal text-muted-foreground">/ month</span></p>
                      <ul className="space-y-2 text-sm">
                        {[
                          "Unlimited label creation",
                          "Cloud storage",
                          "ZPL export",
                          "Direct Zebra printing",
                          "All barcode types & QR codes",
                          "Images & logos",
                          "All DPI support",
                          "Priority support"
                        ].map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-xl p-6 border border-border max-w-xl">
                    <h3 className="font-semibold mb-4">Manage Subscription</h3>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li>1. Go to <strong>Subscription</strong> page</li>
                      <li>2. Click <strong>"Manage Subscription"</strong></li>
                      <li>3. Stripe portal opens where you can:
                        <ul className="ml-4 mt-1 space-y-1">
                          <li>• Change payment method</li>
                          <li>• View payment history</li>
                          <li>• Cancel subscription</li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* 15. SHORTCUTS */}
              <section id="shortcuts" className="scroll-mt-24 mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Keyboard className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">15. Keyboard Shortcuts</h2>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-border rounded-lg">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium">Shortcut</th>
                        <th className="px-4 py-3 text-left font-medium">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr><td className="px-4 py-3 font-mono">Ctrl/Cmd + C</td><td className="px-4 py-3 text-muted-foreground">Copy selected element</td></tr>
                      <tr><td className="px-4 py-3 font-mono">Ctrl/Cmd + V</td><td className="px-4 py-3 text-muted-foreground">Paste element</td></tr>
                      <tr><td className="px-4 py-3 font-mono">Delete / Backspace</td><td className="px-4 py-3 text-muted-foreground">Delete selected element</td></tr>
                      <tr><td className="px-4 py-3 font-mono">Escape</td><td className="px-4 py-3 text-muted-foreground">Deselect element</td></tr>
                      <tr><td className="px-4 py-3 font-mono">↑ ↓ ← →</td><td className="px-4 py-3 text-muted-foreground">Move by 1 pixel</td></tr>
                      <tr><td className="px-4 py-3 font-mono">Shift + ↑↓←→</td><td className="px-4 py-3 text-muted-foreground">Move by 10 pixels</td></tr>
                      <tr><td className="px-4 py-3 font-mono">Ctrl/Cmd + A</td><td className="px-4 py-3 text-muted-foreground">Select all elements</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 16. TROUBLESHOOTING */}
              <section id="troubleshooting" className="scroll-mt-24 mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">16. Troubleshooting</h2>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="print" className="border-border">
                    <AccordionTrigger className="text-left hover:no-underline">Printing doesn't work</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Check IP address</strong> — Ping the printer: <code className="bg-muted px-1 rounded">ping 192.168.1.100</code></li>
                        <li><strong>Check port 9100</strong> — Printer must have this port open</li>
                        <li><strong>Check Print Relay</strong> — Visit <code className="bg-muted px-1 rounded">http://localhost:8080/health</code></li>
                        <li><strong>Check printer</strong> — Power on? Paper/ribbon loaded? Error light?</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="barcode" className="border-border">
                    <AccordionTrigger className="text-left hover:no-underline">Barcode won't scan</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Check data</strong> — EAN-13 must have 12-13 digits</li>
                        <li><strong>Increase size</strong> — Set a larger module width</li>
                        <li><strong>Check contrast</strong> — Use black print on white label</li>
                        <li><strong>Check DPI</strong> — Application DPI must match printer</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="size" className="border-border">
                    <AccordionTrigger className="text-left hover:no-underline">Label is too small or too large</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Check DPI</strong> — Setting must match your printer</li>
                        <li><strong>Check dimensions</strong> — Width and height must match actual label</li>
                        <li><strong>Check printer settings</strong> — Print Width and Label Length</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="image" className="border-border">
                    <AccordionTrigger className="text-left hover:no-underline">Image quality is poor</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Use larger source image</strong> — Higher resolution = better quality</li>
                        <li><strong>Use black and white</strong> — Thermal printing is 1-bit</li>
                        <li><strong>Increase contrast</strong> — Grayscale prints poorly</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="slow" className="border-border">
                    <AccordionTrigger className="text-left hover:no-underline">Application is slow</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Refresh page</strong> — Press F5 or Ctrl+R</li>
                        <li><strong>Clear cache</strong> — Ctrl+Shift+Delete → Clear</li>
                        <li><strong>Reduce zoom</strong> — High zoom levels slow rendering</li>
                        <li><strong>Use Chrome</strong> — Best browser support</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>

              {/* 17. FAQ */}
              <section id="faq" className="scroll-mt-24 mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">17. Frequently Asked Questions</h2>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="install" className="border-border">
                    <AccordionTrigger className="text-left hover:no-underline">Do I need to install anything?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      No, the application runs entirely in your browser. For network printing, you'll need the Print Relay Service.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="browsers" className="border-border">
                    <AccordionTrigger className="text-left hover:no-underline">Which browsers are supported?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Chrome (recommended), Edge, Firefox, and Safari. Use the latest versions for best performance.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="printers" className="border-border">
                    <AccordionTrigger className="text-left hover:no-underline">Which printers are supported?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      All Zebra thermal printers with ZPL support — virtually all models.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="other-printers" className="border-border">
                    <AccordionTrigger className="text-left hover:no-underline">Does it work with other printers (TSC, Honeywell)?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      You can export ZPL code and use it if your printer supports ZPL. Some non-Zebra printers have ZPL emulation mode.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="checksum" className="border-border">
                    <AccordionTrigger className="text-left hover:no-underline">Why does the check digit change automatically?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      The check digit is calculated according to GS1 standard. If you enter an incorrect one, the application corrects it automatically.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="storage" className="border-border">
                    <AccordionTrigger className="text-left hover:no-underline">Where are my labels stored?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      In secure cloud storage. Your labels are accessible only to you.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="cancel" className="border-border">
                    <AccordionTrigger className="text-left hover:no-underline">What happens to my labels if I cancel?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Your labels remain stored for 30 days. You can reactivate your subscription during this time to access them.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="cards" className="border-border">
                    <AccordionTrigger className="text-left hover:no-underline">Which payment cards do you accept?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      All major cards: Visa, Mastercard, American Express, and more. Payments are processed by Stripe.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>

              {/* SUPPORT */}
              <section className="scroll-mt-24 mb-16">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
                  <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
                  <p className="text-muted-foreground mb-6">
                    Have questions or need support? We're here to help.
                  </p>
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:support@labeldesigner.si" className="text-primary hover:underline font-medium">
                      support@labeldesigner.si
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span><strong>Subscribers:</strong> Response within 24 hours</span>
                    <span><strong>Trial users:</strong> Response within 48 hours</span>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <footer className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
                <p>© 2025 Label Designer PTI. All rights reserved.</p>
                <p className="mt-1">Documentation v1.0 • Last updated: January 2025</p>
              </footer>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dokumentacija;
