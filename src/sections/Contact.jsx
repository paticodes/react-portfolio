import { Send, MapPin, Github, Linkedin, Instagram, BookOpen, Mail } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration missing");
      }

      const now = new Date();
      const time = now.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please reach out via LinkedIn or email directly.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      username: "patibravo",
      url: "https://www.linkedin.com/in/patibravo/",
      icon: Linkedin,
      primary: true
    },
    {
      name: "GitHub",
      username: "@paticodes",
      url: "https://github.com/paticodes",
      icon: Github,
    },
    {
      name: "Instagram",
      username: "@paticodes",
      url: "https://www.instagram.com/paticodes/",
      icon: Instagram,
    },
    {
      name: "Substack",
      username: "@paticodes",
      url: "https://substack.com/@paticodes",
      icon: BookOpen,
    },
  ];

  return (
    <section id="contact" className="relative min-h-screen py-20 lg:py-32 overflow-hidden bg-background">
      
      <div className="px-6 sm:px-8 lg:px-16 max-w-screen-2xl mx-auto">
        
        <div className="mb-12 lg:mb-16 animate-fade-in">
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Let's work together
          </h2>
          
          <p className="text-lg sm:text-xl text-foreground leading-relaxed max-w-2xl">
            Looking for a UI designer who can code? Open to freelance projects and full-time roles in Montreal and remote.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12">
          
          <div className="animate-fade-in animation-delay-200">
            <div className="bg-surface border border-accent/10 rounded-lg p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-semibold text-foreground uppercase tracking-wide mb-2"
                  >
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-background rounded-lg border-2 border-accent/20 focus:border-accent focus:bg-surface transition-all duration-300 outline-none text-foreground placeholder-muted-foreground"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-semibold text-foreground uppercase tracking-wide mb-2"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-background rounded-lg border-2 border-accent/20 focus:border-accent focus:bg-surface transition-all duration-300 outline-none text-foreground placeholder-muted-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-semibold text-foreground uppercase tracking-wide mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-background rounded-lg border-2 border-accent/20 focus:border-accent focus:bg-surface transition-all duration-300 outline-none resize-none text-foreground placeholder-muted-foreground"
                    placeholder="Tell me about your project or role opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-4 bg-accent text-white rounded-lg font-semibold flex items-center justify-center gap-3 hover:bg-accent/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                >
                  <Send size={20} />
                  <span>{isLoading ? "Sending..." : "Send message"}</span>
                </button>

                {submitStatus.message && (
                  <div 
                    className={`p-4 rounded-lg text-sm border-2 ${
                      submitStatus.type === "success"
                        ? "bg-primary/10 text-foreground border-primary/40"
                        : "bg-red-500/10 text-foreground border-red-500/40"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in animation-delay-400">
            
            <div className="bg-surface border border-accent/10 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Montreal, QC, Canada</p>
                  <p className="text-sm text-muted-foreground">Authorized to work in Canada</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Response time</p>
                  <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-surface border border-accent/10 rounded-lg p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Connect on social
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 group ${social.primary ? 'bg-accent/5 -mx-2 px-2 py-2 rounded-lg' : ''}`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        social.primary 
                          ? 'bg-accent/20 group-hover:bg-accent' 
                          : 'bg-card/20 group-hover:bg-card/30'
                      }`}>
                        <Icon 
                          size={20} 
                          className={`transition-colors duration-300 ${
                            social.primary
                              ? 'text-accent group-hover:text-surface'
                              : 'text-foreground'
                          }`}
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                          {social.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {social.username}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};