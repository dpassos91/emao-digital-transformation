import HeroImage from "./HeroImage";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageUrl?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  imageUrl = "/portfolio-placeholder.svg",
}: PageHeroProps) {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <HeroImage
          key={imageUrl}
          src={imageUrl}
          className="page-hero-media"
        />

        <div className="page-hero-overlay" />

        <div className="page-hero-content">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </section>
    </div>
  );
}