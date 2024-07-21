import "./App.css";
import { Toaster } from "./components/ui/sonner";
import EditorComponent from "./core/editor/editor-component";
import EditorNavigation from "./core/editor/EditorNavigation";
import EditorSidebar from "./core/editor/sidebar";
import EditorProvider from "./providers/editor/editor-provider";

function App() {
  return (
    <>
      <h1 className="fixed top-0 left-0 right-0 bottom-0 z-[20]  overflow-hidden bg-background ">
        <EditorProvider>
          <EditorNavigation />
          <div className="h-full flex justify-center">
            <EditorComponent />
          </div>
          <EditorSidebar />
        </EditorProvider>
      </h1>
      <Toaster richColors position="top-right" duration={2000} />
    </>
  );
}

export default App;
