import { ProjectsType, TOTAL_PROJECTS, TOTAL_LABS } from "../Projects";
import { toTwoDigits } from "../../utils";
import type { WorkTab } from "./WorkTabs.types";

export const WORK_TABS: WorkTab[] = [
  {
    title: "Projects",
    description:
      "A selected set of projects I've built with individuals and teams. This is a mix of personal, collaborative and client owned projects.",
    projectsType: ProjectsType.PROJECTS,
    total: toTwoDigits(TOTAL_PROJECTS),
  },
  {
    title: "Labs",
    description:
      "A selected set of experiments I'm building as I navigate through ideas and technologies. I learn by testing out and building based on concepts and techniques.",
    projectsType: ProjectsType.LABS,
    total: toTwoDigits(TOTAL_LABS),
  },
];

export const HERO_NUMBER_ANIMATION_DELAY = 0.95;
export const HERO_TEXT_ANIMATION_DELAY = 0.46;
export const TAB_DESCRIPTIONANIMATION_DELAY = 1;
