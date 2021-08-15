import { useStaticQuery, graphql } from "gatsby"

export const useCompanyQuery = () => {
	const data = useStaticQuery(graphql`
		{
			allAirtable(
				filter: {
					table: { eq: "Company" }
					data: { CompanyPublish: { eq: true } }
				}
				sort: { fields: data___CompanyName }
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
