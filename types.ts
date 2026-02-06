import { LucideIcon } from 'lucide-react';

export type Language = 'UKR' | 'ENG';

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  highlight?: boolean;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Translation {
  nav: {
    services: string;
    transport: string;
    industries: string;
    geography: string;
    company: string;
    infoCenter: string;
    calculate: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleEnd: string;
    description: string;
    insurance: string;
    guarantee: string;
  };
  quote: {
    title: string;
    from: string;
    to: string;
    weight: string;
    volume: string;
    type: string;
    phone: string;
    submit: string;
    disclaimer: string;
    types: {
      standard: string;
      dangerous: string;
      perishable: string;
    }
  };
  route: {
    title: string;
    subtitle: string;
    origin: string;
    destination: string;
    calculate: string;
    results: string;
    viewMap: string;
    calculating: string;
    error: string;
  };
  stats: {
    founded: string;
    countries: string;
    containers: string;
    employees: string;
  };
  services: {
    title: string;
    subtitle: string;
    viewAll: string;
    details: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    offices: string;
    news: string;
    rights: string;
  }
}