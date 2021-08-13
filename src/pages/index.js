import React, { useState } from "react"
import {
  Layout,
  SEO,
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
      <p>
        Inspired by -{" "}
        <a
          href="https://www.linkedin.com/posts/ashneer_bharatpe-bmw-bmwbharatpe-activity-6826414398748278784-Py1l"
          target="_blank"
          rel="noreferrer"
        >
          This post
        </a>
      </p>
    </Layout>
  )
}
export default IndexPage
