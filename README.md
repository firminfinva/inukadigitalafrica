# Future Forge Academy

Create a modern professional training academy website for a company that teaches courses in:

- Business Management

- Artificial Intelligence

- Technology & Digital Skills

- Leadership

- Entrepreneurship

- Office & Enterprise Tools

- Communication Skills

- Data Analysis

- Cybersecurity

- Software Development

The company offers:

- Online and physical training

- Corporate training for enterprises and government institutions

- Personalized learning programs

- Certificates after course completion

- Custom course requests where clients can suggest what they want to learn

Style:

- Modern startup aesthetic

- Clean and premium UI

- Professional but innovative

- Inspired by Apple, Coursera, Notion, and Stripe

- Dark/light mode support

- Responsive on mobile and desktop

Main sections:

1. Hero Section

   - Strong headline

   - CTA buttons

   - Modern illustration related to AI and education

2. About Us

   - Explain mission and vision

   - Focus on empowering professionals and youth with future-ready skills

3. Course Categories

   - Cards for each category

   - Hover animations

   - Course details and duration

4. Custom Learning Request

   - A smart form where users can write:

     "What do you want to learn?"

   - Include company name, number of employees, preferred training mode, and objectives

5. Corporate Training

   - Services for companies, NGOs, and government institutions

6. Why Choose Us

   - Expert trainers

   - Practical learning

   - AI-powered education

   - Flexible schedules

   - Certifications

7. Testimonials

8. Pricing / Plans

9. FAQ Section

10. Contact Section

   - WhatsApp

   - Email

   - Social media

   - Contact form

Features:

- Admin dashboard ready structure

- Student registration/login

- Course booking system

- AI chatbot assistant

- Newsletter subscription

- Multi-language support (French & English)

Technical:

- Use Next.js + Tailwind CSS

- Smooth animations with Framer Motion

- Modern cards and gradients

- SEO optimized

- Accessible design

- Fast loading

Color palette:

- Deep blue

- White

- Black

- Soft purple accents

The website should feel like a futuristic African tech education company preparing people for the future of work.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://inukadigitalafrica.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2ad852c4-fc5e-493c-a585-26daf46ebaa5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Local Testimonials Database

Testimonials are loaded from PostgreSQL. The entire testimonials section stays hidden until the database contains at least one published row.

1. Copy `.env.example` to `.env.local`.
2. Start the local database with `docker compose up -d`.
3. Start the app with `npm run dev`.

The first database startup creates the `testimonials` table with no records. To add the example testimonial, run:

```sh
docker compose exec -T db psql -U inuka -d inuka_digital_africa < db/seed.example.sql
```

To stop PostgreSQL while keeping its data, run `docker compose down`. To delete the local database and start over, run `docker compose down -v`.
