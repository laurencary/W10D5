import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavitation";
import GalleryView from "./components/GalleryView";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="page-wrapper">
    <GalleryNavigation galleries={ harvardArt.records }/>
    <Switch>
    {/* <GalleryView galleries={ harvardArt.records }/>  */}
    {/* <Route path="/galleries/:galleryId" component={GalleryView} /> */}
    <Route path="/galleries/:galleryId" render={()=> <GalleryView galleries={harvardArt.records}/>} />
    <Route exact path="/">
      <h2>Harvard Art Museum</h2>
      <p>Look, but don't touch. Please select a Gallery in the navigation bar</p>
    </Route>
    <Route>
      <h1>404: Page not found</h1>
    </Route>
      </Switch>
    </div>
  );
}

export default App;
