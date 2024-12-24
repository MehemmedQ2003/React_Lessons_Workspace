import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(id, name, surname, age, email){
    return { id, name, surname, age, email };
}

const rows = [
    createData(1, "Muhammad", "Gardashov", 21, "mehemmed.qardasov2003@gmail.com"),
    createData(2, "Matin", "Gardashov", 21, "metin.qardasov2003@gmail.com"),
    createData(3, "Azar", "Nasirov", 23, "azer.nasirov2001@gmail.com"),
    createData(4, "Xazar", "Nasirov", 20, "xazar.nasirov2004@gmail.com"),
    createData(5, "Nihad", "Cafarzadah", 17, "nihad.cafarzadah2007@gmail.com")
]

const MUITable = () => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Id</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Surname</TableCell>
                        <TableCell align="center">Age</TableCell>
                        <TableCell align="center">Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell align="center">{row.id}</TableCell>
                                <TableCell align="center">{row.name}</TableCell>
                                <TableCell align="center">{row.surname}</TableCell>
                                <TableCell align="center">{row.age}</TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default MUITable