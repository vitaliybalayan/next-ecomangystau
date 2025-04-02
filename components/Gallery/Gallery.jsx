import Img	 		from "react-modal-image"
import classes      from './Gallery.module.sass'

function Gallery(props) {
    return (
        <div className="col-md-12">
            <div className={classes.block}>
                <h2 className={classes.title}>Галерея</h2>
                <div className="row">

                    { props.images.map((image, index) => {
                        const imageUrl = `${process.env.NEXT_PUBLIC_API_URL}${image.src}`;
                        return (
                            <div className={'col-md-3'} key={index}>
                                <figure className={classes.image}>
                                    <p><Img small={imageUrl} large={imageUrl} alt={ props.title } /></p>
                                </figure>
                            </div>
                        )
                    }) }
                
                </div>
            </div>
        </div>
    )
}

export default Gallery