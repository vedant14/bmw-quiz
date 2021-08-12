import React from "react"
import { useSalaryQuery } from "../../hooks/useSalaryQuery"

// import { Wrapper } from "./styles"

export function Outcome({ finalQuery }) {
	const salaryData = useSalaryQuery()
	const finalSalary = salaryData?.filter(
		salaryData => salaryData.data.SalaryIdentifier === finalQuery
	)
	const finalSalaryPrint = finalSalary[0]
	console.log(finalSalaryPrint)
	return (
		<div>
			<h1>Outcome</h1>
			{finalSalaryPrint && <div>{finalSalaryPrint.data.SalaryFigure}</div>}
		</div>
	)
}
