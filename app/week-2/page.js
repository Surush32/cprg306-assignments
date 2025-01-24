import StudentInfo from './student-info';
/**
 * Page component renders the main shopping list page.
 * Displays a title and the StudentInfo component.
 */
export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>
      <StudentInfo />
    </main>
  );
}
