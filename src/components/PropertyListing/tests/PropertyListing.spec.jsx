import React from 'react';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import axios from 'axios';
import PropertyListing from '../PropertyListing';

jest.mock('axios');

describe('PropertyListing', () => {
    it('should render the correct number of property cards based on fetched data', async () => {
        const mockProperties = [
            { id: 1, summary: 'Property 1', displayAddress: 'Address 1', price: 100000, branchName: 'Branch 1', propertyTitle: 'Title 1', mainImage: 'image1.jpg' },
            { id: 2, summary: 'Property 2', displayAddress: 'Address 2', price: 200000, branchName: 'Branch 2', propertyTitle: 'Title 2', mainImage: 'image2.jpg' },
            { id: 3, summary: 'Property 3', displayAddress: 'Address 3', price: 300000, branchName: 'Branch 3', propertyTitle: 'Title 3', mainImage: 'image3.jpg' },
        ];
        axios.get.mockResolvedValue({ data: mockProperties });

        render(<PropertyListing />);
        const propertiesList = screen.getByRole('list');
        const propertyCards = await within(propertiesList).findAllByRole('listitem');
        expect(propertyCards).toHaveLength(mockProperties.length);
    });
});
