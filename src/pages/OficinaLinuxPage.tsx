import { WorkshopPage } from '../components/WorkshopPage';

export function OficinaLinuxPage() {
  return (
    <WorkshopPage
      title="Introdução ao Linux"
      subtitle="Campus Asa Norte - Monitoria dos Cursos de TI"
      image="/images/magoLinux.png"
      schedule="Terça e Quinta: 17h às 19h"
      about="Descubra o poder do Linux! Nesta oficina, você aprenderá a usar o terminal, gerenciar arquivos, instalar programas e entender os conceitos fundamentais de um sistema operacional baseado em Linux."
      learnings={[
        'Terminal: Comandos essenciais e navegação',
        'Sistema de Arquivos: Organização e permissões',
        'Gerenciamento de Programas: Instalação e atualizações',
        'Scripting: Automação com scripts básicos',
        'Git e GitHub: Controle de versão e colaboração',
      ]}
      target={[
        'Iniciantes que querem aprender Linux',
        'Desenvolvedores que usam Linux profissionalmente',
        'Entusiastas de sistemas operacionais e código aberto',
      ]}
    />
  );
}
