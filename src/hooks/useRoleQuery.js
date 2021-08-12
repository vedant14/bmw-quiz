import { useStaticQuery, graphql } from "gatsby"

export const useRoleQuery = () => {
	const data = useStaticQuery(graphql`
		query {
			allAirtable(filter: { table: { eq: "Roles" } }) {
				nodes {
					data {
						Role
						RoleCompanySearch
						RoleId
						RoleName
						RoleNotes
					}
				}
			}
		}
	`)

	return data.allAirtable.nodes
}
