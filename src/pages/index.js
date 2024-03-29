import React, { useState } from "react"
import { graphql } from "gatsby"
import {
  Layout,
  SEO,
  Header,
  SelectCompany,
  SelectRole,
  SelectExperience,
  GridWrapper,
  Outcome,
  Footer,
} from "../components"

const IndexPage = ({ data }) => {
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [selectedRole, setSelectedRole] = useState(null)
  const [selectedExperience, setSelectedExperience] = useState(0)
  const finalQuery = selectedRole + " - " + selectedExperience
  return (
    <Layout>
      <Header />
      <SEO
        title="BMW bikes for engineers"
        description="Find out how many BMW bikes can a engineer earn in the unicorns of India."
        image={data.file.childrenImageSharp[0].resize}
        pathname="home"
      />
      <GridWrapper selectedRole={selectedRole}>
        <div className="Container" style={{ marginBottom: "30px" }}>
          <h1>
            How many BMW bikes 🏍 can you earn working in tech for one of the
            unicorns 🦄 in India?
          </h1>
          <hr />
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
      </GridWrapper>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  {
    file(name: { eq: "social-card-twitter" }) {
      name
      childrenImageSharp {
        resize(width: 1200) {
          src
          height
          width
        }
      }
    }
  }
`
export default IndexPage
