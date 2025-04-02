import Header from "../UI/Sections/Header/Header";
import classes from "./SeeAlso.module.sass";
import PostColumn from "../UI/PostColumn/PostColumn";
import PostVideo from "../UI/PostVideo/PostVideo";

function SeeAlso(props) {
	return (
		<section className={classes.section}>
			<div className={"container"}>
				<Header title={"Смотреть так же"} />
			</div>
			<div className={"container"}>
				<div className="row">
					{props.articles.map((article, index) => {
                        const imageUrl = `${process.env.NEXT_PUBLIC_API_URL}${article.image}`
						if (article.type === "article") {
							return (
								<div className="col-xl-4 col-md-6" key={index}>
									<div className={classes.post}>
										<PostColumn to={article.url} image={imageUrl} title={article.title} desc={article.desc} date={article.footer}></PostColumn>
									</div>
								</div>
							);
						} else {
							return (
								<div className="col-xl-4 col-md-6" key={index}>
									<div className={classes.post}>
										<PostVideo image={imageUrl} title={article.title} video={article.video} />
									</div>
								</div>
							);
						}
					})}
				</div>
			</div>
		</section>
	);
}

export default SeeAlso;
