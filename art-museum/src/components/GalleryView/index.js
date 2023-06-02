import { useParams } from "react-router-dom";


const GalleryView = ({galleries}) => {
    const {galleryId} = useParams()
    // console.log("g", galleries)
    // console.log("g", galleries.length)

    const getGallery = () => {
        for (let i = 0; i < galleries.length; i++) {
            const gallery = galleries[i];
            // console.log(gallery)
            if (gallery.galleryid === parseInt(galleryId)) {
                return gallery;

            } 
        }
    }
    const gallery = getGallery()
    return galleryId ? (
        <>
        <h1>Hello from GalleryView</h1>
        <h2>
            {gallery.name}
        </h2>
        </>
    ) : null
}

export default GalleryView;