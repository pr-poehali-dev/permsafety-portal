import Icon from "@/components/ui/icon";

export default function PageAbout() {
  return (
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
  );
}
