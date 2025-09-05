import DefaultNavbar from "../components/default_navbar";
import { Authenticator } from '@aws-amplify/ui-react';
import config from '../../amplify_outputs.json';
import {Amplify} from "aws-amplify";
import Home from '../routes/Home';

Amplify.configure(config);

export default function Login(){
    return(
        <>
            <DefaultNavbar />
            <p> Login In Page!</p>
            <Authenticator>
                {({signOut}) => (
                    <Home signOut={signOut}/>
                )}
            </Authenticator>
        </>
    ); 
}