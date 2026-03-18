import { Navigate, Route, Routes } from 'react-router-dom';
import LegacyPage from './LegacyPage';
import { getLegacyFileByPath, legacyPages } from './legacyRoutes';

function PathRenderer({ path }: { path: string }) {
  const fileName = getLegacyFileByPath(path);

  if (!fileName) {
    return <Navigate to="/" replace />;
  }

  return <LegacyPage fileName={fileName} />;
}

export default function App() {
  return (
    <Routes>
      {legacyPages.map((page) => (
        <Route key={page.fileName} path={page.path} element={<PathRenderer path={page.path} />} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
