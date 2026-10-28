# Car-Shop | Elecar

این پروژه یک نمونه‌ی صفحه‌فرود پیشرفته برای نمایش خودروهای برقی است. هدف اصلی، حفظ هویت بصری اصلی Elecar و هم‌زمان بهبود ساختار کدنویسی، سازمان‌دهی فایل‌ها، قابل‌فهم‌تر شدن CSS و JS، و آماده‌سازی برای مهاجرت آینده به React و Vite است.

## طراحی

🔗 طرح اولیه در Figma  
https://www.figma.com/design/MXqnlCWUwEngNeBlEXZy7p/Figma-Design-Responsive-car-website--Community-?t=ANHyHu8PXBvGjg6L-0

## ویژگی‌ها

- ساختار واکنش‌گرا برای دسکتاپ، تبلت و موبایل
- منوی موبایل با تعامل زنده
- بخش hero با خودرو و آمارهای مرتبط
- بخش‌های about، popular، featured و پیشنهاد ویژه
- نمایش برندها و فوتر پروژه
- استفاده از Google Fonts و فایل‌های محلی SVG/تصویر
- آماده‌سازی برای مهاجرت به معماری React در آینده

## فناوری‌ها

- HTML5
- CSS3 با Flexbox، Grid و media queries
- JavaScript مدرن و ماژول‌محور
- Google Fonts
- GitHub Pages برای استقرار

## ساختار پروژه

```text
Car-shop/
├── index.html
├── README.md
├── .gitignore
├── assets/
│   ├── img/
│   ├── svg/
│   ├── Design/
│   └── ...
├── styles/
│   ├── base/
│   ├── components/
│   ├── layout/
│   ├── sections/
│   ├── main.css
│   └── responsive.css
├── scripts/
│   ├── main.js
│   └── modules/
├── docs/
│   ├── architecture.md
│   └── react-migration-plan.md
├── DEMO.md
└── .git
```

## گزارش خط پایه

- ساختار فعلی پروژه در مدل استاتیک برای نمایش فروشگاه خودروهای الکتریکی آماده است.
- فایل CSS به دو بخش اصلی تقسیم شده بود و برای نگهداری حرفه‌ای باید به ماژول‌های منطقی شکسته شود.
- JavaScript فعلی برای ناوبری ساده است و به‌صورت ماژول‌محور درآورده نشده است.
- پروژه از نظر عملکرد پایه سالم است، اما برای توسعهٔ آینده نیاز به ساختار بهتر و مستندات دقیق دارد.

## اجرای محلی

پروژه یک پروژه استاتیک است و نصب وابستگی لازم ندارد.

1. کلون کردن مخزن:

```bash
git clone https://github.com/00mohammad/Car-shop.git
```

2. ورود به پوشه:

```bash
cd Car-shop
```

3. اجرای سرور محلی:

```bash
python -m http.server 8000
```

4. باز کردن لینک:

```text
http://localhost:8000/
```

## مستندات فنی

- [docs/architecture.md](./docs/architecture.md)
- [docs/react-migration-plan.md](./docs/react-migration-plan.md)

## دمو

**[مشاهده نسخه زنده](https://00mohammad.github.io/Car-shop/)**

## مخزن GitHub

[GitHub Repository](https://github.com/00mohammad/Car-shop)

## نویسنده

**Mohammad Honarmande**

- [GitHub](https://github.com/00mohammad)
- [LinkedIn](https://www.linkedin.com/in/mohammad-honarmande-62ab39343/)
