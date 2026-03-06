import Icon from "@/components/ui/icon";
import { Section, newsData, documents, connectionSteps, bandwidthData } from "./data";

interface SectionPagesProps {
  activeSection: Section;
  navigate: (section: Section) => void;
}

export default function SectionPages({ activeSection, navigate }: SectionPagesProps) {
  return (
    <>
      {/* ===================== NEWS ===================== */}
      {activeSection === "news" && (
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
      )}

      {/* ===================== CONNECTION ===================== */}
      {activeSection === "connection" && (
        <div>
          <div style={{ background: "var(--navy)" }} className="py-10">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
                Главная / Подключение
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-white">Подключение к ЕОСН</h1>
              <p className="mt-3 text-base" style={{ color: "rgba(255,255,255,0.7)" }}>
                Порядок и требования для подключения камер видеонаблюдения организаций к Единой системе
              </p>
            </div>
          </div>

          <section className="py-12" style={{ background: "var(--gray-bg)" }}>
            <div className="max-w-5xl mx-auto px-4">
              {/* Steps */}
              <h2 className="section-title text-xl md:text-2xl">Этапы подключения</h2>
              <div className="space-y-6 mb-14">
                {connectionSteps.map((step) => (
                  <div
                    key={step.num}
                    className="bg-white rounded-lg p-6 border flex gap-5 items-start"
                    style={{ borderColor: "#dde3ed" }}
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                      style={{ background: "var(--navy)" }}
                    >
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1" style={{ color: "var(--navy)" }}>{step.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Requirements */}
              <h2 className="section-title text-xl md:text-2xl">Требования к оборудованию</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {[
                  {
                    icon: "Camera",
                    title: "Разрешение камер",
                    items: ["Минимальное разрешение — FullHD (1920×1080)", "Поддержка матриц от 1,3 до 8 Мпикс", "Чёткое изображение при различном освещении"],
                  },
                  {
                    icon: "Wifi",
                    title: "Протоколы передачи",
                    items: ["Поддержка RTSP (Real Time Streaming Protocol)", "Совместимость с ONVIF Profile S/T", "Поддержка H.264 / H.265 кодеков"],
                  },
                  {
                    icon: "Network",
                    title: "Канал связи",
                    items: ["Стабильный интернет-канал без разрывов", "Пропускная способность согласно таблице", "Возможность организации VLAN"],
                  },
                  {
                    icon: "Shield",
                    title: "Безопасность",
                    items: ["Авторизация потока по логину/паролю", "Поддержка шифрования HTTPS/TLS", "Уникальный идентификатор каждой камеры"],
                  },
                ].map((req, i) => (
                  <div key={i} className="bg-white rounded-lg p-6 border" style={{ borderColor: "#dde3ed" }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ background: "rgba(30,111,187,0.1)" }}
                      >
                        <Icon name={req.icon} size={20} style={{ color: "var(--blue-accent)" }} />
                      </div>
                      <h3 className="font-bold" style={{ color: "var(--navy)" }}>{req.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {req.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                          <Icon name="Check" size={16} style={{ color: "var(--blue-accent)", marginTop: 2, flexShrink: 0 }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Bandwidth table */}
              <h2 className="section-title text-xl md:text-2xl">Требования к пропускной способности канала</h2>
              <div className="bg-white rounded-lg border overflow-hidden" style={{ borderColor: "#dde3ed" }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "var(--navy)" }}>
                      <th className="text-left px-5 py-3 font-semibold text-white">Разрешение матрицы</th>
                      <th className="text-left px-5 py-3 font-semibold text-white">Разрешение камеры</th>
                      <th className="text-left px-5 py-3 font-semibold text-white">Пропускная способность</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bandwidthData.map((row, i) => (
                      <tr
                        key={i}
                        style={{
                          background: i % 2 === 0 ? "white" : "#f8fafc",
                          borderTop: "1px solid #edf0f5",
                        }}
                      >
                        <td className="px-5 py-3 font-medium" style={{ color: "var(--navy)" }}>{row.mpix}</td>
                        <td className="px-5 py-3" style={{ color: "var(--text-secondary)" }}>{row.res}</td>
                        <td className="px-5 py-3">
                          <span
                            className="font-semibold px-2 py-0.5 rounded text-xs"
                            style={{ background: "rgba(30,111,187,0.1)", color: "var(--blue-accent)" }}
                          >
                            {row.speed}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div
                className="mt-6 p-4 rounded-lg flex gap-3 text-sm"
                style={{ background: "rgba(200,146,42,0.1)", border: "1px solid rgba(200,146,42,0.25)" }}
              >
                <Icon name="AlertTriangle" size={18} style={{ color: "var(--gold)", flexShrink: 0, marginTop: 1 }} />
                <span style={{ color: "#7a5a10" }}>
                  Указанные значения пропускной способности указаны для одной камеры видеонаблюдения.
                  При подключении нескольких камер суммируйте значения. Рекомендуется обеспечить запас канала не менее 20%.
                </span>
              </div>

              {/* Submit form */}
              <div className="mt-12 bg-white rounded-lg p-8 border" style={{ borderColor: "#dde3ed" }}>
                <h3 className="font-bold text-xl mb-2" style={{ color: "var(--navy)" }}>Подать заявку на подключение</h3>
                <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
                  Заполните форму, и специалисты ЕОСН свяжутся с вами в течение 3 рабочих дней
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { label: "Наименование организации", placeholder: "ООО «Наименование»" },
                    { label: "Контактное лицо", placeholder: "Фамилия Имя Отчество" },
                    { label: "Телефон", placeholder: "+7 (342) 000-00-00" },
                    { label: "Электронная почта", placeholder: "example@organization.ru" },
                  ].map((field, i) => (
                    <div key={i}>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>
                        {field.label}
                      </label>
                      <input
                        type="text"
                        placeholder={field.placeholder}
                        className="w-full px-4 py-2.5 rounded border text-sm outline-none"
                        style={{ borderColor: "#dde3ed", color: "var(--text-primary)" }}
                      />
                    </div>
                  ))}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>
                      Адрес установки камер / дополнительная информация
                    </label>
                    <textarea
                      placeholder="Укажите адрес и количество подключаемых камер"
                      rows={3}
                      className="w-full px-4 py-2.5 rounded border text-sm outline-none resize-none"
                      style={{ borderColor: "#dde3ed", color: "var(--text-primary)" }}
                    />
                  </div>
                </div>
                <button className="btn-primary mt-4" style={{ padding: "12px 32px" }}>
                  Отправить заявку
                </button>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ===================== DOCUMENTS ===================== */}
      {activeSection === "documents" && (
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
      )}

      {/* ===================== ABOUT ===================== */}
      {activeSection === "about" && (
        <div>
          <div style={{ background: "var(--navy)" }} className="py-10">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
                Главная / О системе
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-white">О системе</h1>
            </div>
          </div>
          <section className="py-12" style={{ background: "var(--gray-bg)" }}>
            <div className="max-w-5xl mx-auto px-4">
              {/* Main description */}
              <div className="bg-white rounded-lg p-8 border mb-8" style={{ borderColor: "#dde3ed" }}>
                <h2 className="section-title text-xl md:text-2xl">Что такое ЕОСН</h2>
                <div className="prose max-w-none text-sm leading-relaxed space-y-4" style={{ color: "var(--text-secondary)" }}>
                  <p>
                    <strong style={{ color: "var(--navy)" }}>Единая система видеонаблюдения Пермского края (ЕОСН)</strong> —
                    это комплексное решение в рамках аппаратно-программного комплекса «Безопасный город», направленное на
                    обеспечение общественной безопасности, предупреждение правонарушений и оперативное реагирование
                    на чрезвычайные ситуации.
                  </p>
                  <p>
                    Система объединяет более <strong style={{ color: "var(--navy)" }}>7 000 камер видеонаблюдения</strong>,
                    расположенных во всех муниципальных и городских образованиях Пермского края. Единый центр хранения и
                    обработки данных обеспечивает круглосуточный мониторинг и сохранность видеоархива сроком 30 дней.
                  </p>
                </div>
              </div>

              {/* Tasks */}
              <h2 className="section-title text-xl md:text-2xl">Основные задачи</h2>
              <div className="grid md:grid-cols-3 gap-5 mb-10">
                {[
                  { icon: "Eye", title: "Мониторинг", desc: "Непрерывное наблюдение за общественными и дорожными пространствами по всему Пермскому краю" },
                  { icon: "Zap", title: "Оперативное реагирование", desc: "Автоматическое уведомление экстренных служб при регистрации инцидентов в режиме реального времени" },
                  { icon: "FileCheck", title: "Доказательная база", desc: "Сбор, хранение и предоставление видеоматериалов для правоохранительных и следственных органов" },
                ].map((t, i) => (
                  <div key={i} className="bg-white rounded-lg p-5 border text-center" style={{ borderColor: "#dde3ed" }}>
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ background: "rgba(30,111,187,0.1)" }}
                    >
                      <Icon name={t.icon} size={24} style={{ color: "var(--blue-accent)" }} />
                    </div>
                    <h3 className="font-bold mb-2" style={{ color: "var(--navy)" }}>{t.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{t.desc}</p>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <h2 className="section-title text-xl md:text-2xl">Технологии системы</h2>
              <div className="space-y-4 mb-10">
                {[
                  {
                    icon: "Scan",
                    title: "Интеллектуальная видеоаналитика — распознавание лиц",
                    desc: "Автоматическая идентификация лиц, находящихся в федеральном и региональном розыске. Система сверяет изображения в режиме реального времени с базами данных МВД России.",
                  },
                  {
                    icon: "Car",
                    title: "Распознавание номерных знаков",
                    desc: "Автоматическое считывание и идентификация государственных номерных знаков транспортных средств. Контроль розыскных транспортных средств и нарушителей ПДД.",
                  },
                  {
                    icon: "Server",
                    title: "Единый центр хранения данных",
                    desc: "Защищённый дата-центр с резервированием на территории Пермского края. Хранение видеоархива глубиной 30 дней. Скоростной доступ для оперативных и следственных органов.",
                  },
                ].map((tech, i) => (
                  <div key={i} className="bg-white rounded-lg p-6 border flex gap-4 items-start" style={{ borderColor: "#dde3ed" }}>
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--navy)" }}
                    >
                      <Icon name={tech.icon} size={20} style={{ color: "white" }} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1.5" style={{ color: "var(--navy)" }}>{tech.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coverage */}
              <h2 className="section-title text-xl md:text-2xl">Охват объектов</h2>
              <div className="bg-white rounded-lg p-6 border" style={{ borderColor: "#dde3ed" }}>
                <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>
                  К ЕОСН подключены все муниципальные и городские образования Пермского края. Камеры установлены на следующих типах объектов:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { icon: "GraduationCap", label: "Школы и учреждения образования" },
                    { icon: "Building2", label: "Больницы и поликлиники" },
                    { icon: "Trees", label: "Парки и зоны отдыха" },
                    { icon: "Car", label: "Дороги и автомагистрали" },
                    { icon: "ShoppingBag", label: "Торговые центры" },
                    { icon: "TreePine", label: "Зоны лесного хозяйства" },
                    { icon: "Home", label: "Придомовые территории" },
                    { icon: "Building", label: "Административные объекты" },
                  ].map((obj, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center text-center p-4 rounded-lg"
                      style={{ background: "var(--gray-bg)" }}
                    >
                      <Icon name={obj.icon} size={24} style={{ color: "var(--blue-accent)", marginBottom: 8 }} />
                      <span className="text-xs font-medium leading-tight" style={{ color: "var(--text-primary)" }}>
                        {obj.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ===================== CONTACTS ===================== */}
      {activeSection === "contacts" && (
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
      )}
    </>
  );
}
