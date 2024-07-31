import React from 'react';
// import logo from './logo.svg';
import './App.css';

// con questi 4 componenti gestisco le rotte
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { MainLayout } from "./Layouts/MainLayout";
import { Repos } from "./pages/Repos/Repos";
import { ReposCards } from "./components/reposPage/ReposCards";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}> {/*# elemento genitore */}

          {/* La index ti manda alla rotta "Repos". */}
          <Route index element={<Navigate to="Repos" replace />} /> {/* self closing */}
          
          {/* Rotta per "Repos" */}
          <Route path="Repos" element={<Repos />}> {/*## elemento genitore nidificato */}

            {/* Accedendo alla rotta "Repos" ti manda alla rotta "Repos/All" */}
            <Route index element={<Navigate to="All" replace />} />
            {/* rotta dinamica, l'id ti manda alle cards relative tipo Repos/C++  */}
            <Route path=":id" element={<ReposCards />} />
          
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
