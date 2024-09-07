
export const getEnvVariables = () => {
    import.meta.env;

    console.log('dev:', import.meta.env.DEV)
    return {
        ...import.meta.env
    }
}