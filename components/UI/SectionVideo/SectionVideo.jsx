import React, {Component} from 'react'

import PostVideo        from '../PostVideo/PostVideo'
import Header           from '../Sections/Header/Header'
import classes          from './SectionVideo.module.sass'

class Video extends Component {
    render() {
        return(
            <section className={classes.section}>
                <div className={'container'}>
                    <Header title={ this.props.data.category.name } more={ this.props.data.category.link } />
                </div>
                <div className="container">
                    <div className={classes.body}>
                        <div className="row">

                            { this.props.data.articles.map((article, index) => {
                                return (
                                    <div className="col-md-4" key={index}>
                                        <div className={classes.block}>
                                            <PostVideo image={`${process.env.NEXT_PUBLIC_API_URL}${article.image}`} title={ article.title } video={ article.video }></PostVideo>
                                        </div>
                                    </div>
                                )
                            }) }

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Video