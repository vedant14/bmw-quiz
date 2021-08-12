import React from "react"
import { useCompanyQuery } from "../../hooks/useCompanyQuery"

// import { Wrapper } from "./styles"

export function SelectCompany({ setSelectedCompany, setSelectedRole }) {
	const companyData = useCompanyQuery()
	const handleAnswerOptionClick = answer => {
		setSelectedCompany(answer)
		setSelectedRole(null)
	}
	return (
		<div>
			<h1>Select Company</h1>
			<div>
				{companyData.map(company => (
					<button
						key={company.data.CompanyID}
						onClick={() => handleAnswerOptionClick(company.data.CompanyName)}
					>
						{company.data.CompanyName}
					</button>
				))}
			</div>
		</div>
	)
}
