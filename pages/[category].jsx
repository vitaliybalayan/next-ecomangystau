import { useEffect, useState } from 'react'

import { useRouter }    from 'next/router'
import axios            from 'axios'
import SEO				from '../components/SEO/SEO'
import classes          from '../styles/Category.module.sass'
import Head             from '../components/UI/PageHeader/PageHeader'
import PostColumn       from '../components/UI/PostColumn/PostColumn'
import PostVideo        from '../components/UI/PostVideo/PostVideo'
import NotFound         from '../components/NotFound/NotFound'

function Category({ category }) {

    if (typeof(category.original) != "undefined") {
        if (category.original.status === 404) {
            return <NotFound />
        }
    }

    const router = useRouter()
    
    const [articles, setArticles] 			= useState([])
	const [currentPage, setCurrentPage]		= useState(1)
	const [lastPage, setLastPage]			= useState()
    const [fetching, setFetching] 			= useState(true)
    const [currentSlug, setCurrentSlug]		= useState()
    
    function getData() {
		axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/c/articles/` + router.query.category + `?page=1`)
			.then(response => {
				setArticles(response.data.articles)
				setLastPage(response.data.pagination.lastPage + 1)
				setCurrentPage(2)

				if (response.data.status === 404) {
					setNotFound(true)
				}
			})
			.finally(() => {setFetching(false)})
	}

	useEffect(() => {
		if (fetching) {
			if (lastPage !== currentPage) {
				axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/c/articles/` + router.query.category + `?page=${currentPage}`)
                    .then(response => {
                        setArticles(articles => [...articles, ...response.data.articles])
                        setLastPage(response.data.pagination.lastPage + 1)
                        setCurrentPage( prevState => prevState + 1 )
                        setCurrentSlug(router.query.category)
                    })
                    .finally(() => {setFetching(false)})
			}
		}
	}, [fetching])

	useEffect(() => {
		document.addEventListener('scroll', scrollHandller)
		return function() {
			document.removeEventListener('scroll', scrollHandller)
		}
    }, [])
    
    const scrollHandller = (e) => {
		var footer = document.getElementsByTagName('footer')[0].clientHeight + document.getElementById('prod').clientHeight
		if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight + footer) < 150) {
			setFetching(true)
		}
    }
    
    if (currentSlug !== router.query.category) {
        setCurrentSlug(router.query.category)
        getData()
    }

    return (
        <div className={classes.body}>

            {/* IN HEAD DOCUMENT */}
                <SEO data={ category.seo } />
            {/* *** */}

            <Head title={category.title} desc={category.desc} count_articles={category.count_articles} />            

            <div className={classes.content}>
                <div className={'container'}>
                    <div className="row">
                        { articles.map(article =>
                            {if (article.type === 'article') {
                                return (
                                    <div className="col-xl-4 col-md-6" key={article.id}>
                                        <div className={classes.post}>
                                            <PostColumn to={ article.url } image={ `${process.env.NEXT_PUBLIC_API_URL}${article.image}` } title={article.title} desc={article.desc} date={article.footer} />
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="col-xl-4 col-md-6" key={article.id}>
                                        <div className={classes.post_video}>
                                            <PostVideo image={ `${process.env.NEXT_PUBLIC_API_URL}${article.image}` } title={ article.title } video={ article.video } />
                                        </div>
                                    </div>
                                )
                            }}
                        ) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(ctx) {

	const layout	= await (await fetch(`${process.env.API_URL}/api/layout`)).json()
	
	const response	= await fetch(`${process.env.API_URL}/api/c/info/${ctx.query.category}`)
    const category	= await response.json()
    
	// Pass data to the page via props
	return { props: {layout, category} }
}


export default Category