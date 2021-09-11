import { useStaticQuery, graphql } from "gatsby"

export const useCompanyQuery = () => {
	const data = useStaticQuery(graphql`
		{
			allCompanyJson {
				nodes {
					label
					value
				}
			}
		}
	`)

	return data.allCompanyJson.nodes
}
