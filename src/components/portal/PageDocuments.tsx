import Icon from "@/components/ui/icon";
import { documents } from "./data";

export default function PageDocuments() {
  return (
    <div>
      <div style={{ background: "var(--navy)" }} className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
            Главная / Документы
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-white">Документы</h1>
          <p className="mt-3 text-base" style={{ color: "rgba(255,255,255,0.7)" }}>
            Нормативно-правовые акты и технические регламенты ЕОСН Пермского края
          </p>
        </div>
      </div>
      <section className="py-12" style={{ background: "var(--gray-bg)" }}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title text-xl md:text-2xl">Нормативные документы</h2>
          <div className="space-y-4">
            {documents.map((doc, i) => (
              <div key={i} className="doc-card">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(30,111,187,0.1)" }}
                >
                  <Icon name={doc.icon} size={22} style={{ color: "var(--blue-accent)" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base mb-1 leading-snug" style={{ color: "var(--navy)" }}>
                    {doc.title}
                  </h3>
                  <p className="text-sm mb-2" style={{ color: "var(--text-secondary)" }}>{doc.desc}</p>
                  <span className="text-xs px-2 py-0.5 rounded font-medium" style={{ background: "#f2f4f7", color: "var(--text-secondary)" }}>
                    {doc.size}
                  </span>
                </div>
                <div className="flex-shrink-0">
                  <div
                    className="flex items-center gap-2 px-4 py-2 rounded text-sm font-semibold"
                    style={{ background: "rgba(30,111,187,0.08)", color: "var(--blue-accent)" }}
                  >
                    <Icon name="Download" size={16} />
                    Скачать
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-white rounded-lg p-6 border" style={{ borderColor: "#dde3ed" }}>
            <div className="flex gap-4 items-start">
              <Icon name="Info" size={22} style={{ color: "var(--blue-accent)", flexShrink: 0, marginTop: 2 }} />
              <div>
                <h4 className="font-bold mb-2" style={{ color: "var(--navy)" }}>О доступе к документам</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Все документы размещены в открытом доступе в соответствии с требованиями об обеспечении открытости
                  деятельности органов государственной власти. Актуальные версии нормативных документов публикуются
                  незамедлительно после их официального утверждения. По вопросам документооборота обращайтесь в отдел
                  информационных технологий Министерства общественной безопасности Пермского края.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
