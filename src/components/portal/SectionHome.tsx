import Icon from "@/components/ui/icon";
import { Section, newsData } from "./data";

interface SectionHomeProps {
  navigate: (section: Section) => void;
}

export default function SectionHome({ navigate }: SectionHomeProps) {
  return (
    <div>
      {/* Hero */}
      <section className="hero-bg py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 rounded px-3 py-1 text-xs font-medium mb-6 fade-up fade-up-delay-1"
              style={{ background: "rgba(200,146,42,0.2)", color: "var(--gold-light)", border: "1px solid rgba(200,146,42,0.3)" }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
              Система работает в штатном режиме
            </div>
            <h1
              className="text-3xl md:text-5xl font-black text-white leading-tight mb-6 fade-up fade-up-delay-2"
              style={{ letterSpacing: "-0.5px" }}
            >
              Единая система видеонаблюдения<br />
              <span style={{ color: "var(--gold-light)" }}>Пермского края</span>
            </h1>
            <p className="text-lg mb-8 fade-up fade-up-delay-3" style={{ color: "rgba(255,255,255,0.8)" }}>
              Комплексное решение АПК «Безопасный город» — круглосуточный мониторинг общественной
              безопасности на территории всего Пермского края
            </p>
            <div className="flex flex-wrap gap-4 fade-up fade-up-delay-4">
              <button onClick={() => navigate("about")} className="btn-primary">
                О системе
              </button>
              <button onClick={() => navigate("connection")} className="btn-outline-white">
                Подключить камеры
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Features */}
      <section className="py-16" style={{ background: "var(--gray-bg)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-2xl md:text-3xl">Ключевые возможности</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "Eye",
                title: "Видеоаналитика",
                desc: "Распознавание лиц, находящихся в розыске. Идентификация номерных знаков транспортных средств в режиме реального времени.",
              },
              {
                icon: "ShieldCheck",
                title: "Круглосуточный контроль",
                desc: "Операторы единого центра мониторинга ведут непрерывное наблюдение 365 дней в году. Автоматическое оповещение при срабатывании детекторов.",
              },
              {
                icon: "Database",
                title: "Единый центр хранения",
                desc: "Защищённое хранилище видеоархива глубиной 30 дней. Данные используются оперативными и следственными органами для документирования инцидентов.",
              },
              {
                icon: "Zap",
                title: "Оперативное реагирование",
                desc: "Интеграция с экстренными службами: МВД, ГИБДД, МЧС. Передача тревожных сигналов в течение секунд после обнаружения инцидента.",
              },
              {
                icon: "Network",
                title: "Охват всего региона",
                desc: "Все 48 муниципальных образований Пермского края. Школы, больницы, дороги, парки, торговые центры, придомовые территории.",
              },
              {
                icon: "Lock",
                title: "Защита данных",
                desc: "Передача видеопотоков по защищённым каналам связи. Доступ к материалам строго регламентирован в соответствии с законодательством РФ.",
              },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border" style={{ borderColor: "#dde3ed" }}>
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "rgba(30,111,187,0.1)" }}
                >
                  <Icon name={f.icon} size={22} style={{ color: "var(--blue-accent)" }} />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--navy)" }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <h2 className="section-title text-2xl md:text-3xl" style={{ marginBottom: 0, paddingBottom: 14 }}>
              Последние новости
            </h2>
            <button
              onClick={() => navigate("news")}
              className="text-sm font-semibold flex items-center gap-1"
              style={{ color: "var(--blue-accent)" }}
            >
              Все новости <Icon name="ArrowRight" size={16} />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {newsData.slice(0, 3).map((n) => (
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
                  <h3 className="font-bold text-base mb-2 leading-snug" style={{ color: "var(--navy)" }}>
                    {n.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {n.text.substring(0, 120)}...
                  </p>
                </div>
                <div className="px-5 pb-4">
                  <span className="text-sm font-semibold" style={{ color: "var(--blue-accent)" }}>
                    Читать далее →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14" style={{ background: "var(--navy-mid)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Подключите ваши камеры к единой системе
          </h2>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
            Организации и муниципальные образования Пермского края могут интегрировать свои системы
            видеонаблюдения в ЕОСН. Ознакомьтесь с требованиями и этапами подключения.
          </p>
          <button onClick={() => navigate("connection")} className="btn-primary" style={{ padding: "14px 36px", fontSize: "16px" }}>
            Узнать о подключении
          </button>
        </div>
      </section>
    </div>
  );
}