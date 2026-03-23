interface MonitorCardProps {
  name: string;
  role: string;
  image: string;
}

export function MonitorCard({ name, role, image }: MonitorCardProps) {
  return (
    <div className="monitor-card">
      <div className="service-icon">
        <img src={image} alt={name} className="monitor-photo" />
      </div>
      <h3 className="service-title">{name}</h3>
      <p className="service-description">{role}</p>
    </div>
  );
}
