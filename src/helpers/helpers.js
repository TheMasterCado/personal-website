import scrollIntoView from "scroll-into-view";

export const scrollTo = (elClass) => {
  scrollIntoView(document.getElementsByClassName(elClass)[0]);
};