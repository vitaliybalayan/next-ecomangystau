import React, {Component}   from 'react'
import classes              from './MinifySection.module.sass'

import Header               from '../Sections/Header/Header'
import PostMinifyColumn     from '../PostMinifyColumn/PostMinifyColumn'

class MinifySection extends Component {
    render() {
        return (
            <section className={classes.section}>
                <div className={'container'}>
                    <Header title={ this.props.data.category.name } more={ this.props.data.category.link } />
                </div>
                <div className="container">
                    <div className={classes.body}>
                        <div className="row">

                            { this.props.data.articles.map((article, index) => {
                                return (
                                    <div className="col-md-6" key={index}>
                                        <PostMinifyColumn to={ article.url } image={ article.image } title={article.title} category={article.category_name} category_link={article.category_link} date={article.date}></PostMinifyColumn>
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

export default MinifySection