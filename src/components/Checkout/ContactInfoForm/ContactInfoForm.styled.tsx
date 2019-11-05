import styled from 'styled-components'

export const Root = styled.div<{ $preview?: boolean }>`
    display: grid;
    grid-row-gap: 1rem;
    grid-column-gap: 3rem;
    grid-auto-rows: max-content;

    grid-template-areas:
        'email'
        'firstName'
        'lastName'
        'company'
        'address1'
        'address2'
        'city'
        'country'
        'region'
        'postalCode'
        'phone';

    @media ${props => props.theme.breakpoints.medium} {
        grid-template-areas:
            'email email email email'
            'firstName firstName lastName lastName'
            'company company company company'
            'address1 address1 address1 address1'
            'address2 address2 address2 address2'
            'city city city city'
            'country country country country'
            'region region postalCode postalCode'
            'phone phone phone phone';
    }
`

export const Email = styled.div`
    grid-area: email;
`

export const FirstName = styled.div`
    grid-area: firstName;
`

export const LastName = styled.div`
    grid-area: lastName;
`

export const Company = styled.div`
    grid-area: company;
`

export const Address1 = styled.div`
    grid-area: address1;
`

export const Address2 = styled.div`
    grid-area: address2;
`

export const City = styled.div`
    grid-area: city;
`

export const Country = styled.div`
    grid-area: country;
`

export const Region = styled.div`
    grid-area: region;
`

export const PostalCode = styled.div`
    grid-area: postalCode;
`

export const PhoneNumber = styled.div`
    grid-area: phone;
`
