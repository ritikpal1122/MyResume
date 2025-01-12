import { ResumeTemplates } from "@/components/resume-templates";
import ToggleSheet from "@/components/ToggleSheet";
import { useUser } from "@clerk/clerk-react";

export default function TemplatesPage() {
  const { user, isLoaded, isSignedIn } = useUser();

  // Handle loading state
  if (!isLoaded) {
    return <div className="container mx-auto py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      {isSignedIn ? (
        <h1 className="text-3xl font-thin">
          Welcome, {user?.fullName || "User"}!
        </h1>
      ) : null}

      <h1 className="mb-6 text-3xl font-bold">Choose Your Resume Template</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        Select from our collection of 10 professionally designed, ATS-friendly resume templates.
      </p>
      <ToggleSheet />
      <ResumeTemplates />
    </div>
  );
}
