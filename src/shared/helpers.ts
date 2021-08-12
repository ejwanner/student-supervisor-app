import { Thesis, ThesisFilter } from "./types";

export const filteredThesis = (list: Thesis[], filter: ThesisFilter | null) => {
  if (filter === null || (!filter.status && !filter.category)) {
    return list;
  }

  if (filter.status && filter.category) {
    console.log("all");
    return list.filter(
      (i) => i.status === filter.status && i.category === filter.status
    );
  } else if (filter.status) {
    return list.filter((i) => i.status === filter.status);
  } else if (filter.category) {
    return list.filter((i) => i.category === filter.category);
  }
  return list;
};
