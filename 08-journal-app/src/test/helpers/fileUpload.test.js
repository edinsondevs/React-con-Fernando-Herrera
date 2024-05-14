import { fileUpload } from "../../helpers/fileUpload";
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: 'dpckrdwrj',
    api_key: '647199355118156',
    api_secret: 'vBp1ee7mCriuuOAH3-U7aleKIfE',
    secure: true
})

/** 
 * @description Subida de file para testing
 * !crear el archivo que se va a mandar a la funcion de uploadFile de la siguiente manera
 * 1. obtener la url de una imagen
 * 2. hacer el fetch de la imagen
 * 3. obtener el blob
 * 4. Generar el archivo a mandar a la funcion de uploadFile
 * 5. LLamar a la funcion pasandole el archivo generado previamente
 * 6. Realizar el test correspondiente a lo esperado de la misma
*/
describe('pruebas en carga de archivos', () =>
{


    test('debe de subir el archivo correctamente a cloudinary', async () =>
    {

        const imageUrl = "https://st2.depositphotos.com/1004017/6338/v/450/depositphotos_63386971-stock-illustration-tropical-island-with-palm-trees.jpg"
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'image,jpg');
        const url = await fileUpload(file);
        expect(typeof url).toBe('string');

        console.log(url);
        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.webp', '');
        const response = await cloudinary.api.delete_resources(['journal/' + imageId]);
        console.log({ response });
    });

    test('debe retornar null', async () =>
    {
        const file = new File([], 'image,jpg');
        const url = await fileUpload(file);
        expect(url).toBe(null);
    });
})