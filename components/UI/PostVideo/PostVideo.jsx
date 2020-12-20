import { useState } from "react"
import ModalVideo   from 'react-modal-video'
import classes      from './PostVideo.module.sass'

function PostVideo(props) {

    const [isOpen, setOpen] = useState(false)

    return (
        <React.Fragment>
            <ModalVideo channel='youtube' isOpen={ isOpen } videoId={ props.video } onClose={() => setOpen(false)} />
            <span className={classes.block} onClick={() => setOpen(true) }>
                <span className={ classes.icon }></span>
                <h3 className={classes.title}>{props.title}</h3>
                <img src={props.image} alt={props.title}/>
            </span>
        </React.Fragment>
    )
}

export default PostVideo