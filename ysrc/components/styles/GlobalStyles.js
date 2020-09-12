import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	body {
		background-color: #fbfbfb;
		margin: 0px;
		padding: 0px;
	}

	* {
		box-sizing: border-box;
	}
`

export const Container = styled.div`
	width: 100%;
	height: auto;
	display: block
`
