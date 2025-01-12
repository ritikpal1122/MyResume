import { SignIn,  } from "@clerk/clerk-react";


const SigninPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      
      <SignIn/>
    </div>
  );
};

export default SigninPage;
