import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(bookingId),
    // By default React Query will try to fetch data three times in case that it fails in the beginning. So here that retry set to false. so only fetch data one time.
    retry: false,
  });
  return { isLoading, error, booking };
}
