import type { Hobby } from "./HobbiesCarousel.types";

export const HOBBIES: Hobby[] = [
  {
    id: 0,
    title: "Gaming",
    descriptionTitle: "PS5 / Oculus",
    description:
      "Most of my gaming time goes to FIFA. I often play Mortal Kombat 11, Call of Duty, Marvel's Spider-Man and a few others . I'm also exploring VR gaming with Oculus.",
  },
  {
    id: 1,
    title: "Music",
    descriptionTitle: "An eclectic music taste",
    description:
      "I enjoy music and I enjoy discovering music more. I listen to a broad range of genres. Often reoccuring are pop, indie soul, electronic, afro house and afrobeats. Spotify Wrapped showed that I listened to 196,334 minutes of music in 2021 (approximately 40% of the year).",
  },
  {
    id: 2,
    title: "Football",
    descriptionTitle: "SUNDAY LEAGUE HERO",
    description:
      "I'm a big football enthusiast. I'm either watching or playing unprofessional football as a center forward. I'm a fan of FC Bayern Munich.",
  },
];

export const UPDATE_CONTROLS_DELAY = 750;
export const RESTORE_CONTROLS_TRANSITION_DELAY = 50;
