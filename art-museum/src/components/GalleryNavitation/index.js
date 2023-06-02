import {NavLink} from 'react-router-dom'
import './GalleryNavigation.css'

const GalleryNavigation = ({galleries}) => {
    const galleryNav = galleries.map((gallery) => {
        return (<NavLink
            to={`/galleries/${gallery.galleryid}`}
            key={gallery.galleryid}
        >{gallery.name}
        </NavLink>)
    })

    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink
                to="/"
            >Home Page</NavLink>
            {galleryNav}
        </nav>
    );
};

export default GalleryNavigation;