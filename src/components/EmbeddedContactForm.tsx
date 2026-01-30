"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
    ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`
    : null;

type FormStatus = "idle" | "submitting" | "success" | "error";

interface EmbeddedContactFormProps {
  variant?: "default" | "compact";
  className?: string;
}

export function EmbeddedContactForm({
  variant = "default",
  className,
}: EmbeddedContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!FORMSPREE_ENDPOINT) {
      setErrorMessage(
        "Formular ist nicht konfiguriert. Bitte setzen Sie NEXT_PUBLIC_FORMSPREE_FORM_ID in der Umgebung."
      );
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await response.json();
        setErrorMessage(
          data.error || "Beim Senden ist ein Fehler aufgetreten."
        );
        setStatus("error");
      }
    } catch {
      setErrorMessage("Netzwerkfehler. Bitte versuchen Sie es später erneut.");
      setStatus("error");
    }
  };

  if (!FORMSPREE_ENDPOINT) {
    return (
      <div
        className={cn(
          "rounded-2xl p-8 border border-amber-200 bg-amber-50 text-amber-800",
          className
        )}
      >
        <p className="text-sm">
          Kontaktformular: Bitte fügen Sie NEXT_PUBLIC_FORMSPREE_FORM_ID zu
          .env.local hinzu. Kostenloses Setup unter{" "}
          <a
            href="https://formspree.io"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            formspree.io
          </a>
        </p>
      </div>
    );
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          "rounded-2xl p-8 text-center bg-green-50 border border-green-200",
          className
        )}
      >
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-[#0a1628] mb-2">
          Nachricht gesendet
        </h3>
        <p className="text-[#5a6a7e]">
          Vielen Dank für Ihre Anfrage. Ich melde mich in der Regel innerhalb von
          24 Stunden bei Ihnen.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className={cn(
        "rounded-2xl p-6 lg:p-8 bg-white border border-gray-100 shadow-lg",
        variant === "compact" && "p-6",
        className
      )}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff6b35] to-[#ff8c5a] flex items-center justify-center">
          <Mail className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#0a1628]">
            Anfrage per E-Mail
          </h3>
          <p className="text-[#5a6a7e] text-sm">
            Schreiben Sie mir direkt – ich antworte innerhalb von 24 Stunden
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-[#0a1628]">
              Name *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Ihr Name"
              className="border-gray-200 focus:border-[#ff6b35] focus:ring-[#ff6b35]/20"
              disabled={status === "submitting"}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#0a1628]">
              E-Mail *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="ihre@email.de"
              className="border-gray-200 focus:border-[#ff6b35] focus:ring-[#ff6b35]/20"
              disabled={status === "submitting"}
            />
          </div>
        </div>

        {variant === "default" && (
          <div className="space-y-2">
            <Label htmlFor="company" className="text-[#0a1628]">
              Unternehmen
            </Label>
            <Input
              id="company"
              name="company"
              type="text"
              placeholder="Firma (optional)"
              className="border-gray-200 focus:border-[#ff6b35] focus:ring-[#ff6b35]/20"
              disabled={status === "submitting"}
            />
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="message" className="text-[#0a1628]">
            Nachricht *
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Beschreiben Sie kurz Ihr Anliegen, Ihren Anwendungsfall oder Ihre Fragen..."
            rows={variant === "compact" ? 4 : 6}
            className="border-gray-200 focus:border-[#ff6b35] focus:ring-[#ff6b35]/20 resize-none"
            disabled={status === "submitting"}
          />
        </div>

        <input
          type="text"
          name="_subject"
          value="Anfrage KI Consulting – Website"
          readOnly
          className="hidden"
        />

        {errorMessage && (
          <p className="text-sm text-red-600">{errorMessage}</p>
        )}

        <Button
          type="submit"
          disabled={status === "submitting"}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#ff6b35] hover:bg-[#ff8c5a] text-white font-semibold rounded-xl text-lg"
        >
          {status === "submitting" ? (
            <>
              <span className="animate-pulse">Wird gesendet...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Anfrage senden</span>
            </>
          )}
        </Button>
      </div>
    </motion.form>
  );
}
