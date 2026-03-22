import { WorkshopPage } from '../components/WorkshopPage';

export function OficinaRedesPage() {
  return (
    <WorkshopPage
      title="Redes de Computadores"
      subtitle="Campus Asa Norte - Monitoria dos Cursos de TI"
      image="/images/mago redes.png"
      schedule="A definir"
      about="Compreenda como funciona a internet! Nesta oficina, você aprenderá os conceitos fundamentais de redes de computadores, desde o modelo OSI até protocolos modernos. Essencial para qualquer profissional de TI."
      learnings={[
        'Modelo OSI: Camadas e protocolos',
        'IP e Roteamento: IPv4, IPv6 e roteamento',
        'TCP/UDP: Protocolos de transporte',
        'DNS e HTTP: Serviços web fundamentais',
        'Segurança: Firewalls, VPN e criptografia básica',
      ]}
      target={[
        'Alunos interessados em infraestrutura',
        'Administradores de rede em formação',
        'Profissionais que querem entender redes',
      ]}
    />
  );
}
