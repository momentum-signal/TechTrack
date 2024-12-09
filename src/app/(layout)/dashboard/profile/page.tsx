import { ProfileForm } from "@/components/dashbaord/profile/profile-form";
import React from "react";

const Profile = () => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <h1 className="text-lg font-semibold md:text-2xl">Profile</h1>
      <div className="p-2 md:p-6 rounded-lg border border-dashed shadow-sm">
        <div className="space-y-6 w-[600px]">
          <ProfileForm />
        </div>
      </div>
    </main>
  );
};

export default Profile;
