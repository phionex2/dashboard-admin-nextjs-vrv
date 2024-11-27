import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const data = [
    { id: "1", name: "Admin01", role: "User", email: "ken99@yahoo.com" },
    { id: "2", name: "Admin02", role: "Employee", email: "Abe45@gmail.com" },
    { id: "3", name: "Super Admin", role: "Viewer", email: "Monserrat44@gmail.com" },
    { id: "4", name: "User02", role: "Admin", email: "Silas22@gmail.com" },
    { id: "5", name: "User", role: "Editor", email: "carmella@hotmail.com" },
  ];
  
  export function TableDemo() {
    return (
      <Table>
        <TableCaption>A list of your recent users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Email</TableHead>
            
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((individualData) => (
            <TableRow key={individualData.id}>
              <TableCell className="font-medium">{individualData.id}</TableCell>
              <TableCell className="font-medium">{individualData.name}</TableCell>
              <TableCell>{individualData.role}</TableCell>
              <TableCell>{individualData.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  