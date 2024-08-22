import { api } from "./index";

export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategorys: build.query({
      query: (params) => ({
        url: "/categories",
        params,
      }),
      providesTags: ["Category"],
    }),
    createCategory: build.mutation({
      query: (body) => ({
        url: "/categories",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Category"],
    }),
    deleteCategory: build.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
    updateCategory: build.mutation({
      query: ({ id, body }) => ({
        url: `/category/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useGetCategorysQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} = categoryApi;
