import { useFetcher } from "@remix-run/react";
import React, { useEffect, useState } from "react";
import { Task } from "~/backend/models/Task";
import { User } from "~/backend/models/User";

export default function UserSelector({
  // selectedUser,
  // setSelectedUser,
  onSelectorChange,
}: {
  // selectedUser?: number;
  // setSelectedUser?: React.Dispatch<React.SetStateAction<number>>;
  onSelectorChange: ({ userId }: { userId: number }) => void;
}) {
  // HOOKS =================================================
  const fetcher = useFetcher<User[]>();

  // STATES ================================================
  const [users, setUsers] = useState<User[] | null>(null);
  const [selectedUser, setSelectedUser] = useState<number>(0);

  // FUNCTIONS =============================================
  function handleChangeSelector(event: React.ChangeEvent<HTMLSelectElement>) {
    const userId: number = Number(event.target.value);
    if (setSelectedUser) {
      onSelectorChange({ userId });
      setSelectedUser(userId);
    }
  }

  // EFFECTS ===============================================
  useEffect(() => {
    fetcher.load("/resources/users");
  }, []);

  useEffect(() => {
    if (fetcher.data) {
      setUsers(fetcher.data);
    }
  }, [fetcher.data]);

  return (
    <label>
      <span>Filtratge d'usuaris</span>
      <select
        className="select select-bordered select-sm w-full"
        onChange={(event) => handleChangeSelector(event)}
      >
        <option disabled selected>
          Selecciona una opció
        </option>
        <option key="0" value="0">
          Mostrar tot
        </option>
        {users &&
          users.length > 0 &&
          users.map((user) => {
            return (
              <option key={`${user.id}-${user.name}`} value={user.id}>
                {user.name}
              </option>
            );
          })}
      </select>
    </label>
  );
}
