import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Printer, Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Kontakt = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Label Designer PTI</title>
        <meta
          name="description"
          content="Contact us for questions about Label Designer PTI. We're happy to help."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
          <div className="container-wide py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <Printer className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold">Label Designer PTI</span>
            </div>
          </div>
        </header>

        <main className="container-wide py-16">
          <div className="max-w-5xl mx-auto">
            {/* Page Title */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact us</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have questions about Label Designer PTI? We're happy to help. Fill out the form or contact us directly.
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-card rounded-2xl border border-border/50 p-8 shadow-sm">
                  <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full name</Label>
                        <Input
                          id="name"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          maxLength={100}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          maxLength={255}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="What would you like to discuss?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        maxLength={200}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Your message..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        maxLength={2000}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="gradient" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send message
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-card rounded-2xl border border-border/50 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Contact information</h3>
                  
                  <div className="space-y-4">
                    <a 
                      href="mailto:info@label-designer.org" 
                      className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Mail className="w-5 h-5 mt-0.5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p>info@label-designer.org</p>
                      </div>
                    </a>

                    <a 
                      href="tel:+38631626363" 
                      className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Phone className="w-5 h-5 mt-0.5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <p>+386 31 626 363</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 mt-0.5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Address</p>
                        <p>Zalog 2<br />4204 Golnik<br />Slovenia</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20">
                  <h3 className="text-lg font-semibold mb-2">Quick response time</h3>
                  <p className="text-muted-foreground text-sm">
                    We respond to all messages within 24 hours. For urgent matters, please call us.
                  </p>
                </div>

                <div className="bg-card rounded-2xl border border-border/50 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Support</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Need help using the application? Check out our documentation.
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/dokumentacija">
                      Open documentation
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Simple Footer */}
        <footer className="border-t border-border/50 py-8">
          <div className="container-wide text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Label Designer PTI. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
};

export default Kontakt;
