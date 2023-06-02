import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavitation";
import GalleryView from "./components/GalleryView";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="page-wrapper">
    <GalleryNavigation galleries={ harvardArt.records }/>
    {/* <GalleryView galleries={ harvardArt.records }/>  */}
    {/* <Route path="/galleries/:galleryId" component={GalleryView} /> */}
    <Route path="/galleries/:galleryId" render={()=> <GalleryView galleries={harvardArt.records}/>} />

    </div>
  );
}

export default App;
