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
        inline-flex items-center justify-center h-10 w-10 rounded-xl
        border bg-(--card) text-xl text-muted-foreground
        transition duration-200 hover:-translate-y-0.5 hover:text-foreground
        hover:border-primary/40 hover:shadow-sm
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
    <section id="contact" className="py-16 pb-24">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="space-y-2 text-center">
          <SectionTitle text="Get In Touch" />
          <span className="section-underline mx-auto block" />
          <p className="text-muted-foreground text-sm">
            Have a project in mind or just want to connect? Drop me a message.
          </p>
        </div>

        {/* Card form */}
        <div className="mt-10 rounded-2xl border bg-(--card) fancy-card grad-border-top overflow-hidden p-6 sm:p-8">
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold">Name</label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                  placeholder="Your name"
                  autoComplete="name"
                  className="bg-(--background)"
                />
                {touched.name && errors.name && (
                  <p className="text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold">Email</label>
                <Input
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="bg-(--background)"
                />
                {touched.email && errors.email && (
                  <p className="text-xs text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold">Message</label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                placeholder="What would you like to discuss?"
                rows={6}
                className="bg-(--background) resize-none"
              />
              {touched.message && errors.message && (
                <p className="text-xs text-red-500">{errors.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={!canSend}
              className="w-full gap-2 bg-linear-to-r from-(--grad-from) to-(--grad-to) text-white border-0 hover:opacity-90 transition disabled:opacity-40"
            >
              <FiSend className="h-4 w-4" />
              Send Message
            </Button>
          </form>
        </div>

        {/* Footer row */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">© 2025 Dhruv Bhardwaj</p>

          <div className="flex items-center gap-3">
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
