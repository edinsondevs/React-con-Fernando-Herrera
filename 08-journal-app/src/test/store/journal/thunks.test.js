import { FirebaseDB } from "../../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, startNewNote } from "../../../store/journal";
import { collection, deleteDoc, getDocs } from 'firebase/firestore/lite';

describe('Pruebas en el Journal Thunks', () =>
{
    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('startNewNote debe crear una nueva nota en blanco', async () => {

        const uid = 'TEST_ID';
        getState.mockReturnValue({ auth: { uid: uid } })
        await startNewNote()(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(savingNewNote());
        expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote({
            title: '',
            body: '',
            date: expect.any(Number),
            id: expect.any(String)
        }));
        expect(dispatch).toHaveBeenCalledWith(setActiveNote({
            title: '',
            body: '',
            date: expect.any(Number),
            id: expect.any(String)
        }));

        // Borrar de firebase los documentos
        const collectionRef = await collection(FirebaseDB, `${uid}/journal/notes/`)
        const docs = await getDocs(collectionRef);

        const deletePromises = [];
        docs.forEach(doc => deletePromises.push(deleteDoc(doc.ref)));
        await Promise.all(deletePromises);
    },7000);
})