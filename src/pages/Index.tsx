import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Shield, Award, Heart, ChevronDown,
  Instagram, Phone, MapPin, Send,
  CheckCircle, Star, Clock, Users,
} from "lucide-react";
import heroImage from "@/assets/hero-ballet.jpg";

/* ═══════ MOTION HELPERS ═══════ */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: i * 0.1 },
  }),
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

function Sec({ children, className = "", id = "" }: {
  children: React.ReactNode; className?: string; id?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.section ref={ref} id={id}
      initial="hidden" animate={inView ? "visible" : "hidden"}
      variants={stagger} className={className}>
      {children}
    </motion.section>
  );
}

/* ═══════ SVG LOGO ═══════ */
function DaraLogo({ size = 80 }: { size?: number }) {
  const coral = "#D4735A";
  const mint = "#7AB89A";
  const gray = "#3D3D3D";
  const grayMid = "#7C7872";
  return (
    <svg width={size} height={size * 1.15} viewBox="0 0 110 126" fill="none"
      xmlns="http://www.w3.org/2000/svg" aria-label="Dara Rocha Ballet logo">
      <circle cx="55" cy="46" r="31" stroke={coral} strokeWidth="1.4" fill="none" opacity="0.4"
        strokeDasharray="55 140" strokeDashoffset="-30" />
      <circle cx="55" cy="46" r="31" stroke={mint} strokeWidth="1.4" fill="none" opacity="0.35"
        strokeDasharray="55 140" strokeDashoffset="60" />
      <circle cx="55" cy="20" r="5.5" fill={gray} opacity="0.72" />
      <path d="M55 26 L55 58" stroke={gray} strokeWidth="2" strokeLinecap="round" opacity="0.72" />
      <path d="M47 50 Q44 62 40 68 M55 55 L55 68 M63 50 Q66 62 70 68"
        stroke={coral} strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />
      <path d="M55 34 L44 26 M55 34 L66 26" stroke={gray} strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
      <circle cx="43" cy="25" r="2.2" fill={gray} opacity="0.55" />
      <circle cx="67" cy="25" r="2.2" fill={gray} opacity="0.55" />
      <path d="M55 68 L52 80 M52 80 L50 84" stroke={gray} strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
      <path d="M18 76 Q28 68 38 74 Q48 80 55 74" stroke={coral} strokeWidth="1.1" fill="none" strokeLinecap="round" opacity="0.5" />
      <path d="M92 76 Q82 68 72 74 Q62 80 55 74" stroke={coral} strokeWidth="1.1" fill="none" strokeLinecap="round" opacity="0.5" />
      <text x="55" y="96" textAnchor="middle" fontFamily="'Cormorant Garamond',serif"
        fontSize="8.5" letterSpacing="4.5" fill={grayMid} opacity="0.85">BALLET</text>
      <text x="55" y="116" textAnchor="middle" fontFamily="'Cormorant Garamond',serif"
        fontSize="13" fontStyle="italic" fontWeight="300" fill={gray} opacity="0.88" letterSpacing="1">Dara Rocha</text>
    </svg>
  );
}

function Swirl({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 30" fill="none" aria-hidden className={className}>
      <path d="M10 20 Q40 4 70 14 Q105 26 130 12 Q155 0 190 14 Q215 24 250 10"
        stroke="hsl(var(--coral))" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
    </svg>
  );
}

/* ═══════ DATA ═══════ */
const diferenciais = [
  {
    icon: Shield, title: "Ambiente Seguro",
    desc: "Estúdio com piso flutuante, espelhos protegidos e supervisão integral. Projetado exclusivamente para crianças e adolescentes.",
    bg: "bg-coral-light", iconColor: "text-coral",
  },
  {
    icon: Award, title: "Professora Qualificada",
    desc: "Dara Rocha tem formação em dança clássica e mais de 12 anos ensinando. Metodologia lúdica adaptada a cada faixa etária.",
    bg: "bg-mint-light", iconColor: "text-mint",
  },
  {
    icon: Heart, title: "Acolhimento Real",
    desc: "Cada aluna é tratada individualmente. Respeitamos o ritmo de cada criança, construindo autoconfiança passo a passo.",
    bg: "bg-coral-light", iconColor: "text-coral",
  },
];

