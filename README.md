Clinic  Appointment Calender app

A responsive and user-friendly React application for managing clinic appointments. The app features a custom-built calendar and an appointment management system for staff, making it easy to schedule, view, and update patient appointments.It consist of the following modules.

Login

- The app uses hardcoded credentials for staff login.
- If the user provides the correct email and password (`nevin@staff.login` / `123456`), they are navigated to the calendar view.
- Incorrect credentials trigger an alert: "Invalid Credentials".
- Session storage is used to preserve login state temporarily (non-persistent).

Calendar 

- A custom calendar built using a 7x5 CSS grid layout (not a third-party calendar).
- Dates are dynamically populated using JavaScript's Date methods to correctly align the first day of the month and total days.
- Each day shows up to 3 patient names with their appointment times (if scheduled).
- Clicking on a day navigates to the appointment form for that specific date.

Appointment Management

- Includes a form with:
  - Patient name (`select` dropdown)
  - Doctor name (`select` dropdown)
  - Appointment time (`time` input)
- Features:
  - Add new appointments
  - Edit existing appointments
  - Delete appointments
- Data is stored in localStorage, scoped by date for accurate day-wise tracking.
- A maximum of 3 appointments per day are previewed in the calendar.

Dark Mode

- A toggle button switches between Light and Dark themes.
- Improves usability across different lighting conditions.

  Data Storage

  
- Appointments are stored in localStorage, structured by date.
- Login credentials are saved temporarily in sessionStorage.

I have used version control for managing the project. All feature updates (e.g., login, calendar, appointment management) are tracked using branches and commits.
