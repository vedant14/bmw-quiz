import React, { useState } from "react"
import {
  Layout,
  SEO,
  SelectCompany,
  SelectRole,
  SelectExperience,
  Outcome,
  Footer,
} from "../components"

const IndexPage = () => {
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [selectedRole, setSelectedRole] = useState(null)
  const [selectedExperience, setSelectedExperience] = useState(0)
  const finalQuery = selectedRole + " - " + selectedExperience
  console.log("company", selectedCompany)
  console.log("role", selectedRole)
  console.log("experience", selectedExperience)
  return (
    <Layout>
      <SEO title="Home" />

      <SelectCompany
        setSelectedCompany={setSelectedCompany}
        setSelectedRole={setSelectedRole}
        setSelectedExperience={setSelectedExperience}
      />
      {selectedCompany && (
        <SelectRole
          selectedCompany={selectedCompany}
          selectedRole={selectedRole}
          setSelectedExperience={setSelectedExperience}
          setSelectedRole={setSelectedRole}
        />
      )}
      {selectedCompany && selectedRole && (
        <SelectExperience
          selectedExperience={selectedExperience}
          setSelectedExperience={setSelectedExperience}
        />
      )}

      <Outcome
        finalQuery={finalQuery}
        selectedExperience={selectedExperience}
      />

      <Footer />
    </Layout>
  )
}
export default IndexPage
