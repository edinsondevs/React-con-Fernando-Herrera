export const initialState = {
    status: 'checking', // checking, not-authenticated, authenticated
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
};

export const authenticatedState = {
    status: 'authenticated', // checking, not-authenticated, authenticated
    uid: '1234ABCD',
    email: 'test@example.com',
    displayName: 'Demo User',
    photoURL: 'https://example.webp',
    errorMessage: null
};

export const notAuthenticatedState = {
    status: 'not-authenticated', // checking, not-authenticated, authenticated
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
};

export const demoUser = {
    uid: '1234ABCD',
    email: 'test@example.com',
    displayName: 'Demo User',
    photoURL: 'https://example.webp',
};

export const demoUserLogout = {
    uid: '1234ABCD',
    email: 'test@example.com',
    displayName: 'Demo User',
    photoURL: 'https://example.webp',
};

