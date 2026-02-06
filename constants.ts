import { Translation, Language, Service } from './types';
import { Plane, Ship, Truck, Train, Store, FileText } from 'lucide-react';

export const TRANSLATIONS: Record<Language, Translation> = {
  UKR: {
    nav: {
      services: 'Послуги',
      transport: 'Транспорт',
      industries: 'Галузі',
      geography: 'Географія',
      company: 'Компанія',
      infoCenter: 'Інфо-центр',
      calculate: 'Розрахувати вартість',
    },
    hero: {
      badge: 'НАДІЙНИЙ ГЛОБАЛЬНИЙ ПАРТНЕР',
      titleStart: 'Логістика повного циклу:',
      titleEnd: 'від митниці до вашого складу',
      description: 'Надійні міжнародні рішення для вашого бізнесу з 2014 року. Експертиза в складних вантажних перевезеннях у понад 200 країн світу.',
      insurance: 'Повне страхування вантажу',
      guarantee: 'Гарантія термінів',
    },
    quote: {
      title: 'Швидкий розрахунок',
      from: 'ЗВІДКИ (ТОЧКА А)',
      to: 'КУДИ (ТОЧКА Б)',
      weight: 'ВАГА (КГ)',
      volume: 'ОБʼЄМ (М³)',
      type: 'ТИП ВАНТАЖУ',
      phone: 'ВАШ ТЕЛЕФОН',
      submit: 'Отримати розрахунок',
      disclaimer: 'Натискаючи "Отримати розрахунок", ви погоджуєтеся з нашою політикою конфіденційності.',
      types: {
        standard: 'Звичайний',
        dangerous: 'Небезпечний',
        perishable: 'Швидкопсувний',
      }
    },
    route: {
      title: 'Планування маршруту',
      subtitle: 'Розрахуйте відстань та час доставки між складом та відділенням за допомогою Google Maps AI.',
      origin: 'Адреса складу (Відправник)',
      destination: 'Пункт видачі / Відділення',
      calculate: 'Побудувати маршрут',
      results: 'Результати маршруту',
      viewMap: 'Відкрити на карті',
      calculating: 'Обчислення маршруту...',
      error: 'Не вдалося побудувати маршрут. Перевірте адреси.',
    },
    stats: {
      founded: 'НА РИНКУ ЛОГІСТИКИ',
      countries: 'КРАЇН СВІТУ',
      containers: 'КОНТЕЙНЕРІВ НА РІК',
      employees: 'СПІВРОБІТНИКІВ',
    },
    services: {
      title: 'Наша логістична екосистема',
      subtitle: 'Комплексні транспортні послуги, розроблені для сучасної глобальної торгівлі, що гарантують швидкість, безпеку та прозорість.',
      viewAll: 'Всі послуги',
      details: 'Детальніше',
    },
    footer: {
      description: 'Забезпечуємо досконалість у глобальній логістиці з 2014 року. Ваш міст між ринками та можливостями.',
      quickLinks: 'Швидкі посилання',
      offices: 'Офіси',
      news: 'Новини',
      rights: '© 2024 LogisticsUA. Всі права захищені.'
    }
  },
  ENG: {
    nav: {
      services: 'Services',
      transport: 'Transport',
      industries: 'Industries',
      geography: 'Geography',
      company: 'Company',
      infoCenter: 'Info Center',
      calculate: 'Get Quote',
    },
    hero: {
      badge: 'RELIABLE GLOBAL PARTNER',
      titleStart: 'Full Cycle Logistics:',
      titleEnd: 'from customs to your warehouse',
      description: 'Reliable international solutions for your business since 2014. Expertise in complex cargo transportation to over 200 countries.',
      insurance: 'Full cargo insurance',
      guarantee: 'On-time guarantee',
    },
    quote: {
      title: 'Quick Estimate',
      from: 'FROM (POINT A)',
      to: 'TO (POINT B)',
      weight: 'WEIGHT (KG)',
      volume: 'VOLUME (M³)',
      type: 'CARGO TYPE',
      phone: 'YOUR PHONE',
      submit: 'Get Calculation',
      disclaimer: 'By clicking "Get Calculation", you agree to our privacy policy.',
      types: {
        standard: 'Standard',
        dangerous: 'Dangerous',
        perishable: 'Perishable',
      }
    },
    route: {
      title: 'Route Planning',
      subtitle: 'Calculate delivery distance and time between warehouse and branch powered by Google Maps AI.',
      origin: 'Warehouse Address (Sender)',
      destination: 'Pick-up Point / Branch',
      calculate: 'Build Route',
      results: 'Route Results',
      viewMap: 'View on Map',
      calculating: 'Calculating route...',
      error: 'Could not calculate route. Please check addresses.',
    },
    stats: {
      founded: 'YEARS IN LOGISTICS',
      countries: 'COUNTRIES',
      containers: 'CONTAINERS/YEAR',
      employees: 'EMPLOYEES',
    },
    services: {
      title: 'Our Logistics Ecosystem',
      subtitle: 'Comprehensive transport services designed for modern global trade, ensuring speed, security, and transparency.',
      viewAll: 'All Services',
      details: 'Learn More',
    },
    footer: {
      description: 'Ensuring excellence in global logistics since 2014. Your bridge between markets and opportunities.',
      quickLinks: 'Quick Links',
      offices: 'Offices',
      news: 'News',
      rights: '© 2024 LogisticsUA. All rights reserved.'
    }
  }
};

