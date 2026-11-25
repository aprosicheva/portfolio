/* =========================================================================
   ПОРТФОЛИО — ЕДИНЫЙ ФАЙЛ КОНТЕНТА
   -------------------------------------------------------------------------
   Всё, что нужно менять, — здесь. Два блока: ru и en.
   Меняйте только текст в кавычках. Ключи и структуру не трогайте.

   Цифры взяты из резюме и маркетингового портфолио. Где указан период —
   он взят из кейса; если нужно уточнить, ищите комментарий `уточнить`.
   ========================================================================= */

const PORTFOLIO = {
  ru: {
    lang: "ru",
    title: "Олеся Апросичева — Бренд-менеджер",
    nav: [
      { href: "#about", label: "Обо мне" },
      { href: "#cases", label: "Кейсы" },
      { href: "#shoots", label: "Съёмки" },
      { href: "#expertise", label: "Компетенции" },
      { href: "#experience", label: "Опыт" },
      { href: "#contact", label: "Контакты" }
    ],
    navCta: "Скачать PDF",
    hero: {
      kicker: "Портфолио · 2026",
      name: "Олеся\nАпросичева",
      role: "Бренд-менеджер",
      lead: "Собираю бренды целиком:\nот смысла до упаковки",
      ctaPrimary: "Смотреть кейсы",
      ctaSecondary: "Скачать PDF",
      meta: ["Санкт-Петербург", "офис / гибрид / удалёнка", "открыта к предложениям"]
    },
    marquee: [
      "продвижение", "нейминг", "айдентика", "брендбук", "упаковка",
      "СММ", "Яндекс Директ", "медиапланирование", "съёмки",
      "выставки", "запуск бренда", "отчётность"
    ],
    about: {
      no: "01",
      label: "Обо мне",
      title: "Бренд — это когда упаковка,\nсайт и реклама говорят на одном языке",
      photo: "assets/img/portrait.jpg",
      text: [
        "Три года в брендинге и маркетинге: retail, FMCG и digital-агентство. Вела пять собственных брендов компании и мультибрендовый гипермаркет — от стратегии продвижения до инструкции в коробке.",
        "Люблю проекты, где нужно собрать всё с нуля: придумать позиционирование, написать ТЗ дизайнеру, договориться с типографией,  проверить макет перед печатью и вывести сайт в срок.",
        "Работала и с B2C, и с B2B: брендировала товары для поставщиков, организовывала участие в выставках, готовила презентации для партнёров, координировала команду из 15 человек."
      ],
      facts: [
        { k: "Опыт", v: "3 года 1 месяц" },
        { k: "Среды", v: "retail · FMCG · event · digital" },
        { k: "Масштаб", v: "5 брендов, команда 15 человек" },
        { k: "Языки", v: "русский, английский B2" },
        { k: "Вне работы", v: "путешествия, фэнтези, пазлы и йорк" }
      ]
    },
    stats: [
      { v: "3+", l: "года опыта" },
      { v: "6", l: "брендов единовременно" },
      { v: "15", l: "человек в инхаус-команде" },
      { v: "585%", l: "ROI лучшего кейса в Я.директ" }
    ],
    casesHead: {
      no: "02",
      label: "Кейсы",
      title: "Два проекта,\nгде виден\nрезультат",
      sub: "Первый — портфель из шести брендов в FitnessLook: от позиционирования до упаковки, сайтов и выставок. Второй — портфейль digital-агентства: пять клиентов и ROI, о котором мечтают в 2026."
    },
    cases: [
      {
        no: "01",
        title: "FitnessLook: шесть брендов",
        subtitle: "гипермаркет и пять собственных брендов — полный цикл от смысла до полки",
        meta: [
          { k: "Компания", v: "FitnessLook · гипермаркет спорттоваров" },
          { k: "Роль", v: "бренд-менеджер" },
          { k: "Годы", v: "2024–2026" }
        ],
        challenge: "Мультибрендовый гипермаркет спортивного и массажного оборудования и пять собственных брендов — шесть брендов одновременно. У каждого своя аудитория и свой ассортимент, а стратегия продвижения нужна общая: чтобы бренды не конкурировали между собой и говорили с покупателем по-разному.",
        approach: "Сначала фиксируем, чем бренд отличается и для кого. А уже потом — визуал, каналы и сообщения. Пять брендов — пять разных ролей в портфеле.",
        actions: [
          "Разработала стратегию продвижения гипермаркета и пяти собственных брендов",
          "Изучала рынок, спрос и конкурентов, проверяла маркетинговые гипотезы",
          "Собирала маркетинговый календарь: кампании, запуски, сезонные активности",
          "Вела полный цикл запуска: нейминг, айдентика, упаковка, сайт, первая кампания",
          "Организовывала съёмки и участие в выставках — от ТЗ до представительства",
          "Координировала инхаус-команду из 15 человек и внешних подрядчиков"
        ],
        brandsTitle: "Что сделала по брендам",
        brands: [
          {
            name: "ORLAUF",
            role: "массажное и спортивное оборудование",
            points: [
              "Ребрендинг бренда и обновление фирменного стиля",
              "Разработка дизайна упаковки и предпечатная подготовка",
              "Брендирование шоурумов и корпоративного транспорта",
              "Организация съёмок продукта",
              "Разработка печатной рекламной продукции",
              "Планирование и запуск кампаний продвижения"
            ],
            images: [
              { src: "assets/img/orlauf-relief.jpg", alt: "Массажное кресло ORLAUF RELIEF" },
              { src: "assets/img/orlauf-treadmill.jpg", alt: "Беговая дорожка MIREON" },
              { src: "assets/img/orlauf-dieline.jpg", alt: "Развёртка упаковки ORLAUF RELIEF" },
              { src: "assets/img/orlauf-slide.jpg", alt: "Презентация характеристик кресла" },
              { src: "assets/img/orlauf-brochure.jpg", alt: "Брошюра ORLAUF: где нас найти, дистрибуция, сервис" },
              { src: "assets/img/orlauf-brochure2.jpg", alt: "Брошюра ORLAUF Wellness: мы всегда на связи" }
            ]
          },
          {
            name: "Sportflag",
            role: "кардиотренажеры",
            points: [
              "Разработка нейминга и айдентики",
              "Дизайн упаковки и предпечатная подготовка",
              "Работа с сайтом: структура, контент, карточки товаров",
              "Организация съёмок продукта",
              "Создание видео с использованием ИИ",
              "Запуск digital-рекламы"
            ],
            images: [
              { src: "assets/img/sportflag-brand.jpg", alt: "SPORTFLAG SKY-RUN: айдентика и цветовые спецификации" },
              { src: "assets/img/sportflag-box.jpg", alt: "SPORTFLAG CLOUD-RUN: дизайн упаковки" },
              { src: "assets/img/sportflag-site.jpg", alt: "Сайт sport-flag.ru: карточка товара DIVO-X" }
            ]
          },
          {
            name: "CENTICA",
            role: "массажные кресла",
            points: [
              "Разработка дизайна упаковки и развёртки коробки",
              "Разработка гарантийного талона",
              "Подготовка документов и фирменных материалов для покупателя"
            ],
            images: [
              { src: "assets/img/centica-warranty.jpg", alt: "Гарантийный талон CENTICA" },
              { src: "assets/img/centica-dieline.jpg", alt: "Развёртка упаковки CENTICA SIENA" }
            ]
          },
          {
            name: "KARBO",
            role: "вывод на рынок РФ и продвижение",
            points: [
              "Адаптация бренда и всех материалов для рынка РФ",
              "Influence-маркетинг: работа с авторами и публикациями",
              "Отбор выставок и фестивалей под задачи бренда",
              "Оформление площади и монтаж инсталляций",
              "Брендирование носителей: флаги, мерч, POS-материалы",
              "Представление бренда на площадке"
            ],
            images: [
              { src: "assets/img/karbo-flags.jpg", alt: "Флаги KARBO для выставки" },
              { src: "assets/img/karbo-tee-front.jpg", alt: "Футболка KARBO, вид спереди" },
              { src: "assets/img/karbo-tee-back.jpg", alt: "Футболка KARBO, вид сзади" },
              { src: "assets/img/karbo-branding.jpg", alt: "KARBO: флаги, гриль-кейс, POS-материалы" },
              { src: "assets/img/karbo-manual.jpg", alt: "KARBO: инструкция по эксплуатации" }
            ]
          },
          {
            name: "KEDA JUMP",
            role: "печатная продукция, дилеры, мероприятия",
            points: [
              "Разработка печатной продукции: флаеры, роллапы, каталоги",
              "Подготовка презентаций для дилеров",
              "Разработка инструкций по эксплуатации",
              "Организация участия в мероприятиях в посёлках с частной недвижимостью"
            ],
            images: []
          }
        ],

        metrics: [
          { v: "6", l: "брендов одновременно" },
          { v: "15", l: "человек в команде" },
          { v: "10+", l: "видов материалов" }
        ],
        note: "Замещала руководителя отдела на время отсутствия, участвовала в найме и вела подрядчиков: от типографий до съёмочных команд.",
        tags: ["портфель брендов", "упаковка", "выставки", "съёмки"]
      },
      {
        no: "02",
        title: "Digital-портфель агентства",
        subtitle: "пять брендов — пять разных стратегий",
        meta: [
          { k: "Компания", v: "FlowAgency · digital-агентство" },
          { k: "Роль", v: "интернет-маркетолог" },
          { k: "Годы", v: "2023–2024" }
        ],
        scope: "Кампании от 150 000 ₽ в месяц · первые результаты — на 2–4 месяц",
        challenge: "Пять клиентов из разных категорий — обжарка кофе, игровые ПК, посуда из дерева, батончики, товары для йоги — с разными бюджетами и разной зрелостью маркетинга. Универсальной кампании не существует.",
        approach: "Сначала данные: конкурентный анализ и портрет ЦА. Потом медиаплан. И только затем креативы и реклама. Поэтому цифры не «красивые», а воспроизводимые: каждую кампанию можно разложить по группам объявлений.",
        actions: [
          "Провела конкурентный анализ и определила ЦА по каждому проекту",
          "Собирала медиапланы и запускала Яндекс Директ, VK, MyTarget",
          "Внедрила коллтрекинг и ежедневную отчётность для клиентов",
          "Оптимизировала кампании: отсеивала нецелевые сегменты",
          "Запускала квизы, ретаргетинг и LAL по базам"
        ],
        results: [
          { name: "Aurora Coffee", metric: "+200%", note: "продажи за 4 месяца при бюджете 800 тыс. ₽; переделала сайт и сузила аудиторию по данным анализа" },
          { name: "GANZOR.RU", metric: "ROI 422%", note: "+120% лидов при бюджете в 5 раз меньше конкурентов" },
          { name: "Texturra", metric: "ROMI 250%", note: "окупаемость рекламы за год при бюджете от 500 тыс. ₽/мес; бренд стал лидером рынка по формам для пряников" },
          { name: "Vitaletto", metric: "+28 000", note: "подписчиков за 4 месяца вместе с SMM-командой; +40% упоминаний" },
          { name: "YOGIN / 4Yoga", metric: "ROI 585%", note: "+161 продажа в месяц при том же количестве лидов — за счёт точной настройки Директа" }
        ],
        metrics: [
          { v: "5", l: "клиентов" },
          { v: "585%", l: "лучший ROI" },
          { v: "−73%", l: "цена лида" }
        ],
        note: "Цифры — из отчётов по проектам, с периодами и бюджетами. Детали по каждой кампании готова показать на встрече.",
        tags: ["Яндекс Директ", "аналитика", "ROI", "SMM"]
      }
    ],
    shoots: {
      no: "03",
      label: "Съёмки",
      title: "Съёмки: от задания\nдо финальных кадров.",
      sub: "Собираю съёмочное задание, команду и локации, веду монтаж и отбор кадров. В кадре — артист Шаляпин на массажном кресле.",
      images: [
        { src: "assets/img/shoot-01.jpg", alt: "Съёмка продукта: студия и свет" },
        { src: "assets/img/shoot-03.jpg", alt: "Сборка оборудования перед съёмкой" },
        { src: "assets/img/shoot-02.jpg", alt: "Монитор видеонаблюдения на площадке" },
        { src: "assets/img/shoot-04.jpg", alt: "Съёмка: модель на степпере ORLAUF" },
        { src: "assets/img/shoot-05.jpg", alt: "Съёмка: модель на беговой дорожке ORLAUF" },
        { src: "assets/img/shoot-06.jpg", alt: "Съёмка: складная дорожка ORLAUF TERRA" }
      ]
    },
    expertiseHead: {
      no: "04",
      label: "Компетенции",
      title: "Что я делала\n",
      sub: "Блоки работы, за которые отвечала от начала до конца. Подробнее можно прочитать в резюме на hh"
    },
    expertise: [
      {
        title: "Бренд-стратегия",
        desc: "Позиционирование, ключевые сообщения, стратегия продвижения портфеля и отдельных брендов.",
        items: ["позиционирование", "стратегия", "УТП", "портфель"]
      },
      {
        title: "Запуск с нуля",
        desc: "От исследования аудитории и концепции до нейминга, айдентики и вывода бренда на рынок.",
        items: ["концепция", "нейминг", "товарный знак", "запуск"]
      },
      {
        title: "Айдентика и упаковка",
        desc: "Брендбуки и фирменный стиль с дизайнерами, макеты, брендирование товаров, контроль производства.",
        items: ["брендбук", "фирменный стиль", "упаковка", "предпечать"]
      },
      {
        title: "Сайты и digital",
        desc: "Брифы и ТЗ, структура и контент, Tilda и Flexbe, разработка с подрядчиками, запуск с нуля.",
        items: ["ТЗ", "Tilda", "Flexbe", "контент"]
      },
      {
        title: "Медиа и аналитика",
        desc: "Медиапланирование и бюджетирование, Яндекс Директ, VK, MyTarget, коллтрекинг, отчётность.",
        items: ["медиаплан", "Яндекс Директ", "коллтрекинг", "ROI"]
      },
      {
        title: "Команда, подрядчики, съёмки",
        desc: "Координация инхаус-команды и агентств, ТЗ дизайнерам и копирайтерам, организация съёмок и выставок.",
        items: ["команда 15 чел.", "ТЗ", "съёмки", "выставки"]
      }
    ],
    processHead: {
      no: "05",
      label: "Подход",
      title: "Четыре шага,\nкоторые не пропускаю"
    },
    process: [
      { step: "01", title: "Разбираюсь в рынке", desc: "Аудитория, конкуренты, спрос. Без этого не двигаюсь дальше — иначе получается красивый бренд ни о чём." },
      { step: "02", title: "Формулирую смысл", desc: "Одно обещание и три ключевых сообщения. Всё остальное должно из них следовать." },
      { step: "03", title: "Собираю материалы", desc: "Стиль, упаковка, сайт, реклама — единый tone of voice." },
      { step: "04", title: "Считаю результат", desc: "Сроки, подрядчики, проверка макетов, отчётность. Бренд существует, когда его можно купить, а вложения окупаются." }
    ],
    experienceHead: {
      no: "06",
      label: "Опыт",
      title: "Где и что делала"
    },
    experience: [
      {
        period: "2024 — 2026",
        company: "FitnessLook",
        role: "Бренд-менеджер",
        place: "Санкт-Петербург · спорттовары",
        bullets: [
          "Развитие и продвижение мультибрендового гипермаркета и 5 собственных брендов",
          "Полный цикл запуска брендов: позиционирование, нейминг, стиль, сайт, упаковка",
          "Организация съёмок и участие в выставках: от ТЗ до представительства",
          "Координация инхаус-команды из 15 человек и внешних подрядчиков",
          "Ежемесячная отчётность по всем рекламным направлениям"
        ]
      },
      {
        period: "2023 — 2024",
        company: "FlowAgency",
        role: "Интернет-маркетолог",
        place: "Санкт-Петербург · агентство",
        bullets: [
          "5 клиентов: Aurora Coffee, GANZOR.RU, Texturra, Vitaletto, YOGIN",
          "Стратегии, медиапланы и запуск рекламы в Яндекс Директе, VK, MyTarget",
          "Коллтрекинг, ежедневная и еженедельная отчётность",
          "Управление командой из 5 человек и ведение проектов по SMM и PPC"
        ]
      },
      {
        period: "2023",
        company: "КомпасЛидера",
        role: "Маркетолог (junior)",
        place: "Санкт-Петербург · проектная работа",
        bullets: [
          "Сувенирная продукция для трёх компаний: подрядчики, дизайн, договоры",
          "Аналитика рекламных кампаний и отчётность",
          "Организация мероприятий для клиентов"
        ]
      }
    ],
    education: {
      title: "Образование",
      items: [
        { v: "СПбГУПТД", l: "Реклама и связи с общественностью, бренд-менеджер · 2018–2023" },
        { v: "Академия Paper Planes", l: "Стратегический маркетинг · 2023" },
        { v: "Nioly Group «Дизайнерята»", l: "Веб- и моушн-дизайн · 2023" },
        { v: "Учебный центр «Статус»", l: "Photoshop, Illustrator · 2020" }
      ],
      toolsTitle: "Инструменты",
      tools: ["Figma", "Canva", "Tilda", "Flexbe", "CapCut", "Photoshop", "Illustrator", "Яндекс Директ", "VK", "MyTarget", "Яндекс Метрика", "ChatGPT", "Midjourney"]
    },
    lookingFor: {
      title: "Что ищу",
      items: [
        { k: "Роль", v: "бренд-менеджер / digital-маркетолог" },
        { k: "Формат", v: "офис, гибрид или удалёнка, Санкт-Петербург" },
        { k: "Задачи", v: "запуск брендов, позиционирование, упаковка, digital" },
        { k: "Переезд", v: "не готова; командировки — да" }
      ]
    },
    contact: {
      no: "07",
      label: "Контакты",
      title: "Давайте поговорим\nо вашем бренде",
      sub: "Открыта к предложениям и к разговору о задачах — даже если вакансия ещё не описана.",
      mail: "poncha9996@gmail.com",
      phone: "+7 (925) 828-24-41",
      links: [
        { label: "Telegram", v: "@Olesya_aprosicheva", href: "https://t.me/Olesya_aprosicheva" }
      ]
    },
    footer: "© 2026 Олеся Апросичева. Портфолио бренд-менеджера.",
    footerNote: "",
    pdfLabel: "PDF-версия портфолио"
  },

  en: {
    lang: "en",
    title: "Olesya Aprosicheva — Brand Manager",
    nav: [
      { href: "#about", label: "About" },
      { href: "#cases", label: "Cases" },
      { href: "#shoots", label: "Shoots" },
      { href: "#expertise", label: "Skills" },
      { href: "#experience", label: "Experience" },
      { href: "#contact", label: "Contact" }
    ],
    navCta: "Download PDF",
    hero: {
      kicker: "Portfolio · 2026",
      name: "Olesya\nAprosicheva",
      role: "brand manager",
      lead: "I build brands end to end:\nfrom meaning to packaging.",
      sub: "3 years in brand marketing and digital. Five in-house brands, a team of 15 and digital cases with 422–585% ROI: positioning, naming, packaging, websites, advertising and photo shoots.",
      ctaPrimary: "View cases",
      ctaSecondary: "Download PDF",
      meta: ["Saint Petersburg", "office / hybrid / remote", "open to offers"]
    },
    marquee: [
      "positioning", "naming", "identity", "brand book", "packaging",
      "Tilda websites", "Yandex Direct", "media planning", "photo shoots",
      "exhibitions", "brand launch", "ROI & reporting"
    ],
    about: {
      no: "01",
      label: "About",
      title: "A brand is when packaging,\nwebsite and ads say the same thing.",
      photo: "assets/img/portrait.jpg",
      text: [
        "Three years in brand marketing: retail and sporting goods, FMCG, events and a digital agency. I ran five in-house brands and a multi-brand hypermarket — from promotion strategy to the instruction leaflet in the box.",
        "I like projects built from scratch: define the positioning, agree with the print house, brief the designer, check the layout before print, and get the website live on time.",
        "I worked on both B2C and B2B: branded technical goods for suppliers, organised exhibition participation, prepared partner presentations, coordinated a team of 15 and covered for the head of department."
      ],
      facts: [
        { k: "Experience", v: "3 years 1 month" },
        { k: "Contexts", v: "retail · FMCG · events · digital" },
        { k: "Scale", v: "5 brands, team of 15" },
        { k: "Languages", v: "Russian, English B2" },
        { k: "Off work", v: "mountains, fantasy, puzzles and a Yorkie" }
      ]
    },
    stats: [
      { v: "3+", l: "years in brand marketing" },
      { v: "5", l: "brands in the portfolio" },
      { v: "15", l: "people in the in-house team" },
      { v: "585%", l: "ROI of the best case" }
    ],
    casesHead: {
      no: "02",
      label: "Cases",
      title: "Two projects\nwith measurable\nresults.",
      sub: "First — a portfolio of five brands at FitnessLook: from positioning to packaging, websites and exhibitions. Second — the agency's digital portfolio: five clients and ROI you can count."
    },
    cases: [
      {
        no: "01",
        title: "FitnessLook: six brands",
        subtitle: "the hypermarket and five in-house brands — the full cycle from meaning to shelf",
        meta: [
          { k: "Company", v: "FitnessLook · sporting goods hypermarket" },
          { k: "Role", v: "brand manager" },
          { k: "Years", v: "2024–2026" }
        ],
        scope: "Brand launch with a team — 3 weeks, solo — 2 months · photo shoot budget 50,000 – 700,000 RUB",
        challenge: "A multi-brand hypermarket of fitness and massage equipment plus five in-house brands — six brands at once. Each has its own audience and assortment, but promotion strategy had to be shared — so the brands do not compete with each other and speak differently, from one logic.",
        approach: "One brand, one promise. First we define what the brand stands for and who it is for; only then how it looks, where it lives and what it says. Five brands mean five different portfolio roles, not five identical logos.",
        actions: [
          "Developed the promotion strategy for the hypermarket and five in-house brands",
          "Researched the market, demand and competitors; tested marketing hypotheses",
          "Built the marketing calendar: campaigns, launches, seasonal activities",
          "Ran the full launch cycle: naming, identity, packaging, website, first campaign",
          "Organised photo shoots and exhibition participation — from brief to representing the company",
          "Coordinated an in-house team of 15 and external contractors"
        ],
        brandsTitle: "What I did per brand",
        brands: [
          {
            name: "ORLAUF",
            role: "massage and fitness equipment",
            points: [
              "Rebranding and refreshed visual identity",
              "Packaging design and prepress",
              "Showroom and corporate vehicle branding",
              "Product photo shoots",
              "Print advertising materials",
              "Planning and running promotion campaigns"
            ],
            images: [
              { src: "assets/img/orlauf-relief.jpg", alt: "ORLAUF RELIEF massage chair" },
              { src: "assets/img/orlauf-treadmill.jpg", alt: "MIREON treadmill" },
              { src: "assets/img/orlauf-dieline.jpg", alt: "ORLAUF RELIEF packaging dieline" },
              { src: "assets/img/orlauf-slide.jpg", alt: "Chair feature slide" },
              { src: "assets/img/orlauf-brochure.jpg", alt: "ORLAUF brochure: where to find, distribution, service" },
              { src: "assets/img/orlauf-brochure2.jpg", alt: "ORLAUF Wellness brochure: always in touch" }
            ]
          },
          {
            name: "Sportflag",
            role: "cardio equipment",
            points: [
              "Naming and identity",
              "Packaging design and prepress",
              "Website work: structure, content, product pages",
              "Product photo shoots",
              "AI-generated video",
              "Digital advertising"
            ],
            images: [
              { src: "assets/img/sportflag-brand.jpg", alt: "SPORTFLAG SKY-RUN: identity and colour specs" },
              { src: "assets/img/sportflag-box.jpg", alt: "SPORTFLAG CLOUD-RUN: packaging design" },
              { src: "assets/img/sportflag-site.jpg", alt: "sport-flag.ru: DIVO-X product page" }
            ]
          },
          {
            name: "CENTICA",
            role: "massage chairs",
            points: [
              "Packaging design and box dieline",
              "Warranty card design",
              "Customer documents and brand materials"
            ],
            images: [
              { src: "assets/img/centica-warranty.jpg", alt: "CENTICA warranty card" },
              { src: "assets/img/centica-dieline.jpg", alt: "CENTICA SIENA packaging dieline" }
            ]
          },
          {
            name: "KARBO",
            role: "market entry and promotion",
            points: [
              "Adapting the brand and all materials for the Russian market",
              "Influencer marketing: creators and publications",
              "Selecting exhibitions and festivals that fit the brand",
              "Venue design and installation assembly",
              "Branding touchpoints: flags, merch, POS materials",
              "Representing the brand on site"
            ],
            images: [
              { src: "assets/img/karbo-flags.jpg", alt: "KARBO exhibition flags" },
              { src: "assets/img/karbo-tee-front.jpg", alt: "KARBO T-shirt, front" },
              { src: "assets/img/karbo-tee-back.jpg", alt: "KARBO T-shirt, back" },
              { src: "assets/img/karbo-branding.jpg", alt: "KARBO: flags, grill case, POS materials" },
              { src: "assets/img/karbo-manual.jpg", alt: "KARBO user manual" }
            ]
          },
          {
            name: "KEDA JUMP",
            role: "print, dealers, events",
            points: [
              "Print materials: flyers, roll-ups, catalogues",
              "Dealer presentations",
              "User manuals",
              "Organising participation in events in private housing communities"
            ],
            images: []
          }
        ],

        metrics: [
          { v: "6", l: "brands at once" },
          { v: "15", l: "people in the team" },
          { v: "10+", l: "types of materials" }
        ],
        note: "Covered for the head of department during absence, took part in hiring and managed contractors: from print houses to film crews.",
        tags: ["brand portfolio", "packaging", "exhibitions", "photo shoots"]
      },
      {
        no: "02",
        title: "Agency digital portfolio",
        subtitle: "five brands — five different strategies",
        meta: [
          { k: "Company", v: "FlowAgency · digital agency" },
          { k: "Role", v: "digital marketer" },
          { k: "Years", v: "2023–2024" }
        ],
        scope: "Campaigns from 500,000 RUB per month · first results in 2–4 months",
        challenge: "Five clients from different categories — coffee roasting, gaming PCs, wooden kitchenware, snack bars, yoga gear — with different budgets and different marketing maturity. There is no one-size-fits-all campaign.",
        approach: "Data first: competitor analysis and audience portrait. Then the media plan. Only then creatives and ads. That is why the numbers are not “beautiful” but reproducible: every campaign breaks down by ad group.",
        actions: [
          "Ran competitor analysis and defined the audience for every project",
          "Built media plans and launched Yandex Direct, VK, MyTarget",
          "Introduced call tracking and daily client reporting",
          "Optimised campaigns: cut non-target segments",
          "Launched quizzes, retargeting and LAL by customer bases"
        ],
        results: [
          { name: "Aurora Coffee", metric: "+200%", note: "sales in 4 months on an 800K RUB budget; new website and a narrower audience based on analytics" },
          { name: "GANZOR.RU", metric: "ROI 422%", note: "+120% leads with a 5× smaller budget than competitors" },
          { name: "Texturra", metric: "ROMI 250%", note: "ad payback over a year, from 500K RUB per month; took the brand to market leadership in gingerbread boards" },
          { name: "Vitaletto", metric: "+28,000", note: "followers in 4 months together with the SMM team; +40% mentions" },
          { name: "YOGIN / 4Yoga", metric: "ROI 585%", note: "+161 sales per month at the same lead volume — sharper Yandex Direct targeting" }
        ],
        metrics: [
          { v: "5", l: "clients" },
          { v: "585%", l: "best ROI" },
          { v: "−73%", l: "cost per lead" }
        ],
        note: "Figures come from project reports, with periods and budgets. I am happy to walk through each campaign in detail.",
        tags: ["Yandex Direct", "analytics", "ROI", "SMM"]
      }
    ],
    shoots: {
      no: "03",
      label: "Photo shoots",
      title: "Shoots: from brief\nto final frames.",
      sub: "I put together the shoot brief, crew and locations, run editing and frame selection. In frame — the artist Shalyapin in a massage chair.",
      images: [
        { src: "assets/img/shoot-01.jpg", alt: "Product shoot: studio and light" },
        { src: "assets/img/shoot-03.jpg", alt: "Assembling equipment before the shoot" },
        { src: "assets/img/shoot-02.jpg", alt: "Video monitor on set" },
        { src: "assets/img/shoot-04.jpg", alt: "Shoot: model on the ORLAUF stepper" },
        { src: "assets/img/shoot-05.jpg", alt: "Shoot: model on the ORLAUF treadmill" },
        { src: "assets/img/shoot-06.jpg", alt: "Shoot: foldable ORLAUF TERRA treadmill" }
      ]
    },
    expertiseHead: {
      no: "04",
      label: "Skills",
      title: "What I do\nhands-on.",
      sub: "Not a list of courses — work streams I own end to end."
    },
    expertise: [
      {
        title: "Brand strategy",
        desc: "Positioning, key messages, promotion strategy for a portfolio and for individual brands.",
        items: ["positioning", "strategy", "USP", "portfolio"]
      },
      {
        title: "Launch from zero",
        desc: "From audience research and concept to naming, identity and market entry.",
        items: ["concept", "naming", "trademark", "launch"]
      },
      {
        title: "Identity & packaging",
        desc: "Brand books and identity with designers, layouts, product branding, production control.",
        items: ["brand book", "identity", "packaging", "prepress"]
      },
      {
        title: "Websites & digital",
        desc: "Briefs and specs, structure and content, Tilda and Flexbe, development with contractors.",
        items: ["specs", "Tilda", "Flexbe", "content"]
      },
      {
        title: "Media & analytics",
        desc: "Media planning and budgeting, Yandex Direct, VK, MyTarget, call tracking, reporting.",
        items: ["media plan", "Yandex Direct", "call tracking", "ROI"]
      },
      {
        title: "Team, contractors, shoots",
        desc: "Coordinating the in-house team and agencies, briefing designers and copywriters, running shoots and exhibitions.",
        items: ["team of 15", "briefs", "shoots", "exhibitions"]
      }
    ],
    processHead: {
      no: "05",
      label: "Approach",
      title: "Four steps\nI never skip."
    },
    process: [
      { step: "01", title: "Learn the market", desc: "Audience, competitors, demand. I do not move on without it — otherwise you get a beautiful brand about nothing." },
      { step: "02", title: "Define the meaning", desc: "One promise and three key messages. Everything else has to follow from them." },
      { step: "03", title: "Build the materials", desc: "Identity, pack, website, ads — from one meaning, not from five different ideas." },
      { step: "04", title: "Count the result", desc: "Deadlines, contractors, layout checks, reporting. A brand exists when you can buy it and the investment pays back." }
    ],
    experienceHead: {
      no: "06",
      label: "Experience",
      title: "Where I worked\nand what I did."
    },
    experience: [
      {
        period: "2024 — 2026",
        company: "FitnessLook",
        role: "Brand Manager",
        place: "Saint Petersburg · sporting goods",
        bullets: [
          "Development and promotion of a multi-brand hypermarket and 5 in-house brands",
          "Full brand launch cycle: positioning, naming, identity, website, packaging",
          "Photo shoots and exhibitions: from brief to representing the company",
          "Coordinated an in-house team of 15 and external contractors",
          "Monthly reporting across all advertising streams"
        ]
      },
      {
        period: "2023 — 2024",
        company: "FlowAgency",
        role: "Digital Marketer",
        place: "Saint Petersburg · agency",
        bullets: [
          "5 clients: Aurora Coffee, GANZOR.RU, Texturra, Vitaletto, YOGIN",
          "Strategies, media plans and ads in Yandex Direct, VK, MyTarget",
          "Call tracking, daily and weekly reporting",
          "Managed a team of 5 and led SMM and PPC projects"
        ]
      },
      {
        period: "2023",
        company: "KompasLidera",
        role: "Marketer (junior)",
        place: "Saint Petersburg · project work",
        bullets: [
          "Merchandise for three companies: contractors, design, contracts",
          "Campaign analytics and reporting",
          "Client event organisation"
        ]
      }
    ],
    education: {
      title: "Education",
      items: [
        { v: "SPbSUITD", l: "Advertising and PR, brand management · 2018–2023" },
        { v: "Paper Planes Academy", l: "Strategic marketing · 2023" },
        { v: "Nioly Group «Designeryata»", l: "Web and motion design · 2023" },
        { v: "Status training centre", l: "Photoshop, Illustrator · 2020" }
      ],
      toolsTitle: "Tools",
      tools: ["Figma", "Canva", "Tilda", "Flexbe", "CapCut", "Photoshop", "Illustrator", "Yandex Direct", "VK", "MyTarget", "Yandex Metrica", "ChatGPT", "Midjourney"]
    },
    lookingFor: {
      title: "What I am looking for",
      items: [
        { k: "Role", v: "brand manager / digital marketer" },
        { k: "Format", v: "office, hybrid or remote, Saint Petersburg" },
        { k: "Scope", v: "brand launches, positioning, packaging, digital" },
        { k: "Relocation", v: "not ready; business trips — yes" }
      ]
    },
    contact: {
      no: "07",
      label: "Contact",
      title: "Let’s talk\nabout your brand.",
      sub: "Open to offers and to a conversation about your challenges — even if the role is not written yet.",
      mail: "poncha9996@gmail.com",
      phone: "+7 (925) 828-24-41",
      links: [
        { label: "Telegram", v: "@Olesya_aprosicheva", href: "https://t.me/Olesya_aprosicheva" }
      ]
    },
    footer: "© 2026 Olesya Aprosicheva. Brand manager portfolio.",
    footerNote: "",
    pdfLabel: "Portfolio PDF"
  }
};

if (typeof module !== "undefined") { module.exports = PORTFOLIO; }
