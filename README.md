<p align="center">
    <h1 align="center">WEBSITE</h1>
</p>
<p align="center">
    <h1 align="center"><a href="https://micro-trans-ai.vercel.app">Micro Trans AI></a></h1>
</p>
<p align="center">
    <em>Login with your Google Account or
   test data: test@ematpro.dev : Test135d</em>
</p>

<p align="center">
  <img src="MicroTransAI.png" width="60%" alt="project-logo">
</p>
<p align="center">
    <h1 align="center">MICROTRANSAI</h1>
</p>
<p align="center">
    <em>Translate, Transcribe, Transform Anywhere.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/Mat955/MicroTransAI?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/Mat955/MicroTransAI?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Mat955/MicroTransAI?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Mat955/MicroTransAI?style=default&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>

<br><!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary><br>

- [ Overview](#overview)
- [ Features](#features)
- [ Repository Structure](#repository-structure)
- [ Modules](#modules)
- [ Getting Started](#getting-started)
  - [ Installation](#installation)
  - [ Usage](#usage)
  - [ Tests](#tests)
- [ Project Roadmap](#project-roadmap)
- [ Contributing](#contributing)
- [ License](#license)
- [ Acknowledgments](#acknowledgments)
</details>
<hr>

## Overview

MicroTransAI is an innovative software project designed around the Next.js framework, leveraging modern web technologies for seamless language translation and transcription services. It supports user authentication, dynamic data interaction with MongoDB, and integrates with Azure AI services to facilitate real-time text and audio processing. The application ensures a responsive and accessible user interface, enriched with TailwindCSS for aesthetic consistency across devices. MicroTransAI enhances user engagement by providing translational history, audio transcription capabilities, and secure data management, making it a comprehensive solution for users needing immediate and accurate language translation services.

---

## Features

|     | Feature           | Description                                                                                                                                                          |
| --- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚙️  | **Architecture**  | Utilizes a modern stack with Next.js for SSR and static generation, integrated with MongoDB for data storage, and Azure for AI-driven translations.                  |
| 🔩  | **Code Quality**  | Adopts TypeScript, ensuring type safety and cleaner code. Modular file organization improves maintainability. Linting with ESLint enforces coding standards.         |
| 📄  | **Documentation** | Good inline documentation in code samples and README files, detailing configuration and setup instructions, enhancing understandability and ease of use.             |
| 🔌  | **Integrations**  | Integrates with Clerk for authentication, Azure AI for text translation, and MongoDB for data storage. Netlify and Vercel for deployment.                            |
| 🧩  | **Modularity**    | Codebase is organized into reusable components and utility functions, promoting reusability and scalability across different parts of the application.               |
| 🧪  | **Testing**       | No specific mention of testing frameworks in the provided details; lack of explicit testing tools or suites noted.                                                   |
| ⚡️ | **Performance**   | Utilizes SSR capabilities of Next.js for faster page loads. Combining MongoDB and Azure AI might introduce latency, depending on implementation details.             |
| 🛡️  | **Security**      | Implements Clerk for robust user authentication. Middleware configuration restricts access to authenticated routes, enhancing security.                              |
| 📦  | **Dependencies**  | Key libraries include React, Next.js, Clerk, Azure AI, MongoDB, Tailwind CSS, and various @types packages for TypeScript support. Large focus on frontend libraries. |
| 🚀  | **Scalability**   | Built on scalable technologies like Next.js and MongoDB. The modularity and clean architecture support scaling, but actual scalability untested based on details.    |

````

---

##  Repository Structure

```sh
└── MicroTransAI/
    ├── README.md
    ├── actions
    │   ├── deleteTranslation.ts
    │   └── translate.ts
    ├── app
    │   ├── assets
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── transcribeAudio
    │   ├── translate
    │   └── translationHistory
    ├── components
    │   ├── DeleteTranslationButton.tsx
    │   ├── Header.tsx
    │   ├── Recorder.tsx
    │   ├── SubmitButton.tsx
    │   ├── TimeAgoText.tsx
    │   ├── TranslationForm.tsx
    │   ├── TranslationHistory.tsx
    │   └── ui
    ├── components.json
    ├── lib
    │   └── utils.ts
    ├── middleware.ts
    ├── mongodb
    │   ├── db.ts
    │   └── models
    ├── netlify.toml
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   ├── next.svg
    │   └── vercel.svg
    ├── tailwind.config.ts
    └── tsconfig.json
````

---

## Modules

<details closed><summary>.</summary>

| File                                                                                        | Summary                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [package-lock.json](https://github.com/Mat955/MicroTransAI/blob/master/package-lock.json)   | <code>► INSERT-TEXT-HERE</code>                                                                                                                                                                                                                                                                                                                                |
| [package.json](https://github.com/Mat955/MicroTransAI/blob/master/package.json)             | Defines the configuration and dependencies essential for the apps Next.js framework, ensuring seamless development, building, and deployment processes. It includes both production and development dependencies facilitating user authentication, database management, and UI component styling within MicroTransAI’s architecture.                           |
| [postcss.config.js](https://github.com/Mat955/MicroTransAI/blob/master/postcss.config.js)   | Configures PostCSS to integrate with TailwindCSS and Autoprefixer, enhancing the styling capabilities of MicroTransAI by enabling responsive design and browser compatibility optimizations. This setup supports the aesthetic consistency and functional adaptability of the application’s user interface across various devices and web browsers.            |
| [tsconfig.json](https://github.com/Mat955/MicroTransAI/blob/master/tsconfig.json)           | Configures TypeScript for the MicroTransAI project to ensure robust type-checking and compatibility with JSX, incremental compilation, and ESNext features, optimizing the development experience within a modern Next.js framework environment. It facilitates clean code architecture by enforcing strict coding standards and module resolution strategies. |
| [netlify.toml](https://github.com/Mat955/MicroTransAI/blob/master/netlify.toml)             | Defines the build settings for deploying the MicroTransAI application on Netlify, including build commands, function directories, and publish directories. It optionally configures Netlify Dev for local development environments and specifies potential redirects for single-page application behavior.                                                     |
| [middleware.ts](https://github.com/Mat955/MicroTransAI/blob/master/middleware.ts)           | Middleware.ts configures authentication protections, leveraging the Clerk middleware for specific routes within the MicroTransAI application. It primarily ensures that certain functionalities, like admin and translation services, are restricted to authorized users, enhancing the application’s security regime.                                         |
| [tailwind.config.ts](https://github.com/Mat955/MicroTransAI/blob/master/tailwind.config.ts) | Configures TailwindCSS for MicroTransAI, enabling dark mode and customizing design elements like colors and animations for UI consistency across pages and components. It sets global design parameters and responsive behavior to enhance user interfaces within the web application.                                                                         |
| [next.config.mjs](https://github.com/Mat955/MicroTransAI/blob/master/next.config.mjs)       | Configures settings for the Next.js framework, essential for customizing the applications behavior to align with specific requirements of the MicroTransAI project. This configuration mediates between the projects operations and the Next.js capabilities, ensuring optimal performance and feature compatibility.                                          |
| [components.json](https://github.com/Mat955/MicroTransAI/blob/master/components.json)       | Defines UI styles and React component settings for the MicroTransAI project, particularly configuring Tailwind CSS and establishing essential aliases for better module resolution and cleaner imports within the application, promoting a cohesive and scalable frontend architecture.                                                                        |

</details>

<details closed><summary>mongodb</summary>

| File                                                                      | Summary                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [db.ts](https://github.com/Mat955/MicroTransAI/blob/master/mongodb/db.ts) | Establishes a connection with MongoDB utilizing the Mongoose library, ensuring the MicroTransAI application can interact with its database for operations like storing translations and user sessions. It includes a robust error handling strategy to manage connection issues effectively. |

</details>

<details closed><summary>mongodb.models</summary>

| File                                                                                 | Summary                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [User.ts](https://github.com/Mat955/MicroTransAI/blob/master/mongodb/models/User.ts) | Manages user data and translations in the MongoDB database, providing functionality to add, update, retrieve, and delete translation records linked to individual users within the MicroTransAI application. Ensures data persistence and retrieval efficiency for the translation history feature. |

</details>

<details closed><summary>lib</summary>

| File                                                                        | Summary                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [utils.ts](https://github.com/Mat955/MicroTransAI/blob/master/lib/utils.ts) | Streamlines the process of combining and managing CSS class names throughout the MicroTransAI project, ensuring consistent and efficient style application across components by leveraging utilities `clsx` for conditional class joining and `tailwind-merge` for handling Tailwind CSS class conflicts. |

</details>

<details closed><summary>actions</summary>

| File                                                                                                    | Summary                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [deleteTranslation.ts](https://github.com/Mat955/MicroTransAI/blob/master/actions/deleteTranslation.ts) | DeleteTranslation.ts serves as a critical component in MicroTransAI, enabling secure user-specific deletion of translation records. It integrates authentication, database operations, and dynamic content updates through cache revalidation, ensuring data integrity and real-time responsiveness across the translation history feature. |
| [translate.ts](https://github.com/Mat955/MicroTransAI/blob/master/actions/translate.ts)                 | Translate.ts facilitates the secure and dynamic translation of text by interfacing with the Azure Text Translation API, incorporating user authentication, error handling, and data persistence through MongoDB updates. Additionally, it initiates cache revalidation to refresh the translation history display in the application.       |

</details>

<details closed><summary>app</summary>

| File                                                                              | Summary                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [globals.css](https://github.com/Mat955/MicroTransAI/blob/master/app/globals.css) | Establishes the foundational CSS styling for MicroTransAI using Tailwind CSS, configuring color schemes, fonts, and responsiveness across themes. It ensures a consistent and visually appealing user interface for all components, influencing both the appearance and user experience of the translation tools in the repository. |
| [layout.tsx](https://github.com/Mat955/MicroTransAI/blob/master/app/layout.tsx)   | RootLayout in MicroTransAI serves as the foundational layout component, integrating global styles, authentication via Clerk, and a consistent header across the application. It sets basic metadata and ensures that all page content is centrally aligned, enhancing the user interface consistency throughout the platform.       |
| [page.tsx](https://github.com/Mat955/MicroTransAI/blob/master/app/page.tsx)       | Serves as the Home page for MicroTransAI, presenting a welcoming interface that promotes language translation services. It dynamically displays a sign-in or translation prompt based on user authentication status, fostering user interaction and access to the applications core functionalities.                                |

</details>

<details closed><summary>app.transcribeAudio</summary>

| File                                                                                        | Summary                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [route.ts](https://github.com/Mat955/MicroTransAI/blob/master/app/transcribeAudio/route.ts) | Enables audio file upload and transcription via Azure’s AI services within the MicroTransAI repository, ensuring robust handling of API credentials and user feedback on audio upload status, integrating smoothly with other components that manage translations and user interactions. |

</details>

<details closed><summary>app.translate</summary>

| File                                                                                  | Summary                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](https://github.com/Mat955/MicroTransAI/blob/master/app/translate/page.tsx) | TranslatePage orchestrates user authentication and fetches available translation languages to power user interactions on the MicroTransAI platform. It integrates components for submitting translations and viewing translation history, emphasizing a seamless user experience in language translation tasks. |

</details>

<details closed><summary>app.translationHistory</summary>

| File                                                                                             | Summary                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [route.tsx](https://github.com/Mat955/MicroTransAI/blob/master/app/translationHistory/route.tsx) | Handles user requests for translation history by fetching translations associated with a specific user ID from the database, then returns this data in JSON format through the Next.js server middleware. It ensures only relevant translation entries are retrieved and displayed based on the users unique identifier. |

</details>

<details closed><summary>components</summary>

| File                                                                                                                     | Summary                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [DeleteTranslationButton.tsx](https://github.com/Mat955/MicroTransAI/blob/master/components/DeleteTranslationButton.tsx) | DeleteTranslationButton serves as the interactive component in the MicroTransAI project, enabling users to remove translations. It utilizes a styled button from the UI components that triggers a deletion action defined in the actions folder, enhancing the applications functionality and user experience.                    |
| [TimeAgoText.tsx](https://github.com/Mat955/MicroTransAI/blob/master/components/TimeAgoText.tsx)                         | TimeAgoText.tsx integrates a third-party React component, ReactTimeago, to provide relative timestamps like 3 hours ago for displayed translations. This enhances the user experience by conveying the freshness of data within MicroTransAI's translation history feature.                                                        |
| [Header.tsx](https://github.com/Mat955/MicroTransAI/blob/master/components/Header.tsx)                                   | Header.tsx establishes the user interface for the navigation header in the MicroTransAI application, incorporating authentication functionality, dynamic user interaction elements, and branding through a visual logo, enhancing usability and aesthetic appeal across the applications main pages.                               |
| [TranslationForm.tsx](https://github.com/Mat955/MicroTransAI/blob/master/components/TranslationForm.tsx)                 | TranslationForm.tsx provides an interactive user interface for translating text and speech within MicroTransAI. It supports language selection, input text entry, audio recording, and playback of translated content, interfacing with backend translation services to deliver real-time language processing.                     |
| [Recorder.tsx](https://github.com/Mat955/MicroTransAI/blob/master/components/Recorder.tsx)                               | Recorder.tsx enables audio capturing functionality within the MicroTransAI application, allowing users to record and upload audio directly through their browsers. It manages microphone permissions, handles recording states, and processes the audio data into manageable chunks for use elsewhere in the application.          |
| [TranslationHistory.tsx](https://github.com/Mat955/MicroTransAI/blob/master/components/TranslationHistory.tsx)           | TranslationHistory.tsx provides a user interface component that displays a logged-in users past translations. It features a dynamic retrieval of translation records from a database based on user ID, displays translation languages, original and translated texts, and includes time-stamped entries with options for deletion. |
| [SubmitButton.tsx](https://github.com/Mat955/MicroTransAI/blob/master/components/SubmitButton.tsx)                       | SubmitButton.tsx integrates a user interface component that manages translation submission states within the MicroTransAI application. The button dynamically adjusts its disabled state and label based on form submission status, enhancing user interaction and feedback during the translation process.                        |

</details>

<details closed><summary>components.ui</summary>

| File                                                                                          | Summary                                                                                                                                                                                                                                                                                                                                        |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [button.tsx](https://github.com/Mat955/MicroTransAI/blob/master/components/ui/button.tsx)     | Button.tsx defines a versatile UI component within the MicroTransAI repository, offering multiple styling variants for the buttons used across the applications interface. It leverages utility functions for conditional styling and is designed to support accessibility and responsive behavior, enhancing the user interaction experience. |
| [textarea.tsx](https://github.com/Mat955/MicroTransAI/blob/master/components/ui/textarea.tsx) | Enhances user interface functionality within the MicroTransAI project by providing a customizable, styled textarea component. Supports accessibility and theme adaptability, crucial for input fields used across translation and transcription features in the application.                                                                   |
| [select.tsx](https://github.com/Mat955/MicroTransAI/blob/master/components/ui/select.tsx)     | Provides a customizable dropdown component leveraging the Radix UI library to enhance user experiences in selecting options within the MicroTransAIs web interface, focusing on accessibility, smooth animations, and a responsive design that adheres to the application’s theming requirements.                                              |

</details>

---

## Getting Started

**System Requirements:**

### Installation

<h4>From <code>source</code></h4>

> 1. Clone the MicroTransAI repository:
>
> ```console
> $ git clone https://github.com/Mat955/MicroTransAI
> ```
>
> 2. Change to the project directory:
>
> ```console
> $ cd MicroTransAI
> ```
>
> 3. Install the dependencies:
>
> ```console
> $ npm install
> ```

### Usage

<h4>From <code>source</code></h4>

> Run MicroTransAI using the command below:
>
> ```console
> $ npm run build && node dist/main.js
> ```

### Tests

> Run the test suite using the command below:
>
> ```console
> $ npm test
> ```

---

## Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/Mat955/MicroTransAI/issues)**: Submit bugs found or log feature requests for the `MicroTransAI` project.
- **[Submit Pull Requests](https://github.com/Mat955/MicroTransAI/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/Mat955/MicroTransAI/discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/Mat955/MicroTransAI
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="center">
   <a href="https://github.com{/Mat955/MicroTransAI/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=Mat955/MicroTransAI">
   </a>
</p>
</details>

---

[**Return Top**](#overview)

---
