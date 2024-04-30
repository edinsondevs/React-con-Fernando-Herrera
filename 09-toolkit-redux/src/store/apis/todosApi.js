import { createApi, fetchBaseQuery  } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({

    reducerPath:'todos',

    baseQuery: fetchBaseQuery({

        baseUrl: 'https://'
        // baseUrl: 'https://picsum.photos'
    }),

    endpoints: (builder) => ({

        getTodos: builder.query({
            query: () => 'jsonplaceholder.typicode.com/todos'
        }),
        getTodoId: builder.query({
            query: (id) => `jsonplaceholder.typicode.com/todos/${id}`
        }),
        getPlaceholderId: builder.query({
            // query: (id, heigth, altura, personId) => `/id/${id}/${heigth}/${altura}?grayscale&blur=${personId}`
            query: () => `rickandmortyapi.com/api/character/1,183`
        })
    })
})

export const { useGetTodosQuery, useGetTodoIdQuery, useGetPlaceholderIdQuery } = todosApi;

