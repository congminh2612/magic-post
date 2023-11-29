import { IoSettingsSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
const Page = () => {
  const data = [
    {
      id: 1,
      name: "Nguyen Van A",
      contact: "0987654321",
      dateOfBirth: "1/1/2001",
      position: "abcxyz",
      hireDate: "08/08/2022",
    },
    {
      id: 2,
      name: "Nguyen Van A",
      contact: "0987654321",
      dateOfBirth: "1/1/2001",
      position: "abcxyz",
      hireDate: "08/08/2022",
    },
    {
      id: 3,
      name: "Nguyen Van A",
      contact: "0987654321",
      dateOfBirth: "1/1/2001",
      position: "abcxyz",
      hireDate: "08/08/2022",
    },
  ];
  return (
    <>
      <div className="pt-10 px-8 ">
        <table className="table-auto w-[100%] border-collapse border-[2px]">
          <thead>
            <tr key="">
              <th className="border-[1px] bg-brand-500 px-2 py-2 text-white">
                ID
              </th>
              <th className="border-[1px] bg-brand-500 px-2 py-2 text-white">
                Name
              </th>
              <th className="border-[1px] bg-brand-500 px-2 py-2 text-white">
                Contact
              </th>

              <th className="border-[1px] bg-brand-500 px-2 py-2 text-white">
                Date of birth
              </th>
              <th className="border-[1px] bg-brand-500 px-2 py-2 text-white">
                Position
              </th>
              <th className="border-[1px] bg-brand-500 px-2 py-2 text-white">
                Hire Date
              </th>
              <th className=" bg-brand-500 px-2 py-2 text-white"></th>
              <th className=" bg-brand-500 px-2 py-2 text-white"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td
                    align="center"
                    className="text-brand-500 border-[1px]  py-2"
                  >
                    {item.id}
                  </td>
                  <td
                    align="center"
                    className="text-brand-500 border-[1px]  py-2"
                  >
                    {item.name}
                  </td>
                  <td
                    align="center"
                    className="text-brand-500 border-[1px]  py-2"
                  >
                    {item.contact}
                  </td>
                  <td
                    align="center"
                    className="text-brand-500 border-[1px]  py-2"
                  >
                    10/07/2001
                  </td>
                  <td
                    align="center"
                    className="text-brand-500 border-[1px]  py-2"
                  >
                    assembly point staff
                  </td>
                  <td
                    align="center"
                    className="text-brand-500 border-[1px]  py-2"
                  >
                    08/08/2022
                  </td>
                  <td align="center" className="text-brand-500   py-2">
                    <IoSettingsSharp size="24" />
                  </td>
                  <td align="center" className="text-brand-500   py-2">
                    <MdDelete size="24" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Page;
