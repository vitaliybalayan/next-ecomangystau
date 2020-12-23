import Head     from 'next/head'
import Header   from '../../components/Header/Header'
import Footer   from '../../components/Footer/Footer'
import classes  from './Layout.module.sass'

function Layout(props) {
	return (
		<div className={classes.layout}>

			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet"></link>
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap-grid.min.css" />
			</Head>

			<Header menuUp={props.layout.up} menuCategories={props.layout.categories} />

			<main className={classes.content}>
				{ props.children }
			</main>

			<Footer data={ props.layout.email } />

			<div className={classes.production} id={'prod'}>
				<a href="https://parallax.pro/" rel="noopener noreferrer" target={'_blank'}>
					<svg width="170" height="24" viewBox="0 0 170 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M135.917 4.86523C137.001 4.86523 137.999 5.1152 138.911 5.61512C139.84 6.11504 140.571 6.83906 141.105 7.78719C141.656 8.71808 141.931 9.82136 141.931 11.097C141.931 12.6313 141.587 14.019 140.898 15.2602C140.227 16.4841 139.307 17.4495 138.136 18.1563C136.966 18.8458 135.667 19.1906 134.239 19.1906C132.122 19.1906 130.625 18.501 129.748 17.122L128.379 24.0002H124.353L128.121 5.0721H131.942L131.658 6.44258C132.811 5.39101 134.23 4.86523 135.917 4.86523ZM133.774 15.8549C134.566 15.8549 135.271 15.6653 135.891 15.286C136.51 14.8895 136.992 14.3465 137.336 13.657C137.68 12.9674 137.853 12.1744 137.853 11.278C137.853 10.3299 137.569 9.58002 137.001 9.02838C136.45 8.47674 135.676 8.20092 134.678 8.20092C133.903 8.20092 133.206 8.39917 132.587 8.79566C131.967 9.17491 131.486 9.70931 131.141 10.3989C130.797 11.0884 130.625 11.8814 130.625 12.7778C130.625 13.7259 130.9 14.4758 131.451 15.0274C132.002 15.5791 132.776 15.8549 133.774 15.8549Z" fill="#39642F"/><path d="M149.427 6.72701C150.03 6.07194 150.752 5.59788 151.596 5.30482C152.456 5.01176 153.463 4.86523 154.616 4.86523L153.893 8.58879C153.411 8.55432 153.101 8.53708 152.964 8.53708C151.742 8.53708 150.761 8.83876 150.021 9.44211C149.298 10.0455 148.808 10.985 148.55 12.2606L147.208 18.9837H143.181L145.943 5.0721H149.763L149.427 6.72701Z" fill="#39642F"/><path d="M161.324 19.1906C159.93 19.1906 158.699 18.932 157.633 18.4149C156.583 17.8977 155.765 17.1737 155.18 16.2428C154.612 15.2946 154.329 14.2 154.329 12.9588C154.329 11.4246 154.69 10.0455 155.413 8.82152C156.135 7.59757 157.133 6.6322 158.407 5.92541C159.68 5.21863 161.117 4.86523 162.718 4.86523C164.129 4.86523 165.359 5.12381 166.409 5.64098C167.458 6.15814 168.267 6.89078 168.835 7.83891C169.42 8.7698 169.713 9.85584 169.713 11.097C169.713 12.6313 169.351 14.0104 168.629 15.2343C167.923 16.4583 166.925 17.4236 165.634 18.1304C164.361 18.8372 162.924 19.1906 161.324 19.1906ZM161.582 15.8549C162.356 15.8549 163.053 15.6653 163.673 15.286C164.292 14.8895 164.774 14.3465 165.118 13.657C165.462 12.9674 165.634 12.1744 165.634 11.278C165.634 10.3299 165.359 9.58002 164.808 9.02838C164.258 8.47674 163.483 8.20092 162.485 8.20092C161.694 8.20092 160.988 8.39917 160.369 8.79566C159.749 9.17491 159.267 9.70931 158.923 10.3989C158.579 11.0884 158.407 11.8814 158.407 12.7778C158.407 13.7259 158.682 14.4758 159.233 15.0274C159.801 15.5791 160.584 15.8549 161.582 15.8549Z" fill="#39642F"/><path fillRule="evenodd" clipRule="evenodd" d="M4.76079 0H73.9817L69.9836 23.9998H8.85282L10.194 17.2763C11.0716 18.6514 12.5687 19.339 14.6853 19.339C16.1136 19.339 17.4129 18.9952 18.583 18.3076C19.7532 17.6029 20.6738 16.6403 21.345 15.4198C22.0333 14.1822 22.3775 12.7985 22.3775 11.2686C22.3775 9.99661 22.1021 8.89649 21.5515 7.96827C21.018 7.02286 20.2867 6.30091 19.3574 5.80242C18.4454 5.30393 17.4473 5.05469 16.3632 5.05469C14.6767 5.05469 13.257 5.57896 12.1041 6.62751L12.388 5.26096H8.56776L4.82609 23.9998H0L4.76079 0ZM74.0104 23.9998L78.0084 0H81.744L77.746 23.9998H74.0104ZM81.7728 23.9998H119.483L124.27 0H85.7708L81.7728 23.9998ZM102.545 5.26096L99.7826 19.1327H95.9624L96.2205 17.7662C95.0675 18.8147 93.6478 19.339 91.9614 19.339C90.8773 19.339 89.8792 19.0897 88.9672 18.5913C88.0551 18.0928 87.3238 17.3794 86.7731 16.4512C86.2396 15.5058 85.9729 14.3971 85.9729 13.1251C85.9729 11.5952 86.3085 10.2201 86.9796 8.99963C87.6679 7.762 88.5972 6.7994 89.7673 6.11183C90.9375 5.40707 92.2281 5.05469 93.6392 5.05469C95.7731 5.05469 97.2788 5.75085 98.1564 7.14318L98.5178 5.26096H102.545ZM93.2004 16.0129C93.992 16.0129 94.6975 15.8238 95.317 15.4456C95.9365 15.0503 96.4184 14.5088 96.7626 13.8212C97.1067 13.1337 97.2788 12.3429 97.2788 11.4491C97.2788 10.5037 96.9949 9.75596 96.427 9.2059C95.8763 8.65584 95.1019 8.38081 94.1039 8.38081C93.3123 8.38081 92.6067 8.57849 91.9872 8.97384C91.3677 9.35201 90.8859 9.88488 90.5417 10.5724C90.1976 11.26 90.0255 12.0507 90.0255 12.9446C90.0255 13.89 90.3008 14.6377 90.8515 15.1878C91.4193 15.7378 92.2023 16.0129 93.2004 16.0129ZM112.906 12.1968L116.778 19.1327H112.519L110.248 14.8784L106.247 19.1327H101.652L108.596 12.0163L104.905 5.26096H109.086L111.28 9.33482L115.152 5.26096H119.592L112.906 12.1968ZM16.3373 15.4456C15.7178 15.8238 15.0123 16.0129 14.2207 16.0129C13.2226 16.0129 12.4482 15.7378 11.8976 15.1878C11.3469 14.6377 11.0716 13.89 11.0716 12.9446C11.0716 12.0507 11.2437 11.26 11.5878 10.5724C11.932 9.88488 12.4138 9.35201 13.0333 8.97385C13.6528 8.57849 14.3498 8.38082 15.1241 8.38082C16.1222 8.38082 16.8966 8.65584 17.4473 9.2059C18.0152 9.75596 18.2991 10.5037 18.2991 11.4491C18.2991 12.3429 18.127 13.1337 17.7828 13.8212C17.4387 14.5088 16.9568 15.0503 16.3373 15.4456ZM37.7212 19.1327L40.4832 5.26096H36.4564L36.095 7.14319C35.2174 5.75085 33.7117 5.05469 31.5778 5.05469C30.1667 5.05469 28.8761 5.40707 27.7059 6.11183C26.5358 6.7994 25.6065 7.762 24.9182 8.99963C24.2471 10.2201 23.9115 11.5952 23.9115 13.1251C23.9115 14.3971 24.1782 15.5058 24.7117 16.4512C25.2624 17.3794 25.9937 18.0928 26.9058 18.5913C27.8178 19.0897 28.8159 19.339 29.9 19.339C31.5864 19.339 33.0061 18.8147 34.1591 17.7662L33.901 19.1327H37.7212ZM33.2556 15.4456C32.6361 15.8238 31.9306 16.0129 31.139 16.0129C30.1409 16.0129 29.3579 15.7378 28.7901 15.1878C28.2394 14.6377 27.9641 13.89 27.9641 12.9446C27.9641 12.0507 28.1362 11.26 28.4803 10.5724C28.8245 9.88488 29.3063 9.35201 29.9258 8.97385C30.5453 8.57849 31.2509 8.38082 32.0424 8.38082C33.0405 8.38082 33.8149 8.65584 34.3656 9.2059C34.9335 9.75596 35.2174 10.5037 35.2174 11.4491C35.2174 12.3429 35.0453 13.1337 34.7011 13.8212C34.357 14.5088 33.8751 15.0503 33.2556 15.4456ZM47.6959 6.91113C48.2982 6.25794 49.021 5.78523 49.8642 5.49301C50.7246 5.2008 51.7313 5.05469 52.8843 5.05469L52.1615 8.76757C51.6797 8.7332 51.3699 8.71601 51.2323 8.71601C50.0105 8.71601 49.0296 9.01682 48.2896 9.61844C47.5669 10.2201 47.0764 11.1569 46.8183 12.4289L45.4761 19.1327H41.4493L44.2113 5.26096H48.0315L47.6959 6.91113ZM66.4326 19.1327L69.1946 5.26096H65.1678L64.8064 7.14319C63.9288 5.75085 62.4231 5.05469 60.2892 5.05469C58.8781 5.05469 57.5875 5.40707 56.4174 6.11183C55.2472 6.7994 54.3179 7.762 53.6296 8.99963C52.9585 10.2201 52.6229 11.5952 52.6229 13.1251C52.6229 14.3971 52.8896 15.5058 53.4231 16.4512C53.9738 17.3794 54.7051 18.0928 55.6172 18.5913C56.5292 19.0897 57.5273 19.339 58.6114 19.339C60.2978 19.339 61.7175 18.8147 62.8705 17.7662L62.6124 19.1327H66.4326ZM61.967 15.4456C61.3475 15.8238 60.642 16.0129 59.8504 16.0129C58.8523 16.0129 58.0694 15.7378 57.5015 15.1878C56.9508 14.6377 56.6755 13.89 56.6755 12.9446C56.6755 12.0507 56.8476 11.26 57.1917 10.5724C57.5359 9.88488 58.0177 9.35201 58.6372 8.97385C59.2567 8.57849 59.9623 8.38082 60.7539 8.38082C61.7519 8.38082 62.5263 8.65584 63.077 9.2059C63.6449 9.75596 63.9288 10.5037 63.9288 11.4491C63.9288 12.3429 63.7567 13.1337 63.4126 13.8212C63.0684 14.5088 62.5866 15.0503 61.967 15.4456Z" fill="#39642F"/></svg>
				</a>
			</div>
			<span className={classes.back_to_top} id={'back_to_top'} title="Наверх">&uarr;</span> 
		</div>
	)
}

export default Layout