// import { createSelector } from "reselect";

const contactsErrorSelector = (state) => state.contacts.error;
const contactsIsLoadingSelector = (state) => state.contacts.isLoading;
const contactsContactsgSelector = (state) => state.contacts.items;
const contactsFilterSelector = (state) => state.filter;

// export const getPostsWithTags = createSelector(
//   [getAllPosts, getSelectedTags],
//   (posts, tags) =>
//     posts.filter((post) => tags.some((tag) => post.tags.includes(tag)))
// );

export {
  contactsErrorSelector,
  contactsIsLoadingSelector,
  contactsContactsgSelector,
  contactsFilterSelector,
};
