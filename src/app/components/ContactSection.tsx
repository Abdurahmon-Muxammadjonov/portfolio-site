"use client";

import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate simple API submit trigger
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-[#0A0A0B] text-white">
      <div className="container">
        
        {/* Header Title Block */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex flex-col items-center mb-14 text-center">
            <h2 className="text-[40px] font-black text-white mb-2 tracking-tight">
              Contact Me
            </h2>
            <p className="text-[19px] font-semibold text-zinc-400 max-w-[550px]">
              Cultivating Connections: Reach Out and Connect with Me
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Layout Grid */}
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-stretch">
          
          {/* Column 1: Info widgets */}
          <ScrollReveal direction="left" delay={200} className="h-full">
            <div className="bg-[#121214] border border-white/5 rounded-2xl p-7 flex flex-col justify-between h-full shadow-xl shadow-black/30 hover:border-[#6366F1]/20 transition-colors duration-300">
              
              <div>
                <h3 className="text-2xl font-black mb-1.5 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                  Let's Connect
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  Hozirgi vaqtda yangi imkoniyatlar, hamkorliklar va loyihalar uchun ochiqman. Agar savollaringiz yoki takliflaringiz bo'lsa, quyidagi kanallar orqali bog'lanishingiz mumkin.
                </p>

                <div className="space-y-6">
                  {/* Info Row: Email */}
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="bg-[#1B1B1E] flex items-center justify-center w-12 h-12 rounded-xl border border-white/5 text-zinc-300 group-hover:border-[#6366F1] group-hover:text-[#6366F1] transition-colors duration-300 shadow-md">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2]">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Email</div>
                      <a href="mailto:abdurahmonjj@gmail.com" className="text-sm font-semibold text-zinc-200 group-hover:text-[#6366F1] transition-colors">
                        abdurahmonjj@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Info Row: Telegram */}
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="bg-[#1B1B1E] flex items-center justify-center w-12 h-12 rounded-xl border border-white/5 text-zinc-300 group-hover:border-[#6366F1] group-hover:text-[#6366F1] transition-colors duration-300 shadow-md">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.6 1.48-1.52 2.72-2.57 4.17-3.79.16-.14.32-.42-.01-.39-.33.03-1.78 1.01-4.7 2.98-.44.3-.84.45-1.21.44-.41-.01-1.21-.24-1.8-.43-.72-.23-1.3-.36-1.25-.76.03-.2.31-.4.85-.6 3.33-1.45 5.55-2.4 6.66-2.86 3.17-1.31 3.83-1.54 4.26-1.55.09 0 .31.02.45.14.12.09.16.22.18.31.02.09.03.29.01.44z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Telegram</div>
                      <a href="https://t.me/xvzzz77" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-zinc-200 group-hover:text-[#6366F1] transition-colors">
                        @xvzzz77
                      </a>
                    </div>
                  </div>

                  {/* Info Row: Phone */}
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="bg-[#1B1B1E] flex items-center justify-center w-12 h-12 rounded-xl border border-white/5 text-zinc-300 group-hover:border-[#6366F1] group-hover:text-[#6366F1] transition-colors duration-300 shadow-md">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2]">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Telefon</div>
                      <a href="tel:+998901136170" className="text-sm font-semibold text-zinc-200 group-hover:text-[#6366F1] transition-colors">
                        +998 (90)-113-61-70
                      </a>
                    </div>
                  </div>

                  {/* Info Row: Location */}
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="bg-[#1B1B1E] flex items-center justify-center w-12 h-12 rounded-xl border border-white/5 text-zinc-300 group-hover:border-[#6366F1] group-hover:text-[#6366F1] transition-colors duration-300 shadow-md">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2]">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Manzil</div>
                      <span className="text-sm font-semibold text-zinc-200 group-hover:text-[#6366F1] transition-colors">
                        Tashkent, Uzbekistan
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom design elements */}
              <div className="border-t border-white/5 pt-6 mt-8 flex justify-center gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
              </div>

            </div>
          </ScrollReveal>

          {/* Column 2: Form */}
          <ScrollReveal direction="right" delay={300}>
            <div className="bg-[#121214] border border-white/5 rounded-2xl p-7 shadow-xl shadow-black/30 h-full flex flex-col justify-center hover:border-[#6366F1]/20 transition-colors duration-300">
              
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-3xl mb-4 animate-bounce">
                    ✓
                  </div>
                  <h3 className="text-2xl font-black mb-2">Message Sent!</h3>
                  <p className="text-zinc-400 text-sm max-w-sm">
                    Xabaringiz muvaffaqiyatli jo'natildi. Tez orada siz bilan bog'lanaman!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2 border border-zinc-700 rounded-lg hover:border-[#6366F1] text-sm text-zinc-300 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name input */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                        Ismingiz
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Masalan: Abdurahmon"
                        className="bg-[#1B1B1E] border border-white/5 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-[#6366F1]/60 transition-colors duration-300 w-full text-sm"
                      />
                    </div>

                    {/* Email input */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                        Email manzilingiz
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="example@gmail.com"
                        className="bg-[#1B1B1E] border border-white/5 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-[#6366F1]/60 transition-colors duration-300 w-full text-sm"
                      />
                    </div>
                  </div>

                  {/* Subject input */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      Mavzu
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Loyiha hamkorligi / Ish taklifi"
                      className="bg-[#1B1B1E] border border-white/5 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-[#6366F1]/60 transition-colors duration-300 w-full text-sm"
                    />
                  </div>

                  {/* Message input */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      Xabaringiz
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Xabaringizni bu yerga yozing..."
                      className="bg-[#1B1B1E] border border-white/5 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-[#6366F1]/60 transition-colors duration-300 w-full text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative inline-flex items-center justify-center px-8 py-3.5 font-bold text-white border-2 border-white rounded-lg overflow-hidden hover:border-[#6366F1] transition-colors duration-300 w-full sm:w-auto bg-transparent shadow-lg shadow-black/20"
                    >
                      <span className="relative z-10 transition-colors duration-300 flex items-center justify-center gap-1.5 text-sm uppercase tracking-wider font-extrabold text-zinc-200 group-hover:text-white">
                        {isSubmitting ? "Sending..." : "Send Message"}{" "}
                        <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">
                          🚀
                        </span>
                      </span>
                      <div className="absolute inset-0 bg-[#6366F1] translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
                    </button>
                  </div>
                </form>
              )}

            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
