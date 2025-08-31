import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import { Config } from '../../Config/Config';

export default function useGetAllJournals() {
    const query = useQuery({
        queryKey: [],
        queryFn: async () => {
            const request = await axios.get(Config.baseRoute + "/Journal/Pages");
            return request.data;
        }
    });

    return query;
}