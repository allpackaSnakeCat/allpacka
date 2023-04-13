import { useNavigate, useParams } from 'react-router-dom';

export const userLoader = async ({ params }) => {
    const { id } = params
    try {
        const res = await fetch('/api/user/' + id);
        const user = await res.json()
        console.log('loader:', user)
       return user;
    } catch (err) {
        return null
    }
}

export const tripLoader = async ({ params }) => {
    const { id } = params
    try {
        const res = await fetch('/api/trip/' + id);
        // console.log(res)
        const trip = await res.json()
       return trip;
    } catch (err) {
        console.log('loader: ',res)
        return null
    }
}