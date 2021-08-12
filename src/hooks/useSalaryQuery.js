import { useStaticQuery, graphql } from "gatsby"

export const useSalaryQuery = () => {
	const data = useStaticQuery(graphql`
		query {
			allAirtable(filter: { table: { eq: "Salary" } }) {
				nodes {
					data {
						SalaryExp
						SalaryFigure
						SalaryIdentifier
					}
				}
			}
		}
	`)

	return data.allAirtable.nodes
}
