import { Mail, MapPin, Send, Phone } from "lucide-react";
import { profile } from "../data/profile";
import useReveal from "../useReveal";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { useState } from "react";

function ContactLine({ icon, label, value, href }) {
  const missing = !value;
  const content = missing ? `Add your ${label.toLowerCase()} here` : value;

  const inner = (
    <div className="flex items-center gap-3">
      <span className="text-[var(--color-blue)]">{icon}</span>
      <div>
        <p className="font-[var(--font-mono)] text-[11px] text-[var(--color-muted)] uppercase tracking-wide">
          {label}
        </p>
        <p
          className={
            missing
              ? "text-[var(--color-muted)] italic"
              : "text-[var(--color-text)]"
          }
        >
          {content}
        </p>
      </div>
    </div>
  );

  return href && !missing ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="hover:opacity-80 transition-opacity"
    >
      {inner}
    </a>
  ) : (
    inner
  );
}

export default function Contact() {
  const ref = useReveal();

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/mpparbql", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 bg-[var(--color-bg-soft)]"
    >
      <div
        ref={ref}
        className="reveal max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-14"
      >
        <div>
          <span className="font-[var(--font-mono)] text-xs text-[var(--color-blue)]">
            06 — Contact
          </span>

          <h2 className="font-[var(--font-display)] font-semibold text-3xl sm:text-4xl mt-3 mb-4">
            Let's talk.
          </h2>

          <p className="text-[var(--color-muted)] mb-10 max-w-md">
            Whether it's an internship opportunity, a freelance project, or
            just a question about something I've built — feel free to reach
            out.
          </p>

          <div className="space-y-6">
            <ContactLine
              icon={<Mail size={18} />}
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />

            <ContactLine
              icon={<GithubIcon size={18} />}
              label="GitHub"
              value={profile.github}
              href={profile.github}
            />

            <ContactLine
              icon={<LinkedinIcon size={18} />}
              label="LinkedIn"
              value={profile.linkedin}
              href={profile.linkedin}
            />

            <ContactLine
              icon={<Phone size={18} />}
              label="Phone"
              value={profile.phone}
              href={`tel:${profile.phone}`}
            />

            <ContactLine
              icon={<MapPin size={18} />}
              label="Location"
              value={profile.location}
            />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field
              label="Name"
              id="name"
              type="text"
              placeholder="Your name"
            />

            <Field
              label="Email"
              id="email"
              type="email"
              placeholder="you@example.com"
            />
          </div>

          <Field
            label="Subject"
            id="subject"
            type="text"
            placeholder="What's this about?"
          />

          <div>
            <label
              htmlFor="message"
              className="font-[var(--font-mono)] text-[11px] text-[var(--color-muted)] uppercase tracking-wide"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Tell me a bit about it..."
              className="mt-2 w-full rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-blue)] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-blue)] text-white px-6 py-3 text-sm font-medium hover:bg-[var(--color-blue)]/90 transition-colors"
          >
            <Send size={16} />
            Send Message
          </button>

          {status && (
            <p className="text-sm text-center text-[var(--color-blue)]">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, id, type, placeholder }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="font-[var(--font-mono)] text-[11px] text-[var(--color-muted)] uppercase tracking-wide"
      >
        {label}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-blue)] transition-colors"
      />
    </div>
  );
}