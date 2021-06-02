import React from 'react';
import { SectionContainer, SectionHeader} from "./styled"

const Section = ({ extraTitle, body }) => {
  if (extraTitle) {
    return (
      <SectionContainer>
        <SectionHeader>
          {extraTitle}
        </SectionHeader>
        <div>
          {body}
        </div>
      </SectionContainer>
    )
  }
  return (
    <SectionContainer>
      <div>
        {body}
      </div>
    </SectionContainer>
  )
};

export default Section;