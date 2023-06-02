import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavitation";

function App() {
  return (
    <GalleryNavigation galleries={ harvardArt.records }/>
  );
}

export default App;
