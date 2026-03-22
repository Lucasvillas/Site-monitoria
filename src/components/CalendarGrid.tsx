import { CICLOS, MESES } from '../data/ciclos';

export function CalendarGrid() {
  function getCicloDoDia(ano: number, mes: number, dia: number, diaDaSemana: number) {
    if (diaDaSemana === 0 || diaDaSemana === 6) return null;
    const dataAtual = new Date(ano, mes, dia);
    for (const ciclo of CICLOS) {
      const [iAno, iMes, iDia] = ciclo.dataInicio.split('-').map(Number);
      const [fAno, fMes, fDia] = ciclo.dataFim.split('-').map(Number);
      const dataInicio = new Date(iAno, iMes - 1, iDia);
      const dataFim = new Date(fAno, fMes - 1, fDia);
      if (dataAtual >= dataInicio && dataAtual <= dataFim) return ciclo;
    }
    return null;
  }

  return (
    <div className="calendario-grid">
      {MESES.map((config) => {
        const primeiroDiaSemana = new Date(config.ano, config.mes, 1).getDay();
        const totalDias = new Date(config.ano, config.mes + 1, 0).getDate();

        return (
          <div key={config.nome} className="mes">
            <div className="mes-titulo">{config.nome}</div>
            <div className="grid-dias">
              <div className="cabecalho-dia">D</div>
              <div className="cabecalho-dia">S</div>
              <div className="cabecalho-dia">T</div>
              <div className="cabecalho-dia">Q</div>
              <div className="cabecalho-dia">Q</div>
              <div className="cabecalho-dia">S</div>
              <div className="cabecalho-dia">S</div>

              {/* Dias vazios antes do primeiro dia */}
              {Array.from({ length: primeiroDiaSemana }).map((_, i) => (
                <div key={`empty-${i}`} className="dia vazio"></div>
              ))}

              {/* Dias do mês */}
              {Array.from({ length: totalDias }).map((_, i) => {
                const dia = i + 1;
                const diaDaSemana = new Date(config.ano, config.mes, dia).getDay();
                const ciclo = getCicloDoDia(config.ano, config.mes, dia, diaDaSemana);

                if (ciclo) {
                  return (
                    <div
                      key={dia}
                      className="dia com-ciclo"
                      style={{
                        backgroundColor: ciclo.corBase,
                        fontWeight: 'bold',
                        color: '#000',
                      }}
                      title={ciclo.nome}
                    >
                      {dia}
                    </div>
                  );
                }
                return (
                  <div key={dia} className="dia">
                    {dia}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
