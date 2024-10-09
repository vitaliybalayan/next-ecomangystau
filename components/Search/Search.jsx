import { withRouter } from 'next/router'
import classes from './Search.module.sass'

function Search({ router }) {

    
    const _handleKeyDown = e => {
        if (e.key === 'Enter' && e.target.value !== '') {
			router.push(`/search?v=${e.target.value}`);
		}
    }
    
    return (
        <div className={classes.container}>
            <input type="search" placeholder={'Поиск...'} onKeyDown={_handleKeyDown.bind(this)} />
        </div>
    )
}

export default withRouter(Search)