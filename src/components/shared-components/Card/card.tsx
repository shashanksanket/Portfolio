import { IUser } from "@/lib/util/types/user";
import { useEffect, useState } from "react";

interface CardProps {
  data: IUser["aboutSection"] | IUser["summarySection"];
}

export default function Card({ data }: CardProps) {

  return (
    <div className="w-full bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-lg shadow-md p-6">
      {data && Object.entries(data).length > 0 ? (
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(data).map(([key, value], idx) => (
            <div key={idx} className="flex flex-col">
              <p className="text-sm text-gray-400">{key.toUpperCase()}</p>
              <p className="text-lg text-white">{value}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center py-3 font-semibold text-emerald-100">
          No data available
        </p>
      )}
    </div>
  );
}
