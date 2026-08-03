"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Mail } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { SectionHeader } from "@/components/SectionHeader";
import FadeInSection from "@/components/FadeInSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import "@/styles/components/ContactSection.css";

export default function ContactPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className="layout-container">
      <Navbar
        links={[
          { href: "/", label: "Home" },
          { href: "/#experience", label: "Experience" },
          { href: "/#projects", label: "Projects" },
          { href: "/#certifications", label: "Certifications" },
          { href: "/#skills", label: "Skills" },
          { href: "/contact", label: "Contact" },
        ]}
      />

      <main className="main-content pt-2 md:pt-4 pb-12 mt-1 md:mt-2 !px-1.5 sm:!px-4">
        <div className="w-full relative max-w-3xl mx-auto px-1 sm:px-4">
          {/* Header */}
          <FadeInSection>
            <div className="flex flex-col items-center justify-center gap-1 text-center mb-6 sm:mb-8">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-xl">
                <Image
                  src="/images/avatars/1.avif"
                  alt="Ahmed Ayman"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <SectionHeader
                label="Let's Connect"
                title="Let's have a chat!"
                className="!mb-0 [&>div:first-child]:!mb-1.5"
              />
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-md">
                Enter your details below and I'll get back to you as soon as possible.
              </p>
              <Link
                href="/"
                className="group inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 mt-1.5 rounded-full bg-black text-white border border-black dark:bg-black dark:text-white dark:border-zinc-800 hover:bg-zinc-800 dark:hover:bg-zinc-900 text-xs sm:text-sm font-medium transition-all duration-300 w-fit shadow-md"
              >
                <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
            </div>
          </FadeInSection>

          {/* Unified Contact Card */}
          <FadeInSection>
            <div className="bg-white dark:bg-black border border-black/10 dark:border-zinc-800 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 md:p-8 shadow-2xl w-full">
              {/* Header with Email Title + Schedule a Call Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-5 pb-5 border-b border-black/10 dark:border-zinc-800">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-black dark:text-white flex-shrink-0" />
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-black dark:text-white">
                      Send a Direct Message
                    </h3>
                    <p className="text-[11px] sm:text-xs text-zinc-600 dark:text-zinc-400">
                      Fill out the form below or book a live 1-on-1 call.
                    </p>
                  </div>
                </div>

                {/* Cal.com Popup Button inside the Email Section */}
                <button
                  data-cal-namespace="30min"
                  data-cal-link="ahmed-alhofy/30min"
                  data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                  className="booking-call-btn w-full sm:w-auto text-center justify-center"
                  type="button"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule a 30-min Call</span>
                </button>
              </div>

              {/* Direct Email Form */}
              <ContactForm />
            </div>
          </FadeInSection>
        </div>
      </main>

      <Footer />
    </div>
  );
}
