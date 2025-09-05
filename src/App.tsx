import './App.css'
import DefaultNavbar from './components/default_navbar'
import { Link as RouterLink } from 'react-router';
import Link from '@mui/material/Link';

function App() {
  return (
    <>
      <DefaultNavbar />

      <h1>Campus Connect</h1>
      <h2>The digital hub that helps college students save money and make money </h2>

      <h1>Here's how it works</h1>

      <div>
        <h2>Step 1: Create An Account</h2>
        <p>
          Sign up for Campus Connect using your student email. Once approved,
          you'll be taken to your school's specific digital shopping hub.
        </p>
      </div>

      <div>
        <h2>Step 2: Set Up A Storefront</h2>
        <p>
          If you're a student entrepreneur, once you've set up your account,
          you'll get an option to create a digital storefront. For now, each
          student can only set up one storefront. If not, you're free to start shopping!
        </p>
      </div>

      <div>
        <h2>Step 3: That's it!</h2>
        <p>Getting started with Campus Connect is as simple as that.</p>
      </div>

      <div>
        <h3>Sign Up Today!</h3>
        <Link component={RouterLink} to="/login">
          Create An Account
        </Link>
      </div>
    </>
  )
}

export default App;
