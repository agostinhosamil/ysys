import '../styles/globals.css'

import GlobalStyles, { Container } from '@styles/GlobalStyles'

function MyApp ({ Component, pageProps }) {
  return (
  	<>
  		<GlobalStyles />
  		<Container>
  			<Component {...pageProps} />
  		</Container>
  	</>
  )
}

export default MyApp
