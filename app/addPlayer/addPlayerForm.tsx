"use client";
const AddPlayerForm = (uuid: any) => {
  const RegisterPlayer = async (e: any) => {
    e.preventDefault();

    await fetch(`/app/addPlayer/route.ts`, {
      method: "post",
      body: JSON.stringify({
        id: uuid.uuid,
        first_name: String(e.target.first_name.value),
        last_name: String(e.target.last_name.value),
      }),
    });
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <form
        className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        onSubmit={RegisterPlayer}
        method="POST"
      >
        <label className="text-md">First name:</label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="first_name"
          placeholder="Jhon"
          required
        />
        <label className="text-md">Last name:</label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="last_name"
          placeholder="Doe"
          required
        />
        <button
          type="submit"
          className="bg-green-700 rounded px-4 py-2 text-white mb-2"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default AddPlayerForm;
