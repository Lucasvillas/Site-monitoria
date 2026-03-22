import { Navigate, Route, Routes } from 'react-router-dom';
import {
  HomePage,
  EquipePage,
  AsaNortePage,
  PitacoPage,
  AulasGravFundamentosPage,
  AulasGravMLPage,
  OficinaBlenderPage,
  OficinaWebPage,
  OficinaLinuxPage,
  OficinaLogicaPage,
  OficinaFundComputacaoPage,
  OficinaCienciaDadosPage,
  OficinaMachineLearningPage,
  OficinaSQLPage,
  OficinaRedesPage,
} from './pages';

export default function App() {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<HomePage />} />
      <Route path="/equipe" element={<EquipePage />} />
      <Route path="/asa-norte" element={<AsaNortePage />} />
      <Route path="/pitaco" element={<PitacoPage />} />

      {/* Aulas Gravadas */}
      <Route path="/aulas-gravadas-fundamentos-ciencia-de-dados" element={<AulasGravFundamentosPage />} />
      <Route path="/aulas-gravadas-machine-learning" element={<AulasGravMLPage />} />

      {/* Oficinas */}
      <Route path="/oficina-blender" element={<OficinaBlenderPage />} />
      <Route path="/oficina-web" element={<OficinaWebPage />} />
      <Route path="/oficina-linux" element={<OficinaLinuxPage />} />
      <Route path="/oficina-logica" element={<OficinaLogicaPage />} />
      <Route path="/oficina-fundamentos-computacao" element={<OficinaFundComputacaoPage />} />
      <Route path="/oficina-ciencia-de-dados" element={<OficinaCienciaDadosPage />} />
      <Route path="/oficina-machine-learning" element={<OficinaMachineLearningPage />} />
      <Route path="/oficina-sql" element={<OficinaSQLPage />} />
      <Route path="/oficina-redes" element={<OficinaRedesPage />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
