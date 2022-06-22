import { gql } from "@apollo/client";

export const GET_LESSONS_SIDEBAR = gql`
   query {
      lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
         id
         lessonType
         availableAt
         title 
         slug 
      }
   }
`;