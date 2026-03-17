import Link from "next/link";

const footerLinks = {
  courses: [
    { href: "/courses", label: "All Courses" },
    { href: "/courses/green-belt", label: "Green Belt" },
    { href: "/courses/black-belt", label: "Black Belt" },
    { href: "/which-course", label: "Which Course" },
    { href: "/schedule", label: "Schedule" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/accreditation", label: "Accreditation" },
    { href: "/consulting", label: "Consulting" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-text"
            >
              Six Sigma <span className="text-accent">South Africa</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              Africa&apos;s leading Six Sigma training and certification
              partner. Accredited Lean Six Sigma programmes from White Belt to
              Black Belt. Part of the 2KO group.
            </p>
          </div>

          {/* Courses */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted2">
              Training
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.courses.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted2">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <p className="text-xs text-muted2">
            &copy; {new Date().getFullYear()} Six Sigma South Africa. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-xs text-muted2">021 426 5300</p>
            <p className="text-xs text-muted2">info@2ko.co.za</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
