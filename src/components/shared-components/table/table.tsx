import { IUser } from "@/lib/util/types/user";
import { useEffect, useState } from "react";
import Image from "next/image";

interface TableProps {
  data: IUser["projects"] | IUser["skills"]
}

export default function Table({ data }: TableProps) {
  const [imageUrls, setImageUrls] = useState<string[]>([])
  const [headers, setHeaders] = useState<string[]>([])

  useEffect(() => {
    async function loadImageUrls() {
      try {
        if (data) {
          const urls = await Promise.all(
            data.map(async (item) => {
              const url = await blobToImageURL(item.image);
              return url;
            })
          );
          setImageUrls(urls);
        }
      } catch (error) {
        console.error("Error loading image URLs:", error);
      }
    }
    loadImageUrls();
  }, [data]);

  useEffect(() => {
    if (data.length > 0 && headers.length === 0) {
      const initialHeaders = Object.keys(data[0]).map(key => key.toUpperCase());
      setHeaders(initialHeaders);
    }
  }, [data, headers]);

  const blobToImageURL = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

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
                      {typeof value == 'string' ? (
                        <td className="text-center w-full">{value}</td>
                      ) : (
                        <td className="text-center w-full mx-auto flex justify-center"><Image alt="image" width={20} height={40} src={imageUrls[index]} /></td>
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
