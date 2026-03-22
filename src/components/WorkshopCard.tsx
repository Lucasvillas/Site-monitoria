interface WorkshopCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
}

export function WorkshopCard({ image, title, description, href }: WorkshopCardProps) {
  return (
    <a href={href} className="workshop-card-link">
      <div className="workshop-card">
        <img src={image} alt={title} className="workshop-image" />
        <div className="workshop-info" style={{ backgroundColor: '#ffffff' }}>
          <h3 className="cards-title">{title}</h3>
          <p className="card-schedule">{description}</p>
        </div>
      </div>
    </a>
  );
}
