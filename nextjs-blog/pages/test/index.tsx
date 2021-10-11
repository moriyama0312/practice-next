import Layout from '../../components/layout'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'

const TestPage = ({}) => {
	return (
		<Layout>
			<Head>
				<title>Test Page</title>
			</Head>
			<div>
				<h1 className={utilStyles.headingXl}>This is Test Page</h1>
				<div>
					ここはテストページです。
				</div>
			</div>
		</Layout>
	)
}

export default TestPage