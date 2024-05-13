import { IUser } from "@/lib/util/types/user";
import { useEffect, useState } from "react";
import Image from "next/image";

interface TableProps {
  data: IUser["projects"] | IUser["skills"]
}

export default function Table({ data }: TableProps) {
  const [headers, setHeaders] = useState<string[]>([])
  useEffect(() => {
    if (data.length > 0 && headers.length === 0) {
      const initialHeaders = Object.keys(data[0]).map(key => key.toUpperCase());
      setHeaders(initialHeaders);
    }
  }, [data, headers]);


  return (
    <table className="w-full py-10 bg-slate-500 backdrop-blur-md bg-opacity-40 rounded-2xl">
      {data.length > 0 ? (
        <>
          <thead className=" py-10">
            <tr className="flex justify-around text-center  py-2 w-full">
              <th className="text-center w-full">INDEX</th>
              {headers && headers.map((item, index) => (
                <th key={index} className="text-center w-full">{item}</th>
              ))}
            </tr>
          </thead>
          <tbody className="border-t-2">
            {data &&
              data.map((item, index) => (
                <tr key={index} className="flex w-full text-center justify-around mt-2 py-1">
                  <td className="text-center w-full">{index + 1}</td>
                  {Object.entries(item).map(([key, value], idx) => (
                    <>
                    {key=="image"? (
                      <td key={idx} className="text-center w-full flex justify-center"><img width={40} src={value}/></td>
                    ):(
                      <td key={idx} className="text-center w-full">{value}</td>
                    )}
                    </>
                  ))}
                </tr>
              ))}
          </tbody>
        </>
      ) : (
        <tbody>
          <tr>
          <th className="text-center py-3 font-semibold text-emerald-100">No data available</th>
          </tr>
        </tbody>
      )}
    </table>
  );
}
