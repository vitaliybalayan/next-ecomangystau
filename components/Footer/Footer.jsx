import classes      from './Footer.module.sass'

function Footer(props) {
    return (
        <footer className={classes.footer}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-10 m-auto'}>
                        <div className={classes.block}>
                            <div className={classes.block_header}>
                                <div className={classes.logotype}>
                                    <img src={'/logo.svg'} alt="Logotype"/>
                                </div>
                                <p className={classes.logotype_desc}>Неправительственное учреждение “Эко Мангистау”<br />— внепартийная, некоммерческая и не государственная организация.</p>
                            </div>
                            <div className={classes.block_footer}>
                                <div className="row align-items-center">
                                    <div className="col-6"><p>Свяжитесь с нами: <a href={`mailto:${props.email}`}>{ props.email }</a></p></div>
                                    <div className="col-6 justify-content-end d-flex">
                                        <a href="https://www.facebook.com/ecomangystau.kz/" rel="noopener noreferrer" target={'_blank'} className={classes.s_link}><div className={classes.i_facebook}></div></a>
                                        <a href="https://www.instagram.com/ekomangystau/" rel="noopener noreferrer" target={'_blank'} className={classes.s_link}><div className={classes.i_instagram}></div></a>
                                        <a href="https://www.youtube.com/user/ecomangystau" rel="noopener noreferrer" target={'_blank'} className={classes.s_link}><div className={classes.i_yt}></div></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer