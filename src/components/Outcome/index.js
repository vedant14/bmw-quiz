import React from "react"
import { useSalaryQuery } from "../../hooks/useSalaryQuery"
import BMW from "../../images/bmw.png"

import { ImageWrapper } from "./styles"

export function Outcome({ selectedExperience, finalQuery }) {
	const salaryData = useSalaryQuery()
	const finalSalary = salaryData?.filter(
		salaryData => salaryData.data.SalaryIdentifier === finalQuery
	)
	const finalSalaryPrint = finalSalary[0]
	const array = []
	console.log(finalSalaryPrint)
	if (finalSalaryPrint) {
		let i = Math.floor(finalSalaryPrint.data.SalaryFigure / 2.5)
		for (; i > 0; i--) {
			array.push(i)
		}
	}

	return (
		<div className="Container">
			{selectedExperience ? (
				[
					array.length === 0 ? (
						<h1>
							Sorry Zero BWM bikes for you. Try getting more experience 😉
						</h1>
					) : (
						<div>
							<h1>You can have {array.length} BMW bikes</h1>
							<ImageWrapper>
								{array.map(item => (
									<img key={item} src={BMW} alt="date" />
								))}
							</ImageWrapper>
						</div>
					),
				]
			) : (
				<div></div>
			)}
		</div>
	)
}
