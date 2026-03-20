import { newsData } from "./data";

export default function PageNews() {
  return (
    <div>
      <div style={{ background: "var(--navy)" }} className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
            Главная / Новости
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-white">Новости</h1>
        </div>
      </div>
      <section className="py-12" style={{ background: "var(--gray-bg)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.map((n) => (
              <div key={n.id} className="news-card">
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded"
                      style={{ background: "rgba(30,111,187,0.1)", color: "var(--blue-accent)" }}
                    >
                      {n.category}
                    </span>
                    <span className="text-xs" style={{ color: "var(--text-secondary)" }}>{n.date}</span>
                  </div>
                  <h3 className="font-bold text-base mb-3 leading-snug" style={{ color: "var(--navy)" }}>
                    {n.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{n.text}</p>
                </div>
                <div className="px-5 pb-5">
                  <span className="text-sm font-semibold cursor-pointer" style={{ color: "var(--blue-accent)" }}>
                    Читать полностью →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
