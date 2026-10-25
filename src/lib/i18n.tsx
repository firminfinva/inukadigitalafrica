"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "en";

type Dict = Record<string, { fr: string; en: string }>;

export const dict = {
  // Nav
  "nav.home": { fr: "Accueil", en: "Home" },
  "nav.courses": { fr: "Formations", en: "Courses" },
  "nav.corporate": { fr: "Entreprises", en: "Corporate" },
  "nav.custom": { fr: "Sur mesure", en: "Custom Learning" },
  "nav.about": { fr: "À propos", en: "About" },
  "nav.contact": { fr: "Contact", en: "Contact" },
  "nav.signin": { fr: "Connexion", en: "Sign in" },
  "nav.cta": { fr: "Commencer", en: "Get started" },

  // Hero
  "hero.badge": { fr: "Formations propulsées par l'IA pour le futur du travail", en: "AI-powered training for the future of work" },
  "hero.title.1": { fr: "Des compétences qui font avancer les", en: "Skills that move" },
  "hero.title.careers": { fr: "carrières", en: "careers" },
  "hero.title.and": { fr: "et les", en: "and" },
  "hero.title.orgs": { fr: "organisations", en: "organizations" },
  "hero.title.end": { fr: ".", en: " forward." },
  "hero.subtitle": {
    fr: "Inuka Digital Africa propose des formations pratiques de haut niveau en IA, leadership, data, cybersécurité et plus encore — pour les particuliers, les équipes et les institutions en Afrique et au-delà.",
    en: "Inuka Digital Africa delivers world-class, practical training in AI, leadership, data, cybersecurity and more — for individuals, teams, and institutions across Africa and beyond.",
  },
  "hero.explore": { fr: "Explorer les formations", en: "Explore courses" },
  "hero.custom": { fr: "Demander une formation sur mesure", en: "Request custom training" },
  "hero.stat.tracks": { fr: "Parcours", en: "Course tracks" },
  "hero.stat.completion": { fr: "Taux de réussite", en: "Completion rate" },
  "hero.stat.partners": { fr: "Entreprises partenaires", en: "Partner companies" },
  "hero.live": { fr: "Cohorte en direct", en: "Live cohort" },
  "hero.live.title": { fr: "L'IA pour les professionnels", en: "AI for Professionals" },
  "hero.live.starts": { fr: "Démarre lundi prochain", en: "Starts next Monday" },

  // About
  "about.eyebrow": { fr: "À propos", en: "About us" },
  "about.title": { fr: "Donner aux talents les moyens de réussir le futur du travail.", en: "Empowering people to thrive in the future of work." },
  "about.subtitle": {
    fr: "Inuka Digital Africa a été fondée pour combler l'écart entre les technologies en évolution rapide et les talents qui font avancer les organisations. Nous concevons des programmes pour les professionnels, les jeunes et les institutions prêts à mener ce qui vient.",
    en: "Inuka Digital Africa was built to close the gap between fast-moving technology and the talent that drives organizations forward. We design programs for professionals, youth, and institutions ready to lead what comes next.",
  },
  "about.read": { fr: "Lire notre histoire", en: "Read our story" },
  "about.b1.t": { fr: "Notre mission", en: "Our mission" },
  "about.b1.d": { fr: "Former 1 million d'apprenants aux compétences du futur d'ici 2030.", en: "Equip 1 million learners with future-ready skills by 2030." },
  "about.b2.t": { fr: "Notre vision", en: "Our vision" },
  "about.b2.d": { fr: "Une Afrique où le talent mène l'innovation mondiale.", en: "An Africa where talent leads global innovation." },
  "about.b3.t": { fr: "Notre méthode", en: "Our method" },
  "about.b3.d": { fr: "Pratique, par projets, personnalisée par l'IA.", en: "Practical, project-based, AI-personalized." },
  "about.b4.t": { fr: "Notre promesse", en: "Our promise" },
  "about.b4.d": { fr: "Des programmes qui se traduisent en résultats concrets.", en: "Programs that translate to real outcomes." },
  "about.values": { fr: "Valeurs", en: "Values" },
  "about.values.d": { fr: "Excellence, accessibilité, pragmatisme et curiosité.", en: "Excellence, accessibility, practicality, and curiosity." },

  // Categories
  "cat.eyebrow": { fr: "Catégories de formations", en: "Course categories" },
  "cat.title": { fr: "Des programmes sur les compétences qui comptent le plus", en: "Programs across the skills that matter most" },
  "cat.subtitle": { fr: "De l'IA au leadership — des cursus pratiques conçus par des experts du secteur.", en: "From AI to leadership — practical curricula designed by industry experts." },
  "cat.browse": { fr: "Voir toutes les formations", en: "Browse all courses" },
  "cat.view": { fr: "Voir", en: "View" },
  "cat.modules": { fr: "modules", en: "modules" },
  "cat.weeks": { fr: "semaines", en: "weeks" },
  "cat.allLevels": { fr: "Tous niveaux", en: "All levels" },
  "cat.beginner": { fr: "Débutant", en: "Beginner" },
  "cat.intermediate": { fr: "Intermédiaire", en: "Intermediate" },
  "cat.midSenior": { fr: "Confirmé → Senior", en: "Mid → Senior" },
  "cat.beginnerInter": { fr: "Débutant → Intermédiaire", en: "Beginner → Intermediate" },
  "cat.beginnerAdv": { fr: "Débutant → Avancé", en: "Beginner → Advanced" },

  // Categories list
  "c.business.t": { fr: "Management d'entreprise", en: "Business Management" },
  "c.business.d": { fr: "Stratégie, opérations et leadership moderne pour les organisations en croissance.", en: "Strategy, operations, and modern leadership for growing organizations." },
  "c.ai.t": { fr: "Intelligence Artificielle", en: "Artificial Intelligence" },
  "c.ai.d": { fr: "Des fondamentaux à l'IA appliquée : LLMs, agents et déploiement réel.", en: "From foundations to applied AI: LLMs, agents, and real-world deployment." },
  "c.tech.t": { fr: "Technologie & compétences numériques", en: "Technology & Digital Skills" },
  "c.tech.d": { fr: "Maîtrisez la boîte à outils numérique de tout professionnel moderne.", en: "Master the digital toolkit every modern professional needs." },
  "c.lead.t": { fr: "Leadership", en: "Leadership" },
  "c.lead.d": { fr: "Diriger des équipes avec clarté, empathie et exécution décisive.", en: "Lead teams with clarity, empathy, and decisive execution." },
  "c.entre.t": { fr: "Entrepreneuriat", en: "Entrepreneurship" },
  "c.entre.d": { fr: "Valider, construire et faire croître des projets de l'idée à la traction.", en: "Validate, build, and grow ventures from idea to traction." },
  "c.office.t": { fr: "Outils bureautiques & entreprise", en: "Office & Enterprise Tools" },
  "c.office.d": { fr: "Excel, Google Workspace, Notion et stacks de productivité modernes.", en: "Excel, Google Workspace, Notion, and modern productivity stacks." },
  "c.comm.t": { fr: "Communication", en: "Communication Skills" },
  "c.comm.d": { fr: "Parler, écrire et présenter avec impact dans toute situation.", en: "Speak, write, and present with influence in any room." },
  "c.data.t": { fr: "Analyse de données", en: "Data Analysis" },
  "c.data.d": { fr: "Des tableurs au SQL et Python — transformez les données en décisions.", en: "From spreadsheets to SQL and Python — turn data into decisions." },
  "c.cyber.t": { fr: "Cybersécurité", en: "Cybersecurity" },
  "c.cyber.d": { fr: "Défendre les systèmes, auditer les risques et protéger ce qui compte.", en: "Defend systems, audit risk, and protect what matters most." },
  "c.dev.t": { fr: "Développement logiciel", en: "Software Development" },
  "c.dev.d": { fr: "Ingénierie full-stack avec frameworks modernes et bonnes pratiques.", en: "Full-stack engineering with modern frameworks and best practices." },

  // Custom learning
  "cl.eyebrow": { fr: "Formation sur mesure", en: "Custom learning" },
  "cl.title": { fr: "Dites-nous ce que vous voulez apprendre", en: "Tell us what you want to learn" },
  "cl.subtitle": { fr: "Nous concevrons un programme adapté à vous, votre équipe ou votre institution.", en: "We'll design a tailored program for you, your team, or your institution." },
  "cl.smart": { fr: "Demande de formation intelligente", en: "Smart learning request" },
  "cl.goal": { fr: "Que voulez-vous apprendre ?", en: "What do you want to learn?" },
  "cl.goal.ph": { fr: "Ex. Former nos 30 commerciaux à l'IA appliquée pour mieux comprendre les clients...", en: "E.g. Train our 30 sales managers on applied AI for customer insights..." },
  "cl.name": { fr: "Votre nom", en: "Your name" },
  "cl.email": { fr: "Email professionnel", en: "Work email" },
  "cl.company": { fr: "Entreprise", en: "Company" },
  "cl.company.ph": { fr: "Entreprise / Institution", en: "Company / Institution" },
  "cl.learners": { fr: "Nombre d'apprenants", en: "Number of learners" },
  "cl.learners.ph": { fr: "Sélectionnez", en: "Select range" },
  "cl.learners.me": { fr: "Moi seulement", en: "Just me" },
  "cl.mode": { fr: "Mode préféré", en: "Preferred mode" },
  "cl.mode.ph": { fr: "Sélectionnez le mode", en: "Select mode" },
  "cl.mode.online": { fr: "En ligne", en: "Online" },
  "cl.mode.inperson": { fr: "Présentiel", en: "In-person" },
  "cl.mode.hybrid": { fr: "Hybride", en: "Hybrid" },
  "cl.timeline": { fr: "Délai", en: "Timeline" },
  "cl.timeline.ph": { fr: "Sélectionnez le délai", en: "Select timeline" },
  "cl.timeline.asap": { fr: "Dès que possible", en: "ASAP" },
  "cl.timeline.month": { fr: "Sous 1 mois", en: "Within 1 month" },
  "cl.timeline.quarter": { fr: "Ce trimestre", en: "This quarter" },
  "cl.timeline.exploring": { fr: "Je me renseigne", en: "Just exploring" },
  "cl.objectives": { fr: "Objectifs et indicateurs de succès", en: "Objectives & success metrics" },
  "cl.objectives.ph": { fr: "Quels résultats feraient de ce programme un succès ?", en: "What outcomes would make this program a success?" },
  "cl.send": { fr: "Envoyer la demande", en: "Send request" },
  "cl.sending": { fr: "Envoi...", en: "Sending..." },
  "cl.toast": { fr: "Demande reçue ! Notre équipe vous contactera sous 24 heures.", en: "Request received! Our team will reach out within 24 hours." },

  // Corporate CTA
  "corp.title.1": { fr: "Des programmes de formation conçus pour les", en: "Training programs built for" },
  "corp.title.2": { fr: "organisations", en: "organizations" },
  "corp.subtitle": {
    fr: "Des équipes de 10 personnes aux déploiements nationaux, nous proposons des programmes axés sur les résultats avec un accompagnement dédié, une facturation sécurisée et un reporting détaillé.",
    en: "From 10-person teams to nationwide rollouts, we deliver outcomes-focused programs with dedicated success management, secure invoicing, and detailed reporting.",
  },
  "corp.proposal": { fr: "Demander une proposition", en: "Request a proposal" },
  "corp.explore": { fr: "Explorer les offres entreprises", en: "Explore corporate" },
  "corp.ent.t": { fr: "Entreprises", en: "Enterprises" },
  "corp.ent.d": { fr: "Faites monter en compétences vos équipes à grande échelle.", en: "Upskill teams at scale with measurable impact." },
  "corp.gov.t": { fr: "Gouvernements", en: "Government" },
  "corp.gov.d": { fr: "Programmes de renforcement des capacités pour les institutions publiques.", en: "Capacity-building programs for public institutions." },
  "corp.ngo.t": { fr: "ONG", en: "NGOs" },
  "corp.ngo.d": { fr: "Programmes alignés sur votre mission, livraison flexible.", en: "Mission-aligned programs with flexible delivery." },

  // Why
  "why.eyebrow": { fr: "Pourquoi Inuka", en: "Why Inuka" },
  "why.title": { fr: "Conçu pour produire des résultats concrets", en: "Designed to deliver real outcomes" },
  "why.1.t": { fr: "Formateurs experts", en: "Expert trainers" },
  "why.1.d": { fr: "Des praticiens du secteur avec un parcours éprouvé.", en: "Industry practitioners with proven track records." },
  "why.2.t": { fr: "Apprentissage pratique", en: "Practical learning" },
  "why.2.d": { fr: "Vrais projets, vrais outils, vrais résultats.", en: "Real projects, real tools, real outcomes." },
  "why.3.t": { fr: "Éducation propulsée par l'IA", en: "AI-powered education" },
  "why.3.d": { fr: "Parcours personnalisés et feedback intelligent.", en: "Personalized pathways and intelligent feedback." },
  "why.4.t": { fr: "Horaires flexibles", en: "Flexible schedules" },
  "why.4.d": { fr: "En ligne, hybride ou sur site selon votre rythme.", en: "Online, hybrid, or on-site to fit your life." },
  "why.5.t": { fr: "Certificats reconnus", en: "Recognized certificates" },
  "why.5.d": { fr: "Des diplômes que les employeurs valorisent.", en: "Earn credentials employers actually trust." },
  "why.6.t": { fr: "Pensé pour l'Afrique et au-delà", en: "Built for Africa & beyond" },
  "why.6.d": { fr: "Pertinent localement, connecté mondialement.", en: "Locally relevant, globally connected programs." },

  // Testimonials
  "test.eyebrow": { fr: "Témoignages", en: "Testimonials" },
  "test.title": { fr: "La confiance d'apprenants et d'équipes ambitieux", en: "Trusted by ambitious learners and teams" },
  "test.1.q": { fr: "Le parcours IA a transformé la façon dont mon équipe livre. Pratique, intense et magnifiquement délivré.", en: "The AI track changed how my team ships. Practical, intense, and beautifully delivered." },
  "test.1.r": { fr: "Responsable Produit, FinSmart", en: "Product Lead, FinSmart" },
  "test.2.q": { fr: "Nous avons formé 120 employés en 3 mois. Le programme entreprise a été impeccable de A à Z.", en: "We trained 120 employees in 3 months. The corporate program was flawless end-to-end." },
  "test.2.r": { fr: "Directeur RH, Helios Group", en: "HR Director, Helios Group" },
  "test.3.q": { fr: "J'ai commencé par la cohorte entrepreneuriat et lancé ma marque 8 semaines plus tard.", en: "I started with the entrepreneurship cohort and launched my brand 8 weeks later." },
  "test.3.r": { fr: "Fondatrice, NovaWear", en: "Founder, NovaWear" },

  // Pricing
  "pr.eyebrow": { fr: "Tarifs", en: "Pricing" },
  "pr.title": { fr: "Des plans simples pour chaque étape", en: "Simple plans for every stage" },
  "pr.subtitle": { fr: "Changez ou annulez à tout moment. Plans entreprise sur mesure.", en: "Switch or cancel anytime. Enterprise plans built for your needs." },
  "pr.popular": { fr: "Le plus populaire", en: "Most popular" },
  "pr.month": { fr: "/ mois", en: "/ month" },
  "pr.ind.n": { fr: "Individuel", en: "Individual" },
  "pr.ind.d": { fr: "Pour les apprenants qui construisent les compétences du futur.", en: "For learners building future-ready skills." },
  "pr.ind.cta": { fr: "Commencer à apprendre", en: "Start learning" },
  "pr.ind.f1": { fr: "Accès à toutes les formations en autonomie", en: "Access to all self-paced courses" },
  "pr.ind.f2": { fr: "Certificats de complétion", en: "Certificates of completion" },
  "pr.ind.f3": { fr: "Communauté & questions aux mentors", en: "Community & mentor Q&A" },
  "pr.ind.f4": { fr: "Annulez quand vous voulez", en: "Cancel anytime" },
  "pr.pro.n": { fr: "Pro", en: "Pro" },
  "pr.pro.d": { fr: "Cohortes en direct, projets et coaching individuel.", en: "Live cohorts, projects, and 1:1 coaching." },
  "pr.pro.cta": { fr: "Passer à Pro", en: "Go Pro" },
  "pr.pro.f1": { fr: "Tout ce qui est inclus dans Individuel", en: "Everything in Individual" },
  "pr.pro.f2": { fr: "Sessions de cohorte en direct", en: "Live cohort sessions" },
  "pr.pro.f3": { fr: "Crédits de coaching 1:1", en: "1:1 coaching credits" },
  "pr.pro.f4": { fr: "Revue de projet capstone", en: "Capstone project review" },
  "pr.pro.f5": { fr: "Support prioritaire", en: "Priority support" },
  "pr.ent.n": { fr: "Entreprise", en: "Enterprise" },
  "pr.ent.p": { fr: "Sur devis", en: "Custom" },
  "pr.ent.d": { fr: "Programmes personnalisés pour équipes et institutions.", en: "Tailored programs for teams and institutions." },
  "pr.ent.cta": { fr: "Parler à l'équipe", en: "Talk to sales" },
  "pr.ent.f1": { fr: "Parcours d'apprentissage personnalisés", en: "Custom learning paths" },
  "pr.ent.f2": { fr: "Livraison sur site & en ligne", en: "On-site & online delivery" },
  "pr.ent.f3": { fr: "Responsable de succès dédié", en: "Dedicated success manager" },
  "pr.ent.f4": { fr: "Reporting & analytics", en: "Reporting & analytics" },
  "pr.ent.f5": { fr: "SSO & facturation", en: "SSO & invoicing" },

  // FAQ
  "faq.eyebrow": { fr: "FAQ", en: "FAQ" },
  "faq.title": { fr: "Vos questions, nos réponses", en: "Questions, answered" },
  "faq.q1": { fr: "Les formations sont-elles disponibles en ligne et en présentiel ?", en: "Are courses available online and in person?" },
  "faq.a1": { fr: "Oui — chaque programme est proposé en ligne, en présentiel ou en format hybride.", en: "Yes — every program runs in online, in-person, or hybrid formats. Choose what fits your team." },
  "faq.q2": { fr: "Les apprenants reçoivent-ils des certificats ?", en: "Do learners receive certificates?" },
  "faq.a2": { fr: "Oui. Chaque formation complétée donne droit à un certificat reconnu Inuka Digital Africa.", en: "Yes. Every completed course awards a recognized Inuka Digital Africa certificate of completion." },
  "faq.q3": { fr: "Pouvez-vous concevoir un programme sur mesure pour mon entreprise ?", en: "Can you build a custom program for my company?" },
  "faq.a3": { fr: "Absolument. Utilisez notre formulaire de demande sur mesure et un stratège concevra un programme adapté.", en: "Absolutely. Use our Custom Learning request form and a strategist will design a program tailored to your goals." },
  "faq.q4": { fr: "Travaillez-vous avec les ONG et institutions gouvernementales ?", en: "Do you work with government and NGO institutions?" },
  "faq.a4": { fr: "Oui. Nous livrons des programmes pour entreprises, ONG et organismes publics, avec facturation et reporting.", en: "Yes. We deliver training programs for enterprises, NGOs, and government bodies, with secure invoicing and reporting." },
  "faq.q5": { fr: "Quelles langues sont supportées ?", en: "Which languages are supported?" },
  "faq.a5": { fr: "Nos programmes phares sont délivrés en français et en anglais, avec d'autres langues à venir.", en: "Our flagship programs are delivered in English and French, with more languages coming soon." },
  "faq.q6": { fr: "Comment l'IA est-elle utilisée dans l'apprentissage ?", en: "How is AI used in the learning experience?" },
  "faq.a6": { fr: "L'IA personnalise votre parcours, suggère des projets et donne des retours intelligents.", en: "AI personalizes your path, suggests projects, and gives intelligent feedback on submissions." },

  // Final CTA
  "fcta.title": { fr: "Prêt·e à construire vos compétences du futur ?", en: "Ready to build your future skills?" },
  "fcta.sub": { fr: "Rejoignez des milliers d'apprenants et d'organisations qui grandissent avec Inuka Digital Africa.", en: "Join thousands of learners and organizations growing with Inuka Digital Africa." },
  "fcta.browse": { fr: "Voir les formations", en: "Browse courses" },
  "fcta.contact": { fr: "Nous contacter", en: "Contact us" },

  // Footer
  "footer.tagline": { fr: "Donner aux professionnels et aux jeunes les compétences du futur. En ligne, en présentiel et conçu pour la prochaine décennie de travail.", en: "Empowering professionals and youth with future-ready skills. Online, in person, and built for the next decade of work." },
  "footer.subscribe": { fr: "S'abonner", en: "Subscribe" },
  "footer.explore": { fr: "Explorer", en: "Explore" },
  "footer.reach": { fr: "Nous joindre", en: "Reach us" },
  "footer.rights": { fr: "Tous droits réservés.", en: "All rights reserved." },

  // Contact page
  "ct.eyebrow": { fr: "Contact", en: "Contact" },
  "ct.title": { fr: "Discutons", en: "Let's talk" },
  "ct.subtitle": { fr: "Contactez-nous pour les formations, les programmes entreprises ou les partenariats.", en: "Reach out about courses, corporate programs, or partnerships." },
  "ct.email": { fr: "Email", en: "Email" },
  "ct.whatsapp": { fr: "WhatsApp", en: "WhatsApp" },
  "ct.follow": { fr: "Suivez-nous", en: "Follow us" },
  "ct.name": { fr: "Nom", en: "Name" },
  "ct.subject": { fr: "Sujet", en: "Subject" },
  "ct.message": { fr: "Message", en: "Message" },
  "ct.send": { fr: "Envoyer le message", en: "Send message" },
  "ct.toast": { fr: "Message envoyé ! Nous vous répondrons sous 24 heures.", en: "Message sent! We'll get back to you within 24 hours." },

  // Pages
  "page.courses.t": { fr: "Trouvez le programme qui vous correspond", en: "Find the right program for you" },
  "page.courses.s": { fr: "Chaque parcours combine sessions en direct, projets et feedback IA.", en: "Each track blends live sessions, projects, and AI-powered feedback." },
  "page.courses.eye": { fr: "Toutes les formations", en: "All courses" },

  "page.corp.eye": { fr: "Formation entreprise", en: "Corporate training" },
  "page.corp.t": { fr: "Faites monter en compétences votre organisation, de A à Z", en: "Upskill your organization, end-to-end" },
  "page.corp.s": { fr: "De l'évaluation à la livraison et au reporting — des programmes que vos équipes terminent.", en: "From assessment to delivery and reporting — we run programs your teams actually finish." },
  "page.corp.eye2": { fr: "Pourquoi les équipes nous choisissent", en: "Why teams choose us" },
  "page.corp.t2": { fr: "Centré sur les résultats, magnifiquement livré", en: "Outcomes-focused, beautifully delivered" },

  "page.custom.t": { fr: "Concevez votre propre parcours d'apprentissage", en: "Design your own learning journey" },
  "page.custom.s": { fr: "Partagez vos objectifs et nous concevrons un programme adapté à votre équipe, votre délai et vos résultats.", en: "Share your goals and we'll craft a program that fits your team, timeline, and outcomes." },

  "page.about.t": { fr: "Construire la main-d'œuvre future de l'Afrique, une compétence à la fois", en: "Building Africa's future workforce, one skill at a time" },
  "page.about.s": { fr: "Inuka Digital Africa a été fondée avec une conviction : la formation de classe mondiale doit être accessible à chaque apprenant ambitieux et chaque organisation tournée vers l'avenir.", en: "Inuka Digital Africa was founded with one belief: world-class training should be accessible to every ambitious learner and every forward-thinking organization." },
  "page.about.what": { fr: "Ce qui nous distingue", en: "What sets us apart" },
  "page.about.modern": { fr: "Une académie moderne conçue pour l'impact", en: "A modern academy built for impact" },
  "page.about.voices": { fr: "Voix", en: "Voices" },
  "page.about.stories": { fr: "Histoires de notre communauté", en: "Stories from our community" },
} satisfies Dict;

export type TKey = keyof typeof dict;

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: TKey) => string };

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default 'fr' on both server and initial client render to avoid hydration mismatch.
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "en" || stored === "fr") setLangState(stored);
    document.documentElement.lang = stored || "fr";
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
  };

  const t = (k: TKey) => dict[k][lang];

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useT() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useT must be used inside LanguageProvider");
  return ctx;
}
