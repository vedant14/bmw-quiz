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
import SocialImage from "../images/social.png"

const IndexPage = () => {
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [selectedRole, setSelectedRole] = useState(null)
  const [selectedExperience, setSelectedExperience] = useState(0)
  const finalQuery = selectedRole + " - " + selectedExperience
  return (
    <Layout>
      <SEO
        title="BMW bikes for engineers"
        description="Measure how many BMW bikes can a engineer earn in the unicorns of India."
        image={SocialImage}
      />
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
