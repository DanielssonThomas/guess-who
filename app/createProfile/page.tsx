"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import Link from "next/link";
const CreateProfile = () => {
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <form
        className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        action="/auth/sign-in"
        method="post"
      >
        <label className="text-md">First name:</label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="firstName"
          placeholder="Jhon"
          required
        />
        <label className="text-md">Last name:</label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="lastName"
          placeholder="Doe"
          required
        />
        <button className="bg-green-700 rounded px-4 py-2 text-white mb-2">
          Continue
        </button>
      </form>
    </div>
  );
};

export default CreateProfile;
