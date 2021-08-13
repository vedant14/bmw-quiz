import React, { useState } from "react"
import { useRoleQuery } from "../../hooks/useRoleQuery"
// import { Wrapper } from "./styles"

export function SelectRole({
	selectedCompany,
	setSelectedRole,
	selectedRole,
	setSelectedExperience,
}) {
	const roleData = useRoleQuery()
	const [active, setActive] = useState(false)

	const handleAnswerOptionClick = answer => {
		setSelectedRole(answer.data.Role)
		setActive(answer.data.RoleId)
		setSelectedExperience(0)
	}
	const featuredRole = roleData?.filter(
		roleData => roleData.data.RoleCompanySearch === selectedCompany
	)
	return (
		<div className="Container">
			<h3>Okay, Now at {selectedCompany}, what could be your role?</h3>

			<div>
				{featuredRole.map(role => (
					<button
						className={active === role.data.RoleId ? "active" : ""}
						key={role.data.RoleId}
						onClick={() => handleAnswerOptionClick(role)}
					>
						{role.data.Role}
					</button>
				))}
			</div>
		</div>
	)
}