const turmas = [
  {
    faixa: "3 – 6 anos", nome: "Pré-Ballet",
    horario: "Seg e Qua · 15h", vagas: "Últimas vagas",
    desc: "Introdução lúdica ao movimento, coordenação motora e ritmo. Aulas com música, histórias e brincadeiras.",
    cardBg: "bg-coral-light", accentClass: "text-coral", borderAccent: "border-coral/20",
  },
  {
    faixa: "7 – 10 anos", nome: "Ballet Infantil",
    horario: "Ter e Qui · 16h", vagas: "5 vagas",
    desc: "Técnica clássica, postura e vocabulário do ballet. Equilíbrio entre rigor técnico e leveza.",
    cardBg: "bg-mint-light", accentClass: "text-mint", borderAccent: "border-mint/20",
  },
  {
    faixa: "11 – 15 anos", nome: "Ballet Juvenil",
    horario: "Seg, Qua e Sex · 18h", vagas: "Turma avançada",
    desc: "Aperfeiçoamento técnico, expressividade artística e preparação para apresentações.",
    cardBg: "bg-brand-gray-light", accentClass: "text-brand-gray", borderAccent: "border-brand-gray/10",
  },
  {
    faixa: "Adultos", nome: "Ballet Adulto",
    horario: "Sábado · 09h", vagas: "Turma aberta",
    desc: "Nunca é tarde para começar. Aulas voltadas para iniciantes e intermediários adultos.",
    cardBg: "bg-coral-light", accentClass: "text-coral", borderAccent: "border-coral/20",
  },
];

const depoimentos = [
  {
    mae: "Fernanda S.", filha: "Isabela, 8 anos",
    texto: "Minha filha amou desde a primeira aula. A postura da Isa melhorou visivelmente e a autoconfiança dela é outra.",
  },
  {
    mae: "Carolina M.", filha: "Beatriz, 5 anos",
    texto: "Procurava um ambiente seguro e acolhedor. A Bea chora quando não tem aula — é o maior elogio que posso dar.",
  },
  {
    mae: "Renata P.", filha: "Luísa, 13 anos",
    texto: "A Luísa era tímida. Depois de 6 meses no ballet, ela se apresentou no festival com uma confiança que me emocionou.",
  },
];

