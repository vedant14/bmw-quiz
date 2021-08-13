import React from "react"

import { Range, RangeIndicator } from "./styles"

export function SelectExperience({
	selectedExperience,
	setSelectedExperience,
}) {
	const handleAnswerOptionClick = answer => {
		setSelectedExperience(answer)
	}
	const inputExperienceValue = selectedExperience * 8 + "%"
	const inputExperienceMinus = 8 - selectedExperience * 3 + "px"
	return (
		<div className="Container">
			<h3>How many years of experience do you have in this role?</h3>
			<Range>
				<input
					type="range"
					min="0"
					max="10"
					className="slider"
					value={selectedExperience}
					onChange={e => {
						setSelectedExperience(e.target.value)
					}}
				/>
				<RangeIndicator
					id="actual"
					inputExperience={inputExperienceValue}
					inputExperienceMinus={inputExperienceMinus}
				>
					{selectedExperience} <span id="hide">years</span>
				</RangeIndicator>
				<RangeIndicator id="min">Just starting</RangeIndicator>
				<RangeIndicator id="max">10+ Year</RangeIndicator>
			</Range>
		</div>
	)
}
