import classes from './Content.module.sass'
import Image	 			from "react-modal-image"

function Content(props) {
    return (
        <div className={classes.body}>
            { props.article.map((block, index) => {
                
                if (block.type === 'paragraph') {
                    return <div className={'col-md-10 m-auto'} key={index}><p dangerouslySetInnerHTML={{__html: block.data.text}}></p></div>
                }

                if (block.type === 'embed') {
                    return <div className={'col-md-10 m-auto'} key={index}>
                        <iframe src={ block.data.embed } frameborder="0" width="100%" height="400"></iframe>
                    </div>
                }
                
                if (block.type === 'list') {
                    var tag;
                    if (block.data.style === 'ordered') {tag = `ol`
                    } else {tag = `ul`}

                    return (
                        <div className={'col-md-10 m-auto'} key={index}>
                            <tag>
                                { block.data.items.map((item, index_q) => {
                                    return <li dangerouslySetInnerHTML={{__html: item}} key={index_q}></li> 
                                }) }
                            </tag>
                        </div>
                    )
                }

                if (block.type === 'image') {

                    var Class;

                    if (block.data.stretched) Class = 'col-md-12'
                    else                      Class = 'col-md-10 m-auto'

                    return (
                        <div className={ Class } key={index}>
                            <figure className={classes.figure}>
                                <p className={classes.image}><Image small={`${process.env.NEXT_PUBLIC_API_URL}${block.data.file.url}`} large={`${process.env.NEXT_PUBLIC_API_URL}${block.data.file.url}`} alt={ block.data.caption } /></p>
                                <p className={classes.image_caption} dangerouslySetInnerHTML={{__html: block.data.caption}}></p>
                            </figure>
                        </div>
                    )
                }

                if (block.type === 'header') {
                    const Tag = `h${block.data.level}`
                    return (
                        <div className={'col-md-10 m-auto'} key={index}>
                            <Tag dangerouslySetInnerHTML={{__html: block.data.text}} className={classes.heading}></Tag>
                        </div>
                    )
                }
                

            }) }
        </div>
    )
}

export default Content