/* ═══════ LEAD FORM ═══════ */
function LeadForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ mae: "", crianca: "", idade: "", whatsapp: "" });

  const h = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: integrar com Supabase Server Action — submitLead(form)
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div key="ok"
          initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-4 py-12 text-center">
          <CheckCircle size={60} strokeWidth={1.2} className="text-coral" />
          <p className="font-serif text-3xl text-foreground">Recebemos seu contato!</p>
          <p className="text-muted-foreground max-w-[300px] leading-relaxed text-sm">
            Entraremos em contato pelo WhatsApp em breve para confirmar sua aula experimental gratuita. 🩰
          </p>
        </motion.div>
      ) : (
        <motion.form key="form" onSubmit={submit}
          className="flex flex-col gap-4"
          variants={stagger} initial="hidden" animate="visible">

          {[
            { label: "Nome da Mãe / Responsável", name: "mae", type: "text", ph: "Seu nome completo" },
            { label: "Nome da Criança", name: "crianca", type: "text", ph: "Nome da sua filha(o)" },
            { label: "WhatsApp", name: "whatsapp", type: "tel", ph: "(11) 99999-9999" },
          ].map(f => (
            <motion.div key={f.name} variants={fadeUp}>
              <label className="block mb-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
                {f.label}
              </label>
              <input required name={f.name} type={f.type} placeholder={f.ph}
                value={form[f.name as keyof typeof form]} onChange={h}
                className="w-full rounded-xl border-[1.5px] border-input bg-card px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-coral focus:ring-2 focus:ring-coral/10"
              />
            </motion.div>
          ))}

          <motion.div variants={fadeUp}>
            <label className="block mb-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
              Faixa Etária
            </label>
            <select required name="idade" value={form.idade} onChange={h}
              className="w-full rounded-xl border-[1.5px] border-input bg-card px-4 py-3.5 text-sm text-foreground outline-none appearance-none cursor-pointer focus:border-coral focus:ring-2 focus:ring-coral/10">
              <option value="" disabled>Selecione a turma ideal</option>
              <option value="3-6">3 – 6 anos · Pré-Ballet</option>
              <option value="7-10">7 – 10 anos · Ballet Infantil</option>
              <option value="11-15">11 – 15 anos · Ballet Juvenil</option>
              <option value="adulto">Adulto</option>
            </select>
          </motion.div>

          <motion.button variants={fadeUp} type="submit" disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.97 }}
            className="flex items-center justify-center gap-2 px-7 py-4 rounded-2xl gradient-cta text-primary-foreground font-semibold text-sm tracking-wide shadow-cta disabled:opacity-70 mt-1 cursor-pointer disabled:cursor-not-allowed">
            {loading ? (
              <span className="inline-block w-5 h-5 border-[2.5px] border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            ) : (
              <><Send size={16} /> Agendar Aula Experimental Gratuita</>
            )}
          </motion.button>

          <p className="text-center text-xs text-muted-foreground -mt-1">
            Sem compromisso · Respondemos em até 2 horas pelo WhatsApp
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

