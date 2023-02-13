import React from 'react';
import {render,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import UserList from '../UserList';

afterEach(()=>{
    cleanup();
});

const renderComponent=(user='')=>{
    return(<UserList user={user}></UserList>)
}

describe('unit testing for the userList Component',()=>{
    describe('visual snapshot testing',()=>{
        it('render userlist component',()=>{
            const mockData=[
                { name: "sam", address: "add", phone: "012345", email: "sam@gmail" },
            ];
            const {container}= render(renderComponent(mockData));
            expect(container).toMatchSnapshot();
        });
        it('render userlist component and check the element rendered',()=>{
            const mockData=[
                { name: "sam", address: "add", phone: "012345", email: "sam@gmail" },
            ];
            const {getByTestId}= render(renderComponent(mockData));
            expect(getByTestId('phone')).toBeInTheDocument();
            expect(getByTestId('address')).toBeInTheDocument();
            expect(getByTestId('email')).toBeInTheDocument();
        });

        it('render userlist component without data',()=>{
            const {queryByTestId}= render(renderComponent());
            expect(queryByTestId('phone')).not.toBeInTheDocument();
            expect(queryByTestId('address')).not.toBeInTheDocument();
            expect(queryByTestId('email')).not.toBeInTheDocument();
        });
    });

})