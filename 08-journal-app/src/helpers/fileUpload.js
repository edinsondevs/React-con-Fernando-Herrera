
export const fileUpload = async (file) =>{
    if (!file) throw new Error('No hay archivo para subir');

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dpckrdwrj/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        const respPost = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (!respPost.ok) {
            return new Error('Error en la subida');
        }
        const file = await respPost.json();
        return file.secure_url
        
    } catch (error) {
        throw new Error(error.message);
    }
};