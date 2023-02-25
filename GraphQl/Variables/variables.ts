import { makeVar } from '@apollo/client';

interface Token {
    token: string
}

export const userToken = makeVar<string | undefined>(undefined);