export const SERVICES_DATA: Omit<Service, 'title' | 'description' | 'features'>[] = [
  {
    id: 'air',
    icon: Plane,
  },
  {
    id: 'sea',
    icon: Ship,
  },
  {
    id: 'road',
    icon: Truck,
  },
  {
    id: 'rail',
    icon: Train,
  },
  {
    id: 'amazon',
    icon: Store,
  },
  {
    id: 'customs',
    icon: FileText,
    highlight: true,
  }
];

export const SERVICE_CONTENT: Record<Language, Record<string, { title: string; description: string; features: string[] }>> = {
  UKR: {
    air: {
      title: 'Авіаперевезення',
      description: 'Швидка глобальна авіадоставка термінових вантажів прямими рейсами до понад 400 пунктів призначення по всьому світу.',
      features: ['Експрес-доставка', 'Чартерні рейси']
    },
    sea: {
      title: 'Морські перевезення',
      description: 'Економічно вигідні морські рішення для великих вантажів. Оптимізована маршрутизація для FCL та LCL контейнерів.',
      features: ['Від порту до порту', 'Митне оформлення']
    },
    road: {
      title: 'Автоперевезення',
      description: 'Гнучка доставка "від дверей до дверей" по всій Європі та Азії з GPS-моніторингом та температурним контролем.',
      features: ['Доставка останньої милі', 'Негабаритні вантажі']
    },
    rail: {
      title: 'Залізничні перевезення',
      description: 'Надійні трансконтинентальні залізничні послуги, що з\'єднують Азію та Європу за стабільним графіком та фіксованою ціною.',
      features: ['Екологічний транспорт', 'Масові перевезення']
    },
    amazon: {
      title: 'Доставка на Amazon FBA',
      description: 'Спеціалізована фулфілмент-доставка для продавців Amazon. Маркування, підготовка та фінальна відправка на склад.',
      features: ['Послуги преп-центру', 'Відповідність стандартам']
    },
    customs: {
      title: 'Митний брокер',
      description: 'Повний супровід документації та дотримання нормативних вимог для міжнародної торгівлі через складні кордони.',
      features: ['Дозволи на імпорт/експорт', 'Оптимізація податків']
    }
  },
  ENG: {
    air: {
      title: 'Air Freight',
      description: 'Fast global air delivery for urgent cargo with direct flights to over 400 destinations worldwide.',
      features: ['Express delivery', 'Charter flights']
    },
    sea: {
      title: 'Sea Freight',
      description: 'Cost-effective sea solutions for large cargo. Optimized routing for FCL and LCL containers.',
      features: ['Port to port', 'Customs clearance']
    },
    road: {
      title: 'Road Freight',
      description: 'Flexible door-to-door delivery across Europe and Asia with GPS monitoring and temperature control.',
      features: ['Last mile delivery', 'Oversized cargo']
    },
    rail: {
      title: 'Rail Freight',
      description: 'Reliable transcontinental rail services connecting Asia and Europe with stable schedules and fixed pricing.',
      features: ['Eco-friendly transport', 'Bulk shipments']
    },
    amazon: {
      title: 'Amazon FBA Delivery',
      description: 'Specialized fulfillment delivery for Amazon sellers. Labeling, preparation, and final dispatch to warehouse.',
      features: ['Prep-center services', 'Standards compliance']
    },
    customs: {
      title: 'Customs Broker',
      description: 'Full documentation support and regulatory compliance for international trade across complex borders.',
      features: ['Import/export permits', 'Tax optimization']
    }
  }
};