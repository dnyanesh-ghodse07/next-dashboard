export const getUser = async () => {
    const res = await fetch('https://fakestoreapi.com/users');
    return res.json();
}