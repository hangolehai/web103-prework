# WEB103 Prework - Creatorverse

Submitted by: **Le Hai Ha Ngo**

About this web app: **Creatorverse is a React app that lets you collect and manage your favorite content creators. You can view, add, edit, and delete creators stored in a Supabase database, with each creator's name, channel URL, description, and optional image.**

Time spent: **👉🏿 4** hours

## Required Features

The following **required** functionality is completed:

- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [ ] Picocss is used to style HTML elements
- [x] The content creator items are displayed in a creative format, like cards instead of a list
- [x] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

- [x] Vite + React Router for fast development and client-side routing
- [x] Supabase PostgreSQL backend with realtime-enabled `creators` table
- [x] Custom CSS styling with responsive card grid layout
- [x] Loading and error states for fetch, add, update, and delete operations

## Video Walkthrough

Here's a walkthrough of implemented required features:

👉🏿<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with ... 👉🏿 GIF tool here

## Notes

- The app uses **Supabase** (`@supabase/supabase-js`) with `async/await` for all CRUD operations.
- Components live in `src/components/` (`CreatorCard`) and pages in `src/pages/` (`ShowCreators`, `ViewCreator`, `EditCreator`, `AddCreator`).
- Routes are defined in `App.jsx` using `useRoutes` from React Router (`/`, `/view/:id`, `/edit/:id`, `/add`).
- The `creators` table requires an auto-increment **`id`** primary key (in addition to `name`, `url`, `description`, `imageURL`) for view/edit/delete routes to work.

## License

Copyright 2026 Hai Ha Ngo

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
