export const getCartLS = () => {
    const data = localStorage.getItem('Key')
    return data ? JSON.parse(data) : []
}