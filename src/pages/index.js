import React, { useState } from "react"
import {
  Layout,
  SEO,
  Hero,
  SelectCompany,
  SelectRole,
  SelectExperience,
  Outcome,
} from "../components"

const IndexPage = () => {
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [selectedRole, setSelectedRole] = useState(null)
  const [selectedExperience, setSelectedExperience] = useState(0)
  const finalQuery = selectedRole + " - " + selectedExperience
  return (
    <Layout>
      <SEO title="Home" />
      <SelectCompany
        setSelectedCompany={setSelectedCompany}
        setSelectedRole={setSelectedRole}
      />
      <SelectRole
        selectedCompany={selectedCompany}
        setSelectedRole={setSelectedRole}
      />
      <SelectExperience
        selectedExperience={selectedExperience}
        setSelectedExperience={setSelectedExperience}
      />
      <p>SelectExperience is {finalQuery}</p>
      <Outcome finalQuery={finalQuery} />
    </Layout>
  )
}
export default IndexPage
