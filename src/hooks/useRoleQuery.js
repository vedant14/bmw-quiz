import { useStaticQuery, graphql } from "gatsby"

export const useRoleQuery = () => {
	const data = useStaticQuery(graphql`
		{
			allAirtable(
				filter: {
					table: { eq: "Roles" }
					data: { RolePublish: { eq: "true" } }
				}
				sort: { fields: data___RoleName }
			) {
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
