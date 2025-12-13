export default function History({ translations }) {
  return (
    <section id="sejarah" className="section-shell">
      <div className="glass-surface rounded-3xl p-8 md:p-12">
        <h2 className="section-heading text-center">{translations.h2_history}</h2>
        <div className="mt-6 grid gap-6 text-center text-lg text-muted md:grid-cols-2 md:text-left">
          <p>{translations.p_history_1}</p>
          <p>{translations.p_history_2}</p>
        </div>
      </div>
    </section>
  );
}
