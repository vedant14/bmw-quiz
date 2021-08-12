import React from "react"

// import { Wrapper } from "./styles"

export function SelectExperience({
	selectedExperience,
	setSelectedExperience,
}) {
	const handleAnswerOptionClick = answer => {
		setSelectedExperience(answer)
	}
	return (
		<div>
			<h1>Vedant</h1>
			<p>{selectedExperience} </p>
			<input
				type="range"
				min="0"
				max="10"
				value={selectedExperience}
				onChange={e => {
					setSelectedExperience(e.target.value)
				}}
			/>
		</div>
	)
}
