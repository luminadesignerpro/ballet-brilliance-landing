import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Shield, Award, Heart, ChevronDown,
  Instagram, Phone, MapPin, Send,
  CheckCircle, Star, Clock, Users,
} from "lucide-react";
import heroImage from "@/assets/hero-ballet.jpg";
import logoReal from "@/assets/logo-ballet-dara-rocha.webp";

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

/* ═══════ LOGO REAL ═══════ */
function DaraLogo({ size = 80 }: { size?: number }) {
  return (
    <img 
      src={logoReal} 
      alt="Ballet Dara Rocha logo" 
      width={size} 
      height={size} 
      className="object-contain"
    />
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
    horario: "Ter e Qui · 18h", vagas: "Últimas vagas",
    desc: "Introdução lúdica ao movimento, coordenação motora e ritmo. Aulas com música, histórias e brincadeiras.",
    cardBg: "bg-coral-light", accentClass: "text-coral", borderAccent: "border-coral/20",
  },
  {
    faixa: "7 – 10 anos", nome: "Ballet Infantil",
    horario: "Ter e Qui · 18h30", vagas: "5 vagas",
    desc: "Técnica clássica, postura e vocabulário do ballet. Equilíbrio entre rigor técnico e leveza.",
    cardBg: "bg-mint-light", accentClass: "text-mint", borderAccent: "border-mint/20",
  },
  {
    faixa: "11 – 15 anos", nome: "Ballet Juvenil",
    horario: "Ter e Qui · 19h30", vagas: "Turma avançada",
    desc: "Aperfeiçoamento técnico, expressividade artística e preparação para apresentações.",
    cardBg: "bg-brand-gray-light", accentClass: "text-brand-gray", borderAccent: "border-brand-gray/10",
  },
  {
    faixa: "Adultos", nome: "Ballet Adulto",
    horario: "Ter e Qui · 20h30", vagas: "Turma aberta",
    desc: "Nunca é tarde para começar. Aulas voltadas para iniciantes e intermediários adultos.",
    cardBg: "bg-coral-light", accentClass: "text-coral", borderAccent: "border-coral/20",
  },
];

