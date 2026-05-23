export interface Site {
  id: number;
  title: string;
  slogan: string;
  description: string;
  logoText: string;
  heroTitle: string;
  heroSubtitle: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaLinkText: string;
  ctaLink: string;
  footerText: string;
  footerAuthor: string;
  footerAuthorLink: string;
}
export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  avatar: string;
  role: "user" | "admin" | string; // اگر نقش‌های بیشتر داری می‌تونی union اضافه کنی
  createdAt: string; // ISO date string
}
export interface Auth {
  id: number;
  isLoggedIn: boolean;
  currentUserId: number | null;
  token: string | null;
}
export interface MenuItem {
  id: number;
  title: string;
  link: string;
  order: number;
  parentId: number | null;
}
export interface Hero {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  priceLabel: string;
  image: string;
  liked: boolean;
  stock: number;
  category: string; // در صورت محدود بودن مقادیر می‌توان union تعریف کرد
  description: string;
  createdAt: string; // ISO date string
}
export interface Favorite {
  id: number;
  userId: number;
  productId: number;
  createdAt: string; // ISO date string
}

export interface CartItem {
  id: number;
  userId: number;
  productId: number;
  product:Product;
  quantity: number;
  createdAt: string; // ISO date string
}

export interface OrderItem {
  productId: number;
  title: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: number;
  userId: number;
  items: OrderItem[];
  total: number;
  status: "pending" | "completed" | "cancelled" | string; // بر اساس وضعیت‌های ممکن پروژه می‌تونی اصلاح کنی
  paymentStatus: "unpaid" | "paid" | "refunded" | string;
  createdAt: string; // ISO date string
}
export interface Notification {
  id: number;
  type: "discount" | "info" | "alert" | string; // می‌تونی بر اساس نیاز اصلاح کنی
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string; // ISO date string
}
export interface Settings {
  theme: "light" | "dark" | string;
  currency: string;
  rtl: boolean;
  lang: string;
}
export interface RootData {
  site: Site;
  users: User[];
  auth: Auth;
  menu: MenuItem[];
  hero: Hero;
  products: Product[];
  favorites: Favorite[];
  cart: CartItem[];
  orders: Order[];
  notifications: Notification[];
  settings: Settings;
}
