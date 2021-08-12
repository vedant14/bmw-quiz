import { useStaticQuery, graphql } from "gatsby"

export const useCompanyQuery = () => {
	const data = useStaticQuery(graphql`
		query {
			allAirtable(filter: { table: { eq: "Company" } }) {
				nodes {
					data {
						CompanyName
						CompanyID
						CompanyLogo {
							url
						}
					}
				}
			}
		}
	`)

	return data.allAirtable.nodes
}