const depoimentos = [
  {
    nome: "Jeferson Almeida",
    texto: "Super indico estúdio de ballet super profissional e atenciosos tanto com as bailarinas como com os pais!",
  },
  {
    nome: "Myria Brandao",
    texto: "Atendimento maravilhoso, minha filha ama a Tia Dara e a Tia Debora. ❤️",
  },
  {
    nome: "Emanuela Lopes",
    texto: "Espaço acolhedor, de aprendizado e minha filha ama desde o primeiro dia. Tia Dara é nota 10!",
  },
  {
    nome: "Isa Sousa",
    texto: "Ótimo atendimento e profissional capacitado, minha filha gosta muito das aulas. 👏🏽",
  },
  {
    nome: "Samia Vasconcelos",
    texto: "Qualidade top das Galáxias. Esse eu indico e confio!",
  },
  {
    nome: "Bruna Rocha",
    texto: "Uma profissional de excelência, muito competente e dedicada no que faz!",
  },
  {
    nome: "Vivia Aquino",
    texto: "Uma Escola que trabalha com honestidade, respeito e muito amor. A professora Dara Rocha é um encanto de pessoa, muito educada e gentil no ato de educar na dança. 🩷🌸",
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
            { label: "WhatsApp", name: "whatsapp", type: "tel", ph: "(85) 98203-1932" },
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
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-card/80 backdrop-blur-xl border-b border-border/60">
        <div className="flex items-center gap-2.5">
          <DaraLogo size={32} />
        </div>
        <div className="hidden md:flex items-center gap-8">
          {[["Diferenciais", "#diferenciais"], ["Turmas", "#turmas"], ["Depoimentos", "#depoimentos"]].map(([label, href]) => (
            <a key={label} href={href} className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors no-underline tracking-wide uppercase">
              {label}
            </a>
          ))}
        </div>
        <a href="#agendar"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full gradient-cta text-primary-foreground text-xs font-semibold shadow-cta tracking-wide no-underline">
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
          <DaraLogo size={140} />
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          className="relative text-[11px] font-semibold tracking-[0.30em] uppercase text-coral mb-4">
          Escola de Ballet · Itaitinga, CE
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
      <Sec id="diferenciais" className="py-24 px-6">
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
                className="lift bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] border border-border/60">
                <div className={`w-12 h-12 rounded-xl ${d.bg} flex items-center justify-center mb-5`}>
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
      <Sec id="turmas" className="py-24 px-6 bg-card">
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
      <Sec id="depoimentos" className="py-24 px-6">
        <div className="max-w-[1060px] mx-auto">
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-3">
            <Star size={16} strokeWidth={2} className="text-coral" />
            <span className="text-[11px] font-bold tracking-[0.24em] uppercase text-coral">5.0 no Google</span>
          </motion.div>
          <motion.h2 variants={fadeUp}
            className="font-serif text-foreground text-center mb-4"
            style={{ fontSize: "clamp(30px, 5vw, 46px)" }}>
            O que dizem nossas famílias
          </motion.h2>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-1 text-muted-foreground text-sm mb-14">
            <span className="text-coral">★★★★★</span> · {depoimentos.length} avaliações
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {depoimentos.map((d, i) => (
              <motion.div key={d.nome} variants={fadeUp} custom={i}
                className="bg-card p-7 rounded-2xl border border-border/50 shadow-[var(--shadow-card)] flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center text-coral font-serif text-base">
                    {d.nome.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{d.nome}</p>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={10} fill="#D4735A" strokeWidth={0} className="text-coral" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{d.texto}"</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="text-center mt-12">
            <a href="https://g.co/kgs/abc123" target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors no-underline">
              <img src="https://www.google.com/favicon.ico" alt="" width={16} height={16} className="opacity-80" />
              Ver mais avaliações no Google
            </a>
          </motion.div>
        </div>
      </Sec>

      {/* ═══ FORM ═══ */}
      <Sec id="agendar" className="py-24 px-6 bg-card">
        <div className="max-w-[560px] mx-auto">
          <motion.p variants={fadeUp}
            className="text-[11px] font-semibold tracking-[0.28em] uppercase text-coral text-center mb-2">
            Aula experimental gratuita
          </motion.p>
          <motion.h2 variants={fadeUp}
            className="font-serif text-foreground text-center mb-3"
            style={{ fontSize: "clamp(30px, 5vw, 46px)" }}>
            Agende sua primeira aula
          </motion.h2>
          <motion.p variants={fadeUp} className="text-center text-muted-foreground text-sm mb-10 max-w-[420px] mx-auto">
            Preencha abaixo e entraremos em contato em até 2 horas para confirmar seu horário.
          </motion.p>

          <motion.div variants={fadeUp} className="bg-background p-8 md:p-10 rounded-3xl shadow-[var(--shadow-card)] border border-border/40">
            <LeadForm />
          </motion.div>
        </div>
      </Sec>

      {/* ═══ FOOTER ═══ */}
      <footer className="py-16 px-6 bg-muted/30 border-t border-border/50">
        <div className="max-w-[960px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start gap-3">
            <DaraLogo size={50} />
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[240px]">
              Ballet clássico para crianças, adolescentes e adultos em Itaitinga-CE.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-muted-foreground mb-1">Contato</p>
            <div className="flex flex-col gap-2">
              <a href="https://wa.me/5585982031932" className="flex items-center justify-center sm:justify-start gap-2 text-sm text-foreground hover:text-coral transition-colors no-underline">
                <Phone size={14} /> (85) 98203-1932
              </a>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-muted-foreground">
                <MapPin size={14} /> R. José Matias de Morais
              </div>
              <div className="text-sm text-muted-foreground ml-6">
                Itaitinga - CE, 61887-464
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center sm:items-start">
            <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-muted-foreground mb-1">Horário</p>
            <p className="text-sm text-muted-foreground">Terça e Quinta</p>
            <p className="font-serif text-[28px] text-coral">18h – 21h</p>
            <div className="flex gap-3 mt-1">
              <a href="https://instagram.com/balletdararocha" target="_blank" rel="noopener"
                className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-coral hover:border-coral/30 transition-colors no-underline">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/5585982031932" target="_blank" rel="noopener"
                className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-coral hover:border-coral/30 transition-colors no-underline">
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-[960px] mx-auto mt-12 pt-6 border-t border-border/40 text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 Ballet Dara Rocha · Itaitinga, CE
          </p>
        </div>
      </footer>
    </main>
  );
}
