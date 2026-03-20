import Icon from "@/components/ui/icon";

export default function PageContacts() {
  return (
    <div>
      <div style={{ background: "var(--navy)" }} className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
            Главная / Контакты
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-white">Контактная информация</h1>
        </div>
      </div>
      <section className="py-12" style={{ background: "var(--gray-bg)" }}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact cards */}
            <div className="space-y-5">
              <h2 className="section-title text-xl md:text-2xl">Реквизиты и адреса</h2>

              {[
                {
                  icon: "Building2",
                  title: "Уполномоченный орган",
                  lines: [
                    "Министерство общественной безопасности",
                    "Пермского края",
                  ],
                },
                {
                  icon: "MapPin",
                  title: "Почтовый адрес",
                  lines: [
                    "614006, г. Пермь,",
                    "ул. Ленина, д. 51",
                  ],
                },
                {
                  icon: "Phone",
                  title: "Телефон приёмной",
                  lines: ["8 (342) 217-74-00"],
                },
                {
                  icon: "Mail",
                  title: "Электронная почта",
                  lines: ["mob@permkrai.ru"],
                },
                {
                  icon: "Clock",
                  title: "Режим работы",
                  lines: [
                    "Пн–Пт: 09:00 — 18:00",
                    "Сб, Вс: выходной",
                  ],
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg p-5 border flex gap-4 items-start"
                  style={{ borderColor: "#dde3ed" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(30,111,187,0.1)" }}
                  >
                    <Icon name={card.icon} size={20} style={{ color: "var(--blue-accent)" }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "var(--text-secondary)" }}>
                      {card.title}
                    </p>
                    {card.lines.map((line, j) => (
                      <p key={j} className="font-medium text-sm" style={{ color: "var(--navy)" }}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Feedback form */}
            <div>
              <h2 className="section-title text-xl md:text-2xl">Обращение в систему</h2>
              <div className="bg-white rounded-lg p-6 border" style={{ borderColor: "#dde3ed" }}>
                <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>
                  По вопросам функционирования ЕОСН, подключения объектов и технической поддержки
                  направляйте обращения через форму ниже
                </p>
                <div className="space-y-4">
                  {[
                    { label: "ФИО", placeholder: "Фамилия Имя Отчество" },
                    { label: "Организация", placeholder: "Наименование организации" },
                    { label: "Телефон / E-mail", placeholder: "Контактные данные" },
                  ].map((f, i) => (
                    <div key={i}>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>
                        {f.label}
                      </label>
                      <input
                        type="text"
                        placeholder={f.placeholder}
                        className="w-full px-4 py-2.5 rounded border text-sm outline-none"
                        style={{ borderColor: "#dde3ed" }}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>
                      Суть обращения
                    </label>
                    <textarea
                      placeholder="Опишите ваш вопрос или обращение"
                      rows={4}
                      className="w-full px-4 py-2.5 rounded border text-sm outline-none resize-none"
                      style={{ borderColor: "#dde3ed" }}
                    />
                  </div>
                  <button className="btn-primary w-full" style={{ textAlign: "center", padding: "12px" }}>
                    Отправить обращение
                  </button>
                </div>
              </div>

              {/* Technical support */}
              <div
                className="mt-5 rounded-lg p-5 border"
                style={{ background: "rgba(13,35,64,0.04)", borderColor: "#dde3ed" }}
              >
                <div className="flex gap-3 items-start">
                  <Icon name="Headphones" size={20} style={{ color: "var(--blue-accent)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <p className="font-bold text-sm mb-1" style={{ color: "var(--navy)" }}>
                      Техническая поддержка ЕОСН
                    </p>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      По вопросам технического подключения и сопровождения: работаем в режиме 24/7
                    </p>
                    <p className="font-semibold mt-1 text-sm" style={{ color: "var(--blue-accent)" }}>
                      8 (342) 217-74-10
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
