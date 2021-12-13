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
    createData('Spirit of Gamer EKO', 2),
    createData('MSI Clutch GM08 Black', 1111),
    createData('Nvidia RTX-3090', 99),
    createData('Capture card', 34),
    createData('Mouse pad RGB', 24),
    createData('Delux gamer mini T9 pro', 2),
    createData('Gabinete Gaming RGB', 7),
    createData('Headset Kotion Each G2000', 65),
    createData('Teclado Redragon Diti Outemu', 43),
    createData('TOTAL', 1365),
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