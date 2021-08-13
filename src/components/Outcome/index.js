import React, { useState } from "react"
import { useSalaryQuery } from "../../hooks/useSalaryQuery"
import BMW from "../../images/bmw.svg"

// import { Wrapper } from "./styles"

export function Outcome({ finalQuery }) {
	const salaryData = useSalaryQuery()
	const finalSalary = salaryData?.filter(
		salaryData => salaryData.data.SalaryIdentifier === finalQuery
	)
	const finalSalaryPrint = finalSalary[0]
	const array = []
	console.log(finalSalaryPrint)
	if (finalSalaryPrint) {
		let i = Math.floor(finalSalaryPrint.data.SalaryFigure / 250000)
		console.log("i", i)
		for (; i > 0; i--) {
			array.push(i)
		}
		console.log("array", array)
	}

	return (
		<div>
			<h1>Outcome</h1>
			{finalSalaryPrint && <div>{finalSalaryPrint.data.SalaryFigure}</div>}
			{array.map(item => (
				<div key={item}>
					<img src={BMW} alt="date" />
				</div>
			))}
		</div>
	)
}
