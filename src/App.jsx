import { useState } from "react";
import "./App.css";
import AppContent from "./components/AppContent";

function App() {
  return (
    <>
      <div className="App">
        <div className="content">
          <AppContent />
        </div>
      </div>
    </>
  );
}

export default App;
