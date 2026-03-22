const legacyHtmlLoaders: Record<string, () => Promise<string>> = {
  'index.html': () => import('../legacy/index.html?raw').then((module) => module.default),
  'asa-norte.html': () => import('../legacy/asa-norte.html?raw').then((module) => module.default),
  'aulas-gravadas-ciencia-de-dados.html': () =>
    import('../legacy/aulas-gravadas-ciencia-de-dados.html?raw').then((module) => module.default),
  'aulas-gravadas-fundamentos-ciencia-de-dados.html': () =>
    import('../legacy/aulas-gravadas-fundamentos-ciencia-de-dados.html?raw').then((module) => module.default),
  'aulas-gravadas-machine-learning.html': () =>
    import('../legacy/aulas-gravadas-machine-learning.html?raw').then((module) => module.default),
  'aulas-gravadas-sql.html': () =>
    import('../legacy/aulas-gravadas-sql.html?raw').then((module) => module.default),
  'equipe.html': () => import('../legacy/equipe.html?raw').then((module) => module.default),
  'Inscrição-para-monitores.html': () =>
    import('../legacy/Inscrição-para-monitores.html?raw').then((module) => module.default),
  'oficina-blender.html': () => import('../legacy/oficina-blender.html?raw').then((module) => module.default),
  'oficina-Ciência-de-dados.html': () =>
    import('../legacy/oficina-Ciência-de-dados.html?raw').then((module) => module.default),
  'oficina-fundamentos-ciencia-de-dados.html': () =>
    import('../legacy/oficina-fundamentos-ciencia-de-dados.html?raw').then((module) => module.default),
  'oficina-fundamentos-computacao.html': () =>
    import('../legacy/oficina-fundamentos-computacao.html?raw').then((module) => module.default),
  'oficina-linux.html': () => import('../legacy/oficina-linux.html?raw').then((module) => module.default),
  'oficina-Lógica.html': () => import('../legacy/oficina-Lógica.html?raw').then((module) => module.default),
  'oficina-machine-learning.html': () =>
    import('../legacy/oficina-machine-learning.html?raw').then((module) => module.default),
  'oficina-pitaco.html': () => import('../legacy/oficina-pitaco.html?raw').then((module) => module.default),
  'oficina-redes.html': () => import('../legacy/oficina-redes.html?raw').then((module) => module.default),
  'oficina-sql.html': () => import('../legacy/oficina-sql.html?raw').then((module) => module.default),
  'oficina-web.html': () => import('../legacy/oficina-web.html?raw').then((module) => module.default),
  'pitaco.html': () => import('../legacy/pitaco.html?raw').then((module) => module.default),
};

export const loadLegacyHtmlByFileName = async (fileName: string): Promise<string | undefined> => {
  const loader = legacyHtmlLoaders[fileName];
  if (!loader) {
    return undefined;
  }

  return loader();
};
