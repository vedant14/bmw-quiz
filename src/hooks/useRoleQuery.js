import { useStaticQuery, graphql } from "gatsby"

export const useRoleQuery = () => {
	const data = useStaticQuery(graphql`
		{
			allAirtable(
				filter: {
					table: { eq: "Roles" }
					data: { RolePublish: { eq: "true" } }
				}
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
