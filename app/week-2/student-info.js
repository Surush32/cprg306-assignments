import Link from 'next/link';

/**
 * StudentInfo component displays the student's name and a link to their GitHub repository.
 */
export default function StudentInfo() {
  return (
    <div>
      <p>Surush Azaryun</p>
      <Link href="https://github.com/Surush32/cprg306-assignments">
        My GitHub Repository
      </Link>
    </div>
  );
}