import { useQuery } from "@tanstack/react-query";
import subscriptionServices from "../services/subscriptionServices";


export const useGetSubscriptions = () => {
      return useQuery({
        queryKey: ['subscriptions'],
        queryFn: () => subscriptionServices.getSubscriptions(),
        staleTime: 5 * 60 * 1000,
        gcTime: 30 * 60 * 1000,
    });
}