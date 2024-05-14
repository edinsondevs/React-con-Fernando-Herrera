import { checkingCredentials } from "../../../store/auth";
import { checkingAuthentication } from "../../../store/auth/thunks";

jest.mock("../../../firebase/providers.js");

describe('Pruebas en AuthTunks', () => {
    const dispatch = jest.fn();
    
    beforeEach(() => jest.clearAllMocks());

    test('Debe de invocar checkingCredentials ', async () => {
        await checkingAuthentication()( dispatch );
        expect( dispatch ).toHaveBeenCalledTimes(1);
        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
    });
})