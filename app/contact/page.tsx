"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import MagneticButton from "@/components/MagneticButton";
import { Send, CheckCircle2, Mail, Globe, MapPin } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-32 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <SectionHeading
        number="05"
        label="CORRESPONDENCE // DIRECTORY"
        title="INQUIRIES & DISPATCHES"
        subtitle="For management, festival commissions, sync licensing, and private acoustic sessions."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start my-12">
        {/* Left Column: Direct Inquiries Directory */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h3 className="font-serif text-2xl font-light text-[#F5F2EC] mb-2">
              REPRESENTATION & MANAGEMENT
            </h3>
            <p className="text-xs md:text-sm text-[#8E8D8A] leading-relaxed">
              All booking inquiries, festival headline requests, and artistic collaborations are handled directly through archival management.
            </p>
          </div>

          <div className="space-y-4 border-t border-white/[0.08] pt-6 font-mono text-xs">
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#8E8D8A] block text-[10px] uppercase">MANAGEMENT DIRECT</span>
                <a href="mailto:mgmt@novamusic.com" className="text-[#F5F2EC] hover:text-[#C5A880] transition-colors">
                  mgmt@novamusic.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Globe className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#8E8D8A] block text-[10px] uppercase">SYNC & CINEMATIC LICENSING</span>
                <a href="mailto:licensing@novamusic.com" className="text-[#F5F2EC] hover:text-[#C5A880] transition-colors">
                  licensing@novamusic.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#8E8D8A] block text-[10px] uppercase">ARCHIVE STUDIO REPOSITORY</span>
                <span className="text-[#F5F2EC]">Köpenicker Chaussee, Funkhaus Berlin</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Contact Form */}
        <div className="lg:col-span-7 bg-white/[0.02] border border-white/[0.08] p-8 md:p-12 rounded-xs">
          {submitted ? (
            <div className="py-16 text-center flex flex-col items-center gap-4 animate-in fade-in">
              <CheckCircle2 className="w-10 h-10 text-[#C5A880]" />
              <h4 className="font-serif text-2xl font-light text-[#F5F2EC]">
                TRANSMISSION RECEIVED
              </h4>
              <p className="font-mono text-xs text-[#8E8D8A] max-w-sm">
                Your communication has been encrypted and delivered to archival management. Responses occur within 48 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-[10px] tracking-widest text-[#8E8D8A] uppercase mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="E.G. ELEANOR VANE"
                    className="w-full bg-[#101010] border border-white/10 px-4 py-3 rounded-xs text-xs font-mono text-[#F5F2EC] focus:outline-none focus:border-[#C5A880] transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] tracking-widest text-[#8E8D8A] uppercase mb-2">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="E.G. ELEANOR@DOMAIN.COM"
                    className="w-full bg-[#101010] border border-white/10 px-4 py-3 rounded-xs text-xs font-mono text-[#F5F2EC] focus:outline-none focus:border-[#C5A880] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] tracking-widest text-[#8E8D8A] uppercase mb-2">
                  INQUIRY CATEGORY
                </label>
                <select className="w-full bg-[#101010] border border-white/10 px-4 py-3 rounded-xs text-xs font-mono text-[#F5F2EC] focus:outline-none focus:border-[#C5A880] transition-colors">
                  <option value="booking">FESTIVAL & LIVE PERFORMANCE BOOKING</option>
                  <option value="licensing">FILM & MEDIA SYNC LICENSING</option>
                  <option value="press">EDITORIAL PRESS & INTERVIEWS</option>
                  <option value="vinyl">LIMITED VINYL ARCHIVES</option>
                  <option value="general">GENERAL CORRESPONDENCE</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-[10px] tracking-widest text-[#8E8D8A] uppercase mb-2">
                  TRANSMISSION MESSAGE
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="COMPOSE YOUR MESSAGE HERE..."
                  className="w-full bg-[#101010] border border-white/10 px-4 py-3 rounded-xs text-xs font-mono text-[#F5F2EC] focus:outline-none focus:border-[#C5A880] transition-colors resize-none"
                />
              </div>

              <MagneticButton
                type="submit"
                data-cursor="TRANSMIT"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C5A880] hover:bg-[#F5F2EC] text-[#080808] font-mono text-xs font-semibold tracking-widest uppercase transition-colors"
              >
                <span>TRANSMIT DISPATCH</span>
                <Send className="w-3.5 h-3.5 ml-2" />
              </MagneticButton>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
