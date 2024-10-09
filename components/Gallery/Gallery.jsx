import Img	 		from "react-modal-image"
import classes      from './Gallery.module.sass'

function Gallery(props) {
    return (
        <div className="col-md-12">
            <div className={classes.block}>
                <h2 className={classes.title}>Галерея</h2>
                <div className="row">

                    { props.images.map((image, index) => {
                        return (
                            <div className={'col-md-3'} key={index}>
                                <figure className={classes.image}>
                                    <p><Img small={ image.src } large={ image.src } alt={ props.title } /></p>
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