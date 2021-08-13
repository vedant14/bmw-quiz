import React, { useState } from "react"
import { useCompanyQuery } from "../../hooks/useCompanyQuery"

import { Wrapper } from "./styles"

export function SelectCompany({
	setSelectedCompany,
	setSelectedRole,
	setSelectedExperience,
}) {
	const companyData = useCompanyQuery()

	const [active, setActive] = useState(false)
	const handleAnswerOptionClick = answer => {
		setSelectedCompany(answer.data.CompanyName)
		setSelectedRole(null)
		setSelectedExperience(0)
		setActive(answer.data.CompanyID)
	}
	return (
		<Wrapper className="Container">
			<h1>
				Ever wondered how many BMW bikes 🏍 you are worth, had you been working
				in a tech team for one of the unicorns 🦄 in India?
			</h1>
			<h3>See for yourself 👇🏼</h3>
			<hr />
			<h3>Select your dream unicorn 🦄</h3>
			<div>
				{companyData.map(company => (
					<button
						className={active === company.data.CompanyID ? "active" : ""}
						key={company.data.CompanyID}
						onClick={() => handleAnswerOptionClick(company)}
					>
						{company.data.CompanyName}
					</button>
				))}
			</div>
		</Wrapper>
	)
}
