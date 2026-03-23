import { WorkshopPage } from '../components/WorkshopPage';

export function OficinaBlenderPage() {
  return (
    <WorkshopPage
      title="Criação de Personagens 3D com Blender"
      subtitle="Campus Asa Norte - Monitoria dos Cursos de TI"
      image="/images/monitoriaBlender.png"
      schedule="Segunda, Quarta e Sexta: 11h às 13h"
      about="Nesta oficina, você aprenderá os fundamentos da modelagem 3D com Blender, desde a criação básica de modelos até técnicas avançadas de sculpting e texturização. Perfeito para quem deseja explorar o mundo da computação gráfica."
      learnings={[
        'Interface do Blender: Navegação e ferramentas básicas',
        'Modelagem 3D: Técnicas de criação de formas e personagens',
        'Texturização: Aplicação de cores e materiais',
        'Animação: Introdução a animações simples',
        'Renderização: Exportação e apresentação de projetos',
      ]}
      target={[
        'Alunos interessados em computação gráfica e design 3D',
        'Quem quer aprender Blender do zero',
        'Pessoas que desejam criar portfólio na área de modelagem 3D',
      ]}
      playlistLink="/aulas-gravadas-blender"
    />
  );
}
