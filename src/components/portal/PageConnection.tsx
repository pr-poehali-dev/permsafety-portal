import Icon from "@/components/ui/icon";
import { connectionSteps, bandwidthData } from "./data";

export default function PageConnection() {
  return (
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
  );
}
