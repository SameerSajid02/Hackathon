import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fbGet } from "../config/firebasemethods";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function AcceptorTable() {

    const navigate  = useNavigate();
    const params = useParams();
    const [donorList, setDonorList] = useState<any>([]);

    useEffect(() => {
        fbGet("/form/Donor Form")
        .then((res:any)=>{
            setDonorList(res);
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

    console.log(donorList);

    let DonorDetails;

    if (params.id == "Group O"){
      DonorDetails = donorList.filter((x:any, i:any)=>{ return(x) });
    }
    else if (params.id == "Group A"){
      DonorDetails = donorList.filter((x:any, i:any)=>{ 
        return(x.Bloodgroup == "Group A" || x.Bloodgroup == "Group AB") 
      });
    }
    else if (params.id == "Group B"){
      DonorDetails = donorList.filter((x:any, i:any)=>{ 
        return(x.Bloodgroup == "Group B" || x.Bloodgroup == "Group AB") 
      });
    }
    else if (params.id == "Group AB"){
      DonorDetails = donorList.filter((x:any, i:any)=>{ 
        return(x.Bloodgroup == "Group AB") 
      });
    }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>User Name</StyledTableCell>
            <StyledTableCell align="center">Phone Number</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Gender</StyledTableCell>
            <StyledTableCell align="center">Blood Group</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {donorList.map((x: any, i:any) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="x">
                {x.userName}
              </StyledTableCell>
              <StyledTableCell align="center">{x.PhoneNumber}</StyledTableCell>
              <StyledTableCell align="center">{x.Address}</StyledTableCell>
              <StyledTableCell align="center">{x.Gender}</StyledTableCell>
              <StyledTableCell align="center">{x.Bloodgroup}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}