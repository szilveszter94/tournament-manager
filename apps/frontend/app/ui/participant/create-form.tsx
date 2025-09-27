import { CreateParticipantDto } from "@/generated/api";
import CustomButton from "../components/custom-button/custom-button";
import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { createParticipant } from "@/app/participant/actions";

export default function CreateParticipantForm() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const entity: CreateParticipantDto = {
      name: "Tibike",
      elo: 1500,
      wins: 0,
      losses: 0,
    };

    await createParticipant(entity);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6"></div>

      {/* Submit */}
      <CustomButton
        type="submit"
        variant="primary"
        size="lg"
        icon={<CheckCircleIcon />}
        iconSize={8}
      >
        Submit
      </CustomButton>
    </form>
  );
}
