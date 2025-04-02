'use client'; // Add this line to mark the component as a client component

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import { useEffect } from "react"; // Import useEffect for side effects
import Link from 'next/link'; 
import ShoppingList from './shopping-list/ShoppingList'; // Import the ShoppingList component

const Page = () => { // Define the functional component
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    // Sign in to Firebase with GitHub authentication
    const handleLogin = async () => {
        await gitHubSignIn();
    };

    // Sign out of Firebase
    const handleLogout = async () => {
        await firebaseSignOut();
    };

    // Display the landing page content
    return ( // Move the return statement inside the component
        <div>
            {!user ? (
                <button onClick={handleLogin}>Login with GitHub</button>
            ) : (
                <div>
                    <p>
                        Welcome, {user.displayName} ({user.email})
                    </p>
                    <button onClick={handleLogout}>Logout</button>
                    <div className="mb-4" />
                    <Link href="/week-9/shopping-list">Go to Shopping List</Link>
                    <ShoppingList user={user} />
                </div>
            )}
        </div>
    );
};

export default Page; // Export the component