import { Swiper, SwiperSlide } 	from 'swiper/react'
import classes  				from '../styles/Index.module.sass'
import Services 				from '../components/UI/ServiceSlider/ServiceSlider'
import PostMinifyRow			from '../components/UI/PostMinifyRow/PostMinifyRow'
import MainSlider				from '../components/UI/MainSlider/MainSlider'
import LastetSection			from '../components/UI/LastetSection/LastetSection'
import SectionVideo				from '../components/UI/SectionVideo/SectionVideo'
import MinifySection			from '../components/UI/MinifySection/MinifySection'
import SEO						from '../components/SEO/SEO'

function Index({ home }) {

	const paramsSlider = {
		autoplay: {
			delay: 2500,
			disableOnInteraction: false
		},
	}

	const renderLastArticles = () => {
		return home.lastArticles.map((article, index) => {
			return (
				<PostMinifyRow key={index} to={article.url} title={article.title} subtitle={article.desc} />
			)
		})
	}

	return (
		<div className={classes.home}>
			<SEO data={ home.seo } />
			<section className={classes.bg_gradient}>

				<Services data={home.services} />

				<div className={classes.second}>
					<div className={'container'}>
						<div className={'row'}>
							<div className={'col-xl-8'}>
								<div className={classes.banner_slider}>
									<Swiper {...paramsSlider}>
										{ home.slides.map((slide, index) => {
											return <SwiperSlide key={index}><a href={slide.link} className={classes.banner}><img src={slide.image} alt={slide.name} /></a></SwiperSlide> 
										}) }
									</Swiper>
								</div>
							</div>
							<div className={'col-xl-4 mt-4 mt-xl-0'}>
								<h2 className={classes.h2_title}>Последние новости</h2>
								{ renderLastArticles() }
							</div>
						</div>
					</div>

				</div>

				<div className={'container main__slider'}>
					<MainSlider data={home.mainSlider} />
				</div>
			</section>
			<LastetSection data={home.categories[1]}/>
			<SectionVideo data={home.categories[2]}/>
			{ home.categories[3] ? <LastetSection data={home.categories[3]} /> : ''}
			<MinifySection data={home.categories[4]} />
			<LastetSection data={home.categories[5]} />
			<MinifySection data={home.categories[6]} />
			<LastetSection data={home.categories[7]} />
		</div>
	)
}

export async function getServerSideProps() {  
	const layout	= await (await fetch(`${process.env.API_URL}/api/layout`)).json()

	const response	= await fetch(`${process.env.API_URL}/api/home`)
	const home		= await response.json()

	// Pass data to the page via props
	return { props: { home, layout } }
}

export default Index