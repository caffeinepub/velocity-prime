import { useMutation } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useSubmitInquiry() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string | null;
      wearableDevice: string;
      primarySport: string;
      message: string;
    }) => {
      if (!actor) throw new Error('Actor not available');
      await actor.submitInquiry(
        data.name,
        data.email,
        data.phone,
        data.wearableDevice,
        data.primarySport,
        data.message
      );
    },
  });
}
