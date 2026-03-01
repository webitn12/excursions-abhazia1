import React, { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "79990000000"; // замените на реальный номер

function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-slate-50"
    >
      <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1534448311378-1e193fb2570e?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-900/95" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        <header
          className={`sticky top-0 z-50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 py-4 flex items-center justify-between gap-4 mb-10 sm:mb-14 transition-colors ${
            scrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : ""
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-sky-500 flex items-center justify-center text-sm font-semibold tracking-tight">
              EX
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-sky-300">
                Экскурсии в Сочи
              </p>
              <p className="text-sm text-slate-200">
                Маршруты «Чистое время» по Сочи и Абхазии
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-100">
            <a href="#services" className="hover:text-sky-300 transition-colors">
              Маршруты
            </a>
            <a href="#guarantee" className="hover:text-sky-300 transition-colors">
              Гарантии
            </a>
            <a href="#kids" className="hover:text-sky-300 transition-colors">
              С детьми
            </a>
            <a href="#team" className="hover:text-sky-300 transition-colors">
              Команда
            </a>
            <a
              href="#testimonials"
              className="hover:text-sky-300 transition-colors"
            >
              Отзывы
            </a>
            <a href="#booking" className="hover:text-sky-300 transition-colors">
              Бронирование
            </a>
          </nav>
          <button
            type="button"
            aria-label="Меню"
            className="md:hidden p-2 rounded-lg text-slate-100 hover:bg-slate-800"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </header>
        {menuOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 z-20 bg-slate-900 border-b border-slate-700 px-4 py-3 flex flex-col gap-2">
            <a href="#services" className="py-2 text-slate-100 hover:text-sky-300" onClick={closeMenu}>
              Маршруты
            </a>
            <a href="#guarantee" className="py-2 text-slate-100 hover:text-sky-300" onClick={closeMenu}>
              Гарантии
            </a>
            <a href="#kids" className="py-2 text-slate-100 hover:text-sky-300" onClick={closeMenu}>
              С детьми
            </a>
            <a href="#team" className="py-2 text-slate-100 hover:text-sky-300" onClick={closeMenu}>
              Команда
            </a>
            <a href="#testimonials" className="py-2 text-slate-100 hover:text-sky-300" onClick={closeMenu}>
              Отзывы
            </a>
            <a href="#booking" className="py-2 text-slate-100 hover:text-sky-300" onClick={closeMenu}>
              Бронирование
            </a>
          </nav>
        )}

        <div className="grid lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-center">
          <div className="motion-safe:animate-fadeInUp">
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-500/50 bg-slate-900/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-sky-200 mb-4">
              Без навязанного шопинга · Группы до 12 человек
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] leading-tight mb-4">
              Смотрите горы, а не рынки:{" "}
              <span className="text-sky-300">
                честные экскурсии по Сочи и Абхазии
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-200 max-w-xl mb-5">
              100% времени на горы, водопады и море, 0% — на дегустации и рынки.
              Фиксированная цена с учетом всех билетов и{" "}
              <span className="font-semibold">
                сбор группы до 20 минут
              </span>
              .
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="rounded-2xl bg-slate-900/60 border border-slate-700/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300 mb-1">
                  Страх гостей
                </p>
                <p className="text-sm text-slate-100">
                  «На картинке одно, а привезут в старый ПАЗик к скучному
                  гиду».
                </p>
              </div>
              <div className="rounded-2xl bg-slate-900/60 border border-slate-700/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300 mb-1">
                  Как мы решаем
                </p>
                <p className="text-sm text-slate-100">
                  Минивэны бизнес‑класса, гиды‑сторителлеры и точное попадание
                  в те локации, которые вы выбрали на сайте.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#booking"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-sky-500/30 hover:bg-sky-600 transition-colors"
              >
                Забронировать место без предоплаты
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-600/80 bg-transparent px-5 py-3 text-sm font-medium text-slate-100 hover:bg-slate-800/80 transition-colors"
              >
                Написать в WhatsApp
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-4 text-[11px] text-slate-300">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Честные маршруты «Чистое время» без остановок на рынки и пасеки
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                Группы до 12 человек, страховка на 2 000 000 ₽
              </div>
            </div>
          </div>

          <div className="lg:pl-4 motion-safe:animate-fadeInUp">
            <div className="rounded-3xl bg-slate-900/70 border border-slate-700/80 p-5 sm:p-6 shadow-xl shadow-slate-950/60 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300 mb-3">
                Наши экскурсии в цифрах
              </p>
              <dl className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                  <dt className="text-slate-400 mb-1">Средний размер группы</dt>
                  <dd className="font-semibold text-slate-50 text-lg">
                    до 12 человек
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-400 mb-1">
                    Ожидание сбора группы
                  </dt>
                  <dd className="font-semibold text-slate-50 text-lg">
                    до 20 минут
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-400 mb-1">Рейтинг гостей</dt>
                  <dd className="font-semibold text-slate-50 text-lg">
                    5.0 / 2400+
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-400 mb-1">Гарантия выезда</dt>
                  <dd className="font-semibold text-slate-50 text-lg">
                    100% или 1000 ₽
                  </dd>
                </div>
              </dl>
              <div className="space-y-3 text-xs text-slate-200">
                <p>
                  <span className="font-semibold text-emerald-300">
                    Результат:
                  </span>{" "}
                  Вы видите именно те локации, которые выбрали на сайте, без
                  заездов на «проверенные» пасеки и дегустации.
                </p>
                <p>
                  <span className="font-semibold text-sky-300">Факт:</span> мы
                  используем минивэны бизнес‑класса и работаем только с
                  гидами‑сторителлерами, которые знают историю края, а не
                  пересказывают Википедию.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-slate-50 text-slate-900 py-14 sm:py-16 lg:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-10">
          <p className="text-xs uppercase tracking-[0.22em] text-sky-700 mb-2">
            Каталог классических маршрутов
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] leading-tight mb-3">
            Must‑see локации без очередей и скрытых доплат
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Мы рассчитали тайминг так, чтобы вы прибывали на ключевые локации
            на 40 минут раньше основных туристических автобусов.{" "}
            <span className="font-medium">
              Фиксированная цена «Всё включено» — без сюрпризов по дороге.
            </span>
          </p>
        </header>

        <div className="grid gap-6 lg:gap-8 lg:grid-cols-3">
          <article className="flex flex-col rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden motion-safe:animate-fadeInUp">
            <div className="h-40 sm:h-44 bg-[url('https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
            <div className="flex flex-col flex-1 p-5 sm:p-6">
              <h3 className="font-serif text-lg sm:text-xl mb-1.5">
                «Золотое кольцо Абхазии» без очередей
              </h3>
              <p className="text-xs uppercase tracking-[0.18em] text-sky-700 mb-3">
                Абхазия · Озеро Рица · Новый Афон
              </p>

              <div className="space-y-3 text-sm text-slate-700 mb-4">
                <p>
                  <span className="font-semibold text-rose-500">Боль:</span>{" "}
                  усталость от толпы и 3‑часовые очереди на границе.
                </p>
                <p>
                  <span className="font-semibold text-emerald-600">
                    Результат:
                  </span>{" "}
                  выезжаем в <span className="font-semibold">06:30</span>, чтобы
                  быть на озере Рица на 40 минут раньше туристических автобусов.
                  Переход границы по выделенной полосе.
                </p>
              </div>

              <dl className="grid grid-cols-2 gap-3 text-xs text-slate-500 mb-4">
                <div>
                  <dt>Длительность</dt>
                  <dd className="font-semibold text-slate-800">
                    11 часов в пути
                  </dd>
                </div>
                <div>
                  <dt>Маршрут</dt>
                  <dd className="font-semibold text-slate-800">
                    8 ключевых точек
                  </dd>
                </div>
                <div>
                  <dt>Формат</dt>
                  <dd className="font-semibold text-slate-800">
                    закрытые смотровые
                  </dd>
                </div>
                <div>
                  <dt>Группа</dt>
                  <dd className="font-semibold text-slate-800">
                    до 12 человек
                  </dd>
                </div>
              </dl>

              <a
                href="#booking"
                className="mt-auto inline-flex justify-center rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-800 hover:border-sky-500 hover:text-sky-700 transition-colors"
              >
                Забронировать «Абхазию» без предоплаты
              </a>
            </div>
          </article>

          <article className="flex flex-col rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden motion-safe:animate-fadeInUp">
            <div className="h-40 sm:h-44 bg-[url('https://images.unsplash.com/photo-1591359734057-3d2a9c84de9b?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
            <div className="flex flex-col flex-1 p-5 sm:p-6">
              <h3 className="font-serif text-lg sm:text-xl mb-1.5">
                Три курорта Красной Поляны «Всё включено»
              </h3>
              <p className="text-xs uppercase tracking-[0.18em] text-sky-700 mb-3">
                Роза Хутор · Горки Город · Газпром
              </p>

              <div className="space-y-3 text-sm text-slate-700 mb-4">
                <p>
                  <span className="font-semibold text-rose-500">Боль:</span>{" "}
                  скрытые поборы за подъемники и эко‑сборы в процессе прогулки.
                </p>
                <p>
                  <span className="font-semibold text-emerald-600">
                    Результат:
                  </span>{" "}
                  билеты на канатные дороги до отметки{" "}
                  <span className="font-semibold">2320 м</span> и входы в
                  Нацпарк уже включены в стоимость. Вам не нужно доставать
                  кошелек в горах.
                </p>
              </div>

              <dl className="grid grid-cols-2 gap-3 text-xs text-slate-500 mb-4">
                <div>
                  <dt>Курорты</dt>
                  <dd className="font-semibold text-slate-800">
                    все 3 за 1 день
                  </dd>
                </div>
                <div>
                  <dt>Природа</dt>
                  <dd className="font-semibold text-slate-800">
                    парк водопадов
                  </dd>
                </div>
                <div>
                  <dt>Фишка</dt>
                  <dd className="font-semibold text-slate-800">
                    олимпийское наследие
                  </dd>
                </div>
                <div>
                  <dt>Формат</dt>
                  <dd className="font-semibold text-slate-800">
                    всё включено
                  </dd>
                </div>
              </dl>

              <a
                href="#booking"
                className="mt-auto inline-flex justify-center rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-800 hover:border-sky-500 hover:text-sky-700 transition-colors"
              >
                Забронировать Красную Поляну
              </a>
            </div>
          </article>

          <article className="flex flex-col rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden motion-safe:animate-fadeInUp">
            <div className="h-40 sm:h-44 bg-[url('https://images.unsplash.com/photo-1572454591676-0e0c2c7c6359?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
            <div className="flex flex-col flex-1 p-5 sm:p-6">
              <h3 className="font-serif text-lg sm:text-xl mb-1.5">
                Семейный тур Child‑friendly
              </h3>
              <p className="text-xs uppercase tracking-[0.18em] text-sky-700 mb-3">
                33 водопада · каньоны · панорамы
              </p>

              <div className="space-y-3 text-sm text-slate-700 mb-4">
                <p>
                  <span className="font-semibold text-rose-500">Боль:</span>{" "}
                  ребенок капризничает из‑за долгих переездов и отсутствия
                  туалетов.
                </p>
                <p>
                  <span className="font-semibold text-emerald-600">
                    Результат:
                  </span>{" "}
                  санитарные остановки каждые{" "}
                  <span className="font-semibold">90 минут</span> в локациях с
                  чистыми санузлами. В машине — сертифицированные кресла{" "}
                  <span className="font-semibold">Britax</span> и запас питьевой
                  воды.
                </p>
              </div>

              <dl className="grid grid-cols-2 gap-3 text-xs text-slate-500 mb-4">
                <div>
                  <dt>Безопасность</dt>
                  <dd className="font-semibold text-slate-800">
                    детские кресла
                  </dd>
                </div>
                <div>
                  <dt>Комфорт</dt>
                  <dd className="font-semibold text-slate-800">
                    паузы каждые 1.5 ч
                  </dd>
                </div>
                <div>
                  <dt>Формат</dt>
                  <dd className="font-semibold text-slate-800">
                    вечернее шоу
                  </dd>
                </div>
                <div>
                  <dt>Группа</dt>
                  <dd className="font-semibold text-slate-800">
                    семьи с детьми
                  </dd>
                </div>
              </dl>

              <a
                href="#booking"
                className="mt-auto inline-flex justify-center rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-800 hover:border-sky-500 hover:text-sky-700 transition-colors"
              >
                Узнать даты семейного тура
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function GuaranteeSection() {
  return (
    <section id="guarantee" className="bg-white text-slate-900 py-14 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-10">
          <p className="text-xs uppercase tracking-[0.22em] text-sky-700 mb-2">
            Гарантия «Чистое время» и прозрачные цены
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] leading-tight mb-3">
            Никакого навязанного шопинга и 0 скрытых платежей в пути
          </h2>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8">
            <h3 className="font-serif text-lg sm:text-xl mb-3 text-rose-600">
              Страх: «Половину дня проведу на рынках, покупая ненужный мёд»
            </h3>
            <p className="text-sm text-slate-700 mb-4">
              Мы полностью исключили коммерческие остановки из маршрута.
            </p>
            <p className="text-sm font-medium text-emerald-700">
              Результат: на 2 часа больше природы, чем у конкурентов — вместо очередей за вином вы получаете лишний час прогулки у озера Рица и дополнительную остановку для фото в каньоне Псахо.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8">
            <h3 className="font-serif text-lg sm:text-xl mb-3 text-rose-600">
              Страх: «В автобусе внезапно попросят деньги за вход, катер или эко‑сбор»
            </h3>
            <p className="text-sm font-semibold text-sky-800 mb-3">
              Цена на сайте — окончательная: 0 скрытых платежей в пути
            </p>
            <p className="text-sm text-slate-700 mb-3">
              В стоимость билета уже заложены:
            </p>
            <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
              <li>Экологические сборы Нацпарка и Кавказского заповедника</li>
              <li>Все входные билеты (Дача Сталина, пещеры, парки)</li>
              <li>Страховка каждого пассажира на 2 000 000 ₽</li>
            </ul>
            <p className="text-sm text-slate-600 mt-3">
              Кошелёк понадобится только для сувениров по вашему желанию.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogisticsSection() {
  return (
    <section id="logistics" className="bg-slate-100 text-slate-900 py-14 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-8">
          <p className="text-xs uppercase tracking-[0.22em] text-sky-700 mb-2">
            Логистика без хаоса
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] leading-tight mb-3">
            Экспресс‑сбор за 15 минут: отправляемся в горы сразу
          </h2>
          <p className="text-sm text-slate-600">
            Страх: «Будем час кружить по Сочи, собирая всех туристов». Мы разделили город на секторы и закрепили за каждым отдельный транспорт.
          </p>
        </header>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-4xl sm:text-5xl font-serif font-semibold text-sky-600 mb-1">≤ 20 мин</p>
            <p className="text-sm text-slate-600">
              Время от посадки первого туриста до выезда из города
            </p>
          </div>
          <p className="text-sm text-slate-700 max-w-xl">
            Вы начинаете экскурсию бодрыми, а не уставшими от ожидания в пробках.
          </p>
        </div>
      </div>
    </section>
  );
}

function ChildFriendlySection() {
  return (
    <section
      id="kids"
      className="bg-white text-slate-900 py-14 sm:py-16 lg:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 motion-safe:animate-fadeInUp">
        <header className="max-w-3xl mb-8">
          <p className="text-xs uppercase tracking-[0.22em] text-sky-700 mb-2">
            Путешествия с детьми
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] leading-tight mb-3">
            Путешествуйте с детьми, а не воюйте с ними
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Страх: «Ребёнок устанет, будет капризничать, негде будет сходить в
            туалет». Мы создали отдельные маршруты, в которых ребёнок чувствует
            себя безопасно и вовлечённо.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5 sm:p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-sky-700 mb-2">
              Комфорт
            </p>
            <h3 className="font-serif text-lg mb-2">
              Детские кресла и климат‑контроль
            </h3>
            <p className="text-sm text-slate-700">
              Каждое авто укомплектовано сертифицированным креслом{" "}
              <span className="font-medium">Britax / Cybex</span> под рост и вес
              ребёнка, работают кондиционер и мягкая подсветка в салоне.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5 sm:p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-sky-700 mb-2">
              Логистика
            </p>
            <h3 className="font-serif text-lg mb-2">
              Паузы каждые 90 минут
            </h3>
            <p className="text-sm text-slate-700">
              Остановки запланированы в местах с{" "}
              <span className="font-medium">чистыми санузлами</span> и зонами
              отдыха, где можно побегать, перекусить и сменить обстановку.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5 sm:p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-sky-700 mb-2">
              Вовлечённость
            </p>
            <h3 className="font-serif text-lg mb-2">
              Адаптированные рассказы гида
            </h3>
            <p className="text-sm text-slate-700">
              Гиды объясняют историю края языком детей, превращая поездку в
              интерактивный квест. Результат: ребёнок занят, а вы спокойно
              наслаждаетесь видами.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const people = [
    {
      name: "Алексей Громов",
      role: "Основатель и старший гид‑сторителлер",
      text: "15 лет проводит экскурсии по Кавказу, собирая живые истории местных жителей. Знает, где показать гостям тишину, а где — драйв горных серпантинов.",
      tag: "Истории вместо лекций",
    },
    {
      name: "Мария Лескова",
      role: "Куратор семейных и child‑friendly маршрутов",
      text: "Бывший педагог и мама двоих детей. Составляет маршруты так, чтобы ребенок был вовлечен, а родители отдыхали, а не уговаривали.",
      tag: "Дети под присмотром",
    },
    {
      name: "Руслан Ковалёв",
      role: "Руководитель автопарка и инструктор по безопасности",
      text: "Стаж вождения по горным дорогам более 12 лет. Отвечает за техническое состояние минивэнов и обучение водителей корректному стилю езды.",
      tag: "Безопасность на серпантинах",
    },
  ];

  return (
    <section
      id="team"
      className="bg-white text-slate-900 py-14 sm:py-16 lg:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 motion-safe:animate-fadeInUp">
        <header className="max-w-3xl mb-10">
          <p className="text-xs uppercase tracking-[0.22em] text-sky-700 mb-2">
            Команда
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] leading-tight mb-3">
            Безопасное вождение и живой рассказ без лекций из учебника
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Водители со стажем по горным дорогам от 10 лет и гиды,
            переаттестовывающиеся каждые полгода. Если вам станет скучно в
            первые 30 минут —{" "}
            <span className="font-medium">
              мы заменим гида на следующей остановке или вернем деньги.
            </span>
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          {people.map((p) => (
            <article
              key={p.name}
              className="flex flex-col rounded-3xl border border-slate-200 bg-slate-50/60 p-5 sm:p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-11 w-11 rounded-full bg-gradient-to-tr from-sky-500 to-emerald-400 text-white flex items-center justify-center text-sm font-semibold">
                  {p.name
                    .split(" ")
                    .map((s) => s[0])
                    .join("")}
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    {p.name}
                  </h3>
                  <p className="text-xs text-slate-500">{p.role}</p>
                </div>
              </div>
              <p className="text-sm text-slate-700 mb-4">{p.text}</p>
              <div className="mt-auto flex items-center justify-between pt-2">
                <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-[11px] font-medium text-sky-800 border border-sky-100">
                  {p.tag}
                </span>
                <span className="text-[11px] text-slate-500">
                  Аттестация каждые 6 мес.
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const reviews = [
    {
      name: "Ирина, Москва",
      text: "Боялась классического сценария с дегустациями и рынками, но здесь правда всё время — про горы. На Рице были почти одни, пока подъехали автобусы. Ни одной остановки «по магазинам», даже не верится.",
      details:
        "Маршрут: Абхазия (Рица + Новый Афон) · Семья с подростком · Июль 2025",
      rating: "5.0",
    },
    {
      name: "Андрей и Светлана",
      text: "Особенно зашёл формат «Чистое время». Цена на сайте совпала до рубля, нигде не просили доплатить за канатки или эко‑сборы. Все билеты выслали в PDF заранее, мы просто наслаждались видами.",
      details: "Маршрут: Три курорта Красной Поляны · Пара · Октябрь 2025",
      rating: "5.0",
    },
    {
      name: "Ольга с дочкой 6 лет",
      text: "Редко когда с ребёнком в дороге спокойно. Здесь каждые полтора часа — остановка с нормальными туалетами, в машине кресло по росту, вода и плед. Дочка до сих пор вспоминает «волшебные водопады».",
      details:
        "Маршрут: Семейный тур Child‑friendly (33 водопада) · Январь 2026",
      rating: "5.0",
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-slate-900 text-slate-50 py-14 sm:py-16 lg:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 motion-safe:animate-fadeInUp">
        <header className="max-w-3xl mb-10">
          <p className="text-xs uppercase tracking-[0.22em] text-emerald-300 mb-2">
            Гарантии и отзывы
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] leading-tight mb-3">
            Гарантия выезда 100% или 1000 ₽ за ожидание
          </h2>
          <p className="text-sm sm:text-base text-slate-200">
            Если основной гид заболел — его заменяет резервный. Ваша поездка
            состоится в любом случае.{" "}
            <span className="font-medium">
              Бронирование без предоплаты: оплачиваете 100% стоимости только при
              посадке в автомобиль.
            </span>
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
          <div className="grid gap-5 sm:grid-cols-2">
            {reviews.map((r) => (
              <article
                key={r.name}
                className="rounded-3xl border border-slate-700 bg-slate-900/60 p-5 sm:p-6"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-sm font-semibold">{r.name}</h3>
                    <p className="text-[11px] text-slate-400">{r.details}</p>
                  </div>
                  <div className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] text-emerald-300 border border-emerald-400/40">
                    <span className="text-xs font-semibold">{r.rating}</span>
                    <span>★</span>
                  </div>
                </div>
                <p className="text-sm text-slate-100 leading-relaxed">
                  {r.text}
                </p>
              </article>
            ))}
          </div>

          <div className="rounded-3xl border border-slate-700 bg-slate-900/70 p-5 sm:p-6">
            <h3 className="font-serif text-lg mb-3">
              Почему вам не придётся переживать за день отдыха
            </h3>
            <ul className="space-y-3 text-sm text-slate-100">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <p>
                  <span className="font-semibold">
                    Гарантия выезда 100% или 1000 ₽
                  </span>{" "}
                  — если экскурсию перенесут более чем на 2 часа, мы компенсируем
                  ожидание.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <p>
                  <span className="font-semibold">Формат «Всё включено»:</span>{" "}
                  в стоимость уже заложены эко‑сборы Нацпарка, входные билеты
                  (Дача Сталина, пещеры, парки) и страховка на 2 000 000 ₽.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                <p>
                  <span className="font-semibold">
                    0 скрытых платежей в пути
                  </span>{" "}
                  — кошелек понадобится только для покупки сувениров по вашему
                  желанию.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                <p>
                  Более <span className="font-semibold">2400 отзывов</span> на
                  независимых площадках с рейтингом{" "}
                  <span className="font-semibold">5.0</span> подтверждают наш
                  стандарт.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function BookingSection() {
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = (data.get("name") || "").toString().trim();
    const phone = (data.get("phone") || "").toString().trim();
    const date = (data.get("date") || "").toString();
    const route = (data.get("route") || "").toString();
    const comment = (data.get("comment") || "").toString().trim();

    if (!name || !phone || !route) {
      setError("Пожалуйста, укажите имя, телефон и маршрут.");
      return;
    }

    const textLines = [
      "Здравствуйте! Хочу забронировать экскурсию в Сочи.",
      `Имя: ${name}`,
      `Телефон: ${phone}`,
      route && `Маршрут: ${route}`,
      date && `Желаемая дата: ${date}`,
      comment && `Комментарий: ${comment}`,
    ].filter(Boolean);

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      textLines.join("\n")
    )}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");
    form.reset();
    setStatus("Заявка отправлена в WhatsApp. Менеджер свяжется с вами в течение нескольких минут.");
  };

  return (
    <section
      id="booking"
      className="bg-slate-50 text-slate-900 py-14 sm:py-16 lg:py-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 motion-safe:animate-fadeInUp">
        <header className="mb-8 sm:mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-sky-700 mb-2">
            Финальный шаг
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] leading-tight mb-3">
            Забронируйте место за 60 секунд без предоплаты
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Напишите нам в WhatsApp — менеджер пришлёт финальный расчёт со
            всеми билетами за 3 минуты.{" "}
            <span className="font-medium">
              Цена зафиксируется в PDF‑ваучере и не изменится.
            </span>
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
          <form
            className="rounded-3xl bg-white border border-slate-200 shadow-sm p-5 sm:p-6 space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 mb-1.5"
                >
                  Имя
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Например, Анна"
                  className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/70"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 mb-1.5"
                >
                  Телефон / WhatsApp
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+7 ..."
                  className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/70"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="date"
                  className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 mb-1.5"
                >
                  Желаемая дата
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/70"
                />
              </div>
              <div>
                <label
                  htmlFor="route"
                  className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 mb-1.5"
                >
                  Маршрут
                </label>
                <select
                  id="route"
                  name="route"
                  className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/70"
                >
                  <option value="">Выберите маршрут</option>
                  <option>«Золотое кольцо Абхазии»</option>
                  <option>Три курорта Красной Поляны</option>
                  <option>Семейный тур Child‑friendly (33 водопада)</option>
                  <option>Индивидуальный маршрут</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="comment"
                className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 mb-1.5"
              >
                Комментарий
              </label>
              <textarea
                id="comment"
                name="comment"
                rows={3}
                placeholder="Сколько вас человек, есть ли дети, откуда вас забрать..."
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/70"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-[11px] text-slate-500">
              <label className="inline-flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                />
                <span>
                  Я согласен(а) с{" "}
                  <span className="underline underline-offset-2">
                    политикой конфиденциальности
                  </span>{" "}
                  и обработкой персональных данных.
                </span>
              </label>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                type="submit"
                className="inline-flex flex-1 items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-md shadow-sky-500/30 hover:bg-sky-600 transition-colors"
              >
                Забронировать без предоплаты
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-emerald-500/70 bg-emerald-50 px-5 py-3 text-xs sm:text-sm font-semibold text-emerald-800 hover:bg-emerald-100 transition-colors"
              >
                Написать в WhatsApp — узнать свободные даты
              </a>
            </div>

            {error && (
              <p className="text-xs text-rose-600 mt-1">
                {error}
              </p>
            )}
            {status && (
              <p className="text-xs text-emerald-700 mt-1">
                {status}
              </p>
            )}
          </form>

          <div className="rounded-3xl border border-slate-200 bg-slate-100 p-5 sm:p-6 text-sm text-slate-700">
            <h3 className="font-serif text-lg mb-3">
              Как проходит бронирование
            </h3>
            <ol className="list-decimal list-inside space-y-2 mb-4">
              <li>Вы оставляете заявку на сайте или пишете в WhatsApp.</li>
              <li>
                Менеджер уточняет детали, присылает маршрут и финальную цену в
                PDF‑ваучере.
              </li>
              <li>Вы оплачиваете экскурсию только при посадке в минивэн.</li>
            </ol>
            <p className="text-xs text-slate-500">
              Все условия фиксируются в ваучере: маршрут, время выезда, состав
              группы и окончательная стоимость. Никаких доплат в процессе
              экскурсии.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Наверх"
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg shadow-sky-500/40 hover:bg-sky-600 transition-colors"
    >
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}

function ExcursionsSochiLandingPage() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <HeroSection />
      <ServicesSection />
      <GuaranteeSection />
      <LogisticsSection />
      <TeamSection />
      <ChildFriendlySection />
      <TestimonialsSection />
      <BookingSection />
      <footer id="privacy" className="bg-slate-900 text-slate-400 text-xs py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-4">
            <p className="font-medium text-slate-300">
              © {new Date().getFullYear()} Экскурсии «Чистое время» в Сочи и Абхазии.
            </p>
            <p className="text-slate-500">
              Минивэны бизнес‑класса · Группы до 12 человек · Без навязанного шопинга.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-slate-500">
            <a href="#services" className="hover:text-sky-400 transition-colors">Маршруты</a>
            <a href="#guarantee" className="hover:text-sky-400 transition-colors">Гарантии</a>
            <a href="#kids" className="hover:text-sky-400 transition-colors">С детьми</a>
            <a href="#booking" className="hover:text-sky-400 transition-colors">Бронирование</a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
              WhatsApp
            </a>
            <span className="text-slate-600">·</span>
            <a href="#privacy" className="hover:text-sky-400 transition-colors">Политика конфиденциальности</a>
          </nav>
        </div>
      </footer>
      <BackToTop />
    </div>
  );
}

export default ExcursionsSochiLandingPage;