/* ═══════ PAGE ═══════ */
export default function DaraRochaBalletPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">

      {/* ═══ NAV ═══ */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 md:px-7 py-3 bg-background/90 backdrop-blur-md border-b border-coral/10">
        <div className="flex items-center gap-2.5">
          <DaraLogo size={34} />
          <span className="font-serif text-xl text-foreground tracking-wide">
            Dara Rocha <em className="text-coral font-light">Ballet</em>
          </span>
        </div>
        <a href="#agendar"
          className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full gradient-cta text-primary-foreground text-xs font-semibold shadow-cta tracking-wide">
          Aula Gratuita
        </a>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-16 text-center overflow-hidden">
        {/* Background blobs */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-20 w-[420px] h-[420px] rounded-full bg-coral/8 blur-[70px]" />
          <div className="absolute bottom-0 -right-16 w-[340px] h-[340px] rounded-full bg-mint/6 blur-[60px]" />
        </div>

        {/* Hero image overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <img src={heroImage} alt="" className="w-full h-full object-cover opacity-[0.07]" />
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-6" style={{ animation: "floatY 5s ease-in-out infinite" }}>
          <DaraLogo size={120} />
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          className="relative text-[11px] font-semibold tracking-[0.30em] uppercase text-coral mb-4">
          Escola de Ballet · São Paulo
        </motion.p>

        <motion.h1 className="relative font-serif text-foreground leading-[1.1] max-w-[700px] mx-auto mb-1"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          style={{ fontSize: "clamp(44px, 8vw, 78px)" }}>
          Onde meninas<br />
          <em className="text-coral font-light">descobrem</em> a arte
        </motion.h1>

        <motion.div initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.7 }}>
          <Swirl className="w-[280px] mx-auto mt-1" />
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
          className="relative text-base text-muted-foreground leading-relaxed max-w-[460px] mx-auto mt-7">
          O ballet ensina muito mais do que dança — desenvolve{" "}
          <strong className="text-foreground font-semibold">postura, disciplina e autoconfiança</strong>{" "}
          desde os primeiros passos.
        </motion.p>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="relative flex gap-9 mt-10 flex-wrap justify-center">
          {[["10+", "anos de experiência"], ["200+", "alunas formadas"], ["4", "turmas disponíveis"]].map(([n, l]) => (
            <div key={l} className="text-center">
              <p className="font-serif text-[34px] text-coral font-semibold leading-none">{n}</p>
              <p className="text-xs text-muted-foreground mt-1 tracking-wide">{l}</p>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
          className="relative flex flex-col gap-3 mt-11 items-center w-full max-w-[400px]">
          <motion.a href="#agendar" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="w-full flex items-center justify-center gap-2 py-5 px-8 rounded-2xl gradient-cta text-primary-foreground font-semibold text-[15px] shadow-cta tracking-wide no-underline">
            🩰 Agendar Aula Experimental Gratuita
          </motion.a>
          <a href="#turmas" className="text-muted-foreground text-sm no-underline flex items-center gap-1">
            Conhecer as turmas <ChevronDown size={14} />
          </a>
        </motion.div>
      </section>

      {/* ═══ DIFERENCIAIS ═══ */}
      <Sec className="py-20 px-6">
        <div className="max-w-[960px] mx-auto">
          <motion.p variants={fadeUp}
            className="text-[11px] font-semibold tracking-[0.28em] uppercase text-coral text-center mb-2">
            Por que nos escolher
          </motion.p>
          <motion.h2 variants={fadeUp}
            className="font-serif text-foreground text-center mb-14"
            style={{ fontSize: "clamp(30px, 5vw, 46px)" }}>
            Nossos Diferenciais
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {diferenciais.map((d, i) => (
              <motion.div key={d.title} variants={fadeUp} custom={i}
                className="lift bg-card rounded-3xl p-8 shadow-[var(--shadow-card)] border border-coral/10">
                <div className={`w-14 h-14 rounded-2xl ${d.bg} flex items-center justify-center mb-5`}>
                  <d.icon size={22} strokeWidth={1.5} className={d.iconColor} />
                </div>
                <h3 className="font-serif text-[23px] text-foreground mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Sec>

      {/* ═══ TURMAS ═══ */}
      <Sec id="turmas" className="py-20 px-6 bg-card">
        <div className="max-w-[960px] mx-auto">
          <motion.p variants={fadeUp}
            className="text-[11px] font-semibold tracking-[0.28em] uppercase text-coral text-center mb-2">
            Para cada fase
          </motion.p>
          <motion.h2 variants={fadeUp}
            className="font-serif text-foreground text-center mb-14"
            style={{ fontSize: "clamp(30px, 5vw, 46px)" }}>
            Nossas Turmas
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {turmas.map((t, i) => (
              <motion.div key={t.faixa} variants={fadeUp} custom={i}
                className={`lift ${t.cardBg} rounded-3xl p-8 border ${t.borderAccent} flex flex-col gap-4`}>
                <div className="flex justify-between items-center">
                  <span className={`text-[11px] font-bold tracking-[0.14em] uppercase px-3 py-1 rounded-full bg-card/60 ${t.accentClass}`}>
                    {t.faixa}
                  </span>
                  <span className={`text-[11px] font-bold ${t.accentClass} tracking-wide`}>
                    {t.vagas}
                  </span>
                </div>
                <div className={`w-[3px] h-9 rounded ${t.accentClass === "text-coral" ? "bg-coral" : t.accentClass === "text-mint" ? "bg-mint" : "bg-brand-gray"} opacity-50`} />
                <div>
                  <h3 className="font-serif text-[27px] text-foreground mb-2">{t.nome}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
                <div className={`flex items-center gap-2 ${t.accentClass}`}>
                  <Clock size={13} strokeWidth={2} />
                  <span className="text-xs font-semibold">{t.horario}</span>
                </div>
                <a href="#agendar" className={`mt-auto text-[13px] font-semibold ${t.accentClass} no-underline tracking-wide`}>
                  Agendar aula gratuita →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </Sec>

      {/* ═══ DEPOIMENTOS ═══ */}
      <Sec className="py-20 px-6">
        <div className="max-w-[960px] mx-auto">
          <motion.p variants={fadeUp}
            className="text-[11px] font-semibold tracking-[0.28em] uppercase text-coral text-center mb-2">
            O que as mães dizem
          </motion.p>
          <motion.h2 variants={fadeUp}
            className="font-serif text-foreground text-center mb-14"
            style={{ fontSize: "clamp(28px, 5vw, 42px)" }}>
            Histórias reais de transformação
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {depoimentos.map((d, i) => (
              <motion.div key={d.mae} variants={fadeUp} custom={i}
                className="lift bg-card rounded-3xl p-7 shadow-[var(--shadow-card)] border border-coral/10 flex flex-col gap-3">
                <div className="flex gap-0.5">
                  {Array(5).fill(0).map((_, k) =>
                    <Star key={k} size={13} fill="hsl(var(--coral))" className="text-coral" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  &ldquo;{d.texto}&rdquo;
                </p>
                <div className="border-t border-coral/10 pt-3 mt-auto">
                  <p className="font-semibold text-sm text-foreground">{d.mae}</p>
                  <p className="text-xs text-coral mt-0.5">{d.filha}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Sec>

      {/* ═══ FORMULÁRIO ═══ */}
      <Sec id="agendar" className="py-20 px-6 bg-card">
        <div className="max-w-[520px] mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-11">
            <div className="flex justify-center mb-4">
              <DaraLogo size={72} />
            </div>
            <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-coral mb-2">
              Sem compromisso
            </p>
            <h2 className="font-serif text-foreground mb-3"
              style={{ fontSize: "clamp(28px, 5vw, 44px)" }}>
              Aula Experimental Gratuita
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Preencha abaixo. Entraremos em contato pelo WhatsApp para confirmar horário e turma.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}
            className="bg-brand-cream rounded-3xl p-8 md:p-10 shadow-[0_6px_40px_hsl(var(--coral)/0.1)] border-[1.5px] border-coral/10">
            <LeadForm />
          </motion.div>
        </div>
      </Sec>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-foreground text-primary-foreground px-6 pt-16 pb-8">
        <div className="max-w-[960px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11">
          <div>
            <DaraLogo size={56} />
            <p className="text-sm text-primary-foreground/50 leading-relaxed mt-3">
              Formando bailarinas com amor,<br />técnica e dedicação desde 2015.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-coral mb-0.5">
              Contato
            </p>
            {[
              { icon: Phone, label: "(11) 99999-9999", href: "tel:+5511999999999" },
              { icon: Instagram, label: "@balletdararocha", href: "https://www.instagram.com/balletdararocha/" },
              { icon: MapPin, label: "São Paulo, SP", href: "#" },
            ].map(c => (
              <a key={c.label} href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-primary-foreground/60 text-sm no-underline hover:text-primary-foreground/80 transition-colors">
                <c.icon size={14} strokeWidth={1.5} className="text-coral" />
                {c.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2.5">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-coral mb-0.5">
              Horários
            </p>
            {[
              ["Seg e Qua", "15h · 18h"],
              ["Ter e Qui", "16h"],
              ["Sexta", "18h"],
              ["Sábado", "09h – 12h"],
            ].map(([d, h]) => (
              <div key={d} className="flex justify-between text-xs pb-2 border-b border-primary-foreground/5">
                <span className="text-primary-foreground/40">{d}</span>
                <span className="text-primary-foreground/60 font-semibold">{h}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[960px] mx-auto mt-10 border-t border-primary-foreground/5 pt-6 flex justify-between items-center flex-wrap gap-3">
          <p className="text-[11px] text-primary-foreground/30">
            © {new Date().getFullYear()} Dara Rocha Ballet · Todos os direitos reservados.
          </p>
          <Swirl className="w-28 opacity-20" />
        </div>
      </footer>
    </main>
  );
}
