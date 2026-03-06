import Icon from "@/components/ui/icon";
import { Section, navItems } from "./data";

interface LayoutProps {
  children: React.ReactNode;
  activeSection: Section;
  mobileMenuOpen: boolean;
  navigate: (section: Section) => void;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Layout({
  children,
  activeSection,
  mobileMenuOpen,
  navigate,
  setMobileMenuOpen,
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Golos Text', sans-serif" }}>
      {/* TOP BAR */}
      <div style={{ background: "var(--navy)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
            Официальный портал АПК «Безопасный город» Пермского края
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
              Правительство Пермского края
            </span>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header style={{ background: "var(--navy-mid)" }} className="sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-6 py-4">
            {/* Logo */}
            <button onClick={() => navigate("home")} className="flex items-center gap-3 flex-shrink-0">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ background: "var(--blue-accent)" }}
              >
                <Icon name="Camera" size={24} style={{ color: "white" }} />
              </div>
              <div className="hidden sm:block text-left">
                <div className="font-bold text-white leading-tight text-sm">ЕСВН</div>
                <div className="text-xs leading-tight" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Пермский край
                </div>
              </div>
            </button>

            {/* Nav desktop */}
            <nav className="hidden lg:flex items-center gap-6 flex-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigate(item.id)}
                  className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex-1 lg:hidden" />

            {/* CTA button */}
            <button
              onClick={() => navigate("connection")}
              className="hidden sm:block btn-primary text-sm"
              style={{ padding: "8px 20px" }}
            >
              Подключить камеры
            </button>

            {/* Mobile burger */}
            <button
              className="lg:hidden p-2"
              style={{ color: "white" }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>

          {/* Mobile nav */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              <nav className="flex flex-col gap-1 pt-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => navigate(item.id)}
                    className={`text-left px-4 py-2.5 rounded transition-colors text-sm ${
                      activeSection === item.id
                        ? "text-white font-semibold"
                        : "text-white/75 hover:text-white"
                    }`}
                    style={activeSection === item.id ? { background: "rgba(255,255,255,0.1)" } : {}}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1">{children}</main>

      {/* FOOTER */}
      <footer style={{ background: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--blue-accent)" }}
                >
                  <Icon name="Camera" size={20} style={{ color: "white" }} />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">ЕОСН Пермского края</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>АПК «Безопасный город»</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Единая система видеонаблюдения — комплексное решение для обеспечения общественной
                безопасности на всей территории Пермского края.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm mb-4">Разделы</h4>
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => navigate(item.id)}
                    className="block text-sm transition-colors"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm mb-4">Контакты</h4>
              <div className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                <p>г. Пермь, ул. Ленина, д. 51</p>
                <p>8 (342) 217-74-00</p>
                <p>mob@permkrai.ru</p>
                <div className="pt-2 flex items-center gap-2" style={{ color: "#4caf50" }}>
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse" />
                  <span className="text-xs">Система работает 24/7</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.35)" }}
          >
            <p>© 2026 Министерство общественной безопасности Пермского края. Все права защищены.</p>
            <p>АПК «Безопасный город» — Единая система видеонаблюдения</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
