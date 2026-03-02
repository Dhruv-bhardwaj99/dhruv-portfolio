import SectionTitle from "../common/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useMemo, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiSend } from "react-icons/fi";

function SocialIcon({ href, label, children }) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="
        inline-flex items-center justify-center
        text-2xl
        transition
        hover:-translate-y-0.5 hover:opacity-90
        hover:text-black dark:hover:text-white
        focus:outline-none focus:ring-2 focus:ring-black/30 dark:focus:ring-white/30
        rounded-md
      "
    >
      {children}
    </a>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });

  const emailValid = useMemo(() => {
    const email = form.email.trim();
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }, [form.email]);

  const errors = useMemo(() => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!emailValid) e.email = "Please enter a valid email address.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  }, [form, emailValid]);

  const canSend = Object.keys(errors).length === 0;

  const onSubmit = (ev) => {
    ev.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!canSend) return;

    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:11dhruv.b@gmail.com?subject=${subject}&body=${body}`;

    setForm({ name: "", email: "", message: "" });
    setTouched({ name: false, email: false, message: false });
  };

  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-2xl px-2">
        {/* Header */}
        <div className="space-y-1 text-center">
          <SectionTitle text="Contact" />
          <p className="text-muted-foreground text-sm m-0">
            Send a message or connect with me below.
          </p>
        </div>

        {/* Form (center of attention) */}
        <form onSubmit={onSubmit} className="mt-10 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <Input
                value={form.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                placeholder="Your name"
                autoComplete="name"
              />
              {touched.name && errors.name && (
                <p className="text-xs text-red-500 m-0">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
              />
              {touched.email && errors.email && (
                <p className="text-xs text-red-500 m-0">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <Textarea
              value={form.message}
              onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
              onBlur={() => setTouched((t) => ({ ...t, message: true }))}
              placeholder="What would you like to discuss?"
              rows={6}
            />
            {touched.message && errors.message && (
              <p className="text-xs text-red-500 m-0">{errors.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full gap-2" disabled={!canSend}>
            <FiSend className="h-4 w-4" />
            Send
          </Button>
        </form>

        {/* Footer row: copyright + icons */}
        <div className="mt-10 flex items-center justify-between border-t pt-4">
          <div className="text-xs text-muted-foreground">© 2025 Dhruv Bhardwaj</div>

          <div className="flex items-center gap-5">
            <SocialIcon href="mailto:11dhruv.b@gmail.com" label="Email">
              <FiMail />
            </SocialIcon>

            <SocialIcon href="https://github.com/Dhruv-bhardwaj99" label="GitHub">
              <FaGithub />
            </SocialIcon>

            <SocialIcon href="https://www.linkedin.com/in/dhruv-bhardwaj-3373801a8/" label="LinkedIn">
              <FaLinkedin />
            </SocialIcon>
          </div>
        </div>
      </div>
    </section>
  );
}