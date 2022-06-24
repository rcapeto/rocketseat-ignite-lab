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

export const GET_LESSON_WITH_SLUG = gql`
   query GetLessonBySlug($slug: String) {
      lesson(where: {slug: $slug }) {
         videoId
         description
         title 
         teacher {
            bio
            avatarURL
            name
         }
      }
   }
`;