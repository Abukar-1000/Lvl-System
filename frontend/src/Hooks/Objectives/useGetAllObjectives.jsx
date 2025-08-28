import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import { Config } from '../../Config/Config';

export default function useGetAllObjectives(){
    const query = useQuery({
        queryKey: [],
        queryFn: async () => {
            const request = await axios.get(Config.baseRoute + "/Objectives");
            return request.data;
        }
    });

    return query;
}