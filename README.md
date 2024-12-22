# ResumeCreator and ATS Checker

This project is a Resume Creator and ATS Checker application built using modern technologies including React, TypeScript, Quill (for rich text editing), Tailwind CSS (for styling), and ShadCN (for UI components). This README provides an overview of the project and instructions for setup and usage.

---

## Features

### Resume Creator
- **Rich Text Editor**: Powered by Quill.js, allowing users to create and format resumes easily.
- **Templates**: Pre-designed resume templates for quick and professional layouts.
- **Custom Styling**: Tailwind CSS integration enables users to customize resume styles dynamically.

### ATS Checker
- **Keyword Matching**: Identifies important keywords and compares them with job descriptions to optimize resumes for applicant tracking systems (ATS).
- **Score Calculation**: Provides a score indicating how ATS-friendly the resume is.
- **Suggestions**: Offers actionable suggestions to improve the resume’s compatibility with ATS.

---

## Technologies Used

- **React**: Front-end library for building the user interface.
- **TypeScript**: Provides static typing to enhance development efficiency and code reliability.
- **Quill.js**: Rich text editor for creating and formatting resumes.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **ShadCN**: Component library for building consistent and accessible UI.

---

## Installation

### Prerequisites
- Node.js (>= 14.x)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd resumecreator-atschecker
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open the application in your browser:
   ```
   http://localhost:5173
   ```

---

## Usage

1. **Create a Resume**:
   - Navigate to the Resume Creator page.
   - Use the Quill editor to enter and format your resume content.
   - Apply templates and styles as needed.

2. **Check Resume Compatibility**:
   - Upload a job description or paste it directly into the ATS Checker.
   - Upload your resume for analysis.
   - View the ATS score and follow the suggestions provided to improve your resume.

---

## Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the application for production.
- **`npm run start`**: Starts the production server.
- **`npm run lint`**: Runs linting on the codebase.
- **`npm run test`**: Runs unit tests.

---

## Directory Structure

```
resumecreator-atschecker/
├── src/
│   ├── components/   # Reusable React components
│   ├── pages/        # Page-level components
│   ├── styles/       # Global and component-specific styles
│   ├── utils/        # Utility functions
│   └── hooks/        # Custom React hooks
├── public/           # Static assets
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json     # TypeScript configuration
└── package.json      # Project metadata and dependencies
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For questions or feedback, please contact:
- **Email**: [er.ritikpal@gmail.com](mailto:er.ritikpal@gmail.com)
- **GitHub**: [ritikpal1122](https://github.com/ritikpal1122)

---

## Acknowledgments

Special thanks to the maintainers of React, Quill, Tailwind CSS, and ShadCN for their amazing tools that made this project possible.

