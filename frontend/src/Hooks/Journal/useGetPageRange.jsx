import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import { Config } from '../../Config/Config';

export default function useGetPageRange(journal = "", start = 0, stop = 10) {
    const query = useQuery({
        queryKey: [],
        queryFn: async () => {
            const request = await axios.post(Config.baseRoute + "/Journal/Page/range", 
                {},
                {
                    params: {
                        journal: journal,
                        start: start,
                        stop: stop
                    }
                }
            );
            return request.data;
        }
    });

    return query;
}