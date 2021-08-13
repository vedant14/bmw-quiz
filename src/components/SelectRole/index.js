import React from "react"
import { useRoleQuery } from "../../hooks/useRoleQuery"

// import { Wrapper } from "./styles"

export function SelectRole({ selectedCompany, setSelectedRole }) {
	const roleData = useRoleQuery()
	const handleAnswerOptionClick = answer => {
		setSelectedRole(answer)
	}
	const featuredRole = roleData?.filter(
		roleData => roleData.data.RoleCompanySearch === selectedCompany
	)
	return (
		<div>
			<h1>Select from available roles at {selectedCompany}</h1>

			<div>
				{featuredRole.map(role => (
					<button
						key={role.data.RoleId}
						onClick={() => handleAnswerOptionClick(role.data.Role)}
					>
						{role.data.Role}
					</button>
				))}
			</div>
		</div>
	)
}
