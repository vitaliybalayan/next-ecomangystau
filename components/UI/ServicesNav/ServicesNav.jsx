import CategoryButton from '../../UI/CategoryButton/CategoryButtonNav'

function ServicesNav(props) {
    return (
        <div className="container">      
            <div className="row">
                { props.services.articles.map((article, index) => {
                    return (
                        <div className="col-lg-6" key={ index }>
                            <CategoryButton to={ article.url } title={ article.title } subtitle={ article.desc } />
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}

export default ServicesNav