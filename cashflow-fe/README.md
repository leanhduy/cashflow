# Cashflow - Frontend (React + Vite)

## Platform

- **Front-End Framework**: ReactJS
- **Programming Language**: Javascript
- **UI Component Library**: Material UI
- **Build Tool**: Vite
- **State Management**: Context API
- **Testing Framework**: Framework and libraries for testing include:
  - **Jest**: the Javascript testing framework that provides a complete environment for running tests.
  - `@testing-library/react`: the React Testing Library
  - `@testing-library/user-event`: provide utilities for advanced user interactions (e.g., typing text, select options from drop downs, etc.)
  - `@testing-library/jest-dom`: custom Jest matchers specifically for DOM testing (e.g., `toBeInTheDocument`, `toHaveTextContext`, etc.)

## Database: Database technologies and schema.

- **Phase 1: No dedicated database**
  - In the phase 1 with single-player mode, with no user accounts or persistences, a database is not strictly necessary
  - **JSON Data Storage:** Game data (professions, cards, etc.) will be stored in local JSON files and loaded into the app at runtime.
  - Game state, such as financial statement, will be stored in the `Context` and and `localStorage` to preserve progress across page refreshers
- **Future phases:** A dedicated database (Postgres) will be considered when implementing features like user accounts, game saving, and leaderboards.

## Integration

- **Phase 1: No external APIs**
  - In this phase, there is no requirement for external API integration.

## Additional Considerations

- **Hosting:** Vercel or Netlify
- **CI/CD Pipeline:** Implementation of automated build and testing processes
- **Version Control:** Git
