import { useStaticQuery, graphql } from "gatsby"

export const useCompanyQuery = () => {
	const data = useStaticQuery(graphql`
		{
			allAirtable(
				filter: {
					table: { eq: "Company" }
					data: { CompanyPublish: { eq: true } }
				}
			) {
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
