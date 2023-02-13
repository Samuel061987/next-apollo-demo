import { MockedProvider } from "@apollo/client/testing";
import UserDetails from "./UserDetails";
import { gql } from "@apollo/client";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'

afterEach(()=>{
    cleanup();
});
