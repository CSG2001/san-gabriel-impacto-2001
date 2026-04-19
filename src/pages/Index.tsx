import heroImg from "@/assets/hero-school.jpg";
import { ComicCard } from "@/components/ComicCard";
import { projects } from "@/data/projects";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <header className="relative overflow-hidden bg-primary text-primary-foreground border-b-[4px] border-foreground">
        <div className="absolute inset-0 halftone opacity-20" />
        <div className="container relative mx-auto px-4 py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="inline-block font-display text-sm bg-secondary text-secondary-foreground px-3 py-1.5 rounded-md border-[3px] border-foreground comic-shadow-sm -rotate-2">
              ★ 1901 — 2026 · 25 Años ★
            </span>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[0.95] text-secondary drop-shadow-[4px_4px_0_hsl(var(--ink))]">
              San Gabriel<br />
              <span className="text-accent">Promo 2001</span><br />
              25 Años de Impacto
            </h1>
            <p className="text-lg md:text-xl max-w-xl font-medium">
              Celebrando nuestra hermandad y compromiso con los demás.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#galeria" className="font-display tracking-wider bg-secondary text-secondary-foreground px-6 py-3 rounded-xl border-[3px] border-foreground comic-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
                Ver Logros
              </a>
              <a href="#intro" className="font-display tracking-wider bg-background text-foreground px-6 py-3 rounded-xl border-[3px] border-foreground comic-shadow-sm">
                Nuestra Historia
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="panel overflow-hidden rotate-2">
              <img
                src="/images/hero.jpg"
                alt="San Gabriel Promo 2001 - 25 Años de Impacto"
                width={1536}
                height={1024}
                className="w-full h-auto block border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] contrast-125 sepia-10"
              />
            </div>
            <div className="absolute -top-4 -left-4 bg-orange text-orange-foreground font-display text-2xl px-4 py-2 rounded-xl border-[3px] border-foreground comic-shadow -rotate-12">
              ¡PUM!
            </div>
            <div className="absolute -bottom-5 -right-3 bg-accent text-accent-foreground font-display text-xl px-4 py-2 rounded-xl border-[3px] border-foreground comic-shadow rotate-6">
              ★ Gabrielinos ★
            </div>
          </div>
        </div>
      </header>

      {/* INTRO */}
      <section id="intro" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="panel p-8 md:p-12 bg-card text-center -rotate-[0.5deg]">
            <span className="font-display text-secondary-foreground bg-secondary inline-block px-3 py-1 rounded-md border-[3px] border-foreground text-sm mb-4">
              120 años · Milagro de la Dolorosa
            </span>
            <h2 className="text-3xl md:text-4xl mb-5">
              Ser <span className="text-primary">Gabrielino</span> es una huella que no se borra.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A 120 años del Milagro de la Dolorosa, nuestra promoción honra una herencia
              de fe, servicio y hermandad. Veinticinco años después de cruzar las puertas del
              colegio, seguimos siendo <strong className="text-foreground">hombres para los demás</strong>:
              construyendo, acompañando y multiplicando el bien en cada rincón donde la vida nos llevó.
            </p>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="py-12 md:py-20 bg-muted/40 border-y-[4px] border-foreground relative">
        <div className="absolute inset-0 halftone opacity-30 pointer-events-none" />
        <div className="container relative mx-auto px-4">
          <div className="text-center mb-12 space-y-3">
            <span className="font-display text-sm bg-orange text-orange-foreground inline-block px-3 py-1.5 rounded-md border-[3px] border-foreground comic-shadow-sm rotate-1">
              Nuestros Logros
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-primary drop-shadow-[3px_3px_0_hsl(var(--ink))]">
              25 Años en Acción
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada panel es una historia. Cada historia, un acto de amor por los demás.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projects.map((card, i) => (
              <ComicCard key={card.slug} index={i} {...card} />
            ))}
          </div>
        </div>
      </section>

       {/* FOOTER */}
       <footer className="bg-primary text-primary-foreground border-t-[4px] border-foreground relative overflow-hidden">
         <div className="absolute inset-0 halftone opacity-20" />
         <div className="container relative mx-auto px-4 py-14 text-center space-y-6">
           <div className="mx-auto w-28 h-28 rounded-full bg-secondary text-secondary-foreground border-[4px] border-foreground comic-shadow flex items-center justify-center">
             <span className="font-display text-3xl">SG</span>
           </div>
           <p className="text-xs uppercase tracking-widest opacity-80">Logo del Colegio · Placeholder</p>
           <h3 className="font-display text-3xl md:text-5xl text-secondary drop-shadow-[3px_3px_0_hsl(var(--ink))]">
             Hombres para los demás.
           </h3>
           <p className="font-display text-2xl text-accent">— Promo 2001 —</p>
           <p className="text-sm opacity-75 pt-4">
             © {new Date().getFullYear()} · Colegio San Gabriel · Quito, Ecuador
           </p>
         </div>
       </footer>

       {/* NIMBLERSOFT FOOTER */}
       <footer className="bg-background text-foreground border-t-[4px] border-foreground py-8">
         <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
           <div className="flex items-center gap-3">
             {/* Logo placeholder - using a simple styled div that matches the page style */}
             <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground border-2 border-foreground flex items-center justify-center font-display font-bold text-sm">
               N
             </div>
             <span className="font-display text-lg font-semibold">Nimblersoft</span>
           </div>
           <p className="text-sm text-muted-foreground text-center md:text-right">
             Desarrollado con Inteligencia Artificial por{" "}
             <a
               href="https://www.nimblersoft.com"
               target="_blank"
               rel="noopener noreferrer"
               className="font-semibold underline underline-offset-2 hover:text-primary transition-colors"
             >
               Nimblersoft
             </a>
           </p>
         </div>
       </footer>
    </div>
  );
};

export default Index;
