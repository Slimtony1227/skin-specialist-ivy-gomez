export interface NavLink {
  label: string;
  href: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
}

export interface ScheduleItem {
  day: string;
  hours: string;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  AVAILABILITY = 'availability',
  GALLERY = 'gallery',
  CONTACT = 'contact',
}