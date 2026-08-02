"use client";

import React, { useState } from "react";
import { Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";

export function ContactModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button type="button" className="send-email-modal-btn">
          <Mail className="w-4 h-4" />
          <span>Send a Message</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md max-w-[92vw] rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl p-6 shadow-2xl">
        <DialogHeader className="mb-2">
          <DialogTitle className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <Mail className="w-5 h-5 text-black dark:text-white" />
            Send a Direct Message
          </DialogTitle>
          <DialogDescription className="text-xs text-gray-600 dark:text-gray-400">
            Fill out the form below and it will be delivered directly to my inbox.
          </DialogDescription>
        </DialogHeader>
        <ContactForm onSuccess={() => setTimeout(() => setOpen(false), 2000)} />
      </DialogContent>
    </Dialog>
  );
}
