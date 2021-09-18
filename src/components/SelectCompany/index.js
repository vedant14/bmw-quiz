import React from "react"
import { useCompanyQuery } from "../../hooks/useCompanyQuery"
import Select from "react-select"

import { Wrapper } from "./styles"

export function SelectCompany({
	setSelectedCompany,
	setSelectedRole,
	setSelectedExperience,
}) {
	const companyData = useCompanyQuery()

	const handleChange = value => {
		if (value !== null) {
			setSelectedCompany(value.label)
		} else {
			setSelectedCompany(null)
		}
		setSelectedExperience(null)
		setSelectedRole(null)
	}

	return (
		<Wrapper className="Container">
			<div>
				<h3>Select your dream unicorn 🦄</h3>
				<Select
					className="select-dropdown"
					classNamePrefix="select"
					placeholder="Select"
					isSearchable={true}
					isClearable={true}
					options={companyData}
					onChange={e => handleChange(e)}
				/>
			</div>
		</Wrapper>
	)
}
