export interface Lesson {
   availableAt: string;
   id: string;
   lessonType: "live" | "class";
   slug: string;
   title: string;
};

export interface LessonEventPage {
   title: string;
   description: string;
   videoId: string;
   teacher: {
      bio: string;
      avatarURL: string;
      name: string;
   }
}