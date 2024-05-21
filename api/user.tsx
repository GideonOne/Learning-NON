import axios from 'axios';
import { endpoints } from '../config/endPoints';

interface UpdateUser {
    createdAt: Date;
    name: string;
    lastName: string;
    emailPassword: string;
    image: string;
}

export const updateUser = async (data: UpdateUser): Promise<UpdateUser> => {
    const response = await axios.put<UpdateUser>(
        endpoints.updateUser(data.emailPassword.split('&')[0], data.emailPassword.split('&')[1]),
        data,
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    return response.data;
};
