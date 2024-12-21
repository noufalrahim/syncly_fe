import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useSession } from '@clerk/clerk-react';
const Login = () => {
    const { session } = useSession();
    if (session) {
        console.log(session);
        return <p>Session is valid. User ID: {session.id}</p>;
    }
    return (
        <header>
            {/* <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn> */}
        </header>
    )
};

export default Login;