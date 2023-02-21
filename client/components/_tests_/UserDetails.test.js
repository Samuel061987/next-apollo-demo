import { MockedProvider } from "@apollo/client/testing";
import UserDetails from "../UserDetails";
import { gql } from "@apollo/client";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

const query = gql`
query Users ($limit: Int!, $offset: Int!) {
    users(limit: $limit, offset: $offset) {
      name
      address
      email
      phone
    }
  }
`;

const successMock = [
  {
    request: {
      query: query,
      variables: {
        limit: 20,
        offset: 0,
      },
    },
    result: {
      data: {
        users: {
          name: "XYZ",
          address: "ABCD",
          phone: "012345",
          email: "xyz@gmail",
        },
      },
    },
  },
];

describe("UserDetails", () => {
  it("displays a successfull mockup response when fetching", async () => {
    render(
      <MockedProvider mocks={successMock} addTypename={false}>
        <UserDetails
          userslist={[
            { name: "samuel", address: "UK", phone: "012345", email: "arulsam@gmail" },
          ]}
        />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('samuel')).toBeInTheDocument();
    })
  });
  it("displays an error message when on failure", () => {
    const errorMock = [
      {
        request: {
          query: query,
          variables: {
            limit: 20,
            offset: 0,
          },
        },
        result: {
          error: {
          }
        },
      },
    ];
    render(
      <MockedProvider mocks={errorMock} addTypename={false}>
        <UserDetails
          userslist={[
            { name: "xxxx", address: "yyyyy", phone: "012345", email: "zzzzz@gmail" },
          ]}
        />
      </MockedProvider>
    );

    waitFor(() => {
      expect(screen.queryByText('Error')).toBeInTheDocument();
    })
  });
  it("displays a successfull mockup response when clicking button",  () => {
    render(
      <MockedProvider mocks={successMock} addTypename={false}>
        <UserDetails
          userslist={[
            { name: "samuel", address: "UK", phone: "012345", email: "arulsam@gmail" },
          ]}
        />
      </MockedProvider>
    );

     waitFor(() => {
      fireEvent.click(screen.getByLabelText('Load more'));
      expect(screen.queryByText('samuel')).toBeInTheDocument();
    })
  });
});