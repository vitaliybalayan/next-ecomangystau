import classes from './Share.module.sass'
import { useRouter } 	from "next/router"

function Share(props) {
    
    const router = useRouter()
    const URL = `${process.env.NEXT_PUBLIC_API_URL}${router.asPath}`

    const openLink = (e) => {
        let href = e.target.dataset.href
        if (href.indexOf('https://wa.me/') === 0) window.open(href);
        else window.open(href, "Поделиться ссылкой", "width=500,height=500");
    }

    return (
        <div className={classes.buttons}>
            <span onClick={ openLink } data-href={'https://vk.com/share.php?url=' + URL} className={classes.vk}></span>
            <span onClick={ openLink } data-href={'https://www.facebook.com/sharer/sharer.php?u=' + URL} className={classes.fb}></span>
            <span onClick={ openLink } data-href={'https://twitter.com/share?url='+ URL +'&text='+ props.title +''} className={classes.twitter}></span>
            <span onClick={ openLink } data-href={'https://telegram.me/share/url?url='+ URL +'&text='+ props.title +''} className={classes.telegram}></span>
            <span onClick={ openLink } data-href={'mailto:?subject='+ props.title +'&body='+ URL +''} className={classes.email}></span>
            <span onClick={ openLink } data-href={'https://connect.ok.ru/offer?url='+ URL +'&title='+ props.title +'&description='+ props.desc +''} className={classes.ok}></span>
            <span onClick={ openLink } data-href={'https://wa.me/?text='+ URL +''} className={classes.whatsapp}></span>
        </div>
    )
}

export default Share