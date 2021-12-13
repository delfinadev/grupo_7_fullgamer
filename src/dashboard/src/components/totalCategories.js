import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(nombre, cantidad) {
    return { nombre, cantidad};
}

const rows = [
    createData('Micrófono', 1),
    createData('Mouse', 1),
    createData('Capturadora', 1),
    createData('Mouse Pad', 1),
    createData('Teclado', 1),
    createData('Gabinete', 1),
    createData('Auriculares', 1),
    createData('TOTAL', 7),
];

export default function PanelTotales() {
    return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
            <TableCell>Producto&nbsp;</TableCell>
            <TableCell align="right">Cantidad&nbsp;</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row) => (
            <TableRow
                key={row.nombre}
                sx={{ '&:last-child td, &:last-child th': { border: 3 } }}
            >
                <TableCell component="th" scope="row">
                {row.nombre}
                </TableCell>
                <TableCell align="right">{row.cantidad}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
    );
}
