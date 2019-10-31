import styled from 'styled-components'
import { Form } from '../FormBuilder'

export const Root = styled.div`
    ${Form} {
        & .FormBuilderField__email {
            grid-area: email;
        }

        & .FormBuilderField__firstName {
            grid-area: firstName;
        }

        & .FormBuilderField__lastName {
            grid-area: lastName;
        }

        & .FormBuilderField__company {
            grid-area: company;
        }

        & .FormBuilderField__address1 {
            grid-area: address1;
        }

        & .FormBuilderField__address2 {
            grid-area: address2;
        }

        & .FormBuilderField__city {
            grid-area: city;
        }

        & .FormBuilderField__country {
            grid-area: country;
        }

        & .FormBuilderField__state {
            grid-area: state;
        }

        & .FormBuilderField__postalCode {
            grid-area: postalCode;
        }

        grid-template-areas:
            'email'
            'firstName'
            'lastName'
            'company'
            'address1'
            'address2'
            'city'
            'country'
            'state'
            'postalCode';

        @media ${props => props.theme.breakpoints.medium} {
            grid-template-areas:
                'email email email email'
                'firstName firstName lastName lastName'
                'company company company company'
                'address1 address1 address1 address1'
                'address2 address2 address2 address2'
                'city city city city'
                'country country country country'
                'state state postalCode postalCode';
        }
    }
`
